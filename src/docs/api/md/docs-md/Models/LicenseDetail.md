# LicenseDetail
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currentAPI** | [**Long**](long.md) | The current number of API calls allowed by the license. | [optional] [default to null]
**currentBytes** | [**Long**](long.md) | The current number of bytes to be processed under this license. | [optional] [default to null]
**currentTasks** | [**Long**](long.md) | The current number of tasks that can be processed on the system. | [optional] [default to null]
**licenseExpiration** | [**Date**](DateTime.md) | This is the datetime the license will expire | [optional] [default to null]
**licenseID** | [**UUID**](UUID.md) | License ID | [optional] [default to null]
**licenseKey** | [**String**](string.md) | This is the encoded license string | [optional] [default to null]
**licenseValidation** | [**String**](string.md) | This contains the validation information for the license | [optional] [default to null]
**maxAPI** | [**Long**](long.md) | The maximum number of API calls allowed by the license. If 0, then unlimited. | [optional] [default to null]
**maxBytes** | [**Long**](long.md) | The maximum number of bytes to be processed under this license.  If 0, then unlimited. | [optional] [default to null]
**maxHosts** | [**Long**](long.md) | The maximum number of hosts allowed in the system.  If 0, then unlimited. | [optional] [default to null]
**maxTasks** | [**Long**](long.md) | The maximum number of tasks that can be processed on the system. If 0, then unlimited. | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

<style>
     p, ul, ol, li { font-size: 18px !important;}
</style>

