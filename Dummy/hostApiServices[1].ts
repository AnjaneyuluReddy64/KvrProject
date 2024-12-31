import {ENDPOINTS} from './apiEndpoints';
import {prepareUIConfiguration} from '../Utils/CommonUtils';
import {httpClient as shellHttpClient} from './httpClient';
import {
  GetCheckAndCollectMoeiToken,
  GetContentList,
} from '../Constance/commonURLs';

const getApplicationID = (id: any, action: any): string =>
  id ? `/${id}?action=${action}` : '?action=' + action;

export const hostApiServices = shellHttpClient().injectEndpoints({
  endpoints: builder => ({
    /** Get user details from token. */
    getAuthToken: builder.query({
      query: (data: any) => ({
        url: `${GetCheckAndCollectMoeiToken}`,
        method: 'GET',
        params: data,
      }),
      transformResponse: (response: any) => {
        return response;
      },
    }),
    /** Get Login Configurations. */
    loginConfiguration: builder.query<any, void>({
      query: () => ({
        url: `/moeimgmt/login/LoginConfiguration`,
        method: 'GET',
      }),
      transformResponse: (response: any) => {
        return {
          ...prepareUIConfiguration(response?.data?.output?.interfaceDetails),
        };
      },
    }),

    /* Get Interface Details*/
    getInterfaceByID: builder.query({
      query: (id: string) => ({
        url: `${ENDPOINTS.INTERFACE.url}/${id}`,
        method: 'GET',
      }),
      transformResponse: (response: any) => {
        return {...prepareUIConfiguration(response?.data?.output)};
      },
    }),

    /** Switch Profile List*/
    switchProfileList: builder.query({
      query: () => ({
        url: `/moeicommon/linkedCompanies/GetLinkedCompanies`,
        method: 'GET',
      }),
    }),

    /** Switch Profile */

    switchProfile: builder.query({
      query: (params: {profileId: string; userType: string}) => ({
        url: `/moeicommon/switchProfile/SwitchProfile`,
        method: 'GET',
        params: params,
      }),
    }),

    /**
     * Request To Update Info
     */
    postRequestToUpdateInfo: builder.mutation({
      query: (params: {mobile?: string; type?: string}) => ({
        url: `/usermgmt/usermgmtsupport/RequestToUpdateContactInfo`,
        method: 'POST',
        params: params,
      }),
    }),

    validateProfileOTPResponse: builder.mutation({
      query: (params: {otp: string}) => ({
        url: `/usermgmt/usermgmtsupport/UpdateContactInformation`,
        method: 'POST',
        params: params,
      }),
    }),

    /* Get ContentList*/
    getContentList: builder.mutation({
      query: (data: any) => ({
        url: `/moei/CMSMobileApp/MobileContentList`,
        method: 'POST',
        data: data,
      }),
    }),
    /* Profile Get Method*/
    getUserProfile: builder.query({
      query: (data: any) => ({
        url: `/usermgmt/usermgmtsupport/ProfileInformation`,
        method: 'GET',
      }),
      transformResponse: (response: any) => {
        return response?.data?.output;
      },
    }),

    //  Get UDP Modules.
    getUDPModules: builder.query({
      query: data => ({
        url: `/moeiszhp/modulecards/getUDPModules`,
        method: 'GET',
      }),
    }),

    //   /moei/common/RegionsByEmirate
    getRegionsByEmirate: builder.query({
      query: (data: {emirate: string}) => ({
        url: `/moei/common/RegionsByEmirate`,
        method: 'GET',
        params: data,
      }),
    }),

    /** ApplicantProfile */
    getApplicantProfile: builder.query({
      query: (data: any) => ({
        url: `/szhp/applicantprofile/ApplicantProfile/${data?.id}`,
        method: 'GET',
      }),
    }),

    updateApplicantProfile: builder.mutation({
      query: (data: any) => ({
        url: `/szhp/applicantprofile/ApplicantProfile/${data?.id}`,
        method: 'PATCH',
        data: data?.data,
      }),
    }),

    getContentMostUsedServicesList: builder.mutation({
      query: (data: any) => ({
        url: `/moei/CMSMenuList/ContentList`,
        method: 'POST',
        data,
      }),
    }),

    // Get Document Details.
    getDocumentMasterById: builder.query({
      query: (data: any) => ({
        url: `/adminmgmt/attachmentConfig/GetDocumentMasterById/${data?.id}`,
        method: 'GET',
      }),
    }),
    // Get Attachment Id
    getAttachment: builder.query({
      query: (data: any) => ({
        url: `/common/attachment/Attachment/${data?.id}`,
        method: 'GET',
      }),
    }),
    //Get Available Units
    getAvailModelForBooking: builder.query({
      query: (data: any) => ({
        url: `/szhpmgmt/bookings/AvailModelForBooking?applicationId=${data?.id}`,
        method: 'GET',
      }),
    }),
    // This will generate the Booking agreement
    generateBookingAgreement: builder.query({
      query: (data: {
        applicationId: string;
        modelId: string;
        callbackUrl?: string;
        eSigning?: boolean;
      }) => ({
        url: `/szhpmgmt/supporting/GenerateBookingAgreement`,
        params: data,
        method: 'GET',
      }),
    }),
    // Book Model For user.
    bookModel: builder.mutation({
      query: (data: any) => ({
        url: `/szhpmgmt/bookings/ModelBooking`,
        method: 'POST',
        data: data,
      }),
    }),
    // Book Unit For user.
    bookUnit: builder.mutation({
      query: (data: any) => ({
        url: `/szhpmgmt/bookings/UnitBooking`,
        method: 'POST',
        data: data,
      }),
    }),
    /** Get user Token */
    getUserToken: builder.query({
      query: (data: any) => ({
        url: `/moeimgmt/login/LoginExt`,
        method: 'GET',
        params: {...data},
      }),
    }),
    /** Get user Token for UAE Pass. */
    getUAEPassUserToken: builder.query({
      query: (data: any) => ({
        url: `/moeimgmt/login/UdpLogin`,
        method: 'GET',
        params: {...data},
      }),
    }),

    getReportResult: builder.mutation({
      query: (data: any) => ({
        url: `/moei/CMSMenuList/ReportResult`,
        method: 'POST',
        data: data,
      }),
    }),

    /**
     * Upload files to server.
     */
    uploadFiles: builder.mutation({
      query: (data: any) => ({
        url: `/common/attachment/Attachment`,
        method: 'POST',
        data: data,
      }),
    }),
    deleteFile: builder.mutation({
      query: (data: {id: string}) => ({
        url: `/common/attachment/Attachment/${data.id}`,
        method: 'DELETE',
      }),
    }),

    /**
     * Get Attachments config
     */
    getAttachmentConfig: builder.query({
      query: (data: {id: string}) => ({
        url: `/adminmgmt/attachmentConfig/AttachmentConfiguration/${data?.id}`,
        method: 'GET',
      }),
      transformResponse: (response: any) => {
        return response;
      },
    }),

    /**
     * Send OTP Api
     */
    sendLoginOTP: builder.mutation({
      query: (data: {type: string; userName: string; device?: string}) => ({
        url: `/moeimgmt/login/SendLoginOtp`,
        method: 'POST',
        data: {...data},
      }),
    }),

    checkOTP: builder.query({
      query: (data: any) => ({
        url: `/usermgmt/otplogin/OTPLogin`,
        method: 'GET',
        headers: {
          Authorization: `Basic ${data}`,
        },
        params: {
          device: 'mobile',
          module: 'EXTERNAL',
        },
      }),
    }),

    /**
     * Profile Api's
     */

    //Employer
    postEmployerDetails: builder.mutation({
      query: (data: any) => ({
        url: `/szhp/employerdetails/EmployerDetails`,
        method: 'POST',
        data: data,
      }),
    }),

    patchEmployerDetails: builder.mutation({
      query: (data: any) => ({
        url: `/szhp/employerdetails/EmployerDetails/${data?.id}`,
        method: 'PATCH',
        data: data,
      }),
    }),

    //BankDetails
    postBankDetails: builder.mutation({
      query: (data: any) => ({
        url: `/szhp/bankDetails/BankDetails`,
        method: 'POST',
        data: data,
      }),
    }),

    patchBankDetails: builder.mutation({
      query: (data: any) => ({
        url: `/szhp/bankdetails/BankDetails`,
        method: 'PATCH',
        data: data,
      }),
    }),

    /**
     * End Profile Api's
     */
    /**
     * Housing Applicant Apis
     */

    //Housing Request Eligibility Check
    getHousingEligibleCheck: builder.query({
      query: (data: any) => ({
        url: `/szhp/housingapplications/HousingRequestEligibilityCheck`,
        method: 'GET',
      }),
    }),

    getHousingApplicants: builder.query({
      query: (data: {id: string}) => ({
        url: `/szhp/housingapplications/HousingApplications/${data?.id}`,
        method: 'GET',
      }),
    }),

    postHousingApplicants: builder.mutation({
      query: (data: any) => ({
        url: `/szhp/housingapplications/HousingApplications?action=${
          data?.action || 'SAVE'
        }${'&serviceId=' + data?.serviceId || ''}`,
        method: 'POST',
        data: data,
      }),
    }),

    patchHousingApplicants: builder.mutation({
      query: (data: any) => ({
        url: `/szhp/housingapplications/HousingApplications/${
          data?.applicationId
        }?action=${data?.action || 'SAVE'}${
          '&serviceId=' + data?.serviceId || ''
        }`,
        method: 'PATCH',
        data: data,
      }),
    }),
    patchHousingApplicantsUpdate: builder.mutation({
      query: (data: any) => ({
        url: `/szhp/housingapplications/HousingApplications/${
          data?.applicationId
        }?action=UPDATE${'?serviceId=' + data?.serviceId || ''}`,
        method: 'PATCH',
        data: data,
      }),
    }),

    // Properties By Emirate.
    getPropertiesByEmirate: builder.query({
      query: (data: {id: string}) => ({
        url: `/moei/integration/PropertiesByEmirate`,
        method: 'GET',
        params: {id: data.id},
      }),
    }),

    // Cancel Application

    postCancelApplication: builder.mutation({
      query: (data: any) => ({
        url: `/moeiszhp/cancellationreq/CancelApplication`,
        method: 'POST',
        data: data,
        params: {
          serviceId: data.serviceId,
        },
      }),
    }),

    //Get Cancel Application

    getCancelApplication: builder.query({
      query: (data: {id: string}) => ({
        url: `/moeiszhp/cancellationreq/CancelApplication/${data?.id}`,
        method: 'GET',
      }),
    }),

    postValidateCancelOTP: builder.mutation({
      query: (data: {applicationId: string; otp: string}) => ({
        url: `/moeiszhp/cancellationreq/ValidateCancellationOTP`,
        method: 'POST',
        data: data,
      }),
    }),

    cancellationEligibility: builder.query({
      query: () => ({
        url: `/moeiszhp/cancellationreq/IsEligible`,
        method: 'GET',
      }),
    }),

    /**
     * End Housing Applicat Apis
     */

    /**
     * Dashboard Api's
     */

    getMyApplications: builder.query({
      query: (data: any) => ({
        url: `/moei/common/GetMyApplications`,
        method: 'GET',
        params: data,
      }),
    }),
    /**
     * End of Dashboard Api's
     */

    /**
     * Task Management API's
     */
    getTaskAction: builder.query({
      query: (taskId: {id: string; data: any}) => ({
        url: `/taskmanagement/taskaction/getTaskById/${taskId.id}`,
        method: 'GET',
      }),
    }),

    performAction: builder.mutation({
      query: ({data, id}: {data?: any; id: string}) => ({
        url: `/taskmanagement/taskaction/updateTask/${id}`,
        method: 'PATCH',
        data,
      }),
    }),
    /**
     * End Task Management API's
     */

    /**
     * Start Emergency Housing Visit
     */

    submitEmergencyVisit: builder.mutation({
      query: (data: any) => ({
        url: `/szhpmgmt/emergencyHousingVisit/EmergencyHousingVisit${getApplicationID(
          data?.id,
          data?.action,
        )}&serviceId=${data.serviceId || 'null'}`,
        method: data?.id ? 'PATCH' : 'POST',
        data: data,
      }),
    }),

    /**
     * End  Emergency Housing Visit
     */

    /**
     * Reconsideration Request
     */

    submitReconsideration: builder.mutation({
      query: (data: any) => ({
        url: `/szhpmgmt/reconsiderRequest/SaveReconsiderReqDetails`,
        method: 'POST',
        data: data,
        params: {
          serviceId: data.serviceId,
        },
      }),
    }),

    // Resubmit Reconsideration
    resubmitReconsideration: builder.mutation({
      query: ({data, id}: {data: any; id: string}) => ({
        url: `/szhpmgmt/reconsiderRequest/UpdateReconsiderDetails/${id}`,
        method: 'PATCH',
        data: data,
        params: {
          serviceId: data.serviceId,
        },
      }),
    }),

    /**
     * End Reconsideration Request
     */

    /**
     * Model booking Api's
     */
    availableModelForBooking: builder.query({
      query: () => ({
        url: `/szhpmgmt/bookings/AvailModelForBooking`,
        method: 'GET',
      }),
    }),

    /**
     * Get the list of Available Units for booking.
     */
    availableUnitsForBooking: builder.query({
      query: (data: any) => ({
        url: `/szhpmgmt/bookings/AvailUnitsForBooking`,
        method: 'GET',
      }),
    }),

    /**
     * Supporting
     */
    bookedUnitDetails: builder.query({
      query: (data: any) => ({
        url: `/szhpmgmt/supporting/BookedUnitDetails`,
        method: 'GET',
        params: data,
      }),
    }),

    /**
     * End Model booking Api's
     */

    /* Fuel Dashboard Data*/
    fuelDashboard: builder.query({
      query: (data: any) => ({
        url: `/moei/fpdashboard/getFPDashboard`,
        headers: {Authorization: `Bearer ${data?.token}`},
        method: 'GET',
      }),
      transformResponse: (response: any) => {
        return response;
      },
    }),

    /* Gas Oil Get Method*/
    gasOilGraph: builder.query({
      query: (data: any) => ({
        url: `/moei/fpreports/MOEIFPBrentGraphReport`,
        headers: {Authorization: `Bearer ${data?.token}`},
        method: 'GET',
      }),
      transformResponse: (response: any) => {
        return response;
      },
    }),
    /* Gas Oil and Gasolin Get Method*/
    gasolinAndGasOilGraph: builder.query({
      query: (data: any) => ({
        url: `/moei/fpreports/MOEIFPGasolineAndDieselTrendReport`,
        headers: {Authorization: `Bearer ${data?.token}`},
        method: 'GET',
      }),
      transformResponse: (response: any) => {
        return response;
      },
    }),

    /* Pending List */
    pendingListTasks: builder.query({
      query: (data: any) => ({
        url: `/moei/fpdashboard/MOEIGetAllTaskQueued`,
        headers: {Authorization: `Bearer ${data?.token}`},
        method: 'GET',
      }),
      transformResponse: (response: any) => {
        return response;
      },
    }),

    /* Fuel Price MOEIFPRequest*/
    fuelPricePumpStation: builder.query({
      query: (data: any) => ({
        url: `/moei/fprequest/MOEIFPRequest/${data?.pendingListId}`,
        method: 'GET',
      }),
      transformResponse: (response: any) => {
        return response?.data?.output;
      },
    }),
    /* Fuel Price Pump GetAuditHistoryByReqId*/
    auditHistory: builder.query({
      query: (data: any) => ({
        url: `/common/audithistory/GetAuditHistoryByReqId?requestId=${data?.taskId}`,
        headers: {Authorization: `Bearer ${data?.token}`},
        method: 'GET',
      }),
      transformResponse: (response: any) => {
        return response?.data?.auditHistory;
      },
    }),

    /* Committee Members*/
    committeeMembersData: builder.query({
      query: (data: any) => ({
        url: `/adminmgmt/rolemgmt/GetUsersByRoleName?roleName=MOEI_FP_COMMITTEE_VOTING`,
        headers: {Authorization: `Bearer ${data?.token}`},
        method: 'GET',
      }),
      transformResponse: (response: any) => {
        return response;
      },
    }),

    /* Fuel Pricing Pdf*/
    pdfData: builder.query({
      query: (data: any) => ({
        url: `/common/attachment/Attachment/FPREQ_1512`,
        headers: {Authorization: `Bearer ${data?.token}`},
        method: 'GET',
      }),
      transformResponse: (response: any) => {
        return response;
      },
    }),

    /* Fuel Pricing Adjustments History*/
    adjustmentsHistoryFP: builder.query({
      query: (data: any) => ({
        url: `/moei/fpreports/MOEIFPAdjustmentsForAllProducts?pageNumber=0&pageSize=10`,
        method: 'GET',
      }),
      transformResponse: (response: any) => {
        return response;
      },
    }),

    /* Task Management */
    taskManagement: builder.query({
      query: (data: any) => ({
        url: `/taskmanagement/taskaction/getTaskById/${data?.taskId}`,
        headers: {Authorization: `Bearer ${data?.token}`},
        method: 'GET',
      }),
    }),

    /* Task Management Action Perform */
    taskManagementActionPerform: builder.mutation({
      query: ({taskId, comments, action}) => ({
        url: `/taskmanagement/taskaction/updateTask/${taskId}`,
        method: 'PATCH',
        data: {
          comments: comments,
          action: action,
        },
      }),
    }),

    //updateAdjustmentsPrices
    updateAdjustmentsPrices: builder.mutation({
      query: ({data, action, id}) => ({
        url: `/moei/fprequest/MOEIFPRequest/${id}?action=${action}`,
        method: 'PATCH',
        data: data,
      }),
    }),

    //GET Comments
    getAllCommentsByRequestId: builder.query({
      query: id => ({
        url: `/ixcommon/comment/Comment`,
        method: 'GET',
        params: {
          requestId: id,
        },
      }),
      transformResponse: (response: any) => {
        return response;
      },
    }),

    // keepUnusedDataFor: 0,

    // POST Comments
    submitComment: builder.mutation({
      query: data => ({
        url: `/ixcommon/comment/Comment`,
        method: 'POST',
        data,
      }),
    }),

    /* Update Comment By ID*/
    updateComment: builder.mutation({
      query: data => ({
        url: `/ixcommon/comment/Comment/${data?.id}`,
        method: 'PATCH',
        data,
      }),
    }),

    //  Delete Comment By ID
    deleteComment: builder.mutation({
      query: data => ({
        url: `/ixcommon/comment/Comment/${data?.id}`,
        method: 'DELETE',
      }),
    }),

    // Replay Comments
    replayComment: builder.mutation({
      query: data => ({
        url: `/ixcommon/comment/Comment`,
        method: 'POST',
        data,
      }),
    }),

    //Approval Doc Sign
    signDocument: builder.mutation({
      query: ({data}) => ({
        url: `/uaepassintegration/digitalsignature/initiateSignProcess`,
        method: 'POST',
        data,
      }),
    }),

    getSignStatus: builder.query({
      query: params => ({
        url: `/uaepassintegration/digitalsignature/getSignStatus${params}`,
        method: 'GET',
      }),
      transformResponse: (response: any) => {
        return response;
      },
    }),
    getESignStatus: builder.query({
      query: params => ({
        url: `/uaepassintegration/esigning/VerifySignStatus${params}`,
        method: 'GET',
      }),
      transformResponse: (response: any) => {
        return response;
      },
    }),

    // Open File - Eligibility Checking
    eligibilityCheckOpenFile: builder.query({
      query: (data: any) => {
        const param = data?.id ? `?id=${data?.id}` : '';
        return {
          url: `/szhp/openfileassistance/openFileEligibilityCheck${param}`,
          headers: {Authorization: `Bearer ${data?.token}`},
          method: 'GET',
        };
      },
    }),

    // Check Eligibility for Update Housing Application.
    updateHousingDataPreCheck: builder.query({
      query: (data: any) => ({
        url: `/szhp/housingapplications/UpdateHousingdataPreCheck`,
        headers: {Authorization: `Bearer ${data?.token}`},
        method: 'GET',
      }),
    }),

    //Emergency Check
    emergencyVisitPreCheck: builder.query({
      query: (data: any) => ({
        url: `/szhpmgmt/emergencyHousingVisit/EmergencyVisitPreCheck`,
        headers: {Authorization: `Bearer ${data?.token}`},
        method: 'GET',
      }),
    }),

    //Reconsider Eligibility
    checkReconsiderEligibility: builder.query({
      query: (data: any) => ({
        url: `/szhpmgmt/reconsiderRequest/ReconsiderationReqCheck`,
        method: 'GET',
      }),
    }),

    //Constructing New House - Contracter & Constructor
    getContractorConsultantList: builder.query({
      query: (data: any) => ({
        url: `/szhp/contractorconsultant/ContractorConsultant?applicantType=${data?.type}&search=${data?.search}`,
        headers: {Authorization: `Bearer ${data?.token}`},
        method: 'GET',
      }),
      transformResponse: (response: any) => {
        return response;
      },
    }),

    //Submit API Call Open File
    submitOpenFiledata: builder.mutation({
      query: ({data, action}) => {
        // console.log('paylod ------->', action, data);
        return {
          url: `/szhp/openfileassistance/OpenFileAssistance?action=${action}`,
          method: 'POST',
          headers: {Authorization: `Bearer ${data?.token}`},
          data,
        };
      },
    }),

    //Search for Internal Users Get
    getSearchInternalUsers: builder.mutation({
      query: ({data}) => {
        return {
          url: `/moei/common/SearchInternalUsers?toSearch=${data?.searchKey}`,
          method: 'POST',
          headers: {Authorization: `Bearer ${data?.token}`},
        };
      },
      transformResponse: (response: any) => {
        return response;
      },
    }),

    //Search for Seller
    searchUsers: builder.query({
      query: ({token, searchKey, department, appCode}) => {
        const queryParams = [];
        if (searchKey) queryParams.push(`search=${searchKey}`);
        if (department) queryParams.push(`department=${department}`);
        if (appCode) queryParams.push(`appCode=${appCode}`);
        const params = queryParams?.length ? `?${queryParams.join('&')}` : '';
        return {
          url: `/moei/common/SearchUsers${params}`,
          method: 'GET',
          headers: {Authorization: `Bearer ${token}`},
        };
      },
      transformResponse: (response: any) => {
        return response;
      },
    }),

    //ESign Documentation
    eSignByDocumentId: builder.mutation({
      query: ({data}) => {
        return {
          url: `/uaepassintegration/esigning/ESignByDocumentId`,
          headers: {Authorization: `Bearer ${data?.token}`},
          method: 'POST',
          data,
        };
      },
      transformResponse: (response: any) => {
        return response;
      },
    }),

    getSignStatusOpenFile: builder.query({
      query: ({data}) => {
        return {
          url: `/uaepassintegration/esigning/VerifySignStatus${data?.url}`,
          headers: {Authorization: `Bearer ${data?.token}`},
          method: 'GET',
        };
      },
      transformResponse: (response: any) => {
        return response;
      },
    }),

    //HousingOwnerShip - EligibilityGetApi
    eligibilityCheckHousingOwnerShip: builder.query({
      query: (data: any) => {
        return {
          url: `/szhp/housingownership/OwnershipEligibilityCheck`,
          headers: {Authorization: `Bearer ${data?.token}`},
          method: 'GET',
        };
      },
      transformResponse: (response: any) => {
        return response;
      },
    }),

    housingOwnerShipGet: builder.query({
      query: (data: any) => {
        return {
          url: `/szhp/housingownership/HousingOwnership/${data?.data?.id}`,
          headers: {Authorization: `Bearer ${data?.data?.token}`},
          method: 'GET',
        };
      },
      transformResponse: (response: any) => {
        return response;
      },
    }),

    //OwnerShip Submit Form
    housingOwnershipRequestForm: builder.query({
      query: ({token, action, data}) => {
        return {
          url: `/szhp/housingownership/HousingOwnership?action=${action}`,
          headers: {Authorization: `Bearer ${token}`},
          method: 'POST',
          data,
        };
      },
      transformResponse: (response: any) => {
        return response;
      },
    }),

    //Initial Delivery Dropdown
    getAllConsultantApplications: builder.query({
      query: (data: any) => {
        return {
          url: `/szhp/housinghandover/GetConsultantApplications`,
          headers: {Authorization: `Bearer ${data?.token}`},
          method: 'GET',
        };
      },
      transformResponse: (response: any) => {
        return response;
      },
    }),

    //OpenFileAssistance get more data
    openFileAssistance: builder.query({
      query: (data: any) => {
        return {
          url: `/szhp/openfileassistance/OpenFileAssistance/${data?.id}`,
          headers: {Authorization: `Bearer ${data?.token}`},
          method: 'GET',
        };
      },
      transformResponse: (response: any) => {
        return response;
      },
    }),

    //Initial HandOver Submit Form
    housinghandover: builder.query({
      query: ({token, data}) => {
        return {
          url: `/szhp/housinghandover/HousingHandover`,
          headers: {Authorization: `Bearer ${token}`},
          method: 'POST',
          data,
        };
      },
      transformResponse: (response: any) => {
        return response;
      },
    }),

    getHousingHandoverRequestById: builder.query({
      query: ({data}) => {
        return {
          url: `/szhp/housinghandover/HousingHandover/${data?.id}`,
          headers: {Authorization: `Bearer ${data?.token}`},
          method: 'GET',
        };
      },
      transformResponse: response => {
        return response;
      },
    }),

    //Project Extension Eligibility Check
    projectExtensionEligibility: builder.query({
      query: (data: {id: string}) => {
        return {
          url: `/szhpmgmt/projectextension/EligibilityCheck`,
          method: 'GET',
          params: data,
        };
      },
    }),

    //Project Extension Submit
    //  /szhpmgmt/projectextension/ProjectExtension
    projectExtensionSubmit: builder.mutation({
      query: ({action, data}: {action: string; data: any}) => {
        return {
          url: `/szhpmgmt/projectextension/ProjectExtension`,
          method: 'POST',
          data,
          params: {
            serviceId: data?.serviceId || '',
            action: action,
          },
        };
      },
    }),

    // Get Extension Details
    getProjectExtensionDetails: builder.query({
      query: ({id}: {id: string}) => {
        return {
          url: `/szhpmgmt/projectextension/ProjectExtension/${id}`,
          method: 'GET',
        };
      },
    }),

    /**
     * Dwelling Disposal Request
     */

    // Dwelling Disposal Eligibility Check
    getDisposalEligibilityCheck: builder.query({
      query: () => {
        return {
          url: `/szhpmgmt/housedisposal/EligibilityCheck`,
          method: 'GET',
        };
      },
    }),

    /**  Submit Dwelling Disposal Request*/
    postHouseDisposalRequest: builder.mutation({
      query: (data: {action: string; data: any}) => {
        return {
          url: `/szhpmgmt/housedisposal/HouseDisposalRequest${
            data.data.id ? `/${data.data.id}` : ''
          }?action=${data.action}`,
          method: data.data.id ? 'PATCH' : 'POST',
          data: data.data,
          params: {
            serviceId: data?.data?.serviceId || '',
            action: data.action,
          },
        };
      },
    }),

    /**
     * End Dwelling Disposal Request
     */

    //Postponemente Get Data (Elegibility)
    eligibilityCheckPostponement: builder.query({
      query: (data: any) => {
        return {
          url: `/szhpmgmt/premiumrequest/CheckPremiumEligibility`,
          headers: {Authorization: `Bearer ${data?.token}`},
          method: 'GET',
        };
      },
      transformResponse: (response: any) => {
        return response;
      },
    }),

    submitPostponing: builder.mutation({
      query: ({data, action, id}) => {
        const url = id
          ? `/szhpmgmt/premiumrequest/PremiumFormRequest/${id}?action=${action}`
          : `/szhpmgmt/premiumrequest/PremiumFormRequest?action=${action}`;

        return {
          url,
          method: id ? 'PATCH' : 'POST',
          data,
        };
      },
      transformResponse: (response: any) => {
        return response;
      },
    }),

    getReducePostponeRequestById: builder.query({
      query: (data: any) => {
        return {
          url: `/szhpmgmt/premiumrequest/PremiumFormRequest/${data?.id}`,
          headers: {Authorization: `Bearer ${data?.token}`},
          method: 'GET',
        };
      },
      transformResponse: (response: any) => {
        return response;
      },
    }),

    /**
     * Loan Exemption
     *
     */
    loanExemptionEligibilityCheck: builder.query({
      query: data => {
        return {
          url: `/szhpmgmt/loanExemption/LoanExemptionPreCheck`,
          method: 'GET',
        };
      },
    }),

    loanExemptionSubmit: builder.mutation({
      query: (data: {action: string; data: any}) => {
        return {
          url: `/szhpmgmt/loanExemption/LoanExemption${
            data.action == 'RESUBMIT' ? `/${data.data.id}` : ''
          }`,
          method: data.action == 'RESUBMIT' ? 'PATCH' : 'POST',
          data: data.data,
          params: {
            serviceId: data.data.serviceId,
            action: data.action,
          },
        };
      },
    }),

    /**
     * Loan Exemption
     *  -- End ---
     */

    /**
     * Arrears Assistance
     */

    arrearsAssistanceEligibilityCheck: builder.query({
      query: data => {
        return {
          url: `/szhpmgmt/reschedulingarrears/RescheduleArrearEligibility`,
          method: 'GET',
        };
      },
    }),

    // Submit the Application for the Reschedule Arrears
    submitRescheduleArrears: builder.mutation({
      query: (data: {data: any; action: string}) => {
        return {
          url: `/szhpmgmt/reschedulingarrears/RescheduleArrears${
            data.action == 'RESUBMIT' ? `/${data.data.id}` : ''
          }`,
          method: data.action == 'RESUBMIT' ? 'PATCH' : 'POST',
          data: data.data,
          params: {
            serviceId: data.data.serviceId,
            action: data.action,
          },
        };
      },
    }),

    arrearsDetailsById: builder.query({
      query: (id: string) => {
        return {
          url: `/szhpmgmt/reschedulingarrears/RescheduleArrears/${id}`,
          method: 'GET',
        };
      },
    }),

    /**
     * Arrears Assistance
     *  -- End --
     */

    /**
     * Concern Certificate
     */

    concernCertificateEligibility: builder.query({
      query: data => {
        return {
          url: `/szhpmgmt/towhomayconcern/EligibilityCheck`,
          method: 'GET',
        };
      },
    }),

    /**
     * Submit Concern Certificate
     */
    concernCertificateSubmit: builder.mutation({
      query: (data: {data: any; action: string}) => {
        return {
          url: `/szhpmgmt/towhomayconcern/ToWhoMayConcern${
            data?.data?.id ? `/${data.data.id}` : ''
          }?action=${data.action}`,
          method: data?.data?.id ? 'PATCH' : 'POST',
          data: data.data,
          params: {
            serviceId: data?.data?.serviceId,
          },
        };
      },
    }),

    /**
     *
     * Concern Certificate
     *  -- End --
     */

    /**
     * Maintenance Assignment
     */

    maintenanceCheckEligibility: builder.query({
      query: data => {
        return {
          url: `/szhpmgmt/maintenanceAssignment/MaintenanceAssignPreCheck`,
          method: 'GET',
        };
      },
    }),

    //  /szhpmgmt/maintenanceAssignment/GetContractorDetailsById?id=
    getContractorDetails: builder.query({
      query: (data: string) => {
        return {
          url: `/szhpmgmt/maintenanceAssignment/GetContractorDetailsById?id=${data}`,
          method: 'GET',
        };
      },
    }),

    submitMaintenanceAssignment: builder.mutation({
      query: (data: {data: any; serviceId: string}) => {
        return {
          url: `/szhpmgmt/maintenanceAssignment/MaintenanceAssignment?serviceId=${data.serviceId}`,
          method: 'POST',
          data: data.data,
        };
      },
    }),

    // /szhpmgmt/maintenanceAssignment/GetMaintenanceAssignDetailsById?id=

    getMaintenanceAssignById: builder.query({
      query: (data: string) => {
        return {
          url: `/szhpmgmt/maintenanceAssignment/GetMaintenanceAssignDetailsById?id=${data}`,
          method: 'GET',
        };
      },
    }),

    /**
     * Maintenance Assignment
     *  -- End --
     */

    /**
     * Contract Value Change
     */

    // Get Application for contract value change.

    getConsultantApplicationsList: builder.query({
      query: data => {
        return {
          url: `/szhpmgmt/contractValueChange/GetConsultantApplicationsList`,
          method: 'GET',
        };
      },
    }),

    // onSubmit Consultant Contract value change
    submitContractValueChange: builder.mutation({
      query: ({
        action,
        serviceId,
        data,
      }: {
        action: string;
        serviceId: string;
        data: any;
      }) => {
        return {
          url: `/szhpmgmt/contractValueChange/ContractValueChange?action=${action}&serviceId=${serviceId}`,
          method: 'POST',
          data: data,
        };
      },
    }),

    getContractValueDetailsByID: builder.query({
      query: (data: string) => {
        return {
          url: `/szhpmgmt/contractValueChange/ContractValueChange/${data}`,
          method: 'GET',
        };
      },
    }),

    /**
     * Contract Value Change
     *  -- End --
     */

    /**
     * Contract End
     */

    contractEndEligible: builder.query({
      query: () => {
        return {
          url: `/szhp/contractmgmt/eligibleConsultantApplication`,
          method: 'GET',
        };
      },
    }),

    getEndContractById: builder.query({
      query: (applicationId: string) => {
        return {
          url: `/szhp/contractmgmt/GetEndContractById?applicationId=${applicationId}&requestType=END_CONTRACT`,
          method: 'GET',
        };
      },
    }),

    getEndContractByEndId: builder.query({
      query: (id: string) => {
        return {
          url: `/szhp/contractmgmt/GetEndContractById?id=${id}&requestType=END_CONTRACT`,
          method: 'GET',
        };
      },
    }),

    contractEndSave: builder.mutation({
      query: ({data, action}: {data: any; action: string}) => {
        const params: {action: string; serviceId?: string} = {
          action: action,
        };
        if (data.serviceId) {
          params['serviceId'] = data.serviceId;
        }
        return {
          url: `/szhp/contractmgmt/SaveEndContract`,
          method: 'POST',
          data: data,
          params: params,
        };
      },
    }),

    contractEndObjection: builder.mutation({
      query: ({
        id,
        data,
      }: {
        id: string;
        data?: {
          beneficiaryObjection: string;
          requestType: 'END_CONTRACT';
        };
      }) => {
        return {
          url: `/szhp/contractmgmt/SaveObjection/${id}`,
          method: 'PATCH',
          data: data ? data : {requestType: 'END_CONTRACT'},
        };
      },
    }),

    /**
     * Contract End
     * -- End --
     */

    //OpenFile get Docs by Master Id
    getAttachmentIdByMasterId: builder.query({
      query: data => {
        return {
          url: `/adminmgmt/attachmentConfig/GetDocumentMasterById/${data?.id}`,
          headers: {Authorization: `Bearer ${data?.token}`},
          method: 'GET',
        };
      },
      transformResponse: (response: any) => {
        return response;
      },
    }),
    /**
     * Customer Pulse
     */
    getCustomerPulse: builder.query({
      query: (data: any) => {
        return {
          url: `/integration/customerPulse/CustomerPulse`,
          method: 'GET',
        };
      },
    }),

    //OpenFile Initiate
    initiateOpenFile: builder.query({
      query: ({data, token}) => {
        return {
          url: `/szhp/openfileassistance/InitiateOpenFile`,
          headers: {Authorization: `Bearer ${token}`},
          method: 'POST',
          data,
        };
      },
    }),

    //HF Bank data get
    getCallbackBanks: builder.query({
      query: (data: {id: string}) => ({
        url: `/szhpmgmt/bankmgmt/GetCallbackBanks?applicationId=${data?.id}`,
        method: 'GET',
      }),
    }),

    //Bank saveCallBack
    saveCallBackRequest: builder.query({
      query: ({data, token}) => {
        return {
          url: `/szhpmgmt/bankmgmt/SaveCallbackRequest`,
          headers: {Authorization: `Bearer ${token}`},
          method: 'POST',
          data,
        };
      },
    }),

    //Postponing and Reducing Get Dependents
    dependentsByEmiratesId: builder.query({
      query: ({emiratesId}) => {
        return {
          url: `/moei/integration/DependentsByEmiratesId?emiratesId=${emiratesId}`,
          method: 'GET',
        };
      },
    }),

    //Extend Task Action
    extendRequest: builder.query({
      query: ({id, token, data}) => {
        return {
          url: `/szhp/openfileassistance/UpdateMaintenanceEndDate/${id}`,
          headers: {Authorization: `Bearer ${token}`},
          method: 'PATCH',
          data,
        };
      },
    }),

    //Consultant Applications
    eligibleConsultantApplication: builder.query({
      query: data => {
        return {
          url: `/szhp/contractmgmt/eligibleConsultantApplication`,
          headers: {Authorization: `Bearer ${data?.token}`},
          method: 'GET',
        };
      },
    }),

    //ReqForContractorChange - Get - application id || id based
    getContractApplicationData: builder.query({
      query: data => {
        const url = data?.id
          ? `/szhp/contractmgmt/GetEndContractById?id=${data?.id}&requestType=CHANGE_CONTRACT`
          : `/szhp/contractmgmt/GetEndContractById?applicationId=${data?.applicationId}&requestType=CHANGE_CONTRACT`;

        return {
          url,
          headers: {Authorization: `Bearer ${data?.token}`},
          method: 'GET',
        };
      },
    }),

    //ChangeContracter - SAVE || SUBMIT || RESUBMIT
    saveEndContract: builder.mutation({
      query: ({data, action}) => {
        return {
          url: `/szhp/contractmgmt/SaveEndContract?action=${action}`,
          method: 'POST',
          headers: {Authorization: `Bearer ${data?.token}`},
          data,
          params: {
            serviceId: data?.serviceId || undefined,
          },
        };
      },
    }),

    //payment Request
    paymentRequest: builder.query({
      query: ({data, params}) => {
        return {
          url: `/integration/adibpayment/PurchaseRequest`,
          method: 'POST',
          data,
          params,
        };
      },
    }),

    //Payment Response update api
    paymentResponse: builder.query({
      query: data => {
        return {
          url: `/integration/adibpayment/PaymentResponse`,
          method: 'GET',
          params: data?.params,
        };
      },
    }),
    //------------
    // Land Services
    /**
     * Issuing New Representative Card
     **/
    issuingCardEligibility: builder.query({
      query: ({params}: {params: any}) => {
        return {
          url: `/landmgmt/representativeReq/getCompanyDetails`,
          method: 'GET',
          params: params,
        };
      },
    }),

    getNationality: builder.query({
      query: (data: string) => {
        return {
          url: `/ldcommon/getNationality/${data}`,
          method: 'GET',
        };
      },
    }),

    // /landmgmt/representativeReq/RepresentativeReq/

    storeRepresentativeData: builder.mutation({
      query: (data: {
        data: any;
        id?: string | null;
        params: {action: string; serviceId: string};
      }) => {
        console.log('data---storeRepresentativeData-->', data);
        return {
          url: `/landmgmt/representativeReq/RepresentativeReq${
            data.id ? '/' + data.id : ''
          }`,
          method: data.id ? 'PATCH' : 'POST',
          data: data.data,
          params: data.params,
        };
      },
    }),

    getRepresentativeData: builder.query({
      query: (data: {id: string}) => {
        return {
          url: `/landmgmt/representativeReq/RepresentativeReq${
            data.id ? '/' + data.id : ''
          }`,
          method: 'GET',
        };
      },
    }),

    /**
     * -- End --
     * Issuing New Representative card
     **/

    /**
     * Request to Cancel Representative Card
     */

    getActiveReprLicense: builder.query({
      query: (params: any) => {
        return {
          url: `/landmgmt/representative/activePROLicenses`,
          method: 'GET',
          params: params,
        };
      },
    }),

    // /landmgmt/representativeReq/getCompanyDetails
    getCompanyDetailsForCancel: builder.query({
      query: ({params}: {params: any}) => {
        return {
          url: '/landmgmt/representativeReq/getCompanyDetails',
          method: 'GET',
          params: params,
        };
      },
    }),

    getRepresentativeLic: builder.query({
      query: ({id}: {id: string}) => {
        return {
          url: `/landmgmt/representative/RepresentativeLic/${id}`,
          method: 'GET',
        };
      },
    }),

    // /landmgmt/cancelRepresentative/CancelRepreReq
    getCancelReprReqById: builder.query({
      query: ({id}: {id: string}) => {
        return {
          url: `/landmgmt/cancelRepresentative/CancelRepreReq/${id}`,
          method: 'GET',
        };
      },
    }),

    cancelReprReq: builder.mutation({
      query: ({data, id, params}: {data: any; id?: string; params: any}) => {
        return {
          url: `/landmgmt/cancelRepresentative/CancelRepreReq${
            id ? '/' + id : ''
          }`,
          method: id ? 'PATCH' : 'POST',
          data: data,
          params: params,
        };
      },
    }),

    /**
     * -- End --
     * Request to Cancel Representative Card
     */

    /*
     *-- Start --> OPR Cards
     */

    //Vehicle Permit Eligibility *

    //Get Opr LicByUserId
    getOprLicByUserId: builder.query({
      query: () => {
        return {
          url: '/landmgmt/vehiclePermitLicense/GetOprLicByUserId',
          method: 'GET',
        };
      },
    }),

    //Vehicle Permit Eligibility
    checkVehiclePermitEligibility: builder.query({
      query: data => {
        const url = `/landmgmt/vehiclePermitRequest/CheckEligibility?oprLicNo=${data?.oprLicNo}&requestType=${data?.requestType}`;
        return {
          url: url,
          method: 'GET',
        };
      },
    }),

    //All Vehcile Details *
    getVehiclesList: builder.query({
      query: () => {
        return {
          url: `/landmgmt/vehicleDetailsSample/VehcileDetailsSample`,
          method: 'GET',
        };
      },
    }),

    //Submit Vehicle Permit
    submitVehiclePermitRequest: builder.query({
      query: ({data, params}) => {
        const url = data?.id
          ? `/landmgmt/vehiclePermitRequest/VehiclePermitReq/${data?.id}`
          : `/landmgmt/vehiclePermitRequest/VehiclePermitReq`;

        return {
          url,
          method: data?.id ? 'PATCH' : 'POST',
          params,
          data,
        };
      },
    }),

    //Get Vehicle Permit Request ById
    getVehiclePermitRequestById: builder.query({
      query: data => {
        return {
          url: `/landmgmt/vehiclePermitRequest/VehiclePermitReq/${data?.id}`,
          method: 'GET',
        };
      },
    }),

    getActiveVPLicenses: builder.query({
      query: ({oprLicNo, requestType}) => {
        const params = new URLSearchParams({
          oprLicNo,
          requestType,
        }).toString();

        return {
          url: `/landmgmt/vehiclePermitLicense/GetActiveVehiclePermitLicenses?${params}`,
          method: 'GET',
        };
      },
    }),

    //get Payments calculations
    getPaymentsOprCards: builder.query({
      query: ({data, params}) => {
        return {
          url: `/landmgmt/vehiclePermitRequest/GetPayments`,
          method: 'POST',
          data,
          params,
        };
      },
    }),

    //Get Vehicles By OprLicNo - Cancel
    getVehiclesByOprLicNo: builder.query({
      query: data => {
        return {
          url: `/landmgmt/vehiclePermitLicense/GetVehiclesByOprLicNo?oprLicNo=${data?.oprLicNo}`,
          method: 'GET',
        };
      },
    }),

    //Submit Cancel Vehicle Permit
    // submitCancelVehiclePermit: builder.query({
    //   query: ({data, actionTypeData}) => {
    //     const url = `/landmgmt/cancelVehiclePermitReq/CancelVehiclePermitReq?action=${actionTypeData}`;

    //     // data?.id
    //     // ? `/landmgmt/cancelVehiclePermitReq/CancelVehiclePermitReq${data?.id}`
    //     // : `/landmgmt/cancelVehiclePermitReq/CancelVehiclePermitReq?action=${actionTypeData}`;

    //     console.log('cancel id and url--->', data?.id ? 'PATCH' : 'POST', url);
    //     return {
    //       url,
    //       method: 'POST',
    //       data,
    //     };
    //   },
    // }),

    submitCancelVehiclePermit: builder.query({
      query: ({data, params}) => {
        const url = data?.id
          ? `/landmgmt/cancelVehiclePermitReq/CancelVehiclePermitReq/${data?.id}`
          : `/landmgmt/cancelVehiclePermitReq/CancelVehiclePermitReq`;

        return {
          url,
          method: data?.id ? 'PATCH' : 'POST',
          params,
          data,
        };
      },
    }),

    //Get Cancel Vehicle Permit Request ById
    getCancelVehiclePermitRequestById: builder.query({
      query: data => {
        return {
          url: `/landmgmt/cancelVehiclePermitReq/CancelVehiclePermitReq/${data?.id}`,
          method: 'GET',
        };
      },
    }),

    /**
     * Renew Land Representative Card
     */

    clonePROLicenseReq: builder.query({
      query: ({
        params,
      }: {
        params: {
          requestId: string;
          requestType: string;
          serviceId: string;
          licenseNo: string;
          tradeLicNo: string;
          companyId: string;
        };
      }) => {
        return {
          url: `/landmgmt/representativeReq/clonePROLicenseReq`,
          method: 'GET',
          params: params,
        };
      },
    }),
    /**
     * -- End --
     * Renew Land Representative Card
     */

    /**
     * OPR Issue License
     */
    checkLicenseExists: builder.query({
      query: ({
        params,
      }: {
        params: {
          requestType?: string;
          tradeLicNo?: string;
          entityId?: string;
        };
      }) => {
        return {
          url: `/landmgmt/OperatingLicenseReq/checkAppExists`,
          method: 'GET',
          params: params,
        };
      },
    }),

    getAllTransportTypes: builder.query({
      query: () => {
        return {
          url: `/landmgmt/TransportActivityReq/getAllTransportTypes`,
          method: 'GET',
        };
      },
    }),

    getTransportInfoById: builder.query({
      query: (id: string) => {
        return {
          url: `/landmgmt/TransportActivityReq/getTransprotInfo`,
          method: 'GET',
          params: {id: id},
        };
      },
    }),

    //

    getLandNationalityInfo: builder.query({
      query: () => {
        return {
          url: `/ldcommon/getNationality/UNITED_ARAB_EMIRATES`,
          method: 'GET',
        };
      },
    }),

    checkForActivityCount: builder.query({
      query: (params: {
        tradeLicNo: string;
        transActivity: string;
        transSubActivity: string;
      }) => {
        return {
          url: `/landmgmt/OperatingLicenseReq/checkForActivityCount`,
          method: 'GET',
          params: params,
        };
      },
    }),

    operatingLicReq: builder.mutation({
      query: ({params, data, id}: {params: any; data: any; id?: string}) => {
        const oprId = id ? `/${id}` : '';
        return {
          url: `/landmgmt/OperatingLicenseReq/OperatingLicenseReq${oprId}`,
          method: id ? 'PATCH' : 'POST',
          data: data,
          params: params,
        };
      },
    }),

    // /landmgmt/OperatingLicenseReq/OperatingLicenseReq
    getOperatingLicReq: builder.query({
      query: ({id}: {id: string}) => {
        return {
          url: `/landmgmt/OperatingLicenseReq/OperatingLicenseReq/${id}`,
          method: 'GET',
        };
      },
    }),

    /**
     * -- End --
     * OPR Issue License
     */
  }),
});

export const {
  useGetContentListMutation,
  useLazyGetUserProfileQuery,
  useFuelDashboardQuery,
  useLoginConfigurationQuery,
  useLazyLoginConfigurationQuery,
  useGetContentMostUsedServicesListMutation,
  useLazyGetAuthTokenQuery,
  useLazyGetUserTokenQuery,
  useGasOilGraphQuery,
  useGasolinAndGasOilGraphQuery,
  usePendingListTasksQuery,
  useLazyPendingListTasksQuery,
  useGetReportResultMutation,
  useGetInterfaceByIDQuery,
  useLazyGetApplicantProfileQuery,
  useFuelPricePumpStationQuery,
  useLazyFuelPricePumpStationQuery,
  useAuditHistoryQuery,
  useCommitteeMembersDataQuery,
  usePdfDataQuery,
  useAdjustmentsHistoryFPQuery,
  useLazyAdjustmentsHistoryFPQuery,
  useLazyTaskManagementQuery,
  useTaskManagementActionPerformMutation,
  useUpdateAdjustmentsPricesMutation,
  useGetAllCommentsByRequestIdQuery,
  useSubmitCommentMutation,
  useDeleteCommentMutation,
  useUpdateCommentMutation,
  useReplayCommentMutation,
  useSignDocumentMutation,
  useLazyGetSignStatusQuery,
  useLazyGetHousingApplicantsQuery,
  usePostHousingApplicantsMutation,
  usePatchHousingApplicantsMutation,
  useLazyGetInterfaceByIDQuery,
  useUpdateApplicantProfileMutation,
  usePostBankDetailsMutation,
  usePostEmployerDetailsMutation,
  usePatchBankDetailsMutation,
  usePatchEmployerDetailsMutation,
  useSendLoginOTPMutation,
  useLazyCheckOTPQuery,
  useLazyGetHousingEligibleCheckQuery,
  useLazyGetUAEPassUserTokenQuery,
  useLazyEligibilityCheckOpenFileQuery,
  useGetAttachmentConfigQuery,
  useLazyGetAttachmentConfigQuery,
  useUploadFilesMutation,
  useDeleteFileMutation,
  useGetContractorConsultantListQuery,
  useLazyGetContractorConsultantListQuery,
  useLazyGetMyApplicationsQuery,
  useSubmitOpenFiledataMutation,
  useLazyGetTaskActionQuery,
  useGetTaskActionQuery,
  usePerformActionMutation,
  useGetSearchInternalUsersMutation,
  useLazyAvailableModelForBookingQuery,
  useLazyGetDocumentMasterByIdQuery,
  useLazyGetAttachmentQuery,
  useLazyGenerateBookingAgreementQuery,
  useBookModelMutation,
  useBookUnitMutation,
  useLazyGetESignStatusQuery,
  useLazyGetAvailModelForBookingQuery,
  useLazyAvailableUnitsForBookingQuery,
  useLazyBookedUnitDetailsQuery,
  useLazySearchUsersQuery,
  useESignByDocumentIdMutation,
  useLazyGetSignStatusOpenFileQuery,
  usePostCancelApplicationMutation,
  useLazyGetCancelApplicationQuery,
  useLazyUpdateHousingDataPreCheckQuery,
  usePatchHousingApplicantsUpdateMutation,
  useLazyEmergencyVisitPreCheckQuery,
  useSubmitEmergencyVisitMutation,
  useLazyCheckReconsiderEligibilityQuery,
  useSubmitReconsiderationMutation,
  useResubmitReconsiderationMutation,
  useLazyEligibilityCheckHousingOwnerShipQuery,
  useLazyHousingOwnerShipGetQuery,
  useLazyHousingOwnershipRequestFormQuery,
  useLazyGetRegionsByEmirateQuery,
  useGetRegionsByEmirateQuery,
  useLazyGetAllConsultantApplicationsQuery,
  useLazyOpenFileAssistanceQuery,
  useLazyHousinghandoverQuery,
  useLazyGetHousingHandoverRequestByIdQuery,
  useLazyProjectExtensionEligibilityQuery,
  useProjectExtensionSubmitMutation,
  useLazyGetProjectExtensionDetailsQuery,
  useLazyGetPropertiesByEmirateQuery,
  useLazyEligibilityCheckPostponementQuery,
  useSubmitPostponingMutation,
  useLazyGetReducePostponeRequestByIdQuery,
  useLazyGetDisposalEligibilityCheckQuery,
  usePostValidateCancelOTPMutation,
  useLazyGetAttachmentIdByMasterIdQuery,
  usePostHouseDisposalRequestMutation,
  useGetCustomerPulseQuery,
  useLazyInitiateOpenFileQuery,
  useLazyLoanExemptionEligibilityCheckQuery,
  useLoanExemptionSubmitMutation,
  useLazyArrearsAssistanceEligibilityCheckQuery,
  useSubmitRescheduleArrearsMutation,
  useLazyArrearsDetailsByIdQuery,
  useLazyConcernCertificateEligibilityQuery,
  useConcernCertificateSubmitMutation,
  useLazyGetUDPModulesQuery,
  useLazyMaintenanceCheckEligibilityQuery,
  useLazyGetContractorDetailsQuery,
  useSubmitMaintenanceAssignmentMutation,
  useLazyGetMaintenanceAssignByIdQuery,
  useLazyGetConsultantApplicationsListQuery,
  useSubmitContractValueChangeMutation,
  useLazyGetContractValueDetailsByIDQuery,
  useGetCallbackBanksQuery,
  useLazySaveCallBackRequestQuery,
  useLazyDependentsByEmiratesIdQuery,
  useLazyExtendRequestQuery,
  useLazyCancellationEligibilityQuery,
  useEligibleConsultantApplicationQuery,
  useLazyContractEndEligibleQuery,
  useLazyGetEndContractByIdQuery,
  useLazyGetContractApplicationDataQuery,
  useSaveEndContractMutation,
  useContractEndSaveMutation,
  useLazyGetEndContractByEndIdQuery,
  useContractEndObjectionMutation,
  useLazyPaymentRequestQuery,
  useLazyPaymentResponseQuery,
  useLazyIssuingCardEligibilityQuery,
  useLazyGetNationalityQuery,
  useStoreRepresentativeDataMutation,
  useLazyGetRepresentativeDataQuery,
  useLazyGetActiveReprLicenseQuery,
  useLazyGetCompanyDetailsForCancelQuery,
  useLazyGetRepresentativeLicQuery,
  usePostRequestToUpdateInfoMutation,
  useValidateProfileOTPResponseMutation,
  useCancelReprReqMutation,
  useLazySwitchProfileListQuery,
  useLazyAuditHistoryQuery,
  useLazySwitchProfileQuery,
  useLazyGetCancelReprReqByIdQuery,
  useLazyGetOprLicByUserIdQuery,
  useLazyCheckVehiclePermitEligibilityQuery,
  useLazyGetVehiclesListQuery,
  useLazySubmitVehiclePermitRequestQuery,
  useLazyGetVehiclePermitRequestByIdQuery,
  useLazyClonePROLicenseReqQuery,
  useLazyGetActiveVPLicensesQuery,
  useLazyGetPaymentsOprCardsQuery,
  useLazyGetVehiclesByOprLicNoQuery,
  useLazyCheckLicenseExistsQuery,
  useLazyGetAllTransportTypesQuery,
  useLazyGetTransportInfoByIdQuery,
  useLazyGetLandNationalityInfoQuery,
  useCheckForActivityCountQuery,
  useOperatingLicReqMutation,
  useLazyGetOperatingLicReqQuery,
  useLazySubmitCancelVehiclePermitQuery,
  useLazyGetCancelVehiclePermitRequestByIdQuery,
} = hostApiServices;
