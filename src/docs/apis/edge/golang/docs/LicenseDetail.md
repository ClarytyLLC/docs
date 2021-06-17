# LicenseDetail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CurrentAPI** | **int64** | The current number of API calls allowed by the license. | [optional] 
**CurrentBytes** | **int64** | The current number of bytes to be processed under this license. | [optional] 
**CurrentTasks** | **int64** | The current number of tasks that can be processed on the system. | [optional] 
**LicenseExpiration** | [**time.Time**](time.Time.md) | This is the datetime the license will expire | [optional] 
**LicenseID** | **string** | License ID | [optional] 
**LicenseKey** | **string** | This is the encoded license string | [optional] 
**LicenseValidation** | **string** | This contains the validation information for the license | [optional] 
**MaxAPI** | **int64** | The maximum number of API calls allowed by the license. If 0, then unlimited. | [optional] 
**MaxBytes** | **int64** | The maximum number of bytes to be processed under this license.  If 0, then unlimited. | [optional] 
**MaxHosts** | **int64** | The maximum number of hosts allowed in the system.  If 0, then unlimited. | [optional] 
**MaxTasks** | **int64** | The maximum number of tasks that can be processed on the system. If 0, then unlimited. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

<style>
     p, ul, ol, li { font-size: 18px !important;}
</style>


