# `provider` Submodule <a name="`provider` Submodule" id="@cdktn/provider-google.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleProvider <a name="GoogleProvider" id="@cdktn/provider-google.provider.GoogleProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs google}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.provider.GoogleProvider.Initializer"></a>

```typescript
import { provider } from '@cdktn/provider-google'

new provider.GoogleProvider(scope: Construct, id: string, config?: GoogleProviderConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig">GoogleProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.provider.GoogleProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.provider.GoogleProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-google.provider.GoogleProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.provider.GoogleProviderConfig">GoogleProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetAccessApprovalCustomEndpoint">resetAccessApprovalCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetAccessContextManagerCustomEndpoint">resetAccessContextManagerCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetAccessToken">resetAccessToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetActiveDirectoryCustomEndpoint">resetActiveDirectoryCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetAddTerraformAttributionLabel">resetAddTerraformAttributionLabel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetAgentRegistryCustomEndpoint">resetAgentRegistryCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetAlloydbCustomEndpoint">resetAlloydbCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetApigeeCustomEndpoint">resetApigeeCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetApihubCustomEndpoint">resetApihubCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetApikeysCustomEndpoint">resetApikeysCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetAppEngineCustomEndpoint">resetAppEngineCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetApphubCustomEndpoint">resetApphubCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetArtifactRegistryCustomEndpoint">resetArtifactRegistryCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetAssuredWorkloadsCustomEndpoint">resetAssuredWorkloadsCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetBackupDrCustomEndpoint">resetBackupDrCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetBatching">resetBatching</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetBeyondcorpCustomEndpoint">resetBeyondcorpCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetBiglakeCustomEndpoint">resetBiglakeCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetBiglakeHiveCustomEndpoint">resetBiglakeHiveCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetBiglakeIcebergCustomEndpoint">resetBiglakeIcebergCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetBigqueryAnalyticsHubCustomEndpoint">resetBigqueryAnalyticsHubCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetBigqueryConnectionCustomEndpoint">resetBigqueryConnectionCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetBigQueryCustomEndpoint">resetBigQueryCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetBigqueryDatapolicyCustomEndpoint">resetBigqueryDatapolicyCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetBigqueryDatapolicyv2CustomEndpoint">resetBigqueryDatapolicyv2CustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetBigqueryDataTransferCustomEndpoint">resetBigqueryDataTransferCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetBigqueryReservationCustomEndpoint">resetBigqueryReservationCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetBigtableCustomEndpoint">resetBigtableCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetBillingBudgetsCustomEndpoint">resetBillingBudgetsCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetBillingCustomEndpoint">resetBillingCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetBillingProject">resetBillingProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetBinaryAuthorizationCustomEndpoint">resetBinaryAuthorizationCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetBlockchainNodeEngineCustomEndpoint">resetBlockchainNodeEngineCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetCertificateManagerCustomEndpoint">resetCertificateManagerCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetCesCustomEndpoint">resetCesCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetChronicleCustomEndpoint">resetChronicleCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetCloudAssetCustomEndpoint">resetCloudAssetCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetCloudBillingCustomEndpoint">resetCloudBillingCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetCloudBuildCustomEndpoint">resetCloudBuildCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetCloudbuildv2CustomEndpoint">resetCloudbuildv2CustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetClouddeployCustomEndpoint">resetClouddeployCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetClouddomainsCustomEndpoint">resetClouddomainsCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetCloudfunctions2CustomEndpoint">resetCloudfunctions2CustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetCloudFunctionsCustomEndpoint">resetCloudFunctionsCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetCloudIdentityCustomEndpoint">resetCloudIdentityCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetCloudIdsCustomEndpoint">resetCloudIdsCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetCloudQuotasCustomEndpoint">resetCloudQuotasCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetCloudResourceManagerCustomEndpoint">resetCloudResourceManagerCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetCloudRunCustomEndpoint">resetCloudRunCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetCloudRunV2CustomEndpoint">resetCloudRunV2CustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetCloudSchedulerCustomEndpoint">resetCloudSchedulerCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetCloudSecurityComplianceCustomEndpoint">resetCloudSecurityComplianceCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetCloudTasksCustomEndpoint">resetCloudTasksCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetColabCustomEndpoint">resetColabCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetComposerCustomEndpoint">resetComposerCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetComputeCustomEndpoint">resetComputeCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetConfigCustomEndpoint">resetConfigCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetContactCenterInsightsCustomEndpoint">resetContactCenterInsightsCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetContainerAnalysisCustomEndpoint">resetContainerAnalysisCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetContainerAttachedCustomEndpoint">resetContainerAttachedCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetContainerAwsCustomEndpoint">resetContainerAwsCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetContainerAzureCustomEndpoint">resetContainerAzureCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetContainerCustomEndpoint">resetContainerCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetCoreBillingCustomEndpoint">resetCoreBillingCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetCredentials">resetCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetDatabaseMigrationServiceCustomEndpoint">resetDatabaseMigrationServiceCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetDataCatalogCustomEndpoint">resetDataCatalogCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetDataflowCustomEndpoint">resetDataflowCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetDataformCustomEndpoint">resetDataformCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetDataFusionCustomEndpoint">resetDataFusionCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetDataLineageCustomEndpoint">resetDataLineageCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetDataLossPreventionCustomEndpoint">resetDataLossPreventionCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetDataPipelineCustomEndpoint">resetDataPipelineCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetDataplexCustomEndpoint">resetDataplexCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetDataprocCustomEndpoint">resetDataprocCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetDataprocGdcCustomEndpoint">resetDataprocGdcCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetDataprocMetastoreCustomEndpoint">resetDataprocMetastoreCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetDatastreamCustomEndpoint">resetDatastreamCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetDefaultLabels">resetDefaultLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetDeploymentManagerCustomEndpoint">resetDeploymentManagerCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetDeveloperConnectCustomEndpoint">resetDeveloperConnectCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetDialogflowCustomEndpoint">resetDialogflowCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetDialogflowCxCustomEndpoint">resetDialogflowCxCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetDiscoveryEngineCustomEndpoint">resetDiscoveryEngineCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetDnsCustomEndpoint">resetDnsCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetDocumentAiCustomEndpoint">resetDocumentAiCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetDocumentAiWarehouseCustomEndpoint">resetDocumentAiWarehouseCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetEdgecontainerCustomEndpoint">resetEdgecontainerCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetEdgenetworkCustomEndpoint">resetEdgenetworkCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetEssentialContactsCustomEndpoint">resetEssentialContactsCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetEventarcCustomEndpoint">resetEventarcCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetExternalCredentials">resetExternalCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetFilestoreCustomEndpoint">resetFilestoreCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetFirebaseAppCheckCustomEndpoint">resetFirebaseAppCheckCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetFirebaseAppHostingCustomEndpoint">resetFirebaseAppHostingCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetFirebaseDataConnectCustomEndpoint">resetFirebaseDataConnectCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetFirebaseRemoteConfigCustomEndpoint">resetFirebaseRemoteConfigCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetFirebaserulesCustomEndpoint">resetFirebaserulesCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetFirestoreCustomEndpoint">resetFirestoreCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetGeminiCustomEndpoint">resetGeminiCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetGkeBackupCustomEndpoint">resetGkeBackupCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetGkeHub2CustomEndpoint">resetGkeHub2CustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetGkeHubCustomEndpoint">resetGkeHubCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetGkeonpremCustomEndpoint">resetGkeonpremCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetHealthcareCustomEndpoint">resetHealthcareCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetHypercomputeclusterCustomEndpoint">resetHypercomputeclusterCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetIam2CustomEndpoint">resetIam2CustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetIam3CustomEndpoint">resetIam3CustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetIamBetaCustomEndpoint">resetIamBetaCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetIamCredentialsCustomEndpoint">resetIamCredentialsCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetIamCustomEndpoint">resetIamCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetIamWorkforcePoolCustomEndpoint">resetIamWorkforcePoolCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetIapCustomEndpoint">resetIapCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetIdentityPlatformCustomEndpoint">resetIdentityPlatformCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetImpersonateServiceAccount">resetImpersonateServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetImpersonateServiceAccountDelegates">resetImpersonateServiceAccountDelegates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetIntegrationConnectorsCustomEndpoint">resetIntegrationConnectorsCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetIntegrationsCustomEndpoint">resetIntegrationsCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetKmsCustomEndpoint">resetKmsCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetLicenseManagerCustomEndpoint">resetLicenseManagerCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetLoggingCustomEndpoint">resetLoggingCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetLookerCustomEndpoint">resetLookerCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetLustreCustomEndpoint">resetLustreCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetManagedKafkaCustomEndpoint">resetManagedKafkaCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetMemcacheCustomEndpoint">resetMemcacheCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetMemorystoreCustomEndpoint">resetMemorystoreCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetMigrationCenterCustomEndpoint">resetMigrationCenterCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetMlEngineCustomEndpoint">resetMlEngineCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetModelArmorCustomEndpoint">resetModelArmorCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetModelArmorGlobalCustomEndpoint">resetModelArmorGlobalCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetMonitoringCustomEndpoint">resetMonitoringCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetNetappCustomEndpoint">resetNetappCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetNetworkConnectivityCustomEndpoint">resetNetworkConnectivityCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetNetworkConnectivityv1CustomEndpoint">resetNetworkConnectivityv1CustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetNetworkManagementCustomEndpoint">resetNetworkManagementCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetNetworkSecurityCustomEndpoint">resetNetworkSecurityCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetNetworkServicesCustomEndpoint">resetNetworkServicesCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetNotebooksCustomEndpoint">resetNotebooksCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetObservabilityCustomEndpoint">resetObservabilityCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetOracleDatabaseCustomEndpoint">resetOracleDatabaseCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetOrgPolicyCustomEndpoint">resetOrgPolicyCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetOsConfigCustomEndpoint">resetOsConfigCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetOsConfigV2CustomEndpoint">resetOsConfigV2CustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetOsLoginCustomEndpoint">resetOsLoginCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetParallelstoreCustomEndpoint">resetParallelstoreCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetParameterManagerCustomEndpoint">resetParameterManagerCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetParameterManagerRegionalCustomEndpoint">resetParameterManagerRegionalCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetPollInterval">resetPollInterval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetPreferGlobalEndpoints">resetPreferGlobalEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetPreferRegionalEndpoints">resetPreferRegionalEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetPrivatecaCustomEndpoint">resetPrivatecaCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetPrivilegedAccessManagerCustomEndpoint">resetPrivilegedAccessManagerCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetPublicCaCustomEndpoint">resetPublicCaCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetPubsubCustomEndpoint">resetPubsubCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetPubsubLiteCustomEndpoint">resetPubsubLiteCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetRecaptchaEnterpriseCustomEndpoint">resetRecaptchaEnterpriseCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetRedisCustomEndpoint">resetRedisCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetRequestReason">resetRequestReason</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetRequestTimeout">resetRequestTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetResourceManager3CustomEndpoint">resetResourceManager3CustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetResourceManagerCustomEndpoint">resetResourceManagerCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetResourceManagerV3CustomEndpoint">resetResourceManagerV3CustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetScopes">resetScopes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetSecretManagerCustomEndpoint">resetSecretManagerCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetSecretManagerRegionalCustomEndpoint">resetSecretManagerRegionalCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetSecureSourceManagerCustomEndpoint">resetSecureSourceManagerCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetSecurityCenterCustomEndpoint">resetSecurityCenterCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetSecurityCenterManagementCustomEndpoint">resetSecurityCenterManagementCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetSecurityCenterV2CustomEndpoint">resetSecurityCenterV2CustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetSecuritypostureCustomEndpoint">resetSecuritypostureCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetServiceDirectoryCustomEndpoint">resetServiceDirectoryCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetServiceManagementCustomEndpoint">resetServiceManagementCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetServiceNetworkingCustomEndpoint">resetServiceNetworkingCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetServiceUsageCustomEndpoint">resetServiceUsageCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetSiteVerificationCustomEndpoint">resetSiteVerificationCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetSourceRepoCustomEndpoint">resetSourceRepoCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetSpannerCustomEndpoint">resetSpannerCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetSqlCustomEndpoint">resetSqlCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetStorageBatchOperationsCustomEndpoint">resetStorageBatchOperationsCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetStorageControlCustomEndpoint">resetStorageControlCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetStorageCustomEndpoint">resetStorageCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetStorageInsightsCustomEndpoint">resetStorageInsightsCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetStorageTransferCustomEndpoint">resetStorageTransferCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetTagsCustomEndpoint">resetTagsCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetTagsLocationCustomEndpoint">resetTagsLocationCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetTerraformAttributionLabelAdditionStrategy">resetTerraformAttributionLabelAdditionStrategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetTranscoderCustomEndpoint">resetTranscoderCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetUniverseDomain">resetUniverseDomain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetUserProjectOverride">resetUserProjectOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetVectorSearchCustomEndpoint">resetVectorSearchCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetVertexAiCustomEndpoint">resetVertexAiCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetVmwareengineCustomEndpoint">resetVmwareengineCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetVpcAccessCustomEndpoint">resetVpcAccessCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetWorkbenchCustomEndpoint">resetWorkbenchCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetWorkflowsCustomEndpoint">resetWorkflowsCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetWorkloadIdentityCustomEndpoint">resetWorkloadIdentityCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetWorkstationsCustomEndpoint">resetWorkstationsCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.resetZone">resetZone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.provider.GoogleProvider.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.provider.GoogleProvider.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.provider.GoogleProvider.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.provider.GoogleProvider.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.provider.GoogleProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.provider.GoogleProvider.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.provider.GoogleProvider.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.provider.GoogleProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.provider.GoogleProvider.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.provider.GoogleProvider.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.provider.GoogleProvider.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.provider.GoogleProvider.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `resetAccessApprovalCustomEndpoint` <a name="resetAccessApprovalCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetAccessApprovalCustomEndpoint"></a>

```typescript
public resetAccessApprovalCustomEndpoint(): void
```

##### `resetAccessContextManagerCustomEndpoint` <a name="resetAccessContextManagerCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetAccessContextManagerCustomEndpoint"></a>

```typescript
public resetAccessContextManagerCustomEndpoint(): void
```

##### `resetAccessToken` <a name="resetAccessToken" id="@cdktn/provider-google.provider.GoogleProvider.resetAccessToken"></a>

```typescript
public resetAccessToken(): void
```

##### `resetActiveDirectoryCustomEndpoint` <a name="resetActiveDirectoryCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetActiveDirectoryCustomEndpoint"></a>

```typescript
public resetActiveDirectoryCustomEndpoint(): void
```

##### `resetAddTerraformAttributionLabel` <a name="resetAddTerraformAttributionLabel" id="@cdktn/provider-google.provider.GoogleProvider.resetAddTerraformAttributionLabel"></a>

```typescript
public resetAddTerraformAttributionLabel(): void
```

##### `resetAgentRegistryCustomEndpoint` <a name="resetAgentRegistryCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetAgentRegistryCustomEndpoint"></a>

```typescript
public resetAgentRegistryCustomEndpoint(): void
```

##### `resetAlias` <a name="resetAlias" id="@cdktn/provider-google.provider.GoogleProvider.resetAlias"></a>

```typescript
public resetAlias(): void
```

##### `resetAlloydbCustomEndpoint` <a name="resetAlloydbCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetAlloydbCustomEndpoint"></a>

```typescript
public resetAlloydbCustomEndpoint(): void
```

##### `resetApigeeCustomEndpoint` <a name="resetApigeeCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetApigeeCustomEndpoint"></a>

```typescript
public resetApigeeCustomEndpoint(): void
```

##### `resetApihubCustomEndpoint` <a name="resetApihubCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetApihubCustomEndpoint"></a>

```typescript
public resetApihubCustomEndpoint(): void
```

##### `resetApikeysCustomEndpoint` <a name="resetApikeysCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetApikeysCustomEndpoint"></a>

```typescript
public resetApikeysCustomEndpoint(): void
```

##### `resetAppEngineCustomEndpoint` <a name="resetAppEngineCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetAppEngineCustomEndpoint"></a>

```typescript
public resetAppEngineCustomEndpoint(): void
```

##### `resetApphubCustomEndpoint` <a name="resetApphubCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetApphubCustomEndpoint"></a>

```typescript
public resetApphubCustomEndpoint(): void
```

##### `resetArtifactRegistryCustomEndpoint` <a name="resetArtifactRegistryCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetArtifactRegistryCustomEndpoint"></a>

```typescript
public resetArtifactRegistryCustomEndpoint(): void
```

##### `resetAssuredWorkloadsCustomEndpoint` <a name="resetAssuredWorkloadsCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetAssuredWorkloadsCustomEndpoint"></a>

```typescript
public resetAssuredWorkloadsCustomEndpoint(): void
```

##### `resetBackupDrCustomEndpoint` <a name="resetBackupDrCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetBackupDrCustomEndpoint"></a>

```typescript
public resetBackupDrCustomEndpoint(): void
```

##### `resetBatching` <a name="resetBatching" id="@cdktn/provider-google.provider.GoogleProvider.resetBatching"></a>

```typescript
public resetBatching(): void
```

##### `resetBeyondcorpCustomEndpoint` <a name="resetBeyondcorpCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetBeyondcorpCustomEndpoint"></a>

```typescript
public resetBeyondcorpCustomEndpoint(): void
```

##### `resetBiglakeCustomEndpoint` <a name="resetBiglakeCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetBiglakeCustomEndpoint"></a>

```typescript
public resetBiglakeCustomEndpoint(): void
```

##### `resetBiglakeHiveCustomEndpoint` <a name="resetBiglakeHiveCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetBiglakeHiveCustomEndpoint"></a>

```typescript
public resetBiglakeHiveCustomEndpoint(): void
```

##### `resetBiglakeIcebergCustomEndpoint` <a name="resetBiglakeIcebergCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetBiglakeIcebergCustomEndpoint"></a>

```typescript
public resetBiglakeIcebergCustomEndpoint(): void
```

##### `resetBigqueryAnalyticsHubCustomEndpoint` <a name="resetBigqueryAnalyticsHubCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetBigqueryAnalyticsHubCustomEndpoint"></a>

```typescript
public resetBigqueryAnalyticsHubCustomEndpoint(): void
```

##### `resetBigqueryConnectionCustomEndpoint` <a name="resetBigqueryConnectionCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetBigqueryConnectionCustomEndpoint"></a>

```typescript
public resetBigqueryConnectionCustomEndpoint(): void
```

##### `resetBigQueryCustomEndpoint` <a name="resetBigQueryCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetBigQueryCustomEndpoint"></a>

```typescript
public resetBigQueryCustomEndpoint(): void
```

##### `resetBigqueryDatapolicyCustomEndpoint` <a name="resetBigqueryDatapolicyCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetBigqueryDatapolicyCustomEndpoint"></a>

```typescript
public resetBigqueryDatapolicyCustomEndpoint(): void
```

##### `resetBigqueryDatapolicyv2CustomEndpoint` <a name="resetBigqueryDatapolicyv2CustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetBigqueryDatapolicyv2CustomEndpoint"></a>

```typescript
public resetBigqueryDatapolicyv2CustomEndpoint(): void
```

##### `resetBigqueryDataTransferCustomEndpoint` <a name="resetBigqueryDataTransferCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetBigqueryDataTransferCustomEndpoint"></a>

```typescript
public resetBigqueryDataTransferCustomEndpoint(): void
```

##### `resetBigqueryReservationCustomEndpoint` <a name="resetBigqueryReservationCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetBigqueryReservationCustomEndpoint"></a>

```typescript
public resetBigqueryReservationCustomEndpoint(): void
```

##### `resetBigtableCustomEndpoint` <a name="resetBigtableCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetBigtableCustomEndpoint"></a>

```typescript
public resetBigtableCustomEndpoint(): void
```

##### `resetBillingBudgetsCustomEndpoint` <a name="resetBillingBudgetsCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetBillingBudgetsCustomEndpoint"></a>

```typescript
public resetBillingBudgetsCustomEndpoint(): void
```

##### `resetBillingCustomEndpoint` <a name="resetBillingCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetBillingCustomEndpoint"></a>

```typescript
public resetBillingCustomEndpoint(): void
```

##### `resetBillingProject` <a name="resetBillingProject" id="@cdktn/provider-google.provider.GoogleProvider.resetBillingProject"></a>

```typescript
public resetBillingProject(): void
```

##### `resetBinaryAuthorizationCustomEndpoint` <a name="resetBinaryAuthorizationCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetBinaryAuthorizationCustomEndpoint"></a>

```typescript
public resetBinaryAuthorizationCustomEndpoint(): void
```

##### `resetBlockchainNodeEngineCustomEndpoint` <a name="resetBlockchainNodeEngineCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetBlockchainNodeEngineCustomEndpoint"></a>

```typescript
public resetBlockchainNodeEngineCustomEndpoint(): void
```

##### `resetCertificateManagerCustomEndpoint` <a name="resetCertificateManagerCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetCertificateManagerCustomEndpoint"></a>

```typescript
public resetCertificateManagerCustomEndpoint(): void
```

##### `resetCesCustomEndpoint` <a name="resetCesCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetCesCustomEndpoint"></a>

```typescript
public resetCesCustomEndpoint(): void
```

##### `resetChronicleCustomEndpoint` <a name="resetChronicleCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetChronicleCustomEndpoint"></a>

```typescript
public resetChronicleCustomEndpoint(): void
```

##### `resetCloudAssetCustomEndpoint` <a name="resetCloudAssetCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetCloudAssetCustomEndpoint"></a>

```typescript
public resetCloudAssetCustomEndpoint(): void
```

##### `resetCloudBillingCustomEndpoint` <a name="resetCloudBillingCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetCloudBillingCustomEndpoint"></a>

```typescript
public resetCloudBillingCustomEndpoint(): void
```

##### `resetCloudBuildCustomEndpoint` <a name="resetCloudBuildCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetCloudBuildCustomEndpoint"></a>

```typescript
public resetCloudBuildCustomEndpoint(): void
```

##### `resetCloudbuildv2CustomEndpoint` <a name="resetCloudbuildv2CustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetCloudbuildv2CustomEndpoint"></a>

```typescript
public resetCloudbuildv2CustomEndpoint(): void
```

##### `resetClouddeployCustomEndpoint` <a name="resetClouddeployCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetClouddeployCustomEndpoint"></a>

```typescript
public resetClouddeployCustomEndpoint(): void
```

##### `resetClouddomainsCustomEndpoint` <a name="resetClouddomainsCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetClouddomainsCustomEndpoint"></a>

```typescript
public resetClouddomainsCustomEndpoint(): void
```

##### `resetCloudfunctions2CustomEndpoint` <a name="resetCloudfunctions2CustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetCloudfunctions2CustomEndpoint"></a>

```typescript
public resetCloudfunctions2CustomEndpoint(): void
```

##### `resetCloudFunctionsCustomEndpoint` <a name="resetCloudFunctionsCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetCloudFunctionsCustomEndpoint"></a>

```typescript
public resetCloudFunctionsCustomEndpoint(): void
```

##### `resetCloudIdentityCustomEndpoint` <a name="resetCloudIdentityCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetCloudIdentityCustomEndpoint"></a>

```typescript
public resetCloudIdentityCustomEndpoint(): void
```

##### `resetCloudIdsCustomEndpoint` <a name="resetCloudIdsCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetCloudIdsCustomEndpoint"></a>

```typescript
public resetCloudIdsCustomEndpoint(): void
```

##### `resetCloudQuotasCustomEndpoint` <a name="resetCloudQuotasCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetCloudQuotasCustomEndpoint"></a>

```typescript
public resetCloudQuotasCustomEndpoint(): void
```

##### `resetCloudResourceManagerCustomEndpoint` <a name="resetCloudResourceManagerCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetCloudResourceManagerCustomEndpoint"></a>

```typescript
public resetCloudResourceManagerCustomEndpoint(): void
```

##### `resetCloudRunCustomEndpoint` <a name="resetCloudRunCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetCloudRunCustomEndpoint"></a>

```typescript
public resetCloudRunCustomEndpoint(): void
```

##### `resetCloudRunV2CustomEndpoint` <a name="resetCloudRunV2CustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetCloudRunV2CustomEndpoint"></a>

```typescript
public resetCloudRunV2CustomEndpoint(): void
```

##### `resetCloudSchedulerCustomEndpoint` <a name="resetCloudSchedulerCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetCloudSchedulerCustomEndpoint"></a>

```typescript
public resetCloudSchedulerCustomEndpoint(): void
```

##### `resetCloudSecurityComplianceCustomEndpoint` <a name="resetCloudSecurityComplianceCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetCloudSecurityComplianceCustomEndpoint"></a>

```typescript
public resetCloudSecurityComplianceCustomEndpoint(): void
```

##### `resetCloudTasksCustomEndpoint` <a name="resetCloudTasksCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetCloudTasksCustomEndpoint"></a>

```typescript
public resetCloudTasksCustomEndpoint(): void
```

##### `resetColabCustomEndpoint` <a name="resetColabCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetColabCustomEndpoint"></a>

```typescript
public resetColabCustomEndpoint(): void
```

##### `resetComposerCustomEndpoint` <a name="resetComposerCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetComposerCustomEndpoint"></a>

```typescript
public resetComposerCustomEndpoint(): void
```

##### `resetComputeCustomEndpoint` <a name="resetComputeCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetComputeCustomEndpoint"></a>

```typescript
public resetComputeCustomEndpoint(): void
```

##### `resetConfigCustomEndpoint` <a name="resetConfigCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetConfigCustomEndpoint"></a>

```typescript
public resetConfigCustomEndpoint(): void
```

##### `resetContactCenterInsightsCustomEndpoint` <a name="resetContactCenterInsightsCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetContactCenterInsightsCustomEndpoint"></a>

```typescript
public resetContactCenterInsightsCustomEndpoint(): void
```

##### `resetContainerAnalysisCustomEndpoint` <a name="resetContainerAnalysisCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetContainerAnalysisCustomEndpoint"></a>

```typescript
public resetContainerAnalysisCustomEndpoint(): void
```

##### `resetContainerAttachedCustomEndpoint` <a name="resetContainerAttachedCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetContainerAttachedCustomEndpoint"></a>

```typescript
public resetContainerAttachedCustomEndpoint(): void
```

##### `resetContainerAwsCustomEndpoint` <a name="resetContainerAwsCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetContainerAwsCustomEndpoint"></a>

```typescript
public resetContainerAwsCustomEndpoint(): void
```

##### `resetContainerAzureCustomEndpoint` <a name="resetContainerAzureCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetContainerAzureCustomEndpoint"></a>

```typescript
public resetContainerAzureCustomEndpoint(): void
```

##### `resetContainerCustomEndpoint` <a name="resetContainerCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetContainerCustomEndpoint"></a>

```typescript
public resetContainerCustomEndpoint(): void
```

##### `resetCoreBillingCustomEndpoint` <a name="resetCoreBillingCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetCoreBillingCustomEndpoint"></a>

```typescript
public resetCoreBillingCustomEndpoint(): void
```

##### `resetCredentials` <a name="resetCredentials" id="@cdktn/provider-google.provider.GoogleProvider.resetCredentials"></a>

```typescript
public resetCredentials(): void
```

##### `resetDatabaseMigrationServiceCustomEndpoint` <a name="resetDatabaseMigrationServiceCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetDatabaseMigrationServiceCustomEndpoint"></a>

```typescript
public resetDatabaseMigrationServiceCustomEndpoint(): void
```

##### `resetDataCatalogCustomEndpoint` <a name="resetDataCatalogCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetDataCatalogCustomEndpoint"></a>

```typescript
public resetDataCatalogCustomEndpoint(): void
```

##### `resetDataflowCustomEndpoint` <a name="resetDataflowCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetDataflowCustomEndpoint"></a>

```typescript
public resetDataflowCustomEndpoint(): void
```

##### `resetDataformCustomEndpoint` <a name="resetDataformCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetDataformCustomEndpoint"></a>

```typescript
public resetDataformCustomEndpoint(): void
```

##### `resetDataFusionCustomEndpoint` <a name="resetDataFusionCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetDataFusionCustomEndpoint"></a>

```typescript
public resetDataFusionCustomEndpoint(): void
```

##### `resetDataLineageCustomEndpoint` <a name="resetDataLineageCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetDataLineageCustomEndpoint"></a>

```typescript
public resetDataLineageCustomEndpoint(): void
```

##### `resetDataLossPreventionCustomEndpoint` <a name="resetDataLossPreventionCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetDataLossPreventionCustomEndpoint"></a>

```typescript
public resetDataLossPreventionCustomEndpoint(): void
```

##### `resetDataPipelineCustomEndpoint` <a name="resetDataPipelineCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetDataPipelineCustomEndpoint"></a>

```typescript
public resetDataPipelineCustomEndpoint(): void
```

##### `resetDataplexCustomEndpoint` <a name="resetDataplexCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetDataplexCustomEndpoint"></a>

```typescript
public resetDataplexCustomEndpoint(): void
```

##### `resetDataprocCustomEndpoint` <a name="resetDataprocCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetDataprocCustomEndpoint"></a>

```typescript
public resetDataprocCustomEndpoint(): void
```

##### `resetDataprocGdcCustomEndpoint` <a name="resetDataprocGdcCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetDataprocGdcCustomEndpoint"></a>

```typescript
public resetDataprocGdcCustomEndpoint(): void
```

##### `resetDataprocMetastoreCustomEndpoint` <a name="resetDataprocMetastoreCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetDataprocMetastoreCustomEndpoint"></a>

```typescript
public resetDataprocMetastoreCustomEndpoint(): void
```

##### `resetDatastreamCustomEndpoint` <a name="resetDatastreamCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetDatastreamCustomEndpoint"></a>

```typescript
public resetDatastreamCustomEndpoint(): void
```

##### `resetDefaultLabels` <a name="resetDefaultLabels" id="@cdktn/provider-google.provider.GoogleProvider.resetDefaultLabels"></a>

```typescript
public resetDefaultLabels(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.provider.GoogleProvider.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDeploymentManagerCustomEndpoint` <a name="resetDeploymentManagerCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetDeploymentManagerCustomEndpoint"></a>

```typescript
public resetDeploymentManagerCustomEndpoint(): void
```

##### `resetDeveloperConnectCustomEndpoint` <a name="resetDeveloperConnectCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetDeveloperConnectCustomEndpoint"></a>

```typescript
public resetDeveloperConnectCustomEndpoint(): void
```

##### `resetDialogflowCustomEndpoint` <a name="resetDialogflowCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetDialogflowCustomEndpoint"></a>

```typescript
public resetDialogflowCustomEndpoint(): void
```

##### `resetDialogflowCxCustomEndpoint` <a name="resetDialogflowCxCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetDialogflowCxCustomEndpoint"></a>

```typescript
public resetDialogflowCxCustomEndpoint(): void
```

##### `resetDiscoveryEngineCustomEndpoint` <a name="resetDiscoveryEngineCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetDiscoveryEngineCustomEndpoint"></a>

```typescript
public resetDiscoveryEngineCustomEndpoint(): void
```

##### `resetDnsCustomEndpoint` <a name="resetDnsCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetDnsCustomEndpoint"></a>

```typescript
public resetDnsCustomEndpoint(): void
```

##### `resetDocumentAiCustomEndpoint` <a name="resetDocumentAiCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetDocumentAiCustomEndpoint"></a>

```typescript
public resetDocumentAiCustomEndpoint(): void
```

##### `resetDocumentAiWarehouseCustomEndpoint` <a name="resetDocumentAiWarehouseCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetDocumentAiWarehouseCustomEndpoint"></a>

```typescript
public resetDocumentAiWarehouseCustomEndpoint(): void
```

##### `resetEdgecontainerCustomEndpoint` <a name="resetEdgecontainerCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetEdgecontainerCustomEndpoint"></a>

```typescript
public resetEdgecontainerCustomEndpoint(): void
```

##### `resetEdgenetworkCustomEndpoint` <a name="resetEdgenetworkCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetEdgenetworkCustomEndpoint"></a>

```typescript
public resetEdgenetworkCustomEndpoint(): void
```

##### `resetEssentialContactsCustomEndpoint` <a name="resetEssentialContactsCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetEssentialContactsCustomEndpoint"></a>

```typescript
public resetEssentialContactsCustomEndpoint(): void
```

##### `resetEventarcCustomEndpoint` <a name="resetEventarcCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetEventarcCustomEndpoint"></a>

```typescript
public resetEventarcCustomEndpoint(): void
```

##### `resetExternalCredentials` <a name="resetExternalCredentials" id="@cdktn/provider-google.provider.GoogleProvider.resetExternalCredentials"></a>

```typescript
public resetExternalCredentials(): void
```

##### `resetFilestoreCustomEndpoint` <a name="resetFilestoreCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetFilestoreCustomEndpoint"></a>

```typescript
public resetFilestoreCustomEndpoint(): void
```

##### `resetFirebaseAppCheckCustomEndpoint` <a name="resetFirebaseAppCheckCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetFirebaseAppCheckCustomEndpoint"></a>

```typescript
public resetFirebaseAppCheckCustomEndpoint(): void
```

##### `resetFirebaseAppHostingCustomEndpoint` <a name="resetFirebaseAppHostingCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetFirebaseAppHostingCustomEndpoint"></a>

```typescript
public resetFirebaseAppHostingCustomEndpoint(): void
```

##### `resetFirebaseDataConnectCustomEndpoint` <a name="resetFirebaseDataConnectCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetFirebaseDataConnectCustomEndpoint"></a>

```typescript
public resetFirebaseDataConnectCustomEndpoint(): void
```

##### `resetFirebaseRemoteConfigCustomEndpoint` <a name="resetFirebaseRemoteConfigCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetFirebaseRemoteConfigCustomEndpoint"></a>

```typescript
public resetFirebaseRemoteConfigCustomEndpoint(): void
```

##### `resetFirebaserulesCustomEndpoint` <a name="resetFirebaserulesCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetFirebaserulesCustomEndpoint"></a>

```typescript
public resetFirebaserulesCustomEndpoint(): void
```

##### `resetFirestoreCustomEndpoint` <a name="resetFirestoreCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetFirestoreCustomEndpoint"></a>

```typescript
public resetFirestoreCustomEndpoint(): void
```

##### `resetGeminiCustomEndpoint` <a name="resetGeminiCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetGeminiCustomEndpoint"></a>

```typescript
public resetGeminiCustomEndpoint(): void
```

##### `resetGkeBackupCustomEndpoint` <a name="resetGkeBackupCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetGkeBackupCustomEndpoint"></a>

```typescript
public resetGkeBackupCustomEndpoint(): void
```

##### `resetGkeHub2CustomEndpoint` <a name="resetGkeHub2CustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetGkeHub2CustomEndpoint"></a>

```typescript
public resetGkeHub2CustomEndpoint(): void
```

##### `resetGkeHubCustomEndpoint` <a name="resetGkeHubCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetGkeHubCustomEndpoint"></a>

```typescript
public resetGkeHubCustomEndpoint(): void
```

##### `resetGkeonpremCustomEndpoint` <a name="resetGkeonpremCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetGkeonpremCustomEndpoint"></a>

```typescript
public resetGkeonpremCustomEndpoint(): void
```

##### `resetHealthcareCustomEndpoint` <a name="resetHealthcareCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetHealthcareCustomEndpoint"></a>

```typescript
public resetHealthcareCustomEndpoint(): void
```

##### `resetHypercomputeclusterCustomEndpoint` <a name="resetHypercomputeclusterCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetHypercomputeclusterCustomEndpoint"></a>

```typescript
public resetHypercomputeclusterCustomEndpoint(): void
```

##### `resetIam2CustomEndpoint` <a name="resetIam2CustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetIam2CustomEndpoint"></a>

```typescript
public resetIam2CustomEndpoint(): void
```

##### `resetIam3CustomEndpoint` <a name="resetIam3CustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetIam3CustomEndpoint"></a>

```typescript
public resetIam3CustomEndpoint(): void
```

##### `resetIamBetaCustomEndpoint` <a name="resetIamBetaCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetIamBetaCustomEndpoint"></a>

```typescript
public resetIamBetaCustomEndpoint(): void
```

##### `resetIamCredentialsCustomEndpoint` <a name="resetIamCredentialsCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetIamCredentialsCustomEndpoint"></a>

```typescript
public resetIamCredentialsCustomEndpoint(): void
```

##### `resetIamCustomEndpoint` <a name="resetIamCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetIamCustomEndpoint"></a>

```typescript
public resetIamCustomEndpoint(): void
```

##### `resetIamWorkforcePoolCustomEndpoint` <a name="resetIamWorkforcePoolCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetIamWorkforcePoolCustomEndpoint"></a>

```typescript
public resetIamWorkforcePoolCustomEndpoint(): void
```

##### `resetIapCustomEndpoint` <a name="resetIapCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetIapCustomEndpoint"></a>

```typescript
public resetIapCustomEndpoint(): void
```

##### `resetIdentityPlatformCustomEndpoint` <a name="resetIdentityPlatformCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetIdentityPlatformCustomEndpoint"></a>

```typescript
public resetIdentityPlatformCustomEndpoint(): void
```

##### `resetImpersonateServiceAccount` <a name="resetImpersonateServiceAccount" id="@cdktn/provider-google.provider.GoogleProvider.resetImpersonateServiceAccount"></a>

```typescript
public resetImpersonateServiceAccount(): void
```

##### `resetImpersonateServiceAccountDelegates` <a name="resetImpersonateServiceAccountDelegates" id="@cdktn/provider-google.provider.GoogleProvider.resetImpersonateServiceAccountDelegates"></a>

```typescript
public resetImpersonateServiceAccountDelegates(): void
```

##### `resetIntegrationConnectorsCustomEndpoint` <a name="resetIntegrationConnectorsCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetIntegrationConnectorsCustomEndpoint"></a>

```typescript
public resetIntegrationConnectorsCustomEndpoint(): void
```

##### `resetIntegrationsCustomEndpoint` <a name="resetIntegrationsCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetIntegrationsCustomEndpoint"></a>

```typescript
public resetIntegrationsCustomEndpoint(): void
```

##### `resetKmsCustomEndpoint` <a name="resetKmsCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetKmsCustomEndpoint"></a>

```typescript
public resetKmsCustomEndpoint(): void
```

##### `resetLicenseManagerCustomEndpoint` <a name="resetLicenseManagerCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetLicenseManagerCustomEndpoint"></a>

```typescript
public resetLicenseManagerCustomEndpoint(): void
```

##### `resetLoggingCustomEndpoint` <a name="resetLoggingCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetLoggingCustomEndpoint"></a>

```typescript
public resetLoggingCustomEndpoint(): void
```

##### `resetLookerCustomEndpoint` <a name="resetLookerCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetLookerCustomEndpoint"></a>

```typescript
public resetLookerCustomEndpoint(): void
```

##### `resetLustreCustomEndpoint` <a name="resetLustreCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetLustreCustomEndpoint"></a>

```typescript
public resetLustreCustomEndpoint(): void
```

##### `resetManagedKafkaCustomEndpoint` <a name="resetManagedKafkaCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetManagedKafkaCustomEndpoint"></a>

```typescript
public resetManagedKafkaCustomEndpoint(): void
```

##### `resetMemcacheCustomEndpoint` <a name="resetMemcacheCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetMemcacheCustomEndpoint"></a>

```typescript
public resetMemcacheCustomEndpoint(): void
```

##### `resetMemorystoreCustomEndpoint` <a name="resetMemorystoreCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetMemorystoreCustomEndpoint"></a>

```typescript
public resetMemorystoreCustomEndpoint(): void
```

##### `resetMigrationCenterCustomEndpoint` <a name="resetMigrationCenterCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetMigrationCenterCustomEndpoint"></a>

```typescript
public resetMigrationCenterCustomEndpoint(): void
```

##### `resetMlEngineCustomEndpoint` <a name="resetMlEngineCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetMlEngineCustomEndpoint"></a>

```typescript
public resetMlEngineCustomEndpoint(): void
```

##### `resetModelArmorCustomEndpoint` <a name="resetModelArmorCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetModelArmorCustomEndpoint"></a>

```typescript
public resetModelArmorCustomEndpoint(): void
```

##### `resetModelArmorGlobalCustomEndpoint` <a name="resetModelArmorGlobalCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetModelArmorGlobalCustomEndpoint"></a>

```typescript
public resetModelArmorGlobalCustomEndpoint(): void
```

##### `resetMonitoringCustomEndpoint` <a name="resetMonitoringCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetMonitoringCustomEndpoint"></a>

```typescript
public resetMonitoringCustomEndpoint(): void
```

##### `resetNetappCustomEndpoint` <a name="resetNetappCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetNetappCustomEndpoint"></a>

```typescript
public resetNetappCustomEndpoint(): void
```

##### `resetNetworkConnectivityCustomEndpoint` <a name="resetNetworkConnectivityCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetNetworkConnectivityCustomEndpoint"></a>

```typescript
public resetNetworkConnectivityCustomEndpoint(): void
```

##### `resetNetworkConnectivityv1CustomEndpoint` <a name="resetNetworkConnectivityv1CustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetNetworkConnectivityv1CustomEndpoint"></a>

```typescript
public resetNetworkConnectivityv1CustomEndpoint(): void
```

##### `resetNetworkManagementCustomEndpoint` <a name="resetNetworkManagementCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetNetworkManagementCustomEndpoint"></a>

```typescript
public resetNetworkManagementCustomEndpoint(): void
```

##### `resetNetworkSecurityCustomEndpoint` <a name="resetNetworkSecurityCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetNetworkSecurityCustomEndpoint"></a>

```typescript
public resetNetworkSecurityCustomEndpoint(): void
```

##### `resetNetworkServicesCustomEndpoint` <a name="resetNetworkServicesCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetNetworkServicesCustomEndpoint"></a>

```typescript
public resetNetworkServicesCustomEndpoint(): void
```

##### `resetNotebooksCustomEndpoint` <a name="resetNotebooksCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetNotebooksCustomEndpoint"></a>

```typescript
public resetNotebooksCustomEndpoint(): void
```

##### `resetObservabilityCustomEndpoint` <a name="resetObservabilityCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetObservabilityCustomEndpoint"></a>

```typescript
public resetObservabilityCustomEndpoint(): void
```

##### `resetOracleDatabaseCustomEndpoint` <a name="resetOracleDatabaseCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetOracleDatabaseCustomEndpoint"></a>

```typescript
public resetOracleDatabaseCustomEndpoint(): void
```

##### `resetOrgPolicyCustomEndpoint` <a name="resetOrgPolicyCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetOrgPolicyCustomEndpoint"></a>

```typescript
public resetOrgPolicyCustomEndpoint(): void
```

##### `resetOsConfigCustomEndpoint` <a name="resetOsConfigCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetOsConfigCustomEndpoint"></a>

```typescript
public resetOsConfigCustomEndpoint(): void
```

##### `resetOsConfigV2CustomEndpoint` <a name="resetOsConfigV2CustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetOsConfigV2CustomEndpoint"></a>

```typescript
public resetOsConfigV2CustomEndpoint(): void
```

##### `resetOsLoginCustomEndpoint` <a name="resetOsLoginCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetOsLoginCustomEndpoint"></a>

```typescript
public resetOsLoginCustomEndpoint(): void
```

##### `resetParallelstoreCustomEndpoint` <a name="resetParallelstoreCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetParallelstoreCustomEndpoint"></a>

```typescript
public resetParallelstoreCustomEndpoint(): void
```

##### `resetParameterManagerCustomEndpoint` <a name="resetParameterManagerCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetParameterManagerCustomEndpoint"></a>

```typescript
public resetParameterManagerCustomEndpoint(): void
```

##### `resetParameterManagerRegionalCustomEndpoint` <a name="resetParameterManagerRegionalCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetParameterManagerRegionalCustomEndpoint"></a>

```typescript
public resetParameterManagerRegionalCustomEndpoint(): void
```

##### `resetPollInterval` <a name="resetPollInterval" id="@cdktn/provider-google.provider.GoogleProvider.resetPollInterval"></a>

```typescript
public resetPollInterval(): void
```

##### `resetPreferGlobalEndpoints` <a name="resetPreferGlobalEndpoints" id="@cdktn/provider-google.provider.GoogleProvider.resetPreferGlobalEndpoints"></a>

```typescript
public resetPreferGlobalEndpoints(): void
```

##### `resetPreferRegionalEndpoints` <a name="resetPreferRegionalEndpoints" id="@cdktn/provider-google.provider.GoogleProvider.resetPreferRegionalEndpoints"></a>

```typescript
public resetPreferRegionalEndpoints(): void
```

##### `resetPrivatecaCustomEndpoint` <a name="resetPrivatecaCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetPrivatecaCustomEndpoint"></a>

```typescript
public resetPrivatecaCustomEndpoint(): void
```

##### `resetPrivilegedAccessManagerCustomEndpoint` <a name="resetPrivilegedAccessManagerCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetPrivilegedAccessManagerCustomEndpoint"></a>

```typescript
public resetPrivilegedAccessManagerCustomEndpoint(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.provider.GoogleProvider.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetPublicCaCustomEndpoint` <a name="resetPublicCaCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetPublicCaCustomEndpoint"></a>

```typescript
public resetPublicCaCustomEndpoint(): void
```

##### `resetPubsubCustomEndpoint` <a name="resetPubsubCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetPubsubCustomEndpoint"></a>

```typescript
public resetPubsubCustomEndpoint(): void
```

##### `resetPubsubLiteCustomEndpoint` <a name="resetPubsubLiteCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetPubsubLiteCustomEndpoint"></a>

```typescript
public resetPubsubLiteCustomEndpoint(): void
```

##### `resetRecaptchaEnterpriseCustomEndpoint` <a name="resetRecaptchaEnterpriseCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetRecaptchaEnterpriseCustomEndpoint"></a>

```typescript
public resetRecaptchaEnterpriseCustomEndpoint(): void
```

##### `resetRedisCustomEndpoint` <a name="resetRedisCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetRedisCustomEndpoint"></a>

```typescript
public resetRedisCustomEndpoint(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-google.provider.GoogleProvider.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetRequestReason` <a name="resetRequestReason" id="@cdktn/provider-google.provider.GoogleProvider.resetRequestReason"></a>

```typescript
public resetRequestReason(): void
```

##### `resetRequestTimeout` <a name="resetRequestTimeout" id="@cdktn/provider-google.provider.GoogleProvider.resetRequestTimeout"></a>

```typescript
public resetRequestTimeout(): void
```

##### `resetResourceManager3CustomEndpoint` <a name="resetResourceManager3CustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetResourceManager3CustomEndpoint"></a>

```typescript
public resetResourceManager3CustomEndpoint(): void
```

##### `resetResourceManagerCustomEndpoint` <a name="resetResourceManagerCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetResourceManagerCustomEndpoint"></a>

```typescript
public resetResourceManagerCustomEndpoint(): void
```

##### `resetResourceManagerV3CustomEndpoint` <a name="resetResourceManagerV3CustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetResourceManagerV3CustomEndpoint"></a>

```typescript
public resetResourceManagerV3CustomEndpoint(): void
```

##### `resetScopes` <a name="resetScopes" id="@cdktn/provider-google.provider.GoogleProvider.resetScopes"></a>

```typescript
public resetScopes(): void
```

##### `resetSecretManagerCustomEndpoint` <a name="resetSecretManagerCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetSecretManagerCustomEndpoint"></a>

```typescript
public resetSecretManagerCustomEndpoint(): void
```

##### `resetSecretManagerRegionalCustomEndpoint` <a name="resetSecretManagerRegionalCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetSecretManagerRegionalCustomEndpoint"></a>

```typescript
public resetSecretManagerRegionalCustomEndpoint(): void
```

##### `resetSecureSourceManagerCustomEndpoint` <a name="resetSecureSourceManagerCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetSecureSourceManagerCustomEndpoint"></a>

```typescript
public resetSecureSourceManagerCustomEndpoint(): void
```

##### `resetSecurityCenterCustomEndpoint` <a name="resetSecurityCenterCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetSecurityCenterCustomEndpoint"></a>

```typescript
public resetSecurityCenterCustomEndpoint(): void
```

##### `resetSecurityCenterManagementCustomEndpoint` <a name="resetSecurityCenterManagementCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetSecurityCenterManagementCustomEndpoint"></a>

```typescript
public resetSecurityCenterManagementCustomEndpoint(): void
```

##### `resetSecurityCenterV2CustomEndpoint` <a name="resetSecurityCenterV2CustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetSecurityCenterV2CustomEndpoint"></a>

```typescript
public resetSecurityCenterV2CustomEndpoint(): void
```

##### `resetSecuritypostureCustomEndpoint` <a name="resetSecuritypostureCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetSecuritypostureCustomEndpoint"></a>

```typescript
public resetSecuritypostureCustomEndpoint(): void
```

##### `resetServiceDirectoryCustomEndpoint` <a name="resetServiceDirectoryCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetServiceDirectoryCustomEndpoint"></a>

```typescript
public resetServiceDirectoryCustomEndpoint(): void
```

##### `resetServiceManagementCustomEndpoint` <a name="resetServiceManagementCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetServiceManagementCustomEndpoint"></a>

```typescript
public resetServiceManagementCustomEndpoint(): void
```

##### `resetServiceNetworkingCustomEndpoint` <a name="resetServiceNetworkingCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetServiceNetworkingCustomEndpoint"></a>

```typescript
public resetServiceNetworkingCustomEndpoint(): void
```

##### `resetServiceUsageCustomEndpoint` <a name="resetServiceUsageCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetServiceUsageCustomEndpoint"></a>

```typescript
public resetServiceUsageCustomEndpoint(): void
```

##### `resetSiteVerificationCustomEndpoint` <a name="resetSiteVerificationCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetSiteVerificationCustomEndpoint"></a>

```typescript
public resetSiteVerificationCustomEndpoint(): void
```

##### `resetSourceRepoCustomEndpoint` <a name="resetSourceRepoCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetSourceRepoCustomEndpoint"></a>

```typescript
public resetSourceRepoCustomEndpoint(): void
```

##### `resetSpannerCustomEndpoint` <a name="resetSpannerCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetSpannerCustomEndpoint"></a>

```typescript
public resetSpannerCustomEndpoint(): void
```

##### `resetSqlCustomEndpoint` <a name="resetSqlCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetSqlCustomEndpoint"></a>

```typescript
public resetSqlCustomEndpoint(): void
```

##### `resetStorageBatchOperationsCustomEndpoint` <a name="resetStorageBatchOperationsCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetStorageBatchOperationsCustomEndpoint"></a>

```typescript
public resetStorageBatchOperationsCustomEndpoint(): void
```

##### `resetStorageControlCustomEndpoint` <a name="resetStorageControlCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetStorageControlCustomEndpoint"></a>

```typescript
public resetStorageControlCustomEndpoint(): void
```

##### `resetStorageCustomEndpoint` <a name="resetStorageCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetStorageCustomEndpoint"></a>

```typescript
public resetStorageCustomEndpoint(): void
```

##### `resetStorageInsightsCustomEndpoint` <a name="resetStorageInsightsCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetStorageInsightsCustomEndpoint"></a>

```typescript
public resetStorageInsightsCustomEndpoint(): void
```

##### `resetStorageTransferCustomEndpoint` <a name="resetStorageTransferCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetStorageTransferCustomEndpoint"></a>

```typescript
public resetStorageTransferCustomEndpoint(): void
```

##### `resetTagsCustomEndpoint` <a name="resetTagsCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetTagsCustomEndpoint"></a>

```typescript
public resetTagsCustomEndpoint(): void
```

##### `resetTagsLocationCustomEndpoint` <a name="resetTagsLocationCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetTagsLocationCustomEndpoint"></a>

```typescript
public resetTagsLocationCustomEndpoint(): void
```

##### `resetTerraformAttributionLabelAdditionStrategy` <a name="resetTerraformAttributionLabelAdditionStrategy" id="@cdktn/provider-google.provider.GoogleProvider.resetTerraformAttributionLabelAdditionStrategy"></a>

```typescript
public resetTerraformAttributionLabelAdditionStrategy(): void
```

##### `resetTranscoderCustomEndpoint` <a name="resetTranscoderCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetTranscoderCustomEndpoint"></a>

```typescript
public resetTranscoderCustomEndpoint(): void
```

##### `resetUniverseDomain` <a name="resetUniverseDomain" id="@cdktn/provider-google.provider.GoogleProvider.resetUniverseDomain"></a>

```typescript
public resetUniverseDomain(): void
```

##### `resetUserProjectOverride` <a name="resetUserProjectOverride" id="@cdktn/provider-google.provider.GoogleProvider.resetUserProjectOverride"></a>

```typescript
public resetUserProjectOverride(): void
```

##### `resetVectorSearchCustomEndpoint` <a name="resetVectorSearchCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetVectorSearchCustomEndpoint"></a>

```typescript
public resetVectorSearchCustomEndpoint(): void
```

##### `resetVertexAiCustomEndpoint` <a name="resetVertexAiCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetVertexAiCustomEndpoint"></a>

```typescript
public resetVertexAiCustomEndpoint(): void
```

##### `resetVmwareengineCustomEndpoint` <a name="resetVmwareengineCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetVmwareengineCustomEndpoint"></a>

```typescript
public resetVmwareengineCustomEndpoint(): void
```

##### `resetVpcAccessCustomEndpoint` <a name="resetVpcAccessCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetVpcAccessCustomEndpoint"></a>

```typescript
public resetVpcAccessCustomEndpoint(): void
```

##### `resetWorkbenchCustomEndpoint` <a name="resetWorkbenchCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetWorkbenchCustomEndpoint"></a>

```typescript
public resetWorkbenchCustomEndpoint(): void
```

##### `resetWorkflowsCustomEndpoint` <a name="resetWorkflowsCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetWorkflowsCustomEndpoint"></a>

```typescript
public resetWorkflowsCustomEndpoint(): void
```

##### `resetWorkloadIdentityCustomEndpoint` <a name="resetWorkloadIdentityCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetWorkloadIdentityCustomEndpoint"></a>

```typescript
public resetWorkloadIdentityCustomEndpoint(): void
```

##### `resetWorkstationsCustomEndpoint` <a name="resetWorkstationsCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.resetWorkstationsCustomEndpoint"></a>

```typescript
public resetWorkstationsCustomEndpoint(): void
```

##### `resetZone` <a name="resetZone" id="@cdktn/provider-google.provider.GoogleProvider.resetZone"></a>

```typescript
public resetZone(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.isTerraformProvider">isTerraformProvider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleProvider resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.provider.GoogleProvider.isConstruct"></a>

```typescript
import { provider } from '@cdktn/provider-google'

provider.GoogleProvider.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.provider.GoogleProvider.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.provider.GoogleProvider.isTerraformElement"></a>

```typescript
import { provider } from '@cdktn/provider-google'

provider.GoogleProvider.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.provider.GoogleProvider.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformProvider` <a name="isTerraformProvider" id="@cdktn/provider-google.provider.GoogleProvider.isTerraformProvider"></a>

```typescript
import { provider } from '@cdktn/provider-google'

provider.GoogleProvider.isTerraformProvider(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.provider.GoogleProvider.isTerraformProvider.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.provider.GoogleProvider.generateConfigForImport"></a>

```typescript
import { provider } from '@cdktn/provider-google'

provider.GoogleProvider.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleProvider resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.provider.GoogleProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.provider.GoogleProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.provider.GoogleProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.provider.GoogleProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.metaAttributes">metaAttributes</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.terraformProviderSource">terraformProviderSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.accessApprovalCustomEndpointInput">accessApprovalCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.accessContextManagerCustomEndpointInput">accessContextManagerCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.accessTokenInput">accessTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.activeDirectoryCustomEndpointInput">activeDirectoryCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.addTerraformAttributionLabelInput">addTerraformAttributionLabelInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.agentRegistryCustomEndpointInput">agentRegistryCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.aliasInput">aliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.alloydbCustomEndpointInput">alloydbCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.apigeeCustomEndpointInput">apigeeCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.apihubCustomEndpointInput">apihubCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.apikeysCustomEndpointInput">apikeysCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.appEngineCustomEndpointInput">appEngineCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.apphubCustomEndpointInput">apphubCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.artifactRegistryCustomEndpointInput">artifactRegistryCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.assuredWorkloadsCustomEndpointInput">assuredWorkloadsCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.backupDrCustomEndpointInput">backupDrCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.batchingInput">batchingInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.provider.GoogleProviderBatching">GoogleProviderBatching</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.beyondcorpCustomEndpointInput">beyondcorpCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.biglakeCustomEndpointInput">biglakeCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.biglakeHiveCustomEndpointInput">biglakeHiveCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.biglakeIcebergCustomEndpointInput">biglakeIcebergCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.bigqueryAnalyticsHubCustomEndpointInput">bigqueryAnalyticsHubCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.bigqueryConnectionCustomEndpointInput">bigqueryConnectionCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.bigQueryCustomEndpointInput">bigQueryCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.bigqueryDatapolicyCustomEndpointInput">bigqueryDatapolicyCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.bigqueryDatapolicyv2CustomEndpointInput">bigqueryDatapolicyv2CustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.bigqueryDataTransferCustomEndpointInput">bigqueryDataTransferCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.bigqueryReservationCustomEndpointInput">bigqueryReservationCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.bigtableCustomEndpointInput">bigtableCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.billingBudgetsCustomEndpointInput">billingBudgetsCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.billingCustomEndpointInput">billingCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.billingProjectInput">billingProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.binaryAuthorizationCustomEndpointInput">binaryAuthorizationCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.blockchainNodeEngineCustomEndpointInput">blockchainNodeEngineCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.certificateManagerCustomEndpointInput">certificateManagerCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.cesCustomEndpointInput">cesCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.chronicleCustomEndpointInput">chronicleCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.cloudAssetCustomEndpointInput">cloudAssetCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.cloudBillingCustomEndpointInput">cloudBillingCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.cloudBuildCustomEndpointInput">cloudBuildCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.cloudbuildv2CustomEndpointInput">cloudbuildv2CustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.clouddeployCustomEndpointInput">clouddeployCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.clouddomainsCustomEndpointInput">clouddomainsCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.cloudfunctions2CustomEndpointInput">cloudfunctions2CustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.cloudFunctionsCustomEndpointInput">cloudFunctionsCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.cloudIdentityCustomEndpointInput">cloudIdentityCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.cloudIdsCustomEndpointInput">cloudIdsCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.cloudQuotasCustomEndpointInput">cloudQuotasCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.cloudResourceManagerCustomEndpointInput">cloudResourceManagerCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.cloudRunCustomEndpointInput">cloudRunCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.cloudRunV2CustomEndpointInput">cloudRunV2CustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.cloudSchedulerCustomEndpointInput">cloudSchedulerCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.cloudSecurityComplianceCustomEndpointInput">cloudSecurityComplianceCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.cloudTasksCustomEndpointInput">cloudTasksCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.colabCustomEndpointInput">colabCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.composerCustomEndpointInput">composerCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.computeCustomEndpointInput">computeCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.configCustomEndpointInput">configCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.contactCenterInsightsCustomEndpointInput">contactCenterInsightsCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.containerAnalysisCustomEndpointInput">containerAnalysisCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.containerAttachedCustomEndpointInput">containerAttachedCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.containerAwsCustomEndpointInput">containerAwsCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.containerAzureCustomEndpointInput">containerAzureCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.containerCustomEndpointInput">containerCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.coreBillingCustomEndpointInput">coreBillingCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.credentialsInput">credentialsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.databaseMigrationServiceCustomEndpointInput">databaseMigrationServiceCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.dataCatalogCustomEndpointInput">dataCatalogCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.dataflowCustomEndpointInput">dataflowCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.dataformCustomEndpointInput">dataformCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.dataFusionCustomEndpointInput">dataFusionCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.dataLineageCustomEndpointInput">dataLineageCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.dataLossPreventionCustomEndpointInput">dataLossPreventionCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.dataPipelineCustomEndpointInput">dataPipelineCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.dataplexCustomEndpointInput">dataplexCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.dataprocCustomEndpointInput">dataprocCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.dataprocGdcCustomEndpointInput">dataprocGdcCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.dataprocMetastoreCustomEndpointInput">dataprocMetastoreCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.datastreamCustomEndpointInput">datastreamCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.defaultLabelsInput">defaultLabelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.deploymentManagerCustomEndpointInput">deploymentManagerCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.developerConnectCustomEndpointInput">developerConnectCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.dialogflowCustomEndpointInput">dialogflowCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.dialogflowCxCustomEndpointInput">dialogflowCxCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.discoveryEngineCustomEndpointInput">discoveryEngineCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.dnsCustomEndpointInput">dnsCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.documentAiCustomEndpointInput">documentAiCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.documentAiWarehouseCustomEndpointInput">documentAiWarehouseCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.edgecontainerCustomEndpointInput">edgecontainerCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.edgenetworkCustomEndpointInput">edgenetworkCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.essentialContactsCustomEndpointInput">essentialContactsCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.eventarcCustomEndpointInput">eventarcCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.externalCredentialsInput">externalCredentialsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.provider.GoogleProviderExternalCredentials">GoogleProviderExternalCredentials</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.filestoreCustomEndpointInput">filestoreCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.firebaseAppCheckCustomEndpointInput">firebaseAppCheckCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.firebaseAppHostingCustomEndpointInput">firebaseAppHostingCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.firebaseDataConnectCustomEndpointInput">firebaseDataConnectCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.firebaseRemoteConfigCustomEndpointInput">firebaseRemoteConfigCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.firebaserulesCustomEndpointInput">firebaserulesCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.firestoreCustomEndpointInput">firestoreCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.geminiCustomEndpointInput">geminiCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.gkeBackupCustomEndpointInput">gkeBackupCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.gkeHub2CustomEndpointInput">gkeHub2CustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.gkeHubCustomEndpointInput">gkeHubCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.gkeonpremCustomEndpointInput">gkeonpremCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.healthcareCustomEndpointInput">healthcareCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.hypercomputeclusterCustomEndpointInput">hypercomputeclusterCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.iam2CustomEndpointInput">iam2CustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.iam3CustomEndpointInput">iam3CustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.iamBetaCustomEndpointInput">iamBetaCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.iamCredentialsCustomEndpointInput">iamCredentialsCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.iamCustomEndpointInput">iamCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.iamWorkforcePoolCustomEndpointInput">iamWorkforcePoolCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.iapCustomEndpointInput">iapCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.identityPlatformCustomEndpointInput">identityPlatformCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.impersonateServiceAccountDelegatesInput">impersonateServiceAccountDelegatesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.impersonateServiceAccountInput">impersonateServiceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.integrationConnectorsCustomEndpointInput">integrationConnectorsCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.integrationsCustomEndpointInput">integrationsCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.kmsCustomEndpointInput">kmsCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.licenseManagerCustomEndpointInput">licenseManagerCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.loggingCustomEndpointInput">loggingCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.lookerCustomEndpointInput">lookerCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.lustreCustomEndpointInput">lustreCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.managedKafkaCustomEndpointInput">managedKafkaCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.memcacheCustomEndpointInput">memcacheCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.memorystoreCustomEndpointInput">memorystoreCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.migrationCenterCustomEndpointInput">migrationCenterCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.mlEngineCustomEndpointInput">mlEngineCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.modelArmorCustomEndpointInput">modelArmorCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.modelArmorGlobalCustomEndpointInput">modelArmorGlobalCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.monitoringCustomEndpointInput">monitoringCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.netappCustomEndpointInput">netappCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.networkConnectivityCustomEndpointInput">networkConnectivityCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.networkConnectivityv1CustomEndpointInput">networkConnectivityv1CustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.networkManagementCustomEndpointInput">networkManagementCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.networkSecurityCustomEndpointInput">networkSecurityCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.networkServicesCustomEndpointInput">networkServicesCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.notebooksCustomEndpointInput">notebooksCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.observabilityCustomEndpointInput">observabilityCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.oracleDatabaseCustomEndpointInput">oracleDatabaseCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.orgPolicyCustomEndpointInput">orgPolicyCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.osConfigCustomEndpointInput">osConfigCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.osConfigV2CustomEndpointInput">osConfigV2CustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.osLoginCustomEndpointInput">osLoginCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.parallelstoreCustomEndpointInput">parallelstoreCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.parameterManagerCustomEndpointInput">parameterManagerCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.parameterManagerRegionalCustomEndpointInput">parameterManagerRegionalCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.pollIntervalInput">pollIntervalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.preferGlobalEndpointsInput">preferGlobalEndpointsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.preferRegionalEndpointsInput">preferRegionalEndpointsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.privatecaCustomEndpointInput">privatecaCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.privilegedAccessManagerCustomEndpointInput">privilegedAccessManagerCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.publicCaCustomEndpointInput">publicCaCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.pubsubCustomEndpointInput">pubsubCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.pubsubLiteCustomEndpointInput">pubsubLiteCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.recaptchaEnterpriseCustomEndpointInput">recaptchaEnterpriseCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.redisCustomEndpointInput">redisCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.requestReasonInput">requestReasonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.requestTimeoutInput">requestTimeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.resourceManager3CustomEndpointInput">resourceManager3CustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.resourceManagerCustomEndpointInput">resourceManagerCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.resourceManagerV3CustomEndpointInput">resourceManagerV3CustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.scopesInput">scopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.secretManagerCustomEndpointInput">secretManagerCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.secretManagerRegionalCustomEndpointInput">secretManagerRegionalCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.secureSourceManagerCustomEndpointInput">secureSourceManagerCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.securityCenterCustomEndpointInput">securityCenterCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.securityCenterManagementCustomEndpointInput">securityCenterManagementCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.securityCenterV2CustomEndpointInput">securityCenterV2CustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.securitypostureCustomEndpointInput">securitypostureCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.serviceDirectoryCustomEndpointInput">serviceDirectoryCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.serviceManagementCustomEndpointInput">serviceManagementCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.serviceNetworkingCustomEndpointInput">serviceNetworkingCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.serviceUsageCustomEndpointInput">serviceUsageCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.siteVerificationCustomEndpointInput">siteVerificationCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.sourceRepoCustomEndpointInput">sourceRepoCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.spannerCustomEndpointInput">spannerCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.sqlCustomEndpointInput">sqlCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.storageBatchOperationsCustomEndpointInput">storageBatchOperationsCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.storageControlCustomEndpointInput">storageControlCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.storageCustomEndpointInput">storageCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.storageInsightsCustomEndpointInput">storageInsightsCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.storageTransferCustomEndpointInput">storageTransferCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.tagsCustomEndpointInput">tagsCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.tagsLocationCustomEndpointInput">tagsLocationCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.terraformAttributionLabelAdditionStrategyInput">terraformAttributionLabelAdditionStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.transcoderCustomEndpointInput">transcoderCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.universeDomainInput">universeDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.userProjectOverrideInput">userProjectOverrideInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.vectorSearchCustomEndpointInput">vectorSearchCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.vertexAiCustomEndpointInput">vertexAiCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.vmwareengineCustomEndpointInput">vmwareengineCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.vpcAccessCustomEndpointInput">vpcAccessCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.workbenchCustomEndpointInput">workbenchCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.workflowsCustomEndpointInput">workflowsCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.workloadIdentityCustomEndpointInput">workloadIdentityCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.workstationsCustomEndpointInput">workstationsCustomEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.zoneInput">zoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.accessApprovalCustomEndpoint">accessApprovalCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.accessContextManagerCustomEndpoint">accessContextManagerCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.accessToken">accessToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.activeDirectoryCustomEndpoint">activeDirectoryCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.addTerraformAttributionLabel">addTerraformAttributionLabel</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.agentRegistryCustomEndpoint">agentRegistryCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.alloydbCustomEndpoint">alloydbCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.apigeeCustomEndpoint">apigeeCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.apihubCustomEndpoint">apihubCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.apikeysCustomEndpoint">apikeysCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.appEngineCustomEndpoint">appEngineCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.apphubCustomEndpoint">apphubCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.artifactRegistryCustomEndpoint">artifactRegistryCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.assuredWorkloadsCustomEndpoint">assuredWorkloadsCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.backupDrCustomEndpoint">backupDrCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.batching">batching</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.provider.GoogleProviderBatching">GoogleProviderBatching</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.beyondcorpCustomEndpoint">beyondcorpCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.biglakeCustomEndpoint">biglakeCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.biglakeHiveCustomEndpoint">biglakeHiveCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.biglakeIcebergCustomEndpoint">biglakeIcebergCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.bigqueryAnalyticsHubCustomEndpoint">bigqueryAnalyticsHubCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.bigqueryConnectionCustomEndpoint">bigqueryConnectionCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.bigQueryCustomEndpoint">bigQueryCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.bigqueryDatapolicyCustomEndpoint">bigqueryDatapolicyCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.bigqueryDatapolicyv2CustomEndpoint">bigqueryDatapolicyv2CustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.bigqueryDataTransferCustomEndpoint">bigqueryDataTransferCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.bigqueryReservationCustomEndpoint">bigqueryReservationCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.bigtableCustomEndpoint">bigtableCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.billingBudgetsCustomEndpoint">billingBudgetsCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.billingCustomEndpoint">billingCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.billingProject">billingProject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.binaryAuthorizationCustomEndpoint">binaryAuthorizationCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.blockchainNodeEngineCustomEndpoint">blockchainNodeEngineCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.certificateManagerCustomEndpoint">certificateManagerCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.cesCustomEndpoint">cesCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.chronicleCustomEndpoint">chronicleCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.cloudAssetCustomEndpoint">cloudAssetCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.cloudBillingCustomEndpoint">cloudBillingCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.cloudBuildCustomEndpoint">cloudBuildCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.cloudbuildv2CustomEndpoint">cloudbuildv2CustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.clouddeployCustomEndpoint">clouddeployCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.clouddomainsCustomEndpoint">clouddomainsCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.cloudfunctions2CustomEndpoint">cloudfunctions2CustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.cloudFunctionsCustomEndpoint">cloudFunctionsCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.cloudIdentityCustomEndpoint">cloudIdentityCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.cloudIdsCustomEndpoint">cloudIdsCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.cloudQuotasCustomEndpoint">cloudQuotasCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.cloudResourceManagerCustomEndpoint">cloudResourceManagerCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.cloudRunCustomEndpoint">cloudRunCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.cloudRunV2CustomEndpoint">cloudRunV2CustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.cloudSchedulerCustomEndpoint">cloudSchedulerCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.cloudSecurityComplianceCustomEndpoint">cloudSecurityComplianceCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.cloudTasksCustomEndpoint">cloudTasksCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.colabCustomEndpoint">colabCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.composerCustomEndpoint">composerCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.computeCustomEndpoint">computeCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.configCustomEndpoint">configCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.contactCenterInsightsCustomEndpoint">contactCenterInsightsCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.containerAnalysisCustomEndpoint">containerAnalysisCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.containerAttachedCustomEndpoint">containerAttachedCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.containerAwsCustomEndpoint">containerAwsCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.containerAzureCustomEndpoint">containerAzureCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.containerCustomEndpoint">containerCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.coreBillingCustomEndpoint">coreBillingCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.credentials">credentials</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.databaseMigrationServiceCustomEndpoint">databaseMigrationServiceCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.dataCatalogCustomEndpoint">dataCatalogCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.dataflowCustomEndpoint">dataflowCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.dataformCustomEndpoint">dataformCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.dataFusionCustomEndpoint">dataFusionCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.dataLineageCustomEndpoint">dataLineageCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.dataLossPreventionCustomEndpoint">dataLossPreventionCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.dataPipelineCustomEndpoint">dataPipelineCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.dataplexCustomEndpoint">dataplexCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.dataprocCustomEndpoint">dataprocCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.dataprocGdcCustomEndpoint">dataprocGdcCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.dataprocMetastoreCustomEndpoint">dataprocMetastoreCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.datastreamCustomEndpoint">datastreamCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.defaultLabels">defaultLabels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.deploymentManagerCustomEndpoint">deploymentManagerCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.developerConnectCustomEndpoint">developerConnectCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.dialogflowCustomEndpoint">dialogflowCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.dialogflowCxCustomEndpoint">dialogflowCxCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.discoveryEngineCustomEndpoint">discoveryEngineCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.dnsCustomEndpoint">dnsCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.documentAiCustomEndpoint">documentAiCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.documentAiWarehouseCustomEndpoint">documentAiWarehouseCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.edgecontainerCustomEndpoint">edgecontainerCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.edgenetworkCustomEndpoint">edgenetworkCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.essentialContactsCustomEndpoint">essentialContactsCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.eventarcCustomEndpoint">eventarcCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.externalCredentials">externalCredentials</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.provider.GoogleProviderExternalCredentials">GoogleProviderExternalCredentials</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.filestoreCustomEndpoint">filestoreCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.firebaseAppCheckCustomEndpoint">firebaseAppCheckCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.firebaseAppHostingCustomEndpoint">firebaseAppHostingCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.firebaseDataConnectCustomEndpoint">firebaseDataConnectCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.firebaseRemoteConfigCustomEndpoint">firebaseRemoteConfigCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.firebaserulesCustomEndpoint">firebaserulesCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.firestoreCustomEndpoint">firestoreCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.geminiCustomEndpoint">geminiCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.gkeBackupCustomEndpoint">gkeBackupCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.gkeHub2CustomEndpoint">gkeHub2CustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.gkeHubCustomEndpoint">gkeHubCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.gkeonpremCustomEndpoint">gkeonpremCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.healthcareCustomEndpoint">healthcareCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.hypercomputeclusterCustomEndpoint">hypercomputeclusterCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.iam2CustomEndpoint">iam2CustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.iam3CustomEndpoint">iam3CustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.iamBetaCustomEndpoint">iamBetaCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.iamCredentialsCustomEndpoint">iamCredentialsCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.iamCustomEndpoint">iamCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.iamWorkforcePoolCustomEndpoint">iamWorkforcePoolCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.iapCustomEndpoint">iapCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.identityPlatformCustomEndpoint">identityPlatformCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.impersonateServiceAccount">impersonateServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.impersonateServiceAccountDelegates">impersonateServiceAccountDelegates</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.integrationConnectorsCustomEndpoint">integrationConnectorsCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.integrationsCustomEndpoint">integrationsCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.kmsCustomEndpoint">kmsCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.licenseManagerCustomEndpoint">licenseManagerCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.loggingCustomEndpoint">loggingCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.lookerCustomEndpoint">lookerCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.lustreCustomEndpoint">lustreCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.managedKafkaCustomEndpoint">managedKafkaCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.memcacheCustomEndpoint">memcacheCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.memorystoreCustomEndpoint">memorystoreCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.migrationCenterCustomEndpoint">migrationCenterCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.mlEngineCustomEndpoint">mlEngineCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.modelArmorCustomEndpoint">modelArmorCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.modelArmorGlobalCustomEndpoint">modelArmorGlobalCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.monitoringCustomEndpoint">monitoringCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.netappCustomEndpoint">netappCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.networkConnectivityCustomEndpoint">networkConnectivityCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.networkConnectivityv1CustomEndpoint">networkConnectivityv1CustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.networkManagementCustomEndpoint">networkManagementCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.networkSecurityCustomEndpoint">networkSecurityCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.networkServicesCustomEndpoint">networkServicesCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.notebooksCustomEndpoint">notebooksCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.observabilityCustomEndpoint">observabilityCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.oracleDatabaseCustomEndpoint">oracleDatabaseCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.orgPolicyCustomEndpoint">orgPolicyCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.osConfigCustomEndpoint">osConfigCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.osConfigV2CustomEndpoint">osConfigV2CustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.osLoginCustomEndpoint">osLoginCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.parallelstoreCustomEndpoint">parallelstoreCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.parameterManagerCustomEndpoint">parameterManagerCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.parameterManagerRegionalCustomEndpoint">parameterManagerRegionalCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.pollInterval">pollInterval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.preferGlobalEndpoints">preferGlobalEndpoints</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.preferRegionalEndpoints">preferRegionalEndpoints</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.privatecaCustomEndpoint">privatecaCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.privilegedAccessManagerCustomEndpoint">privilegedAccessManagerCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.publicCaCustomEndpoint">publicCaCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.pubsubCustomEndpoint">pubsubCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.pubsubLiteCustomEndpoint">pubsubLiteCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.recaptchaEnterpriseCustomEndpoint">recaptchaEnterpriseCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.redisCustomEndpoint">redisCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.requestReason">requestReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.requestTimeout">requestTimeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.resourceManager3CustomEndpoint">resourceManager3CustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.resourceManagerCustomEndpoint">resourceManagerCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.resourceManagerV3CustomEndpoint">resourceManagerV3CustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.scopes">scopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.secretManagerCustomEndpoint">secretManagerCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.secretManagerRegionalCustomEndpoint">secretManagerRegionalCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.secureSourceManagerCustomEndpoint">secureSourceManagerCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.securityCenterCustomEndpoint">securityCenterCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.securityCenterManagementCustomEndpoint">securityCenterManagementCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.securityCenterV2CustomEndpoint">securityCenterV2CustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.securitypostureCustomEndpoint">securitypostureCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.serviceDirectoryCustomEndpoint">serviceDirectoryCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.serviceManagementCustomEndpoint">serviceManagementCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.serviceNetworkingCustomEndpoint">serviceNetworkingCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.serviceUsageCustomEndpoint">serviceUsageCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.siteVerificationCustomEndpoint">siteVerificationCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.sourceRepoCustomEndpoint">sourceRepoCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.spannerCustomEndpoint">spannerCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.sqlCustomEndpoint">sqlCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.storageBatchOperationsCustomEndpoint">storageBatchOperationsCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.storageControlCustomEndpoint">storageControlCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.storageCustomEndpoint">storageCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.storageInsightsCustomEndpoint">storageInsightsCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.storageTransferCustomEndpoint">storageTransferCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.tagsCustomEndpoint">tagsCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.tagsLocationCustomEndpoint">tagsLocationCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.terraformAttributionLabelAdditionStrategy">terraformAttributionLabelAdditionStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.transcoderCustomEndpoint">transcoderCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.universeDomain">universeDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.userProjectOverride">userProjectOverride</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.vectorSearchCustomEndpoint">vectorSearchCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.vertexAiCustomEndpoint">vertexAiCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.vmwareengineCustomEndpoint">vmwareengineCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.vpcAccessCustomEndpoint">vpcAccessCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.workbenchCustomEndpoint">workbenchCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.workflowsCustomEndpoint">workflowsCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.workloadIdentityCustomEndpoint">workloadIdentityCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.workstationsCustomEndpoint">workstationsCustomEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.zone">zone</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.provider.GoogleProvider.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.provider.GoogleProvider.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.provider.GoogleProvider.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.provider.GoogleProvider.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `metaAttributes`<sup>Required</sup> <a name="metaAttributes" id="@cdktn/provider-google.provider.GoogleProvider.property.metaAttributes"></a>

```typescript
public readonly metaAttributes: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.provider.GoogleProvider.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.provider.GoogleProvider.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `terraformProviderSource`<sup>Optional</sup> <a name="terraformProviderSource" id="@cdktn/provider-google.provider.GoogleProvider.property.terraformProviderSource"></a>

```typescript
public readonly terraformProviderSource: string;
```

- *Type:* string

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktn/provider-google.provider.GoogleProvider.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `accessApprovalCustomEndpointInput`<sup>Optional</sup> <a name="accessApprovalCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.accessApprovalCustomEndpointInput"></a>

```typescript
public readonly accessApprovalCustomEndpointInput: string;
```

- *Type:* string

---

##### `accessContextManagerCustomEndpointInput`<sup>Optional</sup> <a name="accessContextManagerCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.accessContextManagerCustomEndpointInput"></a>

```typescript
public readonly accessContextManagerCustomEndpointInput: string;
```

- *Type:* string

---

##### `accessTokenInput`<sup>Optional</sup> <a name="accessTokenInput" id="@cdktn/provider-google.provider.GoogleProvider.property.accessTokenInput"></a>

```typescript
public readonly accessTokenInput: string;
```

- *Type:* string

---

##### `activeDirectoryCustomEndpointInput`<sup>Optional</sup> <a name="activeDirectoryCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.activeDirectoryCustomEndpointInput"></a>

```typescript
public readonly activeDirectoryCustomEndpointInput: string;
```

- *Type:* string

---

##### `addTerraformAttributionLabelInput`<sup>Optional</sup> <a name="addTerraformAttributionLabelInput" id="@cdktn/provider-google.provider.GoogleProvider.property.addTerraformAttributionLabelInput"></a>

```typescript
public readonly addTerraformAttributionLabelInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `agentRegistryCustomEndpointInput`<sup>Optional</sup> <a name="agentRegistryCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.agentRegistryCustomEndpointInput"></a>

```typescript
public readonly agentRegistryCustomEndpointInput: string;
```

- *Type:* string

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktn/provider-google.provider.GoogleProvider.property.aliasInput"></a>

```typescript
public readonly aliasInput: string;
```

- *Type:* string

---

##### `alloydbCustomEndpointInput`<sup>Optional</sup> <a name="alloydbCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.alloydbCustomEndpointInput"></a>

```typescript
public readonly alloydbCustomEndpointInput: string;
```

- *Type:* string

---

##### `apigeeCustomEndpointInput`<sup>Optional</sup> <a name="apigeeCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.apigeeCustomEndpointInput"></a>

```typescript
public readonly apigeeCustomEndpointInput: string;
```

- *Type:* string

---

##### `apihubCustomEndpointInput`<sup>Optional</sup> <a name="apihubCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.apihubCustomEndpointInput"></a>

```typescript
public readonly apihubCustomEndpointInput: string;
```

- *Type:* string

---

##### `apikeysCustomEndpointInput`<sup>Optional</sup> <a name="apikeysCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.apikeysCustomEndpointInput"></a>

```typescript
public readonly apikeysCustomEndpointInput: string;
```

- *Type:* string

---

##### `appEngineCustomEndpointInput`<sup>Optional</sup> <a name="appEngineCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.appEngineCustomEndpointInput"></a>

```typescript
public readonly appEngineCustomEndpointInput: string;
```

- *Type:* string

---

##### `apphubCustomEndpointInput`<sup>Optional</sup> <a name="apphubCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.apphubCustomEndpointInput"></a>

```typescript
public readonly apphubCustomEndpointInput: string;
```

- *Type:* string

---

##### `artifactRegistryCustomEndpointInput`<sup>Optional</sup> <a name="artifactRegistryCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.artifactRegistryCustomEndpointInput"></a>

```typescript
public readonly artifactRegistryCustomEndpointInput: string;
```

- *Type:* string

---

##### `assuredWorkloadsCustomEndpointInput`<sup>Optional</sup> <a name="assuredWorkloadsCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.assuredWorkloadsCustomEndpointInput"></a>

```typescript
public readonly assuredWorkloadsCustomEndpointInput: string;
```

- *Type:* string

---

##### `backupDrCustomEndpointInput`<sup>Optional</sup> <a name="backupDrCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.backupDrCustomEndpointInput"></a>

```typescript
public readonly backupDrCustomEndpointInput: string;
```

- *Type:* string

---

##### `batchingInput`<sup>Optional</sup> <a name="batchingInput" id="@cdktn/provider-google.provider.GoogleProvider.property.batchingInput"></a>

```typescript
public readonly batchingInput: IResolvable | GoogleProviderBatching[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.provider.GoogleProviderBatching">GoogleProviderBatching</a>[]

---

##### `beyondcorpCustomEndpointInput`<sup>Optional</sup> <a name="beyondcorpCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.beyondcorpCustomEndpointInput"></a>

```typescript
public readonly beyondcorpCustomEndpointInput: string;
```

- *Type:* string

---

##### `biglakeCustomEndpointInput`<sup>Optional</sup> <a name="biglakeCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.biglakeCustomEndpointInput"></a>

```typescript
public readonly biglakeCustomEndpointInput: string;
```

- *Type:* string

---

##### `biglakeHiveCustomEndpointInput`<sup>Optional</sup> <a name="biglakeHiveCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.biglakeHiveCustomEndpointInput"></a>

```typescript
public readonly biglakeHiveCustomEndpointInput: string;
```

- *Type:* string

---

##### `biglakeIcebergCustomEndpointInput`<sup>Optional</sup> <a name="biglakeIcebergCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.biglakeIcebergCustomEndpointInput"></a>

```typescript
public readonly biglakeIcebergCustomEndpointInput: string;
```

- *Type:* string

---

##### `bigqueryAnalyticsHubCustomEndpointInput`<sup>Optional</sup> <a name="bigqueryAnalyticsHubCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.bigqueryAnalyticsHubCustomEndpointInput"></a>

```typescript
public readonly bigqueryAnalyticsHubCustomEndpointInput: string;
```

- *Type:* string

---

##### `bigqueryConnectionCustomEndpointInput`<sup>Optional</sup> <a name="bigqueryConnectionCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.bigqueryConnectionCustomEndpointInput"></a>

```typescript
public readonly bigqueryConnectionCustomEndpointInput: string;
```

- *Type:* string

---

##### `bigQueryCustomEndpointInput`<sup>Optional</sup> <a name="bigQueryCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.bigQueryCustomEndpointInput"></a>

```typescript
public readonly bigQueryCustomEndpointInput: string;
```

- *Type:* string

---

##### `bigqueryDatapolicyCustomEndpointInput`<sup>Optional</sup> <a name="bigqueryDatapolicyCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.bigqueryDatapolicyCustomEndpointInput"></a>

```typescript
public readonly bigqueryDatapolicyCustomEndpointInput: string;
```

- *Type:* string

---

##### `bigqueryDatapolicyv2CustomEndpointInput`<sup>Optional</sup> <a name="bigqueryDatapolicyv2CustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.bigqueryDatapolicyv2CustomEndpointInput"></a>

```typescript
public readonly bigqueryDatapolicyv2CustomEndpointInput: string;
```

- *Type:* string

---

##### `bigqueryDataTransferCustomEndpointInput`<sup>Optional</sup> <a name="bigqueryDataTransferCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.bigqueryDataTransferCustomEndpointInput"></a>

```typescript
public readonly bigqueryDataTransferCustomEndpointInput: string;
```

- *Type:* string

---

##### `bigqueryReservationCustomEndpointInput`<sup>Optional</sup> <a name="bigqueryReservationCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.bigqueryReservationCustomEndpointInput"></a>

```typescript
public readonly bigqueryReservationCustomEndpointInput: string;
```

- *Type:* string

---

##### `bigtableCustomEndpointInput`<sup>Optional</sup> <a name="bigtableCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.bigtableCustomEndpointInput"></a>

```typescript
public readonly bigtableCustomEndpointInput: string;
```

- *Type:* string

---

##### `billingBudgetsCustomEndpointInput`<sup>Optional</sup> <a name="billingBudgetsCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.billingBudgetsCustomEndpointInput"></a>

```typescript
public readonly billingBudgetsCustomEndpointInput: string;
```

- *Type:* string

---

##### `billingCustomEndpointInput`<sup>Optional</sup> <a name="billingCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.billingCustomEndpointInput"></a>

```typescript
public readonly billingCustomEndpointInput: string;
```

- *Type:* string

---

##### `billingProjectInput`<sup>Optional</sup> <a name="billingProjectInput" id="@cdktn/provider-google.provider.GoogleProvider.property.billingProjectInput"></a>

```typescript
public readonly billingProjectInput: string;
```

- *Type:* string

---

##### `binaryAuthorizationCustomEndpointInput`<sup>Optional</sup> <a name="binaryAuthorizationCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.binaryAuthorizationCustomEndpointInput"></a>

```typescript
public readonly binaryAuthorizationCustomEndpointInput: string;
```

- *Type:* string

---

##### `blockchainNodeEngineCustomEndpointInput`<sup>Optional</sup> <a name="blockchainNodeEngineCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.blockchainNodeEngineCustomEndpointInput"></a>

```typescript
public readonly blockchainNodeEngineCustomEndpointInput: string;
```

- *Type:* string

---

##### `certificateManagerCustomEndpointInput`<sup>Optional</sup> <a name="certificateManagerCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.certificateManagerCustomEndpointInput"></a>

```typescript
public readonly certificateManagerCustomEndpointInput: string;
```

- *Type:* string

---

##### `cesCustomEndpointInput`<sup>Optional</sup> <a name="cesCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.cesCustomEndpointInput"></a>

```typescript
public readonly cesCustomEndpointInput: string;
```

- *Type:* string

---

##### `chronicleCustomEndpointInput`<sup>Optional</sup> <a name="chronicleCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.chronicleCustomEndpointInput"></a>

```typescript
public readonly chronicleCustomEndpointInput: string;
```

- *Type:* string

---

##### `cloudAssetCustomEndpointInput`<sup>Optional</sup> <a name="cloudAssetCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.cloudAssetCustomEndpointInput"></a>

```typescript
public readonly cloudAssetCustomEndpointInput: string;
```

- *Type:* string

---

##### `cloudBillingCustomEndpointInput`<sup>Optional</sup> <a name="cloudBillingCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.cloudBillingCustomEndpointInput"></a>

```typescript
public readonly cloudBillingCustomEndpointInput: string;
```

- *Type:* string

---

##### `cloudBuildCustomEndpointInput`<sup>Optional</sup> <a name="cloudBuildCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.cloudBuildCustomEndpointInput"></a>

```typescript
public readonly cloudBuildCustomEndpointInput: string;
```

- *Type:* string

---

##### `cloudbuildv2CustomEndpointInput`<sup>Optional</sup> <a name="cloudbuildv2CustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.cloudbuildv2CustomEndpointInput"></a>

```typescript
public readonly cloudbuildv2CustomEndpointInput: string;
```

- *Type:* string

---

##### `clouddeployCustomEndpointInput`<sup>Optional</sup> <a name="clouddeployCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.clouddeployCustomEndpointInput"></a>

```typescript
public readonly clouddeployCustomEndpointInput: string;
```

- *Type:* string

---

##### `clouddomainsCustomEndpointInput`<sup>Optional</sup> <a name="clouddomainsCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.clouddomainsCustomEndpointInput"></a>

```typescript
public readonly clouddomainsCustomEndpointInput: string;
```

- *Type:* string

---

##### `cloudfunctions2CustomEndpointInput`<sup>Optional</sup> <a name="cloudfunctions2CustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.cloudfunctions2CustomEndpointInput"></a>

```typescript
public readonly cloudfunctions2CustomEndpointInput: string;
```

- *Type:* string

---

##### `cloudFunctionsCustomEndpointInput`<sup>Optional</sup> <a name="cloudFunctionsCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.cloudFunctionsCustomEndpointInput"></a>

```typescript
public readonly cloudFunctionsCustomEndpointInput: string;
```

- *Type:* string

---

##### `cloudIdentityCustomEndpointInput`<sup>Optional</sup> <a name="cloudIdentityCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.cloudIdentityCustomEndpointInput"></a>

```typescript
public readonly cloudIdentityCustomEndpointInput: string;
```

- *Type:* string

---

##### `cloudIdsCustomEndpointInput`<sup>Optional</sup> <a name="cloudIdsCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.cloudIdsCustomEndpointInput"></a>

```typescript
public readonly cloudIdsCustomEndpointInput: string;
```

- *Type:* string

---

##### `cloudQuotasCustomEndpointInput`<sup>Optional</sup> <a name="cloudQuotasCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.cloudQuotasCustomEndpointInput"></a>

```typescript
public readonly cloudQuotasCustomEndpointInput: string;
```

- *Type:* string

---

##### `cloudResourceManagerCustomEndpointInput`<sup>Optional</sup> <a name="cloudResourceManagerCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.cloudResourceManagerCustomEndpointInput"></a>

```typescript
public readonly cloudResourceManagerCustomEndpointInput: string;
```

- *Type:* string

---

##### `cloudRunCustomEndpointInput`<sup>Optional</sup> <a name="cloudRunCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.cloudRunCustomEndpointInput"></a>

```typescript
public readonly cloudRunCustomEndpointInput: string;
```

- *Type:* string

---

##### `cloudRunV2CustomEndpointInput`<sup>Optional</sup> <a name="cloudRunV2CustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.cloudRunV2CustomEndpointInput"></a>

```typescript
public readonly cloudRunV2CustomEndpointInput: string;
```

- *Type:* string

---

##### `cloudSchedulerCustomEndpointInput`<sup>Optional</sup> <a name="cloudSchedulerCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.cloudSchedulerCustomEndpointInput"></a>

```typescript
public readonly cloudSchedulerCustomEndpointInput: string;
```

- *Type:* string

---

##### `cloudSecurityComplianceCustomEndpointInput`<sup>Optional</sup> <a name="cloudSecurityComplianceCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.cloudSecurityComplianceCustomEndpointInput"></a>

```typescript
public readonly cloudSecurityComplianceCustomEndpointInput: string;
```

- *Type:* string

---

##### `cloudTasksCustomEndpointInput`<sup>Optional</sup> <a name="cloudTasksCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.cloudTasksCustomEndpointInput"></a>

```typescript
public readonly cloudTasksCustomEndpointInput: string;
```

- *Type:* string

---

##### `colabCustomEndpointInput`<sup>Optional</sup> <a name="colabCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.colabCustomEndpointInput"></a>

```typescript
public readonly colabCustomEndpointInput: string;
```

- *Type:* string

---

##### `composerCustomEndpointInput`<sup>Optional</sup> <a name="composerCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.composerCustomEndpointInput"></a>

```typescript
public readonly composerCustomEndpointInput: string;
```

- *Type:* string

---

##### `computeCustomEndpointInput`<sup>Optional</sup> <a name="computeCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.computeCustomEndpointInput"></a>

```typescript
public readonly computeCustomEndpointInput: string;
```

- *Type:* string

---

##### `configCustomEndpointInput`<sup>Optional</sup> <a name="configCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.configCustomEndpointInput"></a>

```typescript
public readonly configCustomEndpointInput: string;
```

- *Type:* string

---

##### `contactCenterInsightsCustomEndpointInput`<sup>Optional</sup> <a name="contactCenterInsightsCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.contactCenterInsightsCustomEndpointInput"></a>

```typescript
public readonly contactCenterInsightsCustomEndpointInput: string;
```

- *Type:* string

---

##### `containerAnalysisCustomEndpointInput`<sup>Optional</sup> <a name="containerAnalysisCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.containerAnalysisCustomEndpointInput"></a>

```typescript
public readonly containerAnalysisCustomEndpointInput: string;
```

- *Type:* string

---

##### `containerAttachedCustomEndpointInput`<sup>Optional</sup> <a name="containerAttachedCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.containerAttachedCustomEndpointInput"></a>

```typescript
public readonly containerAttachedCustomEndpointInput: string;
```

- *Type:* string

---

##### `containerAwsCustomEndpointInput`<sup>Optional</sup> <a name="containerAwsCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.containerAwsCustomEndpointInput"></a>

```typescript
public readonly containerAwsCustomEndpointInput: string;
```

- *Type:* string

---

##### `containerAzureCustomEndpointInput`<sup>Optional</sup> <a name="containerAzureCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.containerAzureCustomEndpointInput"></a>

```typescript
public readonly containerAzureCustomEndpointInput: string;
```

- *Type:* string

---

##### `containerCustomEndpointInput`<sup>Optional</sup> <a name="containerCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.containerCustomEndpointInput"></a>

```typescript
public readonly containerCustomEndpointInput: string;
```

- *Type:* string

---

##### `coreBillingCustomEndpointInput`<sup>Optional</sup> <a name="coreBillingCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.coreBillingCustomEndpointInput"></a>

```typescript
public readonly coreBillingCustomEndpointInput: string;
```

- *Type:* string

---

##### `credentialsInput`<sup>Optional</sup> <a name="credentialsInput" id="@cdktn/provider-google.provider.GoogleProvider.property.credentialsInput"></a>

```typescript
public readonly credentialsInput: string;
```

- *Type:* string

---

##### `databaseMigrationServiceCustomEndpointInput`<sup>Optional</sup> <a name="databaseMigrationServiceCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.databaseMigrationServiceCustomEndpointInput"></a>

```typescript
public readonly databaseMigrationServiceCustomEndpointInput: string;
```

- *Type:* string

---

##### `dataCatalogCustomEndpointInput`<sup>Optional</sup> <a name="dataCatalogCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.dataCatalogCustomEndpointInput"></a>

```typescript
public readonly dataCatalogCustomEndpointInput: string;
```

- *Type:* string

---

##### `dataflowCustomEndpointInput`<sup>Optional</sup> <a name="dataflowCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.dataflowCustomEndpointInput"></a>

```typescript
public readonly dataflowCustomEndpointInput: string;
```

- *Type:* string

---

##### `dataformCustomEndpointInput`<sup>Optional</sup> <a name="dataformCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.dataformCustomEndpointInput"></a>

```typescript
public readonly dataformCustomEndpointInput: string;
```

- *Type:* string

---

##### `dataFusionCustomEndpointInput`<sup>Optional</sup> <a name="dataFusionCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.dataFusionCustomEndpointInput"></a>

```typescript
public readonly dataFusionCustomEndpointInput: string;
```

- *Type:* string

---

##### `dataLineageCustomEndpointInput`<sup>Optional</sup> <a name="dataLineageCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.dataLineageCustomEndpointInput"></a>

```typescript
public readonly dataLineageCustomEndpointInput: string;
```

- *Type:* string

---

##### `dataLossPreventionCustomEndpointInput`<sup>Optional</sup> <a name="dataLossPreventionCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.dataLossPreventionCustomEndpointInput"></a>

```typescript
public readonly dataLossPreventionCustomEndpointInput: string;
```

- *Type:* string

---

##### `dataPipelineCustomEndpointInput`<sup>Optional</sup> <a name="dataPipelineCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.dataPipelineCustomEndpointInput"></a>

```typescript
public readonly dataPipelineCustomEndpointInput: string;
```

- *Type:* string

---

##### `dataplexCustomEndpointInput`<sup>Optional</sup> <a name="dataplexCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.dataplexCustomEndpointInput"></a>

```typescript
public readonly dataplexCustomEndpointInput: string;
```

- *Type:* string

---

##### `dataprocCustomEndpointInput`<sup>Optional</sup> <a name="dataprocCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.dataprocCustomEndpointInput"></a>

```typescript
public readonly dataprocCustomEndpointInput: string;
```

- *Type:* string

---

##### `dataprocGdcCustomEndpointInput`<sup>Optional</sup> <a name="dataprocGdcCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.dataprocGdcCustomEndpointInput"></a>

```typescript
public readonly dataprocGdcCustomEndpointInput: string;
```

- *Type:* string

---

##### `dataprocMetastoreCustomEndpointInput`<sup>Optional</sup> <a name="dataprocMetastoreCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.dataprocMetastoreCustomEndpointInput"></a>

```typescript
public readonly dataprocMetastoreCustomEndpointInput: string;
```

- *Type:* string

---

##### `datastreamCustomEndpointInput`<sup>Optional</sup> <a name="datastreamCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.datastreamCustomEndpointInput"></a>

```typescript
public readonly datastreamCustomEndpointInput: string;
```

- *Type:* string

---

##### `defaultLabelsInput`<sup>Optional</sup> <a name="defaultLabelsInput" id="@cdktn/provider-google.provider.GoogleProvider.property.defaultLabelsInput"></a>

```typescript
public readonly defaultLabelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.provider.GoogleProvider.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `deploymentManagerCustomEndpointInput`<sup>Optional</sup> <a name="deploymentManagerCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.deploymentManagerCustomEndpointInput"></a>

```typescript
public readonly deploymentManagerCustomEndpointInput: string;
```

- *Type:* string

---

##### `developerConnectCustomEndpointInput`<sup>Optional</sup> <a name="developerConnectCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.developerConnectCustomEndpointInput"></a>

```typescript
public readonly developerConnectCustomEndpointInput: string;
```

- *Type:* string

---

##### `dialogflowCustomEndpointInput`<sup>Optional</sup> <a name="dialogflowCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.dialogflowCustomEndpointInput"></a>

```typescript
public readonly dialogflowCustomEndpointInput: string;
```

- *Type:* string

---

##### `dialogflowCxCustomEndpointInput`<sup>Optional</sup> <a name="dialogflowCxCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.dialogflowCxCustomEndpointInput"></a>

```typescript
public readonly dialogflowCxCustomEndpointInput: string;
```

- *Type:* string

---

##### `discoveryEngineCustomEndpointInput`<sup>Optional</sup> <a name="discoveryEngineCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.discoveryEngineCustomEndpointInput"></a>

```typescript
public readonly discoveryEngineCustomEndpointInput: string;
```

- *Type:* string

---

##### `dnsCustomEndpointInput`<sup>Optional</sup> <a name="dnsCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.dnsCustomEndpointInput"></a>

```typescript
public readonly dnsCustomEndpointInput: string;
```

- *Type:* string

---

##### `documentAiCustomEndpointInput`<sup>Optional</sup> <a name="documentAiCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.documentAiCustomEndpointInput"></a>

```typescript
public readonly documentAiCustomEndpointInput: string;
```

- *Type:* string

---

##### `documentAiWarehouseCustomEndpointInput`<sup>Optional</sup> <a name="documentAiWarehouseCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.documentAiWarehouseCustomEndpointInput"></a>

```typescript
public readonly documentAiWarehouseCustomEndpointInput: string;
```

- *Type:* string

---

##### `edgecontainerCustomEndpointInput`<sup>Optional</sup> <a name="edgecontainerCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.edgecontainerCustomEndpointInput"></a>

```typescript
public readonly edgecontainerCustomEndpointInput: string;
```

- *Type:* string

---

##### `edgenetworkCustomEndpointInput`<sup>Optional</sup> <a name="edgenetworkCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.edgenetworkCustomEndpointInput"></a>

```typescript
public readonly edgenetworkCustomEndpointInput: string;
```

- *Type:* string

---

##### `essentialContactsCustomEndpointInput`<sup>Optional</sup> <a name="essentialContactsCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.essentialContactsCustomEndpointInput"></a>

```typescript
public readonly essentialContactsCustomEndpointInput: string;
```

- *Type:* string

---

##### `eventarcCustomEndpointInput`<sup>Optional</sup> <a name="eventarcCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.eventarcCustomEndpointInput"></a>

```typescript
public readonly eventarcCustomEndpointInput: string;
```

- *Type:* string

---

##### `externalCredentialsInput`<sup>Optional</sup> <a name="externalCredentialsInput" id="@cdktn/provider-google.provider.GoogleProvider.property.externalCredentialsInput"></a>

```typescript
public readonly externalCredentialsInput: IResolvable | GoogleProviderExternalCredentials[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.provider.GoogleProviderExternalCredentials">GoogleProviderExternalCredentials</a>[]

---

##### `filestoreCustomEndpointInput`<sup>Optional</sup> <a name="filestoreCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.filestoreCustomEndpointInput"></a>

```typescript
public readonly filestoreCustomEndpointInput: string;
```

- *Type:* string

---

##### `firebaseAppCheckCustomEndpointInput`<sup>Optional</sup> <a name="firebaseAppCheckCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.firebaseAppCheckCustomEndpointInput"></a>

```typescript
public readonly firebaseAppCheckCustomEndpointInput: string;
```

- *Type:* string

---

##### `firebaseAppHostingCustomEndpointInput`<sup>Optional</sup> <a name="firebaseAppHostingCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.firebaseAppHostingCustomEndpointInput"></a>

```typescript
public readonly firebaseAppHostingCustomEndpointInput: string;
```

- *Type:* string

---

##### `firebaseDataConnectCustomEndpointInput`<sup>Optional</sup> <a name="firebaseDataConnectCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.firebaseDataConnectCustomEndpointInput"></a>

```typescript
public readonly firebaseDataConnectCustomEndpointInput: string;
```

- *Type:* string

---

##### `firebaseRemoteConfigCustomEndpointInput`<sup>Optional</sup> <a name="firebaseRemoteConfigCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.firebaseRemoteConfigCustomEndpointInput"></a>

```typescript
public readonly firebaseRemoteConfigCustomEndpointInput: string;
```

- *Type:* string

---

##### `firebaserulesCustomEndpointInput`<sup>Optional</sup> <a name="firebaserulesCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.firebaserulesCustomEndpointInput"></a>

```typescript
public readonly firebaserulesCustomEndpointInput: string;
```

- *Type:* string

---

##### `firestoreCustomEndpointInput`<sup>Optional</sup> <a name="firestoreCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.firestoreCustomEndpointInput"></a>

```typescript
public readonly firestoreCustomEndpointInput: string;
```

- *Type:* string

---

##### `geminiCustomEndpointInput`<sup>Optional</sup> <a name="geminiCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.geminiCustomEndpointInput"></a>

```typescript
public readonly geminiCustomEndpointInput: string;
```

- *Type:* string

---

##### `gkeBackupCustomEndpointInput`<sup>Optional</sup> <a name="gkeBackupCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.gkeBackupCustomEndpointInput"></a>

```typescript
public readonly gkeBackupCustomEndpointInput: string;
```

- *Type:* string

---

##### `gkeHub2CustomEndpointInput`<sup>Optional</sup> <a name="gkeHub2CustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.gkeHub2CustomEndpointInput"></a>

```typescript
public readonly gkeHub2CustomEndpointInput: string;
```

- *Type:* string

---

##### `gkeHubCustomEndpointInput`<sup>Optional</sup> <a name="gkeHubCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.gkeHubCustomEndpointInput"></a>

```typescript
public readonly gkeHubCustomEndpointInput: string;
```

- *Type:* string

---

##### `gkeonpremCustomEndpointInput`<sup>Optional</sup> <a name="gkeonpremCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.gkeonpremCustomEndpointInput"></a>

```typescript
public readonly gkeonpremCustomEndpointInput: string;
```

- *Type:* string

---

##### `healthcareCustomEndpointInput`<sup>Optional</sup> <a name="healthcareCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.healthcareCustomEndpointInput"></a>

```typescript
public readonly healthcareCustomEndpointInput: string;
```

- *Type:* string

---

##### `hypercomputeclusterCustomEndpointInput`<sup>Optional</sup> <a name="hypercomputeclusterCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.hypercomputeclusterCustomEndpointInput"></a>

```typescript
public readonly hypercomputeclusterCustomEndpointInput: string;
```

- *Type:* string

---

##### `iam2CustomEndpointInput`<sup>Optional</sup> <a name="iam2CustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.iam2CustomEndpointInput"></a>

```typescript
public readonly iam2CustomEndpointInput: string;
```

- *Type:* string

---

##### `iam3CustomEndpointInput`<sup>Optional</sup> <a name="iam3CustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.iam3CustomEndpointInput"></a>

```typescript
public readonly iam3CustomEndpointInput: string;
```

- *Type:* string

---

##### `iamBetaCustomEndpointInput`<sup>Optional</sup> <a name="iamBetaCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.iamBetaCustomEndpointInput"></a>

```typescript
public readonly iamBetaCustomEndpointInput: string;
```

- *Type:* string

---

##### `iamCredentialsCustomEndpointInput`<sup>Optional</sup> <a name="iamCredentialsCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.iamCredentialsCustomEndpointInput"></a>

```typescript
public readonly iamCredentialsCustomEndpointInput: string;
```

- *Type:* string

---

##### `iamCustomEndpointInput`<sup>Optional</sup> <a name="iamCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.iamCustomEndpointInput"></a>

```typescript
public readonly iamCustomEndpointInput: string;
```

- *Type:* string

---

##### `iamWorkforcePoolCustomEndpointInput`<sup>Optional</sup> <a name="iamWorkforcePoolCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.iamWorkforcePoolCustomEndpointInput"></a>

```typescript
public readonly iamWorkforcePoolCustomEndpointInput: string;
```

- *Type:* string

---

##### `iapCustomEndpointInput`<sup>Optional</sup> <a name="iapCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.iapCustomEndpointInput"></a>

```typescript
public readonly iapCustomEndpointInput: string;
```

- *Type:* string

---

##### `identityPlatformCustomEndpointInput`<sup>Optional</sup> <a name="identityPlatformCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.identityPlatformCustomEndpointInput"></a>

```typescript
public readonly identityPlatformCustomEndpointInput: string;
```

- *Type:* string

---

##### `impersonateServiceAccountDelegatesInput`<sup>Optional</sup> <a name="impersonateServiceAccountDelegatesInput" id="@cdktn/provider-google.provider.GoogleProvider.property.impersonateServiceAccountDelegatesInput"></a>

```typescript
public readonly impersonateServiceAccountDelegatesInput: string[];
```

- *Type:* string[]

---

##### `impersonateServiceAccountInput`<sup>Optional</sup> <a name="impersonateServiceAccountInput" id="@cdktn/provider-google.provider.GoogleProvider.property.impersonateServiceAccountInput"></a>

```typescript
public readonly impersonateServiceAccountInput: string;
```

- *Type:* string

---

##### `integrationConnectorsCustomEndpointInput`<sup>Optional</sup> <a name="integrationConnectorsCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.integrationConnectorsCustomEndpointInput"></a>

```typescript
public readonly integrationConnectorsCustomEndpointInput: string;
```

- *Type:* string

---

##### `integrationsCustomEndpointInput`<sup>Optional</sup> <a name="integrationsCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.integrationsCustomEndpointInput"></a>

```typescript
public readonly integrationsCustomEndpointInput: string;
```

- *Type:* string

---

##### `kmsCustomEndpointInput`<sup>Optional</sup> <a name="kmsCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.kmsCustomEndpointInput"></a>

```typescript
public readonly kmsCustomEndpointInput: string;
```

- *Type:* string

---

##### `licenseManagerCustomEndpointInput`<sup>Optional</sup> <a name="licenseManagerCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.licenseManagerCustomEndpointInput"></a>

```typescript
public readonly licenseManagerCustomEndpointInput: string;
```

- *Type:* string

---

##### `loggingCustomEndpointInput`<sup>Optional</sup> <a name="loggingCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.loggingCustomEndpointInput"></a>

```typescript
public readonly loggingCustomEndpointInput: string;
```

- *Type:* string

---

##### `lookerCustomEndpointInput`<sup>Optional</sup> <a name="lookerCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.lookerCustomEndpointInput"></a>

```typescript
public readonly lookerCustomEndpointInput: string;
```

- *Type:* string

---

##### `lustreCustomEndpointInput`<sup>Optional</sup> <a name="lustreCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.lustreCustomEndpointInput"></a>

```typescript
public readonly lustreCustomEndpointInput: string;
```

- *Type:* string

---

##### `managedKafkaCustomEndpointInput`<sup>Optional</sup> <a name="managedKafkaCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.managedKafkaCustomEndpointInput"></a>

```typescript
public readonly managedKafkaCustomEndpointInput: string;
```

- *Type:* string

---

##### `memcacheCustomEndpointInput`<sup>Optional</sup> <a name="memcacheCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.memcacheCustomEndpointInput"></a>

```typescript
public readonly memcacheCustomEndpointInput: string;
```

- *Type:* string

---

##### `memorystoreCustomEndpointInput`<sup>Optional</sup> <a name="memorystoreCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.memorystoreCustomEndpointInput"></a>

```typescript
public readonly memorystoreCustomEndpointInput: string;
```

- *Type:* string

---

##### `migrationCenterCustomEndpointInput`<sup>Optional</sup> <a name="migrationCenterCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.migrationCenterCustomEndpointInput"></a>

```typescript
public readonly migrationCenterCustomEndpointInput: string;
```

- *Type:* string

---

##### `mlEngineCustomEndpointInput`<sup>Optional</sup> <a name="mlEngineCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.mlEngineCustomEndpointInput"></a>

```typescript
public readonly mlEngineCustomEndpointInput: string;
```

- *Type:* string

---

##### `modelArmorCustomEndpointInput`<sup>Optional</sup> <a name="modelArmorCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.modelArmorCustomEndpointInput"></a>

```typescript
public readonly modelArmorCustomEndpointInput: string;
```

- *Type:* string

---

##### `modelArmorGlobalCustomEndpointInput`<sup>Optional</sup> <a name="modelArmorGlobalCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.modelArmorGlobalCustomEndpointInput"></a>

```typescript
public readonly modelArmorGlobalCustomEndpointInput: string;
```

- *Type:* string

---

##### `monitoringCustomEndpointInput`<sup>Optional</sup> <a name="monitoringCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.monitoringCustomEndpointInput"></a>

```typescript
public readonly monitoringCustomEndpointInput: string;
```

- *Type:* string

---

##### `netappCustomEndpointInput`<sup>Optional</sup> <a name="netappCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.netappCustomEndpointInput"></a>

```typescript
public readonly netappCustomEndpointInput: string;
```

- *Type:* string

---

##### `networkConnectivityCustomEndpointInput`<sup>Optional</sup> <a name="networkConnectivityCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.networkConnectivityCustomEndpointInput"></a>

```typescript
public readonly networkConnectivityCustomEndpointInput: string;
```

- *Type:* string

---

##### `networkConnectivityv1CustomEndpointInput`<sup>Optional</sup> <a name="networkConnectivityv1CustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.networkConnectivityv1CustomEndpointInput"></a>

```typescript
public readonly networkConnectivityv1CustomEndpointInput: string;
```

- *Type:* string

---

##### `networkManagementCustomEndpointInput`<sup>Optional</sup> <a name="networkManagementCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.networkManagementCustomEndpointInput"></a>

```typescript
public readonly networkManagementCustomEndpointInput: string;
```

- *Type:* string

---

##### `networkSecurityCustomEndpointInput`<sup>Optional</sup> <a name="networkSecurityCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.networkSecurityCustomEndpointInput"></a>

```typescript
public readonly networkSecurityCustomEndpointInput: string;
```

- *Type:* string

---

##### `networkServicesCustomEndpointInput`<sup>Optional</sup> <a name="networkServicesCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.networkServicesCustomEndpointInput"></a>

```typescript
public readonly networkServicesCustomEndpointInput: string;
```

- *Type:* string

---

##### `notebooksCustomEndpointInput`<sup>Optional</sup> <a name="notebooksCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.notebooksCustomEndpointInput"></a>

```typescript
public readonly notebooksCustomEndpointInput: string;
```

- *Type:* string

---

##### `observabilityCustomEndpointInput`<sup>Optional</sup> <a name="observabilityCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.observabilityCustomEndpointInput"></a>

```typescript
public readonly observabilityCustomEndpointInput: string;
```

- *Type:* string

---

##### `oracleDatabaseCustomEndpointInput`<sup>Optional</sup> <a name="oracleDatabaseCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.oracleDatabaseCustomEndpointInput"></a>

```typescript
public readonly oracleDatabaseCustomEndpointInput: string;
```

- *Type:* string

---

##### `orgPolicyCustomEndpointInput`<sup>Optional</sup> <a name="orgPolicyCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.orgPolicyCustomEndpointInput"></a>

```typescript
public readonly orgPolicyCustomEndpointInput: string;
```

- *Type:* string

---

##### `osConfigCustomEndpointInput`<sup>Optional</sup> <a name="osConfigCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.osConfigCustomEndpointInput"></a>

```typescript
public readonly osConfigCustomEndpointInput: string;
```

- *Type:* string

---

##### `osConfigV2CustomEndpointInput`<sup>Optional</sup> <a name="osConfigV2CustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.osConfigV2CustomEndpointInput"></a>

```typescript
public readonly osConfigV2CustomEndpointInput: string;
```

- *Type:* string

---

##### `osLoginCustomEndpointInput`<sup>Optional</sup> <a name="osLoginCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.osLoginCustomEndpointInput"></a>

```typescript
public readonly osLoginCustomEndpointInput: string;
```

- *Type:* string

---

##### `parallelstoreCustomEndpointInput`<sup>Optional</sup> <a name="parallelstoreCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.parallelstoreCustomEndpointInput"></a>

```typescript
public readonly parallelstoreCustomEndpointInput: string;
```

- *Type:* string

---

##### `parameterManagerCustomEndpointInput`<sup>Optional</sup> <a name="parameterManagerCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.parameterManagerCustomEndpointInput"></a>

```typescript
public readonly parameterManagerCustomEndpointInput: string;
```

- *Type:* string

---

##### `parameterManagerRegionalCustomEndpointInput`<sup>Optional</sup> <a name="parameterManagerRegionalCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.parameterManagerRegionalCustomEndpointInput"></a>

```typescript
public readonly parameterManagerRegionalCustomEndpointInput: string;
```

- *Type:* string

---

##### `pollIntervalInput`<sup>Optional</sup> <a name="pollIntervalInput" id="@cdktn/provider-google.provider.GoogleProvider.property.pollIntervalInput"></a>

```typescript
public readonly pollIntervalInput: string;
```

- *Type:* string

---

##### `preferGlobalEndpointsInput`<sup>Optional</sup> <a name="preferGlobalEndpointsInput" id="@cdktn/provider-google.provider.GoogleProvider.property.preferGlobalEndpointsInput"></a>

```typescript
public readonly preferGlobalEndpointsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `preferRegionalEndpointsInput`<sup>Optional</sup> <a name="preferRegionalEndpointsInput" id="@cdktn/provider-google.provider.GoogleProvider.property.preferRegionalEndpointsInput"></a>

```typescript
public readonly preferRegionalEndpointsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `privatecaCustomEndpointInput`<sup>Optional</sup> <a name="privatecaCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.privatecaCustomEndpointInput"></a>

```typescript
public readonly privatecaCustomEndpointInput: string;
```

- *Type:* string

---

##### `privilegedAccessManagerCustomEndpointInput`<sup>Optional</sup> <a name="privilegedAccessManagerCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.privilegedAccessManagerCustomEndpointInput"></a>

```typescript
public readonly privilegedAccessManagerCustomEndpointInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.provider.GoogleProvider.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `publicCaCustomEndpointInput`<sup>Optional</sup> <a name="publicCaCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.publicCaCustomEndpointInput"></a>

```typescript
public readonly publicCaCustomEndpointInput: string;
```

- *Type:* string

---

##### `pubsubCustomEndpointInput`<sup>Optional</sup> <a name="pubsubCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.pubsubCustomEndpointInput"></a>

```typescript
public readonly pubsubCustomEndpointInput: string;
```

- *Type:* string

---

##### `pubsubLiteCustomEndpointInput`<sup>Optional</sup> <a name="pubsubLiteCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.pubsubLiteCustomEndpointInput"></a>

```typescript
public readonly pubsubLiteCustomEndpointInput: string;
```

- *Type:* string

---

##### `recaptchaEnterpriseCustomEndpointInput`<sup>Optional</sup> <a name="recaptchaEnterpriseCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.recaptchaEnterpriseCustomEndpointInput"></a>

```typescript
public readonly recaptchaEnterpriseCustomEndpointInput: string;
```

- *Type:* string

---

##### `redisCustomEndpointInput`<sup>Optional</sup> <a name="redisCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.redisCustomEndpointInput"></a>

```typescript
public readonly redisCustomEndpointInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-google.provider.GoogleProvider.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `requestReasonInput`<sup>Optional</sup> <a name="requestReasonInput" id="@cdktn/provider-google.provider.GoogleProvider.property.requestReasonInput"></a>

```typescript
public readonly requestReasonInput: string;
```

- *Type:* string

---

##### `requestTimeoutInput`<sup>Optional</sup> <a name="requestTimeoutInput" id="@cdktn/provider-google.provider.GoogleProvider.property.requestTimeoutInput"></a>

```typescript
public readonly requestTimeoutInput: string;
```

- *Type:* string

---

##### `resourceManager3CustomEndpointInput`<sup>Optional</sup> <a name="resourceManager3CustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.resourceManager3CustomEndpointInput"></a>

```typescript
public readonly resourceManager3CustomEndpointInput: string;
```

- *Type:* string

---

##### `resourceManagerCustomEndpointInput`<sup>Optional</sup> <a name="resourceManagerCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.resourceManagerCustomEndpointInput"></a>

```typescript
public readonly resourceManagerCustomEndpointInput: string;
```

- *Type:* string

---

##### `resourceManagerV3CustomEndpointInput`<sup>Optional</sup> <a name="resourceManagerV3CustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.resourceManagerV3CustomEndpointInput"></a>

```typescript
public readonly resourceManagerV3CustomEndpointInput: string;
```

- *Type:* string

---

##### `scopesInput`<sup>Optional</sup> <a name="scopesInput" id="@cdktn/provider-google.provider.GoogleProvider.property.scopesInput"></a>

```typescript
public readonly scopesInput: string[];
```

- *Type:* string[]

---

##### `secretManagerCustomEndpointInput`<sup>Optional</sup> <a name="secretManagerCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.secretManagerCustomEndpointInput"></a>

```typescript
public readonly secretManagerCustomEndpointInput: string;
```

- *Type:* string

---

##### `secretManagerRegionalCustomEndpointInput`<sup>Optional</sup> <a name="secretManagerRegionalCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.secretManagerRegionalCustomEndpointInput"></a>

```typescript
public readonly secretManagerRegionalCustomEndpointInput: string;
```

- *Type:* string

---

##### `secureSourceManagerCustomEndpointInput`<sup>Optional</sup> <a name="secureSourceManagerCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.secureSourceManagerCustomEndpointInput"></a>

```typescript
public readonly secureSourceManagerCustomEndpointInput: string;
```

- *Type:* string

---

##### `securityCenterCustomEndpointInput`<sup>Optional</sup> <a name="securityCenterCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.securityCenterCustomEndpointInput"></a>

```typescript
public readonly securityCenterCustomEndpointInput: string;
```

- *Type:* string

---

##### `securityCenterManagementCustomEndpointInput`<sup>Optional</sup> <a name="securityCenterManagementCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.securityCenterManagementCustomEndpointInput"></a>

```typescript
public readonly securityCenterManagementCustomEndpointInput: string;
```

- *Type:* string

---

##### `securityCenterV2CustomEndpointInput`<sup>Optional</sup> <a name="securityCenterV2CustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.securityCenterV2CustomEndpointInput"></a>

```typescript
public readonly securityCenterV2CustomEndpointInput: string;
```

- *Type:* string

---

##### `securitypostureCustomEndpointInput`<sup>Optional</sup> <a name="securitypostureCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.securitypostureCustomEndpointInput"></a>

```typescript
public readonly securitypostureCustomEndpointInput: string;
```

- *Type:* string

---

##### `serviceDirectoryCustomEndpointInput`<sup>Optional</sup> <a name="serviceDirectoryCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.serviceDirectoryCustomEndpointInput"></a>

```typescript
public readonly serviceDirectoryCustomEndpointInput: string;
```

- *Type:* string

---

##### `serviceManagementCustomEndpointInput`<sup>Optional</sup> <a name="serviceManagementCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.serviceManagementCustomEndpointInput"></a>

```typescript
public readonly serviceManagementCustomEndpointInput: string;
```

- *Type:* string

---

##### `serviceNetworkingCustomEndpointInput`<sup>Optional</sup> <a name="serviceNetworkingCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.serviceNetworkingCustomEndpointInput"></a>

```typescript
public readonly serviceNetworkingCustomEndpointInput: string;
```

- *Type:* string

---

##### `serviceUsageCustomEndpointInput`<sup>Optional</sup> <a name="serviceUsageCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.serviceUsageCustomEndpointInput"></a>

```typescript
public readonly serviceUsageCustomEndpointInput: string;
```

- *Type:* string

---

##### `siteVerificationCustomEndpointInput`<sup>Optional</sup> <a name="siteVerificationCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.siteVerificationCustomEndpointInput"></a>

```typescript
public readonly siteVerificationCustomEndpointInput: string;
```

- *Type:* string

---

##### `sourceRepoCustomEndpointInput`<sup>Optional</sup> <a name="sourceRepoCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.sourceRepoCustomEndpointInput"></a>

```typescript
public readonly sourceRepoCustomEndpointInput: string;
```

- *Type:* string

---

##### `spannerCustomEndpointInput`<sup>Optional</sup> <a name="spannerCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.spannerCustomEndpointInput"></a>

```typescript
public readonly spannerCustomEndpointInput: string;
```

- *Type:* string

---

##### `sqlCustomEndpointInput`<sup>Optional</sup> <a name="sqlCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.sqlCustomEndpointInput"></a>

```typescript
public readonly sqlCustomEndpointInput: string;
```

- *Type:* string

---

##### `storageBatchOperationsCustomEndpointInput`<sup>Optional</sup> <a name="storageBatchOperationsCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.storageBatchOperationsCustomEndpointInput"></a>

```typescript
public readonly storageBatchOperationsCustomEndpointInput: string;
```

- *Type:* string

---

##### `storageControlCustomEndpointInput`<sup>Optional</sup> <a name="storageControlCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.storageControlCustomEndpointInput"></a>

```typescript
public readonly storageControlCustomEndpointInput: string;
```

- *Type:* string

---

##### `storageCustomEndpointInput`<sup>Optional</sup> <a name="storageCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.storageCustomEndpointInput"></a>

```typescript
public readonly storageCustomEndpointInput: string;
```

- *Type:* string

---

##### `storageInsightsCustomEndpointInput`<sup>Optional</sup> <a name="storageInsightsCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.storageInsightsCustomEndpointInput"></a>

```typescript
public readonly storageInsightsCustomEndpointInput: string;
```

- *Type:* string

---

##### `storageTransferCustomEndpointInput`<sup>Optional</sup> <a name="storageTransferCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.storageTransferCustomEndpointInput"></a>

```typescript
public readonly storageTransferCustomEndpointInput: string;
```

- *Type:* string

---

##### `tagsCustomEndpointInput`<sup>Optional</sup> <a name="tagsCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.tagsCustomEndpointInput"></a>

```typescript
public readonly tagsCustomEndpointInput: string;
```

- *Type:* string

---

##### `tagsLocationCustomEndpointInput`<sup>Optional</sup> <a name="tagsLocationCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.tagsLocationCustomEndpointInput"></a>

```typescript
public readonly tagsLocationCustomEndpointInput: string;
```

- *Type:* string

---

##### `terraformAttributionLabelAdditionStrategyInput`<sup>Optional</sup> <a name="terraformAttributionLabelAdditionStrategyInput" id="@cdktn/provider-google.provider.GoogleProvider.property.terraformAttributionLabelAdditionStrategyInput"></a>

```typescript
public readonly terraformAttributionLabelAdditionStrategyInput: string;
```

- *Type:* string

---

##### `transcoderCustomEndpointInput`<sup>Optional</sup> <a name="transcoderCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.transcoderCustomEndpointInput"></a>

```typescript
public readonly transcoderCustomEndpointInput: string;
```

- *Type:* string

---

##### `universeDomainInput`<sup>Optional</sup> <a name="universeDomainInput" id="@cdktn/provider-google.provider.GoogleProvider.property.universeDomainInput"></a>

```typescript
public readonly universeDomainInput: string;
```

- *Type:* string

---

##### `userProjectOverrideInput`<sup>Optional</sup> <a name="userProjectOverrideInput" id="@cdktn/provider-google.provider.GoogleProvider.property.userProjectOverrideInput"></a>

```typescript
public readonly userProjectOverrideInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `vectorSearchCustomEndpointInput`<sup>Optional</sup> <a name="vectorSearchCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.vectorSearchCustomEndpointInput"></a>

```typescript
public readonly vectorSearchCustomEndpointInput: string;
```

- *Type:* string

---

##### `vertexAiCustomEndpointInput`<sup>Optional</sup> <a name="vertexAiCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.vertexAiCustomEndpointInput"></a>

```typescript
public readonly vertexAiCustomEndpointInput: string;
```

- *Type:* string

---

##### `vmwareengineCustomEndpointInput`<sup>Optional</sup> <a name="vmwareengineCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.vmwareengineCustomEndpointInput"></a>

```typescript
public readonly vmwareengineCustomEndpointInput: string;
```

- *Type:* string

---

##### `vpcAccessCustomEndpointInput`<sup>Optional</sup> <a name="vpcAccessCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.vpcAccessCustomEndpointInput"></a>

```typescript
public readonly vpcAccessCustomEndpointInput: string;
```

- *Type:* string

---

##### `workbenchCustomEndpointInput`<sup>Optional</sup> <a name="workbenchCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.workbenchCustomEndpointInput"></a>

```typescript
public readonly workbenchCustomEndpointInput: string;
```

- *Type:* string

---

##### `workflowsCustomEndpointInput`<sup>Optional</sup> <a name="workflowsCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.workflowsCustomEndpointInput"></a>

```typescript
public readonly workflowsCustomEndpointInput: string;
```

- *Type:* string

---

##### `workloadIdentityCustomEndpointInput`<sup>Optional</sup> <a name="workloadIdentityCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.workloadIdentityCustomEndpointInput"></a>

```typescript
public readonly workloadIdentityCustomEndpointInput: string;
```

- *Type:* string

---

##### `workstationsCustomEndpointInput`<sup>Optional</sup> <a name="workstationsCustomEndpointInput" id="@cdktn/provider-google.provider.GoogleProvider.property.workstationsCustomEndpointInput"></a>

```typescript
public readonly workstationsCustomEndpointInput: string;
```

- *Type:* string

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktn/provider-google.provider.GoogleProvider.property.zoneInput"></a>

```typescript
public readonly zoneInput: string;
```

- *Type:* string

---

##### `accessApprovalCustomEndpoint`<sup>Optional</sup> <a name="accessApprovalCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.accessApprovalCustomEndpoint"></a>

```typescript
public readonly accessApprovalCustomEndpoint: string;
```

- *Type:* string

---

##### `accessContextManagerCustomEndpoint`<sup>Optional</sup> <a name="accessContextManagerCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.accessContextManagerCustomEndpoint"></a>

```typescript
public readonly accessContextManagerCustomEndpoint: string;
```

- *Type:* string

---

##### `accessToken`<sup>Optional</sup> <a name="accessToken" id="@cdktn/provider-google.provider.GoogleProvider.property.accessToken"></a>

```typescript
public readonly accessToken: string;
```

- *Type:* string

---

##### `activeDirectoryCustomEndpoint`<sup>Optional</sup> <a name="activeDirectoryCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.activeDirectoryCustomEndpoint"></a>

```typescript
public readonly activeDirectoryCustomEndpoint: string;
```

- *Type:* string

---

##### `addTerraformAttributionLabel`<sup>Optional</sup> <a name="addTerraformAttributionLabel" id="@cdktn/provider-google.provider.GoogleProvider.property.addTerraformAttributionLabel"></a>

```typescript
public readonly addTerraformAttributionLabel: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `agentRegistryCustomEndpoint`<sup>Optional</sup> <a name="agentRegistryCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.agentRegistryCustomEndpoint"></a>

```typescript
public readonly agentRegistryCustomEndpoint: string;
```

- *Type:* string

---

##### `alloydbCustomEndpoint`<sup>Optional</sup> <a name="alloydbCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.alloydbCustomEndpoint"></a>

```typescript
public readonly alloydbCustomEndpoint: string;
```

- *Type:* string

---

##### `apigeeCustomEndpoint`<sup>Optional</sup> <a name="apigeeCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.apigeeCustomEndpoint"></a>

```typescript
public readonly apigeeCustomEndpoint: string;
```

- *Type:* string

---

##### `apihubCustomEndpoint`<sup>Optional</sup> <a name="apihubCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.apihubCustomEndpoint"></a>

```typescript
public readonly apihubCustomEndpoint: string;
```

- *Type:* string

---

##### `apikeysCustomEndpoint`<sup>Optional</sup> <a name="apikeysCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.apikeysCustomEndpoint"></a>

```typescript
public readonly apikeysCustomEndpoint: string;
```

- *Type:* string

---

##### `appEngineCustomEndpoint`<sup>Optional</sup> <a name="appEngineCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.appEngineCustomEndpoint"></a>

```typescript
public readonly appEngineCustomEndpoint: string;
```

- *Type:* string

---

##### `apphubCustomEndpoint`<sup>Optional</sup> <a name="apphubCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.apphubCustomEndpoint"></a>

```typescript
public readonly apphubCustomEndpoint: string;
```

- *Type:* string

---

##### `artifactRegistryCustomEndpoint`<sup>Optional</sup> <a name="artifactRegistryCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.artifactRegistryCustomEndpoint"></a>

```typescript
public readonly artifactRegistryCustomEndpoint: string;
```

- *Type:* string

---

##### `assuredWorkloadsCustomEndpoint`<sup>Optional</sup> <a name="assuredWorkloadsCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.assuredWorkloadsCustomEndpoint"></a>

```typescript
public readonly assuredWorkloadsCustomEndpoint: string;
```

- *Type:* string

---

##### `backupDrCustomEndpoint`<sup>Optional</sup> <a name="backupDrCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.backupDrCustomEndpoint"></a>

```typescript
public readonly backupDrCustomEndpoint: string;
```

- *Type:* string

---

##### `batching`<sup>Optional</sup> <a name="batching" id="@cdktn/provider-google.provider.GoogleProvider.property.batching"></a>

```typescript
public readonly batching: IResolvable | GoogleProviderBatching[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.provider.GoogleProviderBatching">GoogleProviderBatching</a>[]

---

##### `beyondcorpCustomEndpoint`<sup>Optional</sup> <a name="beyondcorpCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.beyondcorpCustomEndpoint"></a>

```typescript
public readonly beyondcorpCustomEndpoint: string;
```

- *Type:* string

---

##### `biglakeCustomEndpoint`<sup>Optional</sup> <a name="biglakeCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.biglakeCustomEndpoint"></a>

```typescript
public readonly biglakeCustomEndpoint: string;
```

- *Type:* string

---

##### `biglakeHiveCustomEndpoint`<sup>Optional</sup> <a name="biglakeHiveCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.biglakeHiveCustomEndpoint"></a>

```typescript
public readonly biglakeHiveCustomEndpoint: string;
```

- *Type:* string

---

##### `biglakeIcebergCustomEndpoint`<sup>Optional</sup> <a name="biglakeIcebergCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.biglakeIcebergCustomEndpoint"></a>

```typescript
public readonly biglakeIcebergCustomEndpoint: string;
```

- *Type:* string

---

##### `bigqueryAnalyticsHubCustomEndpoint`<sup>Optional</sup> <a name="bigqueryAnalyticsHubCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.bigqueryAnalyticsHubCustomEndpoint"></a>

```typescript
public readonly bigqueryAnalyticsHubCustomEndpoint: string;
```

- *Type:* string

---

##### `bigqueryConnectionCustomEndpoint`<sup>Optional</sup> <a name="bigqueryConnectionCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.bigqueryConnectionCustomEndpoint"></a>

```typescript
public readonly bigqueryConnectionCustomEndpoint: string;
```

- *Type:* string

---

##### `bigQueryCustomEndpoint`<sup>Optional</sup> <a name="bigQueryCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.bigQueryCustomEndpoint"></a>

```typescript
public readonly bigQueryCustomEndpoint: string;
```

- *Type:* string

---

##### `bigqueryDatapolicyCustomEndpoint`<sup>Optional</sup> <a name="bigqueryDatapolicyCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.bigqueryDatapolicyCustomEndpoint"></a>

```typescript
public readonly bigqueryDatapolicyCustomEndpoint: string;
```

- *Type:* string

---

##### `bigqueryDatapolicyv2CustomEndpoint`<sup>Optional</sup> <a name="bigqueryDatapolicyv2CustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.bigqueryDatapolicyv2CustomEndpoint"></a>

```typescript
public readonly bigqueryDatapolicyv2CustomEndpoint: string;
```

- *Type:* string

---

##### `bigqueryDataTransferCustomEndpoint`<sup>Optional</sup> <a name="bigqueryDataTransferCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.bigqueryDataTransferCustomEndpoint"></a>

```typescript
public readonly bigqueryDataTransferCustomEndpoint: string;
```

- *Type:* string

---

##### `bigqueryReservationCustomEndpoint`<sup>Optional</sup> <a name="bigqueryReservationCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.bigqueryReservationCustomEndpoint"></a>

```typescript
public readonly bigqueryReservationCustomEndpoint: string;
```

- *Type:* string

---

##### `bigtableCustomEndpoint`<sup>Optional</sup> <a name="bigtableCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.bigtableCustomEndpoint"></a>

```typescript
public readonly bigtableCustomEndpoint: string;
```

- *Type:* string

---

##### `billingBudgetsCustomEndpoint`<sup>Optional</sup> <a name="billingBudgetsCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.billingBudgetsCustomEndpoint"></a>

```typescript
public readonly billingBudgetsCustomEndpoint: string;
```

- *Type:* string

---

##### `billingCustomEndpoint`<sup>Optional</sup> <a name="billingCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.billingCustomEndpoint"></a>

```typescript
public readonly billingCustomEndpoint: string;
```

- *Type:* string

---

##### `billingProject`<sup>Optional</sup> <a name="billingProject" id="@cdktn/provider-google.provider.GoogleProvider.property.billingProject"></a>

```typescript
public readonly billingProject: string;
```

- *Type:* string

---

##### `binaryAuthorizationCustomEndpoint`<sup>Optional</sup> <a name="binaryAuthorizationCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.binaryAuthorizationCustomEndpoint"></a>

```typescript
public readonly binaryAuthorizationCustomEndpoint: string;
```

- *Type:* string

---

##### `blockchainNodeEngineCustomEndpoint`<sup>Optional</sup> <a name="blockchainNodeEngineCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.blockchainNodeEngineCustomEndpoint"></a>

```typescript
public readonly blockchainNodeEngineCustomEndpoint: string;
```

- *Type:* string

---

##### `certificateManagerCustomEndpoint`<sup>Optional</sup> <a name="certificateManagerCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.certificateManagerCustomEndpoint"></a>

```typescript
public readonly certificateManagerCustomEndpoint: string;
```

- *Type:* string

---

##### `cesCustomEndpoint`<sup>Optional</sup> <a name="cesCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.cesCustomEndpoint"></a>

```typescript
public readonly cesCustomEndpoint: string;
```

- *Type:* string

---

##### `chronicleCustomEndpoint`<sup>Optional</sup> <a name="chronicleCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.chronicleCustomEndpoint"></a>

```typescript
public readonly chronicleCustomEndpoint: string;
```

- *Type:* string

---

##### `cloudAssetCustomEndpoint`<sup>Optional</sup> <a name="cloudAssetCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.cloudAssetCustomEndpoint"></a>

```typescript
public readonly cloudAssetCustomEndpoint: string;
```

- *Type:* string

---

##### `cloudBillingCustomEndpoint`<sup>Optional</sup> <a name="cloudBillingCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.cloudBillingCustomEndpoint"></a>

```typescript
public readonly cloudBillingCustomEndpoint: string;
```

- *Type:* string

---

##### `cloudBuildCustomEndpoint`<sup>Optional</sup> <a name="cloudBuildCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.cloudBuildCustomEndpoint"></a>

```typescript
public readonly cloudBuildCustomEndpoint: string;
```

- *Type:* string

---

##### `cloudbuildv2CustomEndpoint`<sup>Optional</sup> <a name="cloudbuildv2CustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.cloudbuildv2CustomEndpoint"></a>

```typescript
public readonly cloudbuildv2CustomEndpoint: string;
```

- *Type:* string

---

##### `clouddeployCustomEndpoint`<sup>Optional</sup> <a name="clouddeployCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.clouddeployCustomEndpoint"></a>

```typescript
public readonly clouddeployCustomEndpoint: string;
```

- *Type:* string

---

##### `clouddomainsCustomEndpoint`<sup>Optional</sup> <a name="clouddomainsCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.clouddomainsCustomEndpoint"></a>

```typescript
public readonly clouddomainsCustomEndpoint: string;
```

- *Type:* string

---

##### `cloudfunctions2CustomEndpoint`<sup>Optional</sup> <a name="cloudfunctions2CustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.cloudfunctions2CustomEndpoint"></a>

```typescript
public readonly cloudfunctions2CustomEndpoint: string;
```

- *Type:* string

---

##### `cloudFunctionsCustomEndpoint`<sup>Optional</sup> <a name="cloudFunctionsCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.cloudFunctionsCustomEndpoint"></a>

```typescript
public readonly cloudFunctionsCustomEndpoint: string;
```

- *Type:* string

---

##### `cloudIdentityCustomEndpoint`<sup>Optional</sup> <a name="cloudIdentityCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.cloudIdentityCustomEndpoint"></a>

```typescript
public readonly cloudIdentityCustomEndpoint: string;
```

- *Type:* string

---

##### `cloudIdsCustomEndpoint`<sup>Optional</sup> <a name="cloudIdsCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.cloudIdsCustomEndpoint"></a>

```typescript
public readonly cloudIdsCustomEndpoint: string;
```

- *Type:* string

---

##### `cloudQuotasCustomEndpoint`<sup>Optional</sup> <a name="cloudQuotasCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.cloudQuotasCustomEndpoint"></a>

```typescript
public readonly cloudQuotasCustomEndpoint: string;
```

- *Type:* string

---

##### `cloudResourceManagerCustomEndpoint`<sup>Optional</sup> <a name="cloudResourceManagerCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.cloudResourceManagerCustomEndpoint"></a>

```typescript
public readonly cloudResourceManagerCustomEndpoint: string;
```

- *Type:* string

---

##### `cloudRunCustomEndpoint`<sup>Optional</sup> <a name="cloudRunCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.cloudRunCustomEndpoint"></a>

```typescript
public readonly cloudRunCustomEndpoint: string;
```

- *Type:* string

---

##### `cloudRunV2CustomEndpoint`<sup>Optional</sup> <a name="cloudRunV2CustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.cloudRunV2CustomEndpoint"></a>

```typescript
public readonly cloudRunV2CustomEndpoint: string;
```

- *Type:* string

---

##### `cloudSchedulerCustomEndpoint`<sup>Optional</sup> <a name="cloudSchedulerCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.cloudSchedulerCustomEndpoint"></a>

```typescript
public readonly cloudSchedulerCustomEndpoint: string;
```

- *Type:* string

---

##### `cloudSecurityComplianceCustomEndpoint`<sup>Optional</sup> <a name="cloudSecurityComplianceCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.cloudSecurityComplianceCustomEndpoint"></a>

```typescript
public readonly cloudSecurityComplianceCustomEndpoint: string;
```

- *Type:* string

---

##### `cloudTasksCustomEndpoint`<sup>Optional</sup> <a name="cloudTasksCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.cloudTasksCustomEndpoint"></a>

```typescript
public readonly cloudTasksCustomEndpoint: string;
```

- *Type:* string

---

##### `colabCustomEndpoint`<sup>Optional</sup> <a name="colabCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.colabCustomEndpoint"></a>

```typescript
public readonly colabCustomEndpoint: string;
```

- *Type:* string

---

##### `composerCustomEndpoint`<sup>Optional</sup> <a name="composerCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.composerCustomEndpoint"></a>

```typescript
public readonly composerCustomEndpoint: string;
```

- *Type:* string

---

##### `computeCustomEndpoint`<sup>Optional</sup> <a name="computeCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.computeCustomEndpoint"></a>

```typescript
public readonly computeCustomEndpoint: string;
```

- *Type:* string

---

##### `configCustomEndpoint`<sup>Optional</sup> <a name="configCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.configCustomEndpoint"></a>

```typescript
public readonly configCustomEndpoint: string;
```

- *Type:* string

---

##### `contactCenterInsightsCustomEndpoint`<sup>Optional</sup> <a name="contactCenterInsightsCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.contactCenterInsightsCustomEndpoint"></a>

```typescript
public readonly contactCenterInsightsCustomEndpoint: string;
```

- *Type:* string

---

##### `containerAnalysisCustomEndpoint`<sup>Optional</sup> <a name="containerAnalysisCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.containerAnalysisCustomEndpoint"></a>

```typescript
public readonly containerAnalysisCustomEndpoint: string;
```

- *Type:* string

---

##### `containerAttachedCustomEndpoint`<sup>Optional</sup> <a name="containerAttachedCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.containerAttachedCustomEndpoint"></a>

```typescript
public readonly containerAttachedCustomEndpoint: string;
```

- *Type:* string

---

##### `containerAwsCustomEndpoint`<sup>Optional</sup> <a name="containerAwsCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.containerAwsCustomEndpoint"></a>

```typescript
public readonly containerAwsCustomEndpoint: string;
```

- *Type:* string

---

##### `containerAzureCustomEndpoint`<sup>Optional</sup> <a name="containerAzureCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.containerAzureCustomEndpoint"></a>

```typescript
public readonly containerAzureCustomEndpoint: string;
```

- *Type:* string

---

##### `containerCustomEndpoint`<sup>Optional</sup> <a name="containerCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.containerCustomEndpoint"></a>

```typescript
public readonly containerCustomEndpoint: string;
```

- *Type:* string

---

##### `coreBillingCustomEndpoint`<sup>Optional</sup> <a name="coreBillingCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.coreBillingCustomEndpoint"></a>

```typescript
public readonly coreBillingCustomEndpoint: string;
```

- *Type:* string

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="@cdktn/provider-google.provider.GoogleProvider.property.credentials"></a>

```typescript
public readonly credentials: string;
```

- *Type:* string

---

##### `databaseMigrationServiceCustomEndpoint`<sup>Optional</sup> <a name="databaseMigrationServiceCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.databaseMigrationServiceCustomEndpoint"></a>

```typescript
public readonly databaseMigrationServiceCustomEndpoint: string;
```

- *Type:* string

---

##### `dataCatalogCustomEndpoint`<sup>Optional</sup> <a name="dataCatalogCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.dataCatalogCustomEndpoint"></a>

```typescript
public readonly dataCatalogCustomEndpoint: string;
```

- *Type:* string

---

##### `dataflowCustomEndpoint`<sup>Optional</sup> <a name="dataflowCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.dataflowCustomEndpoint"></a>

```typescript
public readonly dataflowCustomEndpoint: string;
```

- *Type:* string

---

##### `dataformCustomEndpoint`<sup>Optional</sup> <a name="dataformCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.dataformCustomEndpoint"></a>

```typescript
public readonly dataformCustomEndpoint: string;
```

- *Type:* string

---

##### `dataFusionCustomEndpoint`<sup>Optional</sup> <a name="dataFusionCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.dataFusionCustomEndpoint"></a>

```typescript
public readonly dataFusionCustomEndpoint: string;
```

- *Type:* string

---

##### `dataLineageCustomEndpoint`<sup>Optional</sup> <a name="dataLineageCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.dataLineageCustomEndpoint"></a>

```typescript
public readonly dataLineageCustomEndpoint: string;
```

- *Type:* string

---

##### `dataLossPreventionCustomEndpoint`<sup>Optional</sup> <a name="dataLossPreventionCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.dataLossPreventionCustomEndpoint"></a>

```typescript
public readonly dataLossPreventionCustomEndpoint: string;
```

- *Type:* string

---

##### `dataPipelineCustomEndpoint`<sup>Optional</sup> <a name="dataPipelineCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.dataPipelineCustomEndpoint"></a>

```typescript
public readonly dataPipelineCustomEndpoint: string;
```

- *Type:* string

---

##### `dataplexCustomEndpoint`<sup>Optional</sup> <a name="dataplexCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.dataplexCustomEndpoint"></a>

```typescript
public readonly dataplexCustomEndpoint: string;
```

- *Type:* string

---

##### `dataprocCustomEndpoint`<sup>Optional</sup> <a name="dataprocCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.dataprocCustomEndpoint"></a>

```typescript
public readonly dataprocCustomEndpoint: string;
```

- *Type:* string

---

##### `dataprocGdcCustomEndpoint`<sup>Optional</sup> <a name="dataprocGdcCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.dataprocGdcCustomEndpoint"></a>

```typescript
public readonly dataprocGdcCustomEndpoint: string;
```

- *Type:* string

---

##### `dataprocMetastoreCustomEndpoint`<sup>Optional</sup> <a name="dataprocMetastoreCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.dataprocMetastoreCustomEndpoint"></a>

```typescript
public readonly dataprocMetastoreCustomEndpoint: string;
```

- *Type:* string

---

##### `datastreamCustomEndpoint`<sup>Optional</sup> <a name="datastreamCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.datastreamCustomEndpoint"></a>

```typescript
public readonly datastreamCustomEndpoint: string;
```

- *Type:* string

---

##### `defaultLabels`<sup>Optional</sup> <a name="defaultLabels" id="@cdktn/provider-google.provider.GoogleProvider.property.defaultLabels"></a>

```typescript
public readonly defaultLabels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.provider.GoogleProvider.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `deploymentManagerCustomEndpoint`<sup>Optional</sup> <a name="deploymentManagerCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.deploymentManagerCustomEndpoint"></a>

```typescript
public readonly deploymentManagerCustomEndpoint: string;
```

- *Type:* string

---

##### `developerConnectCustomEndpoint`<sup>Optional</sup> <a name="developerConnectCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.developerConnectCustomEndpoint"></a>

```typescript
public readonly developerConnectCustomEndpoint: string;
```

- *Type:* string

---

##### `dialogflowCustomEndpoint`<sup>Optional</sup> <a name="dialogflowCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.dialogflowCustomEndpoint"></a>

```typescript
public readonly dialogflowCustomEndpoint: string;
```

- *Type:* string

---

##### `dialogflowCxCustomEndpoint`<sup>Optional</sup> <a name="dialogflowCxCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.dialogflowCxCustomEndpoint"></a>

```typescript
public readonly dialogflowCxCustomEndpoint: string;
```

- *Type:* string

---

##### `discoveryEngineCustomEndpoint`<sup>Optional</sup> <a name="discoveryEngineCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.discoveryEngineCustomEndpoint"></a>

```typescript
public readonly discoveryEngineCustomEndpoint: string;
```

- *Type:* string

---

##### `dnsCustomEndpoint`<sup>Optional</sup> <a name="dnsCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.dnsCustomEndpoint"></a>

```typescript
public readonly dnsCustomEndpoint: string;
```

- *Type:* string

---

##### `documentAiCustomEndpoint`<sup>Optional</sup> <a name="documentAiCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.documentAiCustomEndpoint"></a>

```typescript
public readonly documentAiCustomEndpoint: string;
```

- *Type:* string

---

##### `documentAiWarehouseCustomEndpoint`<sup>Optional</sup> <a name="documentAiWarehouseCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.documentAiWarehouseCustomEndpoint"></a>

```typescript
public readonly documentAiWarehouseCustomEndpoint: string;
```

- *Type:* string

---

##### `edgecontainerCustomEndpoint`<sup>Optional</sup> <a name="edgecontainerCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.edgecontainerCustomEndpoint"></a>

```typescript
public readonly edgecontainerCustomEndpoint: string;
```

- *Type:* string

---

##### `edgenetworkCustomEndpoint`<sup>Optional</sup> <a name="edgenetworkCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.edgenetworkCustomEndpoint"></a>

```typescript
public readonly edgenetworkCustomEndpoint: string;
```

- *Type:* string

---

##### `essentialContactsCustomEndpoint`<sup>Optional</sup> <a name="essentialContactsCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.essentialContactsCustomEndpoint"></a>

```typescript
public readonly essentialContactsCustomEndpoint: string;
```

- *Type:* string

---

##### `eventarcCustomEndpoint`<sup>Optional</sup> <a name="eventarcCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.eventarcCustomEndpoint"></a>

```typescript
public readonly eventarcCustomEndpoint: string;
```

- *Type:* string

---

##### `externalCredentials`<sup>Optional</sup> <a name="externalCredentials" id="@cdktn/provider-google.provider.GoogleProvider.property.externalCredentials"></a>

```typescript
public readonly externalCredentials: IResolvable | GoogleProviderExternalCredentials[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.provider.GoogleProviderExternalCredentials">GoogleProviderExternalCredentials</a>[]

---

##### `filestoreCustomEndpoint`<sup>Optional</sup> <a name="filestoreCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.filestoreCustomEndpoint"></a>

```typescript
public readonly filestoreCustomEndpoint: string;
```

- *Type:* string

---

##### `firebaseAppCheckCustomEndpoint`<sup>Optional</sup> <a name="firebaseAppCheckCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.firebaseAppCheckCustomEndpoint"></a>

```typescript
public readonly firebaseAppCheckCustomEndpoint: string;
```

- *Type:* string

---

##### `firebaseAppHostingCustomEndpoint`<sup>Optional</sup> <a name="firebaseAppHostingCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.firebaseAppHostingCustomEndpoint"></a>

```typescript
public readonly firebaseAppHostingCustomEndpoint: string;
```

- *Type:* string

---

##### `firebaseDataConnectCustomEndpoint`<sup>Optional</sup> <a name="firebaseDataConnectCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.firebaseDataConnectCustomEndpoint"></a>

```typescript
public readonly firebaseDataConnectCustomEndpoint: string;
```

- *Type:* string

---

##### `firebaseRemoteConfigCustomEndpoint`<sup>Optional</sup> <a name="firebaseRemoteConfigCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.firebaseRemoteConfigCustomEndpoint"></a>

```typescript
public readonly firebaseRemoteConfigCustomEndpoint: string;
```

- *Type:* string

---

##### `firebaserulesCustomEndpoint`<sup>Optional</sup> <a name="firebaserulesCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.firebaserulesCustomEndpoint"></a>

```typescript
public readonly firebaserulesCustomEndpoint: string;
```

- *Type:* string

---

##### `firestoreCustomEndpoint`<sup>Optional</sup> <a name="firestoreCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.firestoreCustomEndpoint"></a>

```typescript
public readonly firestoreCustomEndpoint: string;
```

- *Type:* string

---

##### `geminiCustomEndpoint`<sup>Optional</sup> <a name="geminiCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.geminiCustomEndpoint"></a>

```typescript
public readonly geminiCustomEndpoint: string;
```

- *Type:* string

---

##### `gkeBackupCustomEndpoint`<sup>Optional</sup> <a name="gkeBackupCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.gkeBackupCustomEndpoint"></a>

```typescript
public readonly gkeBackupCustomEndpoint: string;
```

- *Type:* string

---

##### `gkeHub2CustomEndpoint`<sup>Optional</sup> <a name="gkeHub2CustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.gkeHub2CustomEndpoint"></a>

```typescript
public readonly gkeHub2CustomEndpoint: string;
```

- *Type:* string

---

##### `gkeHubCustomEndpoint`<sup>Optional</sup> <a name="gkeHubCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.gkeHubCustomEndpoint"></a>

```typescript
public readonly gkeHubCustomEndpoint: string;
```

- *Type:* string

---

##### `gkeonpremCustomEndpoint`<sup>Optional</sup> <a name="gkeonpremCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.gkeonpremCustomEndpoint"></a>

```typescript
public readonly gkeonpremCustomEndpoint: string;
```

- *Type:* string

---

##### `healthcareCustomEndpoint`<sup>Optional</sup> <a name="healthcareCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.healthcareCustomEndpoint"></a>

```typescript
public readonly healthcareCustomEndpoint: string;
```

- *Type:* string

---

##### `hypercomputeclusterCustomEndpoint`<sup>Optional</sup> <a name="hypercomputeclusterCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.hypercomputeclusterCustomEndpoint"></a>

```typescript
public readonly hypercomputeclusterCustomEndpoint: string;
```

- *Type:* string

---

##### `iam2CustomEndpoint`<sup>Optional</sup> <a name="iam2CustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.iam2CustomEndpoint"></a>

```typescript
public readonly iam2CustomEndpoint: string;
```

- *Type:* string

---

##### `iam3CustomEndpoint`<sup>Optional</sup> <a name="iam3CustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.iam3CustomEndpoint"></a>

```typescript
public readonly iam3CustomEndpoint: string;
```

- *Type:* string

---

##### `iamBetaCustomEndpoint`<sup>Optional</sup> <a name="iamBetaCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.iamBetaCustomEndpoint"></a>

```typescript
public readonly iamBetaCustomEndpoint: string;
```

- *Type:* string

---

##### `iamCredentialsCustomEndpoint`<sup>Optional</sup> <a name="iamCredentialsCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.iamCredentialsCustomEndpoint"></a>

```typescript
public readonly iamCredentialsCustomEndpoint: string;
```

- *Type:* string

---

##### `iamCustomEndpoint`<sup>Optional</sup> <a name="iamCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.iamCustomEndpoint"></a>

```typescript
public readonly iamCustomEndpoint: string;
```

- *Type:* string

---

##### `iamWorkforcePoolCustomEndpoint`<sup>Optional</sup> <a name="iamWorkforcePoolCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.iamWorkforcePoolCustomEndpoint"></a>

```typescript
public readonly iamWorkforcePoolCustomEndpoint: string;
```

- *Type:* string

---

##### `iapCustomEndpoint`<sup>Optional</sup> <a name="iapCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.iapCustomEndpoint"></a>

```typescript
public readonly iapCustomEndpoint: string;
```

- *Type:* string

---

##### `identityPlatformCustomEndpoint`<sup>Optional</sup> <a name="identityPlatformCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.identityPlatformCustomEndpoint"></a>

```typescript
public readonly identityPlatformCustomEndpoint: string;
```

- *Type:* string

---

##### `impersonateServiceAccount`<sup>Optional</sup> <a name="impersonateServiceAccount" id="@cdktn/provider-google.provider.GoogleProvider.property.impersonateServiceAccount"></a>

```typescript
public readonly impersonateServiceAccount: string;
```

- *Type:* string

---

##### `impersonateServiceAccountDelegates`<sup>Optional</sup> <a name="impersonateServiceAccountDelegates" id="@cdktn/provider-google.provider.GoogleProvider.property.impersonateServiceAccountDelegates"></a>

```typescript
public readonly impersonateServiceAccountDelegates: string[];
```

- *Type:* string[]

---

##### `integrationConnectorsCustomEndpoint`<sup>Optional</sup> <a name="integrationConnectorsCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.integrationConnectorsCustomEndpoint"></a>

```typescript
public readonly integrationConnectorsCustomEndpoint: string;
```

- *Type:* string

---

##### `integrationsCustomEndpoint`<sup>Optional</sup> <a name="integrationsCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.integrationsCustomEndpoint"></a>

```typescript
public readonly integrationsCustomEndpoint: string;
```

- *Type:* string

---

##### `kmsCustomEndpoint`<sup>Optional</sup> <a name="kmsCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.kmsCustomEndpoint"></a>

```typescript
public readonly kmsCustomEndpoint: string;
```

- *Type:* string

---

##### `licenseManagerCustomEndpoint`<sup>Optional</sup> <a name="licenseManagerCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.licenseManagerCustomEndpoint"></a>

```typescript
public readonly licenseManagerCustomEndpoint: string;
```

- *Type:* string

---

##### `loggingCustomEndpoint`<sup>Optional</sup> <a name="loggingCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.loggingCustomEndpoint"></a>

```typescript
public readonly loggingCustomEndpoint: string;
```

- *Type:* string

---

##### `lookerCustomEndpoint`<sup>Optional</sup> <a name="lookerCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.lookerCustomEndpoint"></a>

```typescript
public readonly lookerCustomEndpoint: string;
```

- *Type:* string

---

##### `lustreCustomEndpoint`<sup>Optional</sup> <a name="lustreCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.lustreCustomEndpoint"></a>

```typescript
public readonly lustreCustomEndpoint: string;
```

- *Type:* string

---

##### `managedKafkaCustomEndpoint`<sup>Optional</sup> <a name="managedKafkaCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.managedKafkaCustomEndpoint"></a>

```typescript
public readonly managedKafkaCustomEndpoint: string;
```

- *Type:* string

---

##### `memcacheCustomEndpoint`<sup>Optional</sup> <a name="memcacheCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.memcacheCustomEndpoint"></a>

```typescript
public readonly memcacheCustomEndpoint: string;
```

- *Type:* string

---

##### `memorystoreCustomEndpoint`<sup>Optional</sup> <a name="memorystoreCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.memorystoreCustomEndpoint"></a>

```typescript
public readonly memorystoreCustomEndpoint: string;
```

- *Type:* string

---

##### `migrationCenterCustomEndpoint`<sup>Optional</sup> <a name="migrationCenterCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.migrationCenterCustomEndpoint"></a>

```typescript
public readonly migrationCenterCustomEndpoint: string;
```

- *Type:* string

---

##### `mlEngineCustomEndpoint`<sup>Optional</sup> <a name="mlEngineCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.mlEngineCustomEndpoint"></a>

```typescript
public readonly mlEngineCustomEndpoint: string;
```

- *Type:* string

---

##### `modelArmorCustomEndpoint`<sup>Optional</sup> <a name="modelArmorCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.modelArmorCustomEndpoint"></a>

```typescript
public readonly modelArmorCustomEndpoint: string;
```

- *Type:* string

---

##### `modelArmorGlobalCustomEndpoint`<sup>Optional</sup> <a name="modelArmorGlobalCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.modelArmorGlobalCustomEndpoint"></a>

```typescript
public readonly modelArmorGlobalCustomEndpoint: string;
```

- *Type:* string

---

##### `monitoringCustomEndpoint`<sup>Optional</sup> <a name="monitoringCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.monitoringCustomEndpoint"></a>

```typescript
public readonly monitoringCustomEndpoint: string;
```

- *Type:* string

---

##### `netappCustomEndpoint`<sup>Optional</sup> <a name="netappCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.netappCustomEndpoint"></a>

```typescript
public readonly netappCustomEndpoint: string;
```

- *Type:* string

---

##### `networkConnectivityCustomEndpoint`<sup>Optional</sup> <a name="networkConnectivityCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.networkConnectivityCustomEndpoint"></a>

```typescript
public readonly networkConnectivityCustomEndpoint: string;
```

- *Type:* string

---

##### `networkConnectivityv1CustomEndpoint`<sup>Optional</sup> <a name="networkConnectivityv1CustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.networkConnectivityv1CustomEndpoint"></a>

```typescript
public readonly networkConnectivityv1CustomEndpoint: string;
```

- *Type:* string

---

##### `networkManagementCustomEndpoint`<sup>Optional</sup> <a name="networkManagementCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.networkManagementCustomEndpoint"></a>

```typescript
public readonly networkManagementCustomEndpoint: string;
```

- *Type:* string

---

##### `networkSecurityCustomEndpoint`<sup>Optional</sup> <a name="networkSecurityCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.networkSecurityCustomEndpoint"></a>

```typescript
public readonly networkSecurityCustomEndpoint: string;
```

- *Type:* string

---

##### `networkServicesCustomEndpoint`<sup>Optional</sup> <a name="networkServicesCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.networkServicesCustomEndpoint"></a>

```typescript
public readonly networkServicesCustomEndpoint: string;
```

- *Type:* string

---

##### `notebooksCustomEndpoint`<sup>Optional</sup> <a name="notebooksCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.notebooksCustomEndpoint"></a>

```typescript
public readonly notebooksCustomEndpoint: string;
```

- *Type:* string

---

##### `observabilityCustomEndpoint`<sup>Optional</sup> <a name="observabilityCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.observabilityCustomEndpoint"></a>

```typescript
public readonly observabilityCustomEndpoint: string;
```

- *Type:* string

---

##### `oracleDatabaseCustomEndpoint`<sup>Optional</sup> <a name="oracleDatabaseCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.oracleDatabaseCustomEndpoint"></a>

```typescript
public readonly oracleDatabaseCustomEndpoint: string;
```

- *Type:* string

---

##### `orgPolicyCustomEndpoint`<sup>Optional</sup> <a name="orgPolicyCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.orgPolicyCustomEndpoint"></a>

```typescript
public readonly orgPolicyCustomEndpoint: string;
```

- *Type:* string

---

##### `osConfigCustomEndpoint`<sup>Optional</sup> <a name="osConfigCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.osConfigCustomEndpoint"></a>

```typescript
public readonly osConfigCustomEndpoint: string;
```

- *Type:* string

---

##### `osConfigV2CustomEndpoint`<sup>Optional</sup> <a name="osConfigV2CustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.osConfigV2CustomEndpoint"></a>

```typescript
public readonly osConfigV2CustomEndpoint: string;
```

- *Type:* string

---

##### `osLoginCustomEndpoint`<sup>Optional</sup> <a name="osLoginCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.osLoginCustomEndpoint"></a>

```typescript
public readonly osLoginCustomEndpoint: string;
```

- *Type:* string

---

##### `parallelstoreCustomEndpoint`<sup>Optional</sup> <a name="parallelstoreCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.parallelstoreCustomEndpoint"></a>

```typescript
public readonly parallelstoreCustomEndpoint: string;
```

- *Type:* string

---

##### `parameterManagerCustomEndpoint`<sup>Optional</sup> <a name="parameterManagerCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.parameterManagerCustomEndpoint"></a>

```typescript
public readonly parameterManagerCustomEndpoint: string;
```

- *Type:* string

---

##### `parameterManagerRegionalCustomEndpoint`<sup>Optional</sup> <a name="parameterManagerRegionalCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.parameterManagerRegionalCustomEndpoint"></a>

```typescript
public readonly parameterManagerRegionalCustomEndpoint: string;
```

- *Type:* string

---

##### `pollInterval`<sup>Optional</sup> <a name="pollInterval" id="@cdktn/provider-google.provider.GoogleProvider.property.pollInterval"></a>

```typescript
public readonly pollInterval: string;
```

- *Type:* string

---

##### `preferGlobalEndpoints`<sup>Optional</sup> <a name="preferGlobalEndpoints" id="@cdktn/provider-google.provider.GoogleProvider.property.preferGlobalEndpoints"></a>

```typescript
public readonly preferGlobalEndpoints: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `preferRegionalEndpoints`<sup>Optional</sup> <a name="preferRegionalEndpoints" id="@cdktn/provider-google.provider.GoogleProvider.property.preferRegionalEndpoints"></a>

```typescript
public readonly preferRegionalEndpoints: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `privatecaCustomEndpoint`<sup>Optional</sup> <a name="privatecaCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.privatecaCustomEndpoint"></a>

```typescript
public readonly privatecaCustomEndpoint: string;
```

- *Type:* string

---

##### `privilegedAccessManagerCustomEndpoint`<sup>Optional</sup> <a name="privilegedAccessManagerCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.privilegedAccessManagerCustomEndpoint"></a>

```typescript
public readonly privilegedAccessManagerCustomEndpoint: string;
```

- *Type:* string

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.provider.GoogleProvider.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `publicCaCustomEndpoint`<sup>Optional</sup> <a name="publicCaCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.publicCaCustomEndpoint"></a>

```typescript
public readonly publicCaCustomEndpoint: string;
```

- *Type:* string

---

##### `pubsubCustomEndpoint`<sup>Optional</sup> <a name="pubsubCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.pubsubCustomEndpoint"></a>

```typescript
public readonly pubsubCustomEndpoint: string;
```

- *Type:* string

---

##### `pubsubLiteCustomEndpoint`<sup>Optional</sup> <a name="pubsubLiteCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.pubsubLiteCustomEndpoint"></a>

```typescript
public readonly pubsubLiteCustomEndpoint: string;
```

- *Type:* string

---

##### `recaptchaEnterpriseCustomEndpoint`<sup>Optional</sup> <a name="recaptchaEnterpriseCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.recaptchaEnterpriseCustomEndpoint"></a>

```typescript
public readonly recaptchaEnterpriseCustomEndpoint: string;
```

- *Type:* string

---

##### `redisCustomEndpoint`<sup>Optional</sup> <a name="redisCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.redisCustomEndpoint"></a>

```typescript
public readonly redisCustomEndpoint: string;
```

- *Type:* string

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google.provider.GoogleProvider.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `requestReason`<sup>Optional</sup> <a name="requestReason" id="@cdktn/provider-google.provider.GoogleProvider.property.requestReason"></a>

```typescript
public readonly requestReason: string;
```

- *Type:* string

---

##### `requestTimeout`<sup>Optional</sup> <a name="requestTimeout" id="@cdktn/provider-google.provider.GoogleProvider.property.requestTimeout"></a>

```typescript
public readonly requestTimeout: string;
```

- *Type:* string

---

##### `resourceManager3CustomEndpoint`<sup>Optional</sup> <a name="resourceManager3CustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.resourceManager3CustomEndpoint"></a>

```typescript
public readonly resourceManager3CustomEndpoint: string;
```

- *Type:* string

---

##### `resourceManagerCustomEndpoint`<sup>Optional</sup> <a name="resourceManagerCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.resourceManagerCustomEndpoint"></a>

```typescript
public readonly resourceManagerCustomEndpoint: string;
```

- *Type:* string

---

##### `resourceManagerV3CustomEndpoint`<sup>Optional</sup> <a name="resourceManagerV3CustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.resourceManagerV3CustomEndpoint"></a>

```typescript
public readonly resourceManagerV3CustomEndpoint: string;
```

- *Type:* string

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktn/provider-google.provider.GoogleProvider.property.scopes"></a>

```typescript
public readonly scopes: string[];
```

- *Type:* string[]

---

##### `secretManagerCustomEndpoint`<sup>Optional</sup> <a name="secretManagerCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.secretManagerCustomEndpoint"></a>

```typescript
public readonly secretManagerCustomEndpoint: string;
```

- *Type:* string

---

##### `secretManagerRegionalCustomEndpoint`<sup>Optional</sup> <a name="secretManagerRegionalCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.secretManagerRegionalCustomEndpoint"></a>

```typescript
public readonly secretManagerRegionalCustomEndpoint: string;
```

- *Type:* string

---

##### `secureSourceManagerCustomEndpoint`<sup>Optional</sup> <a name="secureSourceManagerCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.secureSourceManagerCustomEndpoint"></a>

```typescript
public readonly secureSourceManagerCustomEndpoint: string;
```

- *Type:* string

---

##### `securityCenterCustomEndpoint`<sup>Optional</sup> <a name="securityCenterCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.securityCenterCustomEndpoint"></a>

```typescript
public readonly securityCenterCustomEndpoint: string;
```

- *Type:* string

---

##### `securityCenterManagementCustomEndpoint`<sup>Optional</sup> <a name="securityCenterManagementCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.securityCenterManagementCustomEndpoint"></a>

```typescript
public readonly securityCenterManagementCustomEndpoint: string;
```

- *Type:* string

---

##### `securityCenterV2CustomEndpoint`<sup>Optional</sup> <a name="securityCenterV2CustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.securityCenterV2CustomEndpoint"></a>

```typescript
public readonly securityCenterV2CustomEndpoint: string;
```

- *Type:* string

---

##### `securitypostureCustomEndpoint`<sup>Optional</sup> <a name="securitypostureCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.securitypostureCustomEndpoint"></a>

```typescript
public readonly securitypostureCustomEndpoint: string;
```

- *Type:* string

---

##### `serviceDirectoryCustomEndpoint`<sup>Optional</sup> <a name="serviceDirectoryCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.serviceDirectoryCustomEndpoint"></a>

```typescript
public readonly serviceDirectoryCustomEndpoint: string;
```

- *Type:* string

---

##### `serviceManagementCustomEndpoint`<sup>Optional</sup> <a name="serviceManagementCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.serviceManagementCustomEndpoint"></a>

```typescript
public readonly serviceManagementCustomEndpoint: string;
```

- *Type:* string

---

##### `serviceNetworkingCustomEndpoint`<sup>Optional</sup> <a name="serviceNetworkingCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.serviceNetworkingCustomEndpoint"></a>

```typescript
public readonly serviceNetworkingCustomEndpoint: string;
```

- *Type:* string

---

##### `serviceUsageCustomEndpoint`<sup>Optional</sup> <a name="serviceUsageCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.serviceUsageCustomEndpoint"></a>

```typescript
public readonly serviceUsageCustomEndpoint: string;
```

- *Type:* string

---

##### `siteVerificationCustomEndpoint`<sup>Optional</sup> <a name="siteVerificationCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.siteVerificationCustomEndpoint"></a>

```typescript
public readonly siteVerificationCustomEndpoint: string;
```

- *Type:* string

---

##### `sourceRepoCustomEndpoint`<sup>Optional</sup> <a name="sourceRepoCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.sourceRepoCustomEndpoint"></a>

```typescript
public readonly sourceRepoCustomEndpoint: string;
```

- *Type:* string

---

##### `spannerCustomEndpoint`<sup>Optional</sup> <a name="spannerCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.spannerCustomEndpoint"></a>

```typescript
public readonly spannerCustomEndpoint: string;
```

- *Type:* string

---

##### `sqlCustomEndpoint`<sup>Optional</sup> <a name="sqlCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.sqlCustomEndpoint"></a>

```typescript
public readonly sqlCustomEndpoint: string;
```

- *Type:* string

---

##### `storageBatchOperationsCustomEndpoint`<sup>Optional</sup> <a name="storageBatchOperationsCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.storageBatchOperationsCustomEndpoint"></a>

```typescript
public readonly storageBatchOperationsCustomEndpoint: string;
```

- *Type:* string

---

##### `storageControlCustomEndpoint`<sup>Optional</sup> <a name="storageControlCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.storageControlCustomEndpoint"></a>

```typescript
public readonly storageControlCustomEndpoint: string;
```

- *Type:* string

---

##### `storageCustomEndpoint`<sup>Optional</sup> <a name="storageCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.storageCustomEndpoint"></a>

```typescript
public readonly storageCustomEndpoint: string;
```

- *Type:* string

---

##### `storageInsightsCustomEndpoint`<sup>Optional</sup> <a name="storageInsightsCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.storageInsightsCustomEndpoint"></a>

```typescript
public readonly storageInsightsCustomEndpoint: string;
```

- *Type:* string

---

##### `storageTransferCustomEndpoint`<sup>Optional</sup> <a name="storageTransferCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.storageTransferCustomEndpoint"></a>

```typescript
public readonly storageTransferCustomEndpoint: string;
```

- *Type:* string

---

##### `tagsCustomEndpoint`<sup>Optional</sup> <a name="tagsCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.tagsCustomEndpoint"></a>

```typescript
public readonly tagsCustomEndpoint: string;
```

- *Type:* string

---

##### `tagsLocationCustomEndpoint`<sup>Optional</sup> <a name="tagsLocationCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.tagsLocationCustomEndpoint"></a>

```typescript
public readonly tagsLocationCustomEndpoint: string;
```

- *Type:* string

---

##### `terraformAttributionLabelAdditionStrategy`<sup>Optional</sup> <a name="terraformAttributionLabelAdditionStrategy" id="@cdktn/provider-google.provider.GoogleProvider.property.terraformAttributionLabelAdditionStrategy"></a>

```typescript
public readonly terraformAttributionLabelAdditionStrategy: string;
```

- *Type:* string

---

##### `transcoderCustomEndpoint`<sup>Optional</sup> <a name="transcoderCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.transcoderCustomEndpoint"></a>

```typescript
public readonly transcoderCustomEndpoint: string;
```

- *Type:* string

---

##### `universeDomain`<sup>Optional</sup> <a name="universeDomain" id="@cdktn/provider-google.provider.GoogleProvider.property.universeDomain"></a>

```typescript
public readonly universeDomain: string;
```

- *Type:* string

---

##### `userProjectOverride`<sup>Optional</sup> <a name="userProjectOverride" id="@cdktn/provider-google.provider.GoogleProvider.property.userProjectOverride"></a>

```typescript
public readonly userProjectOverride: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `vectorSearchCustomEndpoint`<sup>Optional</sup> <a name="vectorSearchCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.vectorSearchCustomEndpoint"></a>

```typescript
public readonly vectorSearchCustomEndpoint: string;
```

- *Type:* string

---

##### `vertexAiCustomEndpoint`<sup>Optional</sup> <a name="vertexAiCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.vertexAiCustomEndpoint"></a>

```typescript
public readonly vertexAiCustomEndpoint: string;
```

- *Type:* string

---

##### `vmwareengineCustomEndpoint`<sup>Optional</sup> <a name="vmwareengineCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.vmwareengineCustomEndpoint"></a>

```typescript
public readonly vmwareengineCustomEndpoint: string;
```

- *Type:* string

---

##### `vpcAccessCustomEndpoint`<sup>Optional</sup> <a name="vpcAccessCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.vpcAccessCustomEndpoint"></a>

```typescript
public readonly vpcAccessCustomEndpoint: string;
```

- *Type:* string

---

##### `workbenchCustomEndpoint`<sup>Optional</sup> <a name="workbenchCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.workbenchCustomEndpoint"></a>

```typescript
public readonly workbenchCustomEndpoint: string;
```

- *Type:* string

---

##### `workflowsCustomEndpoint`<sup>Optional</sup> <a name="workflowsCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.workflowsCustomEndpoint"></a>

```typescript
public readonly workflowsCustomEndpoint: string;
```

- *Type:* string

---

##### `workloadIdentityCustomEndpoint`<sup>Optional</sup> <a name="workloadIdentityCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.workloadIdentityCustomEndpoint"></a>

```typescript
public readonly workloadIdentityCustomEndpoint: string;
```

- *Type:* string

---

##### `workstationsCustomEndpoint`<sup>Optional</sup> <a name="workstationsCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProvider.property.workstationsCustomEndpoint"></a>

```typescript
public readonly workstationsCustomEndpoint: string;
```

- *Type:* string

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktn/provider-google.provider.GoogleProvider.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.provider.GoogleProvider.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.provider.GoogleProvider.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleProviderBatching <a name="GoogleProviderBatching" id="@cdktn/provider-google.provider.GoogleProviderBatching"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.provider.GoogleProviderBatching.Initializer"></a>

```typescript
import { provider } from '@cdktn/provider-google'

const googleProviderBatching: provider.GoogleProviderBatching = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderBatching.property.enableBatching">enableBatching</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#enable_batching GoogleProvider#enable_batching}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderBatching.property.sendAfter">sendAfter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#send_after GoogleProvider#send_after}. |

---

##### `enableBatching`<sup>Optional</sup> <a name="enableBatching" id="@cdktn/provider-google.provider.GoogleProviderBatching.property.enableBatching"></a>

```typescript
public readonly enableBatching: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#enable_batching GoogleProvider#enable_batching}.

---

##### `sendAfter`<sup>Optional</sup> <a name="sendAfter" id="@cdktn/provider-google.provider.GoogleProviderBatching.property.sendAfter"></a>

```typescript
public readonly sendAfter: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#send_after GoogleProvider#send_after}.

---

### GoogleProviderConfig <a name="GoogleProviderConfig" id="@cdktn/provider-google.provider.GoogleProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.provider.GoogleProviderConfig.Initializer"></a>

```typescript
import { provider } from '@cdktn/provider-google'

const googleProviderConfig: provider.GoogleProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.accessApprovalCustomEndpoint">accessApprovalCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#access_approval_custom_endpoint GoogleProvider#access_approval_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.accessContextManagerCustomEndpoint">accessContextManagerCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#access_context_manager_custom_endpoint GoogleProvider#access_context_manager_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.accessToken">accessToken</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#access_token GoogleProvider#access_token}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.activeDirectoryCustomEndpoint">activeDirectoryCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#active_directory_custom_endpoint GoogleProvider#active_directory_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.addTerraformAttributionLabel">addTerraformAttributionLabel</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#add_terraform_attribution_label GoogleProvider#add_terraform_attribution_label}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.agentRegistryCustomEndpoint">agentRegistryCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#agent_registry_custom_endpoint GoogleProvider#agent_registry_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.alias">alias</a></code> | <code>string</code> | Alias name. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.alloydbCustomEndpoint">alloydbCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#alloydb_custom_endpoint GoogleProvider#alloydb_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.apigeeCustomEndpoint">apigeeCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#apigee_custom_endpoint GoogleProvider#apigee_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.apihubCustomEndpoint">apihubCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#apihub_custom_endpoint GoogleProvider#apihub_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.apikeysCustomEndpoint">apikeysCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#apikeys_custom_endpoint GoogleProvider#apikeys_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.appEngineCustomEndpoint">appEngineCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#app_engine_custom_endpoint GoogleProvider#app_engine_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.apphubCustomEndpoint">apphubCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#apphub_custom_endpoint GoogleProvider#apphub_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.artifactRegistryCustomEndpoint">artifactRegistryCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#artifact_registry_custom_endpoint GoogleProvider#artifact_registry_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.assuredWorkloadsCustomEndpoint">assuredWorkloadsCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#assured_workloads_custom_endpoint GoogleProvider#assured_workloads_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.backupDrCustomEndpoint">backupDrCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#backup_dr_custom_endpoint GoogleProvider#backup_dr_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.batching">batching</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.provider.GoogleProviderBatching">GoogleProviderBatching</a>[]</code> | batching block. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.beyondcorpCustomEndpoint">beyondcorpCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#beyondcorp_custom_endpoint GoogleProvider#beyondcorp_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.biglakeCustomEndpoint">biglakeCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#biglake_custom_endpoint GoogleProvider#biglake_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.biglakeHiveCustomEndpoint">biglakeHiveCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#biglake_hive_custom_endpoint GoogleProvider#biglake_hive_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.biglakeIcebergCustomEndpoint">biglakeIcebergCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#biglake_iceberg_custom_endpoint GoogleProvider#biglake_iceberg_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.bigqueryAnalyticsHubCustomEndpoint">bigqueryAnalyticsHubCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#bigquery_analytics_hub_custom_endpoint GoogleProvider#bigquery_analytics_hub_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.bigqueryConnectionCustomEndpoint">bigqueryConnectionCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#bigquery_connection_custom_endpoint GoogleProvider#bigquery_connection_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.bigQueryCustomEndpoint">bigQueryCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#big_query_custom_endpoint GoogleProvider#big_query_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.bigqueryDatapolicyCustomEndpoint">bigqueryDatapolicyCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#bigquery_datapolicy_custom_endpoint GoogleProvider#bigquery_datapolicy_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.bigqueryDatapolicyv2CustomEndpoint">bigqueryDatapolicyv2CustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#bigquery_datapolicyv2_custom_endpoint GoogleProvider#bigquery_datapolicyv2_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.bigqueryDataTransferCustomEndpoint">bigqueryDataTransferCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#bigquery_data_transfer_custom_endpoint GoogleProvider#bigquery_data_transfer_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.bigqueryReservationCustomEndpoint">bigqueryReservationCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#bigquery_reservation_custom_endpoint GoogleProvider#bigquery_reservation_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.bigtableCustomEndpoint">bigtableCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#bigtable_custom_endpoint GoogleProvider#bigtable_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.billingBudgetsCustomEndpoint">billingBudgetsCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#billing_budgets_custom_endpoint GoogleProvider#billing_budgets_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.billingCustomEndpoint">billingCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#billing_custom_endpoint GoogleProvider#billing_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.billingProject">billingProject</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#billing_project GoogleProvider#billing_project}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.binaryAuthorizationCustomEndpoint">binaryAuthorizationCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#binary_authorization_custom_endpoint GoogleProvider#binary_authorization_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.blockchainNodeEngineCustomEndpoint">blockchainNodeEngineCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#blockchain_node_engine_custom_endpoint GoogleProvider#blockchain_node_engine_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.certificateManagerCustomEndpoint">certificateManagerCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#certificate_manager_custom_endpoint GoogleProvider#certificate_manager_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.cesCustomEndpoint">cesCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#ces_custom_endpoint GoogleProvider#ces_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.chronicleCustomEndpoint">chronicleCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#chronicle_custom_endpoint GoogleProvider#chronicle_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.cloudAssetCustomEndpoint">cloudAssetCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#cloud_asset_custom_endpoint GoogleProvider#cloud_asset_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.cloudBillingCustomEndpoint">cloudBillingCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#cloud_billing_custom_endpoint GoogleProvider#cloud_billing_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.cloudBuildCustomEndpoint">cloudBuildCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#cloud_build_custom_endpoint GoogleProvider#cloud_build_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.cloudbuildv2CustomEndpoint">cloudbuildv2CustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#cloudbuildv2_custom_endpoint GoogleProvider#cloudbuildv2_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.clouddeployCustomEndpoint">clouddeployCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#clouddeploy_custom_endpoint GoogleProvider#clouddeploy_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.clouddomainsCustomEndpoint">clouddomainsCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#clouddomains_custom_endpoint GoogleProvider#clouddomains_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.cloudfunctions2CustomEndpoint">cloudfunctions2CustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#cloudfunctions2_custom_endpoint GoogleProvider#cloudfunctions2_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.cloudFunctionsCustomEndpoint">cloudFunctionsCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#cloud_functions_custom_endpoint GoogleProvider#cloud_functions_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.cloudIdentityCustomEndpoint">cloudIdentityCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#cloud_identity_custom_endpoint GoogleProvider#cloud_identity_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.cloudIdsCustomEndpoint">cloudIdsCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#cloud_ids_custom_endpoint GoogleProvider#cloud_ids_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.cloudQuotasCustomEndpoint">cloudQuotasCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#cloud_quotas_custom_endpoint GoogleProvider#cloud_quotas_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.cloudResourceManagerCustomEndpoint">cloudResourceManagerCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#cloud_resource_manager_custom_endpoint GoogleProvider#cloud_resource_manager_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.cloudRunCustomEndpoint">cloudRunCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#cloud_run_custom_endpoint GoogleProvider#cloud_run_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.cloudRunV2CustomEndpoint">cloudRunV2CustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#cloud_run_v2_custom_endpoint GoogleProvider#cloud_run_v2_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.cloudSchedulerCustomEndpoint">cloudSchedulerCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#cloud_scheduler_custom_endpoint GoogleProvider#cloud_scheduler_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.cloudSecurityComplianceCustomEndpoint">cloudSecurityComplianceCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#cloud_security_compliance_custom_endpoint GoogleProvider#cloud_security_compliance_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.cloudTasksCustomEndpoint">cloudTasksCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#cloud_tasks_custom_endpoint GoogleProvider#cloud_tasks_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.colabCustomEndpoint">colabCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#colab_custom_endpoint GoogleProvider#colab_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.composerCustomEndpoint">composerCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#composer_custom_endpoint GoogleProvider#composer_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.computeCustomEndpoint">computeCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#compute_custom_endpoint GoogleProvider#compute_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.configCustomEndpoint">configCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#config_custom_endpoint GoogleProvider#config_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.contactCenterInsightsCustomEndpoint">contactCenterInsightsCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#contact_center_insights_custom_endpoint GoogleProvider#contact_center_insights_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.containerAnalysisCustomEndpoint">containerAnalysisCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#container_analysis_custom_endpoint GoogleProvider#container_analysis_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.containerAttachedCustomEndpoint">containerAttachedCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#container_attached_custom_endpoint GoogleProvider#container_attached_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.containerAwsCustomEndpoint">containerAwsCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#container_aws_custom_endpoint GoogleProvider#container_aws_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.containerAzureCustomEndpoint">containerAzureCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#container_azure_custom_endpoint GoogleProvider#container_azure_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.containerCustomEndpoint">containerCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#container_custom_endpoint GoogleProvider#container_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.coreBillingCustomEndpoint">coreBillingCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#core_billing_custom_endpoint GoogleProvider#core_billing_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.credentials">credentials</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#credentials GoogleProvider#credentials}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.databaseMigrationServiceCustomEndpoint">databaseMigrationServiceCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#database_migration_service_custom_endpoint GoogleProvider#database_migration_service_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.dataCatalogCustomEndpoint">dataCatalogCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#data_catalog_custom_endpoint GoogleProvider#data_catalog_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.dataflowCustomEndpoint">dataflowCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#dataflow_custom_endpoint GoogleProvider#dataflow_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.dataformCustomEndpoint">dataformCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#dataform_custom_endpoint GoogleProvider#dataform_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.dataFusionCustomEndpoint">dataFusionCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#data_fusion_custom_endpoint GoogleProvider#data_fusion_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.dataLineageCustomEndpoint">dataLineageCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#data_lineage_custom_endpoint GoogleProvider#data_lineage_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.dataLossPreventionCustomEndpoint">dataLossPreventionCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#data_loss_prevention_custom_endpoint GoogleProvider#data_loss_prevention_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.dataPipelineCustomEndpoint">dataPipelineCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#data_pipeline_custom_endpoint GoogleProvider#data_pipeline_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.dataplexCustomEndpoint">dataplexCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#dataplex_custom_endpoint GoogleProvider#dataplex_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.dataprocCustomEndpoint">dataprocCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#dataproc_custom_endpoint GoogleProvider#dataproc_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.dataprocGdcCustomEndpoint">dataprocGdcCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#dataproc_gdc_custom_endpoint GoogleProvider#dataproc_gdc_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.dataprocMetastoreCustomEndpoint">dataprocMetastoreCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#dataproc_metastore_custom_endpoint GoogleProvider#dataproc_metastore_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.datastreamCustomEndpoint">datastreamCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#datastream_custom_endpoint GoogleProvider#datastream_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.defaultLabels">defaultLabels</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#default_labels GoogleProvider#default_labels}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#deletion_policy GoogleProvider#deletion_policy}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.deploymentManagerCustomEndpoint">deploymentManagerCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#deployment_manager_custom_endpoint GoogleProvider#deployment_manager_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.developerConnectCustomEndpoint">developerConnectCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#developer_connect_custom_endpoint GoogleProvider#developer_connect_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.dialogflowCustomEndpoint">dialogflowCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#dialogflow_custom_endpoint GoogleProvider#dialogflow_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.dialogflowCxCustomEndpoint">dialogflowCxCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#dialogflow_cx_custom_endpoint GoogleProvider#dialogflow_cx_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.discoveryEngineCustomEndpoint">discoveryEngineCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#discovery_engine_custom_endpoint GoogleProvider#discovery_engine_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.dnsCustomEndpoint">dnsCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#dns_custom_endpoint GoogleProvider#dns_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.documentAiCustomEndpoint">documentAiCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#document_ai_custom_endpoint GoogleProvider#document_ai_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.documentAiWarehouseCustomEndpoint">documentAiWarehouseCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#document_ai_warehouse_custom_endpoint GoogleProvider#document_ai_warehouse_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.edgecontainerCustomEndpoint">edgecontainerCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#edgecontainer_custom_endpoint GoogleProvider#edgecontainer_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.edgenetworkCustomEndpoint">edgenetworkCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#edgenetwork_custom_endpoint GoogleProvider#edgenetwork_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.essentialContactsCustomEndpoint">essentialContactsCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#essential_contacts_custom_endpoint GoogleProvider#essential_contacts_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.eventarcCustomEndpoint">eventarcCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#eventarc_custom_endpoint GoogleProvider#eventarc_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.externalCredentials">externalCredentials</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.provider.GoogleProviderExternalCredentials">GoogleProviderExternalCredentials</a>[]</code> | external_credentials block. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.filestoreCustomEndpoint">filestoreCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#filestore_custom_endpoint GoogleProvider#filestore_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.firebaseAppCheckCustomEndpoint">firebaseAppCheckCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#firebase_app_check_custom_endpoint GoogleProvider#firebase_app_check_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.firebaseAppHostingCustomEndpoint">firebaseAppHostingCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#firebase_app_hosting_custom_endpoint GoogleProvider#firebase_app_hosting_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.firebaseDataConnectCustomEndpoint">firebaseDataConnectCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#firebase_data_connect_custom_endpoint GoogleProvider#firebase_data_connect_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.firebaseRemoteConfigCustomEndpoint">firebaseRemoteConfigCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#firebase_remote_config_custom_endpoint GoogleProvider#firebase_remote_config_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.firebaserulesCustomEndpoint">firebaserulesCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#firebaserules_custom_endpoint GoogleProvider#firebaserules_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.firestoreCustomEndpoint">firestoreCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#firestore_custom_endpoint GoogleProvider#firestore_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.geminiCustomEndpoint">geminiCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#gemini_custom_endpoint GoogleProvider#gemini_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.gkeBackupCustomEndpoint">gkeBackupCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#gke_backup_custom_endpoint GoogleProvider#gke_backup_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.gkeHub2CustomEndpoint">gkeHub2CustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#gke_hub2_custom_endpoint GoogleProvider#gke_hub2_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.gkeHubCustomEndpoint">gkeHubCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#gke_hub_custom_endpoint GoogleProvider#gke_hub_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.gkeonpremCustomEndpoint">gkeonpremCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#gkeonprem_custom_endpoint GoogleProvider#gkeonprem_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.healthcareCustomEndpoint">healthcareCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#healthcare_custom_endpoint GoogleProvider#healthcare_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.hypercomputeclusterCustomEndpoint">hypercomputeclusterCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#hypercomputecluster_custom_endpoint GoogleProvider#hypercomputecluster_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.iam2CustomEndpoint">iam2CustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#iam2_custom_endpoint GoogleProvider#iam2_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.iam3CustomEndpoint">iam3CustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#iam3_custom_endpoint GoogleProvider#iam3_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.iamBetaCustomEndpoint">iamBetaCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#iam_beta_custom_endpoint GoogleProvider#iam_beta_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.iamCredentialsCustomEndpoint">iamCredentialsCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#iam_credentials_custom_endpoint GoogleProvider#iam_credentials_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.iamCustomEndpoint">iamCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#iam_custom_endpoint GoogleProvider#iam_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.iamWorkforcePoolCustomEndpoint">iamWorkforcePoolCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#iam_workforce_pool_custom_endpoint GoogleProvider#iam_workforce_pool_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.iapCustomEndpoint">iapCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#iap_custom_endpoint GoogleProvider#iap_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.identityPlatformCustomEndpoint">identityPlatformCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#identity_platform_custom_endpoint GoogleProvider#identity_platform_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.impersonateServiceAccount">impersonateServiceAccount</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#impersonate_service_account GoogleProvider#impersonate_service_account}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.impersonateServiceAccountDelegates">impersonateServiceAccountDelegates</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#impersonate_service_account_delegates GoogleProvider#impersonate_service_account_delegates}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.integrationConnectorsCustomEndpoint">integrationConnectorsCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#integration_connectors_custom_endpoint GoogleProvider#integration_connectors_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.integrationsCustomEndpoint">integrationsCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#integrations_custom_endpoint GoogleProvider#integrations_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.kmsCustomEndpoint">kmsCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#kms_custom_endpoint GoogleProvider#kms_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.licenseManagerCustomEndpoint">licenseManagerCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#license_manager_custom_endpoint GoogleProvider#license_manager_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.loggingCustomEndpoint">loggingCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#logging_custom_endpoint GoogleProvider#logging_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.lookerCustomEndpoint">lookerCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#looker_custom_endpoint GoogleProvider#looker_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.lustreCustomEndpoint">lustreCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#lustre_custom_endpoint GoogleProvider#lustre_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.managedKafkaCustomEndpoint">managedKafkaCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#managed_kafka_custom_endpoint GoogleProvider#managed_kafka_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.memcacheCustomEndpoint">memcacheCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#memcache_custom_endpoint GoogleProvider#memcache_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.memorystoreCustomEndpoint">memorystoreCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#memorystore_custom_endpoint GoogleProvider#memorystore_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.migrationCenterCustomEndpoint">migrationCenterCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#migration_center_custom_endpoint GoogleProvider#migration_center_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.mlEngineCustomEndpoint">mlEngineCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#ml_engine_custom_endpoint GoogleProvider#ml_engine_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.modelArmorCustomEndpoint">modelArmorCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#model_armor_custom_endpoint GoogleProvider#model_armor_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.modelArmorGlobalCustomEndpoint">modelArmorGlobalCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#model_armor_global_custom_endpoint GoogleProvider#model_armor_global_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.monitoringCustomEndpoint">monitoringCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#monitoring_custom_endpoint GoogleProvider#monitoring_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.netappCustomEndpoint">netappCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#netapp_custom_endpoint GoogleProvider#netapp_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.networkConnectivityCustomEndpoint">networkConnectivityCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#network_connectivity_custom_endpoint GoogleProvider#network_connectivity_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.networkConnectivityv1CustomEndpoint">networkConnectivityv1CustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#network_connectivityv1_custom_endpoint GoogleProvider#network_connectivityv1_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.networkManagementCustomEndpoint">networkManagementCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#network_management_custom_endpoint GoogleProvider#network_management_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.networkSecurityCustomEndpoint">networkSecurityCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#network_security_custom_endpoint GoogleProvider#network_security_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.networkServicesCustomEndpoint">networkServicesCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#network_services_custom_endpoint GoogleProvider#network_services_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.notebooksCustomEndpoint">notebooksCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#notebooks_custom_endpoint GoogleProvider#notebooks_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.observabilityCustomEndpoint">observabilityCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#observability_custom_endpoint GoogleProvider#observability_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.oracleDatabaseCustomEndpoint">oracleDatabaseCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#oracle_database_custom_endpoint GoogleProvider#oracle_database_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.orgPolicyCustomEndpoint">orgPolicyCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#org_policy_custom_endpoint GoogleProvider#org_policy_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.osConfigCustomEndpoint">osConfigCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#os_config_custom_endpoint GoogleProvider#os_config_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.osConfigV2CustomEndpoint">osConfigV2CustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#os_config_v2_custom_endpoint GoogleProvider#os_config_v2_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.osLoginCustomEndpoint">osLoginCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#os_login_custom_endpoint GoogleProvider#os_login_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.parallelstoreCustomEndpoint">parallelstoreCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#parallelstore_custom_endpoint GoogleProvider#parallelstore_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.parameterManagerCustomEndpoint">parameterManagerCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#parameter_manager_custom_endpoint GoogleProvider#parameter_manager_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.parameterManagerRegionalCustomEndpoint">parameterManagerRegionalCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#parameter_manager_regional_custom_endpoint GoogleProvider#parameter_manager_regional_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.pollInterval">pollInterval</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#poll_interval GoogleProvider#poll_interval}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.preferGlobalEndpoints">preferGlobalEndpoints</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#prefer_global_endpoints GoogleProvider#prefer_global_endpoints}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.preferRegionalEndpoints">preferRegionalEndpoints</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#prefer_regional_endpoints GoogleProvider#prefer_regional_endpoints}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.privatecaCustomEndpoint">privatecaCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#privateca_custom_endpoint GoogleProvider#privateca_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.privilegedAccessManagerCustomEndpoint">privilegedAccessManagerCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#privileged_access_manager_custom_endpoint GoogleProvider#privileged_access_manager_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#project GoogleProvider#project}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.publicCaCustomEndpoint">publicCaCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#public_ca_custom_endpoint GoogleProvider#public_ca_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.pubsubCustomEndpoint">pubsubCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#pubsub_custom_endpoint GoogleProvider#pubsub_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.pubsubLiteCustomEndpoint">pubsubLiteCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#pubsub_lite_custom_endpoint GoogleProvider#pubsub_lite_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.recaptchaEnterpriseCustomEndpoint">recaptchaEnterpriseCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#recaptcha_enterprise_custom_endpoint GoogleProvider#recaptcha_enterprise_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.redisCustomEndpoint">redisCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#redis_custom_endpoint GoogleProvider#redis_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#region GoogleProvider#region}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.requestReason">requestReason</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#request_reason GoogleProvider#request_reason}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.requestTimeout">requestTimeout</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#request_timeout GoogleProvider#request_timeout}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.resourceManager3CustomEndpoint">resourceManager3CustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#resource_manager3_custom_endpoint GoogleProvider#resource_manager3_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.resourceManagerCustomEndpoint">resourceManagerCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#resource_manager_custom_endpoint GoogleProvider#resource_manager_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.resourceManagerV3CustomEndpoint">resourceManagerV3CustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#resource_manager_v3_custom_endpoint GoogleProvider#resource_manager_v3_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.scopes">scopes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#scopes GoogleProvider#scopes}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.secretManagerCustomEndpoint">secretManagerCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#secret_manager_custom_endpoint GoogleProvider#secret_manager_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.secretManagerRegionalCustomEndpoint">secretManagerRegionalCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#secret_manager_regional_custom_endpoint GoogleProvider#secret_manager_regional_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.secureSourceManagerCustomEndpoint">secureSourceManagerCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#secure_source_manager_custom_endpoint GoogleProvider#secure_source_manager_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.securityCenterCustomEndpoint">securityCenterCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#security_center_custom_endpoint GoogleProvider#security_center_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.securityCenterManagementCustomEndpoint">securityCenterManagementCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#security_center_management_custom_endpoint GoogleProvider#security_center_management_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.securityCenterV2CustomEndpoint">securityCenterV2CustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#security_center_v2_custom_endpoint GoogleProvider#security_center_v2_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.securitypostureCustomEndpoint">securitypostureCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#securityposture_custom_endpoint GoogleProvider#securityposture_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.serviceDirectoryCustomEndpoint">serviceDirectoryCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#service_directory_custom_endpoint GoogleProvider#service_directory_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.serviceManagementCustomEndpoint">serviceManagementCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#service_management_custom_endpoint GoogleProvider#service_management_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.serviceNetworkingCustomEndpoint">serviceNetworkingCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#service_networking_custom_endpoint GoogleProvider#service_networking_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.serviceUsageCustomEndpoint">serviceUsageCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#service_usage_custom_endpoint GoogleProvider#service_usage_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.siteVerificationCustomEndpoint">siteVerificationCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#site_verification_custom_endpoint GoogleProvider#site_verification_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.sourceRepoCustomEndpoint">sourceRepoCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#source_repo_custom_endpoint GoogleProvider#source_repo_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.spannerCustomEndpoint">spannerCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#spanner_custom_endpoint GoogleProvider#spanner_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.sqlCustomEndpoint">sqlCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#sql_custom_endpoint GoogleProvider#sql_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.storageBatchOperationsCustomEndpoint">storageBatchOperationsCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#storage_batch_operations_custom_endpoint GoogleProvider#storage_batch_operations_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.storageControlCustomEndpoint">storageControlCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#storage_control_custom_endpoint GoogleProvider#storage_control_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.storageCustomEndpoint">storageCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#storage_custom_endpoint GoogleProvider#storage_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.storageInsightsCustomEndpoint">storageInsightsCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#storage_insights_custom_endpoint GoogleProvider#storage_insights_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.storageTransferCustomEndpoint">storageTransferCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#storage_transfer_custom_endpoint GoogleProvider#storage_transfer_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.tagsCustomEndpoint">tagsCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#tags_custom_endpoint GoogleProvider#tags_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.tagsLocationCustomEndpoint">tagsLocationCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#tags_location_custom_endpoint GoogleProvider#tags_location_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.terraformAttributionLabelAdditionStrategy">terraformAttributionLabelAdditionStrategy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#terraform_attribution_label_addition_strategy GoogleProvider#terraform_attribution_label_addition_strategy}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.transcoderCustomEndpoint">transcoderCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#transcoder_custom_endpoint GoogleProvider#transcoder_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.universeDomain">universeDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#universe_domain GoogleProvider#universe_domain}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.userProjectOverride">userProjectOverride</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#user_project_override GoogleProvider#user_project_override}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.vectorSearchCustomEndpoint">vectorSearchCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#vector_search_custom_endpoint GoogleProvider#vector_search_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.vertexAiCustomEndpoint">vertexAiCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#vertex_ai_custom_endpoint GoogleProvider#vertex_ai_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.vmwareengineCustomEndpoint">vmwareengineCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#vmwareengine_custom_endpoint GoogleProvider#vmwareengine_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.vpcAccessCustomEndpoint">vpcAccessCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#vpc_access_custom_endpoint GoogleProvider#vpc_access_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.workbenchCustomEndpoint">workbenchCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#workbench_custom_endpoint GoogleProvider#workbench_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.workflowsCustomEndpoint">workflowsCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#workflows_custom_endpoint GoogleProvider#workflows_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.workloadIdentityCustomEndpoint">workloadIdentityCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#workload_identity_custom_endpoint GoogleProvider#workload_identity_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.workstationsCustomEndpoint">workstationsCustomEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#workstations_custom_endpoint GoogleProvider#workstations_custom_endpoint}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderConfig.property.zone">zone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#zone GoogleProvider#zone}. |

---

##### `accessApprovalCustomEndpoint`<sup>Optional</sup> <a name="accessApprovalCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.accessApprovalCustomEndpoint"></a>

```typescript
public readonly accessApprovalCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#access_approval_custom_endpoint GoogleProvider#access_approval_custom_endpoint}.

---

##### `accessContextManagerCustomEndpoint`<sup>Optional</sup> <a name="accessContextManagerCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.accessContextManagerCustomEndpoint"></a>

```typescript
public readonly accessContextManagerCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#access_context_manager_custom_endpoint GoogleProvider#access_context_manager_custom_endpoint}.

---

##### `accessToken`<sup>Optional</sup> <a name="accessToken" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.accessToken"></a>

```typescript
public readonly accessToken: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#access_token GoogleProvider#access_token}.

---

##### `activeDirectoryCustomEndpoint`<sup>Optional</sup> <a name="activeDirectoryCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.activeDirectoryCustomEndpoint"></a>

```typescript
public readonly activeDirectoryCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#active_directory_custom_endpoint GoogleProvider#active_directory_custom_endpoint}.

---

##### `addTerraformAttributionLabel`<sup>Optional</sup> <a name="addTerraformAttributionLabel" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.addTerraformAttributionLabel"></a>

```typescript
public readonly addTerraformAttributionLabel: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#add_terraform_attribution_label GoogleProvider#add_terraform_attribution_label}.

---

##### `agentRegistryCustomEndpoint`<sup>Optional</sup> <a name="agentRegistryCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.agentRegistryCustomEndpoint"></a>

```typescript
public readonly agentRegistryCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#agent_registry_custom_endpoint GoogleProvider#agent_registry_custom_endpoint}.

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#alias GoogleProvider#alias}

---

##### `alloydbCustomEndpoint`<sup>Optional</sup> <a name="alloydbCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.alloydbCustomEndpoint"></a>

```typescript
public readonly alloydbCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#alloydb_custom_endpoint GoogleProvider#alloydb_custom_endpoint}.

---

##### `apigeeCustomEndpoint`<sup>Optional</sup> <a name="apigeeCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.apigeeCustomEndpoint"></a>

```typescript
public readonly apigeeCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#apigee_custom_endpoint GoogleProvider#apigee_custom_endpoint}.

---

##### `apihubCustomEndpoint`<sup>Optional</sup> <a name="apihubCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.apihubCustomEndpoint"></a>

```typescript
public readonly apihubCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#apihub_custom_endpoint GoogleProvider#apihub_custom_endpoint}.

---

##### `apikeysCustomEndpoint`<sup>Optional</sup> <a name="apikeysCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.apikeysCustomEndpoint"></a>

```typescript
public readonly apikeysCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#apikeys_custom_endpoint GoogleProvider#apikeys_custom_endpoint}.

---

##### `appEngineCustomEndpoint`<sup>Optional</sup> <a name="appEngineCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.appEngineCustomEndpoint"></a>

```typescript
public readonly appEngineCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#app_engine_custom_endpoint GoogleProvider#app_engine_custom_endpoint}.

---

##### `apphubCustomEndpoint`<sup>Optional</sup> <a name="apphubCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.apphubCustomEndpoint"></a>

```typescript
public readonly apphubCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#apphub_custom_endpoint GoogleProvider#apphub_custom_endpoint}.

---

##### `artifactRegistryCustomEndpoint`<sup>Optional</sup> <a name="artifactRegistryCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.artifactRegistryCustomEndpoint"></a>

```typescript
public readonly artifactRegistryCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#artifact_registry_custom_endpoint GoogleProvider#artifact_registry_custom_endpoint}.

---

##### `assuredWorkloadsCustomEndpoint`<sup>Optional</sup> <a name="assuredWorkloadsCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.assuredWorkloadsCustomEndpoint"></a>

```typescript
public readonly assuredWorkloadsCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#assured_workloads_custom_endpoint GoogleProvider#assured_workloads_custom_endpoint}.

---

##### `backupDrCustomEndpoint`<sup>Optional</sup> <a name="backupDrCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.backupDrCustomEndpoint"></a>

```typescript
public readonly backupDrCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#backup_dr_custom_endpoint GoogleProvider#backup_dr_custom_endpoint}.

---

##### `batching`<sup>Optional</sup> <a name="batching" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.batching"></a>

```typescript
public readonly batching: IResolvable | GoogleProviderBatching[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.provider.GoogleProviderBatching">GoogleProviderBatching</a>[]

batching block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#batching GoogleProvider#batching}

---

##### `beyondcorpCustomEndpoint`<sup>Optional</sup> <a name="beyondcorpCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.beyondcorpCustomEndpoint"></a>

```typescript
public readonly beyondcorpCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#beyondcorp_custom_endpoint GoogleProvider#beyondcorp_custom_endpoint}.

---

##### `biglakeCustomEndpoint`<sup>Optional</sup> <a name="biglakeCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.biglakeCustomEndpoint"></a>

```typescript
public readonly biglakeCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#biglake_custom_endpoint GoogleProvider#biglake_custom_endpoint}.

---

##### `biglakeHiveCustomEndpoint`<sup>Optional</sup> <a name="biglakeHiveCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.biglakeHiveCustomEndpoint"></a>

```typescript
public readonly biglakeHiveCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#biglake_hive_custom_endpoint GoogleProvider#biglake_hive_custom_endpoint}.

---

##### `biglakeIcebergCustomEndpoint`<sup>Optional</sup> <a name="biglakeIcebergCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.biglakeIcebergCustomEndpoint"></a>

```typescript
public readonly biglakeIcebergCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#biglake_iceberg_custom_endpoint GoogleProvider#biglake_iceberg_custom_endpoint}.

---

##### `bigqueryAnalyticsHubCustomEndpoint`<sup>Optional</sup> <a name="bigqueryAnalyticsHubCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.bigqueryAnalyticsHubCustomEndpoint"></a>

```typescript
public readonly bigqueryAnalyticsHubCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#bigquery_analytics_hub_custom_endpoint GoogleProvider#bigquery_analytics_hub_custom_endpoint}.

---

##### `bigqueryConnectionCustomEndpoint`<sup>Optional</sup> <a name="bigqueryConnectionCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.bigqueryConnectionCustomEndpoint"></a>

```typescript
public readonly bigqueryConnectionCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#bigquery_connection_custom_endpoint GoogleProvider#bigquery_connection_custom_endpoint}.

---

##### `bigQueryCustomEndpoint`<sup>Optional</sup> <a name="bigQueryCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.bigQueryCustomEndpoint"></a>

```typescript
public readonly bigQueryCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#big_query_custom_endpoint GoogleProvider#big_query_custom_endpoint}.

---

##### `bigqueryDatapolicyCustomEndpoint`<sup>Optional</sup> <a name="bigqueryDatapolicyCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.bigqueryDatapolicyCustomEndpoint"></a>

```typescript
public readonly bigqueryDatapolicyCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#bigquery_datapolicy_custom_endpoint GoogleProvider#bigquery_datapolicy_custom_endpoint}.

---

##### `bigqueryDatapolicyv2CustomEndpoint`<sup>Optional</sup> <a name="bigqueryDatapolicyv2CustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.bigqueryDatapolicyv2CustomEndpoint"></a>

```typescript
public readonly bigqueryDatapolicyv2CustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#bigquery_datapolicyv2_custom_endpoint GoogleProvider#bigquery_datapolicyv2_custom_endpoint}.

---

##### `bigqueryDataTransferCustomEndpoint`<sup>Optional</sup> <a name="bigqueryDataTransferCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.bigqueryDataTransferCustomEndpoint"></a>

```typescript
public readonly bigqueryDataTransferCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#bigquery_data_transfer_custom_endpoint GoogleProvider#bigquery_data_transfer_custom_endpoint}.

---

##### `bigqueryReservationCustomEndpoint`<sup>Optional</sup> <a name="bigqueryReservationCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.bigqueryReservationCustomEndpoint"></a>

```typescript
public readonly bigqueryReservationCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#bigquery_reservation_custom_endpoint GoogleProvider#bigquery_reservation_custom_endpoint}.

---

##### `bigtableCustomEndpoint`<sup>Optional</sup> <a name="bigtableCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.bigtableCustomEndpoint"></a>

```typescript
public readonly bigtableCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#bigtable_custom_endpoint GoogleProvider#bigtable_custom_endpoint}.

---

##### `billingBudgetsCustomEndpoint`<sup>Optional</sup> <a name="billingBudgetsCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.billingBudgetsCustomEndpoint"></a>

```typescript
public readonly billingBudgetsCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#billing_budgets_custom_endpoint GoogleProvider#billing_budgets_custom_endpoint}.

---

##### `billingCustomEndpoint`<sup>Optional</sup> <a name="billingCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.billingCustomEndpoint"></a>

```typescript
public readonly billingCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#billing_custom_endpoint GoogleProvider#billing_custom_endpoint}.

---

##### `billingProject`<sup>Optional</sup> <a name="billingProject" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.billingProject"></a>

```typescript
public readonly billingProject: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#billing_project GoogleProvider#billing_project}.

---

##### `binaryAuthorizationCustomEndpoint`<sup>Optional</sup> <a name="binaryAuthorizationCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.binaryAuthorizationCustomEndpoint"></a>

```typescript
public readonly binaryAuthorizationCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#binary_authorization_custom_endpoint GoogleProvider#binary_authorization_custom_endpoint}.

---

##### `blockchainNodeEngineCustomEndpoint`<sup>Optional</sup> <a name="blockchainNodeEngineCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.blockchainNodeEngineCustomEndpoint"></a>

```typescript
public readonly blockchainNodeEngineCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#blockchain_node_engine_custom_endpoint GoogleProvider#blockchain_node_engine_custom_endpoint}.

---

##### `certificateManagerCustomEndpoint`<sup>Optional</sup> <a name="certificateManagerCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.certificateManagerCustomEndpoint"></a>

```typescript
public readonly certificateManagerCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#certificate_manager_custom_endpoint GoogleProvider#certificate_manager_custom_endpoint}.

---

##### `cesCustomEndpoint`<sup>Optional</sup> <a name="cesCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.cesCustomEndpoint"></a>

```typescript
public readonly cesCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#ces_custom_endpoint GoogleProvider#ces_custom_endpoint}.

---

##### `chronicleCustomEndpoint`<sup>Optional</sup> <a name="chronicleCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.chronicleCustomEndpoint"></a>

```typescript
public readonly chronicleCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#chronicle_custom_endpoint GoogleProvider#chronicle_custom_endpoint}.

---

##### `cloudAssetCustomEndpoint`<sup>Optional</sup> <a name="cloudAssetCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.cloudAssetCustomEndpoint"></a>

```typescript
public readonly cloudAssetCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#cloud_asset_custom_endpoint GoogleProvider#cloud_asset_custom_endpoint}.

---

##### `cloudBillingCustomEndpoint`<sup>Optional</sup> <a name="cloudBillingCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.cloudBillingCustomEndpoint"></a>

```typescript
public readonly cloudBillingCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#cloud_billing_custom_endpoint GoogleProvider#cloud_billing_custom_endpoint}.

---

##### `cloudBuildCustomEndpoint`<sup>Optional</sup> <a name="cloudBuildCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.cloudBuildCustomEndpoint"></a>

```typescript
public readonly cloudBuildCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#cloud_build_custom_endpoint GoogleProvider#cloud_build_custom_endpoint}.

---

##### `cloudbuildv2CustomEndpoint`<sup>Optional</sup> <a name="cloudbuildv2CustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.cloudbuildv2CustomEndpoint"></a>

```typescript
public readonly cloudbuildv2CustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#cloudbuildv2_custom_endpoint GoogleProvider#cloudbuildv2_custom_endpoint}.

---

##### `clouddeployCustomEndpoint`<sup>Optional</sup> <a name="clouddeployCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.clouddeployCustomEndpoint"></a>

```typescript
public readonly clouddeployCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#clouddeploy_custom_endpoint GoogleProvider#clouddeploy_custom_endpoint}.

---

##### `clouddomainsCustomEndpoint`<sup>Optional</sup> <a name="clouddomainsCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.clouddomainsCustomEndpoint"></a>

```typescript
public readonly clouddomainsCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#clouddomains_custom_endpoint GoogleProvider#clouddomains_custom_endpoint}.

---

##### `cloudfunctions2CustomEndpoint`<sup>Optional</sup> <a name="cloudfunctions2CustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.cloudfunctions2CustomEndpoint"></a>

```typescript
public readonly cloudfunctions2CustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#cloudfunctions2_custom_endpoint GoogleProvider#cloudfunctions2_custom_endpoint}.

---

##### `cloudFunctionsCustomEndpoint`<sup>Optional</sup> <a name="cloudFunctionsCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.cloudFunctionsCustomEndpoint"></a>

```typescript
public readonly cloudFunctionsCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#cloud_functions_custom_endpoint GoogleProvider#cloud_functions_custom_endpoint}.

---

##### `cloudIdentityCustomEndpoint`<sup>Optional</sup> <a name="cloudIdentityCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.cloudIdentityCustomEndpoint"></a>

```typescript
public readonly cloudIdentityCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#cloud_identity_custom_endpoint GoogleProvider#cloud_identity_custom_endpoint}.

---

##### `cloudIdsCustomEndpoint`<sup>Optional</sup> <a name="cloudIdsCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.cloudIdsCustomEndpoint"></a>

```typescript
public readonly cloudIdsCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#cloud_ids_custom_endpoint GoogleProvider#cloud_ids_custom_endpoint}.

---

##### `cloudQuotasCustomEndpoint`<sup>Optional</sup> <a name="cloudQuotasCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.cloudQuotasCustomEndpoint"></a>

```typescript
public readonly cloudQuotasCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#cloud_quotas_custom_endpoint GoogleProvider#cloud_quotas_custom_endpoint}.

---

##### `cloudResourceManagerCustomEndpoint`<sup>Optional</sup> <a name="cloudResourceManagerCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.cloudResourceManagerCustomEndpoint"></a>

```typescript
public readonly cloudResourceManagerCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#cloud_resource_manager_custom_endpoint GoogleProvider#cloud_resource_manager_custom_endpoint}.

---

##### `cloudRunCustomEndpoint`<sup>Optional</sup> <a name="cloudRunCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.cloudRunCustomEndpoint"></a>

```typescript
public readonly cloudRunCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#cloud_run_custom_endpoint GoogleProvider#cloud_run_custom_endpoint}.

---

##### `cloudRunV2CustomEndpoint`<sup>Optional</sup> <a name="cloudRunV2CustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.cloudRunV2CustomEndpoint"></a>

```typescript
public readonly cloudRunV2CustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#cloud_run_v2_custom_endpoint GoogleProvider#cloud_run_v2_custom_endpoint}.

---

##### `cloudSchedulerCustomEndpoint`<sup>Optional</sup> <a name="cloudSchedulerCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.cloudSchedulerCustomEndpoint"></a>

```typescript
public readonly cloudSchedulerCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#cloud_scheduler_custom_endpoint GoogleProvider#cloud_scheduler_custom_endpoint}.

---

##### `cloudSecurityComplianceCustomEndpoint`<sup>Optional</sup> <a name="cloudSecurityComplianceCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.cloudSecurityComplianceCustomEndpoint"></a>

```typescript
public readonly cloudSecurityComplianceCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#cloud_security_compliance_custom_endpoint GoogleProvider#cloud_security_compliance_custom_endpoint}.

---

##### `cloudTasksCustomEndpoint`<sup>Optional</sup> <a name="cloudTasksCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.cloudTasksCustomEndpoint"></a>

```typescript
public readonly cloudTasksCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#cloud_tasks_custom_endpoint GoogleProvider#cloud_tasks_custom_endpoint}.

---

##### `colabCustomEndpoint`<sup>Optional</sup> <a name="colabCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.colabCustomEndpoint"></a>

```typescript
public readonly colabCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#colab_custom_endpoint GoogleProvider#colab_custom_endpoint}.

---

##### `composerCustomEndpoint`<sup>Optional</sup> <a name="composerCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.composerCustomEndpoint"></a>

```typescript
public readonly composerCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#composer_custom_endpoint GoogleProvider#composer_custom_endpoint}.

---

##### `computeCustomEndpoint`<sup>Optional</sup> <a name="computeCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.computeCustomEndpoint"></a>

```typescript
public readonly computeCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#compute_custom_endpoint GoogleProvider#compute_custom_endpoint}.

---

##### `configCustomEndpoint`<sup>Optional</sup> <a name="configCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.configCustomEndpoint"></a>

```typescript
public readonly configCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#config_custom_endpoint GoogleProvider#config_custom_endpoint}.

---

##### `contactCenterInsightsCustomEndpoint`<sup>Optional</sup> <a name="contactCenterInsightsCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.contactCenterInsightsCustomEndpoint"></a>

```typescript
public readonly contactCenterInsightsCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#contact_center_insights_custom_endpoint GoogleProvider#contact_center_insights_custom_endpoint}.

---

##### `containerAnalysisCustomEndpoint`<sup>Optional</sup> <a name="containerAnalysisCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.containerAnalysisCustomEndpoint"></a>

```typescript
public readonly containerAnalysisCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#container_analysis_custom_endpoint GoogleProvider#container_analysis_custom_endpoint}.

---

##### `containerAttachedCustomEndpoint`<sup>Optional</sup> <a name="containerAttachedCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.containerAttachedCustomEndpoint"></a>

```typescript
public readonly containerAttachedCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#container_attached_custom_endpoint GoogleProvider#container_attached_custom_endpoint}.

---

##### `containerAwsCustomEndpoint`<sup>Optional</sup> <a name="containerAwsCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.containerAwsCustomEndpoint"></a>

```typescript
public readonly containerAwsCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#container_aws_custom_endpoint GoogleProvider#container_aws_custom_endpoint}.

---

##### `containerAzureCustomEndpoint`<sup>Optional</sup> <a name="containerAzureCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.containerAzureCustomEndpoint"></a>

```typescript
public readonly containerAzureCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#container_azure_custom_endpoint GoogleProvider#container_azure_custom_endpoint}.

---

##### `containerCustomEndpoint`<sup>Optional</sup> <a name="containerCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.containerCustomEndpoint"></a>

```typescript
public readonly containerCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#container_custom_endpoint GoogleProvider#container_custom_endpoint}.

---

##### `coreBillingCustomEndpoint`<sup>Optional</sup> <a name="coreBillingCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.coreBillingCustomEndpoint"></a>

```typescript
public readonly coreBillingCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#core_billing_custom_endpoint GoogleProvider#core_billing_custom_endpoint}.

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.credentials"></a>

```typescript
public readonly credentials: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#credentials GoogleProvider#credentials}.

---

##### `databaseMigrationServiceCustomEndpoint`<sup>Optional</sup> <a name="databaseMigrationServiceCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.databaseMigrationServiceCustomEndpoint"></a>

```typescript
public readonly databaseMigrationServiceCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#database_migration_service_custom_endpoint GoogleProvider#database_migration_service_custom_endpoint}.

---

##### `dataCatalogCustomEndpoint`<sup>Optional</sup> <a name="dataCatalogCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.dataCatalogCustomEndpoint"></a>

```typescript
public readonly dataCatalogCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#data_catalog_custom_endpoint GoogleProvider#data_catalog_custom_endpoint}.

---

##### `dataflowCustomEndpoint`<sup>Optional</sup> <a name="dataflowCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.dataflowCustomEndpoint"></a>

```typescript
public readonly dataflowCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#dataflow_custom_endpoint GoogleProvider#dataflow_custom_endpoint}.

---

##### `dataformCustomEndpoint`<sup>Optional</sup> <a name="dataformCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.dataformCustomEndpoint"></a>

```typescript
public readonly dataformCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#dataform_custom_endpoint GoogleProvider#dataform_custom_endpoint}.

---

##### `dataFusionCustomEndpoint`<sup>Optional</sup> <a name="dataFusionCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.dataFusionCustomEndpoint"></a>

```typescript
public readonly dataFusionCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#data_fusion_custom_endpoint GoogleProvider#data_fusion_custom_endpoint}.

---

##### `dataLineageCustomEndpoint`<sup>Optional</sup> <a name="dataLineageCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.dataLineageCustomEndpoint"></a>

```typescript
public readonly dataLineageCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#data_lineage_custom_endpoint GoogleProvider#data_lineage_custom_endpoint}.

---

##### `dataLossPreventionCustomEndpoint`<sup>Optional</sup> <a name="dataLossPreventionCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.dataLossPreventionCustomEndpoint"></a>

```typescript
public readonly dataLossPreventionCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#data_loss_prevention_custom_endpoint GoogleProvider#data_loss_prevention_custom_endpoint}.

---

##### `dataPipelineCustomEndpoint`<sup>Optional</sup> <a name="dataPipelineCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.dataPipelineCustomEndpoint"></a>

```typescript
public readonly dataPipelineCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#data_pipeline_custom_endpoint GoogleProvider#data_pipeline_custom_endpoint}.

---

##### `dataplexCustomEndpoint`<sup>Optional</sup> <a name="dataplexCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.dataplexCustomEndpoint"></a>

```typescript
public readonly dataplexCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#dataplex_custom_endpoint GoogleProvider#dataplex_custom_endpoint}.

---

##### `dataprocCustomEndpoint`<sup>Optional</sup> <a name="dataprocCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.dataprocCustomEndpoint"></a>

```typescript
public readonly dataprocCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#dataproc_custom_endpoint GoogleProvider#dataproc_custom_endpoint}.

---

##### `dataprocGdcCustomEndpoint`<sup>Optional</sup> <a name="dataprocGdcCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.dataprocGdcCustomEndpoint"></a>

```typescript
public readonly dataprocGdcCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#dataproc_gdc_custom_endpoint GoogleProvider#dataproc_gdc_custom_endpoint}.

---

##### `dataprocMetastoreCustomEndpoint`<sup>Optional</sup> <a name="dataprocMetastoreCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.dataprocMetastoreCustomEndpoint"></a>

```typescript
public readonly dataprocMetastoreCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#dataproc_metastore_custom_endpoint GoogleProvider#dataproc_metastore_custom_endpoint}.

---

##### `datastreamCustomEndpoint`<sup>Optional</sup> <a name="datastreamCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.datastreamCustomEndpoint"></a>

```typescript
public readonly datastreamCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#datastream_custom_endpoint GoogleProvider#datastream_custom_endpoint}.

---

##### `defaultLabels`<sup>Optional</sup> <a name="defaultLabels" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.defaultLabels"></a>

```typescript
public readonly defaultLabels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#default_labels GoogleProvider#default_labels}.

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#deletion_policy GoogleProvider#deletion_policy}.

---

##### `deploymentManagerCustomEndpoint`<sup>Optional</sup> <a name="deploymentManagerCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.deploymentManagerCustomEndpoint"></a>

```typescript
public readonly deploymentManagerCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#deployment_manager_custom_endpoint GoogleProvider#deployment_manager_custom_endpoint}.

---

##### `developerConnectCustomEndpoint`<sup>Optional</sup> <a name="developerConnectCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.developerConnectCustomEndpoint"></a>

```typescript
public readonly developerConnectCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#developer_connect_custom_endpoint GoogleProvider#developer_connect_custom_endpoint}.

---

##### `dialogflowCustomEndpoint`<sup>Optional</sup> <a name="dialogflowCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.dialogflowCustomEndpoint"></a>

```typescript
public readonly dialogflowCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#dialogflow_custom_endpoint GoogleProvider#dialogflow_custom_endpoint}.

---

##### `dialogflowCxCustomEndpoint`<sup>Optional</sup> <a name="dialogflowCxCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.dialogflowCxCustomEndpoint"></a>

```typescript
public readonly dialogflowCxCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#dialogflow_cx_custom_endpoint GoogleProvider#dialogflow_cx_custom_endpoint}.

---

##### `discoveryEngineCustomEndpoint`<sup>Optional</sup> <a name="discoveryEngineCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.discoveryEngineCustomEndpoint"></a>

```typescript
public readonly discoveryEngineCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#discovery_engine_custom_endpoint GoogleProvider#discovery_engine_custom_endpoint}.

---

##### `dnsCustomEndpoint`<sup>Optional</sup> <a name="dnsCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.dnsCustomEndpoint"></a>

```typescript
public readonly dnsCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#dns_custom_endpoint GoogleProvider#dns_custom_endpoint}.

---

##### `documentAiCustomEndpoint`<sup>Optional</sup> <a name="documentAiCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.documentAiCustomEndpoint"></a>

```typescript
public readonly documentAiCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#document_ai_custom_endpoint GoogleProvider#document_ai_custom_endpoint}.

---

##### `documentAiWarehouseCustomEndpoint`<sup>Optional</sup> <a name="documentAiWarehouseCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.documentAiWarehouseCustomEndpoint"></a>

```typescript
public readonly documentAiWarehouseCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#document_ai_warehouse_custom_endpoint GoogleProvider#document_ai_warehouse_custom_endpoint}.

---

##### `edgecontainerCustomEndpoint`<sup>Optional</sup> <a name="edgecontainerCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.edgecontainerCustomEndpoint"></a>

```typescript
public readonly edgecontainerCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#edgecontainer_custom_endpoint GoogleProvider#edgecontainer_custom_endpoint}.

---

##### `edgenetworkCustomEndpoint`<sup>Optional</sup> <a name="edgenetworkCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.edgenetworkCustomEndpoint"></a>

```typescript
public readonly edgenetworkCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#edgenetwork_custom_endpoint GoogleProvider#edgenetwork_custom_endpoint}.

---

##### `essentialContactsCustomEndpoint`<sup>Optional</sup> <a name="essentialContactsCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.essentialContactsCustomEndpoint"></a>

```typescript
public readonly essentialContactsCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#essential_contacts_custom_endpoint GoogleProvider#essential_contacts_custom_endpoint}.

---

##### `eventarcCustomEndpoint`<sup>Optional</sup> <a name="eventarcCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.eventarcCustomEndpoint"></a>

```typescript
public readonly eventarcCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#eventarc_custom_endpoint GoogleProvider#eventarc_custom_endpoint}.

---

##### `externalCredentials`<sup>Optional</sup> <a name="externalCredentials" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.externalCredentials"></a>

```typescript
public readonly externalCredentials: IResolvable | GoogleProviderExternalCredentials[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.provider.GoogleProviderExternalCredentials">GoogleProviderExternalCredentials</a>[]

external_credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#external_credentials GoogleProvider#external_credentials}

---

##### `filestoreCustomEndpoint`<sup>Optional</sup> <a name="filestoreCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.filestoreCustomEndpoint"></a>

```typescript
public readonly filestoreCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#filestore_custom_endpoint GoogleProvider#filestore_custom_endpoint}.

---

##### `firebaseAppCheckCustomEndpoint`<sup>Optional</sup> <a name="firebaseAppCheckCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.firebaseAppCheckCustomEndpoint"></a>

```typescript
public readonly firebaseAppCheckCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#firebase_app_check_custom_endpoint GoogleProvider#firebase_app_check_custom_endpoint}.

---

##### `firebaseAppHostingCustomEndpoint`<sup>Optional</sup> <a name="firebaseAppHostingCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.firebaseAppHostingCustomEndpoint"></a>

```typescript
public readonly firebaseAppHostingCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#firebase_app_hosting_custom_endpoint GoogleProvider#firebase_app_hosting_custom_endpoint}.

---

##### `firebaseDataConnectCustomEndpoint`<sup>Optional</sup> <a name="firebaseDataConnectCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.firebaseDataConnectCustomEndpoint"></a>

```typescript
public readonly firebaseDataConnectCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#firebase_data_connect_custom_endpoint GoogleProvider#firebase_data_connect_custom_endpoint}.

---

##### `firebaseRemoteConfigCustomEndpoint`<sup>Optional</sup> <a name="firebaseRemoteConfigCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.firebaseRemoteConfigCustomEndpoint"></a>

```typescript
public readonly firebaseRemoteConfigCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#firebase_remote_config_custom_endpoint GoogleProvider#firebase_remote_config_custom_endpoint}.

---

##### `firebaserulesCustomEndpoint`<sup>Optional</sup> <a name="firebaserulesCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.firebaserulesCustomEndpoint"></a>

```typescript
public readonly firebaserulesCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#firebaserules_custom_endpoint GoogleProvider#firebaserules_custom_endpoint}.

---

##### `firestoreCustomEndpoint`<sup>Optional</sup> <a name="firestoreCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.firestoreCustomEndpoint"></a>

```typescript
public readonly firestoreCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#firestore_custom_endpoint GoogleProvider#firestore_custom_endpoint}.

---

##### `geminiCustomEndpoint`<sup>Optional</sup> <a name="geminiCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.geminiCustomEndpoint"></a>

```typescript
public readonly geminiCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#gemini_custom_endpoint GoogleProvider#gemini_custom_endpoint}.

---

##### `gkeBackupCustomEndpoint`<sup>Optional</sup> <a name="gkeBackupCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.gkeBackupCustomEndpoint"></a>

```typescript
public readonly gkeBackupCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#gke_backup_custom_endpoint GoogleProvider#gke_backup_custom_endpoint}.

---

##### `gkeHub2CustomEndpoint`<sup>Optional</sup> <a name="gkeHub2CustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.gkeHub2CustomEndpoint"></a>

```typescript
public readonly gkeHub2CustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#gke_hub2_custom_endpoint GoogleProvider#gke_hub2_custom_endpoint}.

---

##### `gkeHubCustomEndpoint`<sup>Optional</sup> <a name="gkeHubCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.gkeHubCustomEndpoint"></a>

```typescript
public readonly gkeHubCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#gke_hub_custom_endpoint GoogleProvider#gke_hub_custom_endpoint}.

---

##### `gkeonpremCustomEndpoint`<sup>Optional</sup> <a name="gkeonpremCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.gkeonpremCustomEndpoint"></a>

```typescript
public readonly gkeonpremCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#gkeonprem_custom_endpoint GoogleProvider#gkeonprem_custom_endpoint}.

---

##### `healthcareCustomEndpoint`<sup>Optional</sup> <a name="healthcareCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.healthcareCustomEndpoint"></a>

```typescript
public readonly healthcareCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#healthcare_custom_endpoint GoogleProvider#healthcare_custom_endpoint}.

---

##### `hypercomputeclusterCustomEndpoint`<sup>Optional</sup> <a name="hypercomputeclusterCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.hypercomputeclusterCustomEndpoint"></a>

```typescript
public readonly hypercomputeclusterCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#hypercomputecluster_custom_endpoint GoogleProvider#hypercomputecluster_custom_endpoint}.

---

##### `iam2CustomEndpoint`<sup>Optional</sup> <a name="iam2CustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.iam2CustomEndpoint"></a>

```typescript
public readonly iam2CustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#iam2_custom_endpoint GoogleProvider#iam2_custom_endpoint}.

---

##### `iam3CustomEndpoint`<sup>Optional</sup> <a name="iam3CustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.iam3CustomEndpoint"></a>

```typescript
public readonly iam3CustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#iam3_custom_endpoint GoogleProvider#iam3_custom_endpoint}.

---

##### `iamBetaCustomEndpoint`<sup>Optional</sup> <a name="iamBetaCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.iamBetaCustomEndpoint"></a>

```typescript
public readonly iamBetaCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#iam_beta_custom_endpoint GoogleProvider#iam_beta_custom_endpoint}.

---

##### `iamCredentialsCustomEndpoint`<sup>Optional</sup> <a name="iamCredentialsCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.iamCredentialsCustomEndpoint"></a>

```typescript
public readonly iamCredentialsCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#iam_credentials_custom_endpoint GoogleProvider#iam_credentials_custom_endpoint}.

---

##### `iamCustomEndpoint`<sup>Optional</sup> <a name="iamCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.iamCustomEndpoint"></a>

```typescript
public readonly iamCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#iam_custom_endpoint GoogleProvider#iam_custom_endpoint}.

---

##### `iamWorkforcePoolCustomEndpoint`<sup>Optional</sup> <a name="iamWorkforcePoolCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.iamWorkforcePoolCustomEndpoint"></a>

```typescript
public readonly iamWorkforcePoolCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#iam_workforce_pool_custom_endpoint GoogleProvider#iam_workforce_pool_custom_endpoint}.

---

##### `iapCustomEndpoint`<sup>Optional</sup> <a name="iapCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.iapCustomEndpoint"></a>

```typescript
public readonly iapCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#iap_custom_endpoint GoogleProvider#iap_custom_endpoint}.

---

##### `identityPlatformCustomEndpoint`<sup>Optional</sup> <a name="identityPlatformCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.identityPlatformCustomEndpoint"></a>

```typescript
public readonly identityPlatformCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#identity_platform_custom_endpoint GoogleProvider#identity_platform_custom_endpoint}.

---

##### `impersonateServiceAccount`<sup>Optional</sup> <a name="impersonateServiceAccount" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.impersonateServiceAccount"></a>

```typescript
public readonly impersonateServiceAccount: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#impersonate_service_account GoogleProvider#impersonate_service_account}.

---

##### `impersonateServiceAccountDelegates`<sup>Optional</sup> <a name="impersonateServiceAccountDelegates" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.impersonateServiceAccountDelegates"></a>

```typescript
public readonly impersonateServiceAccountDelegates: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#impersonate_service_account_delegates GoogleProvider#impersonate_service_account_delegates}.

---

##### `integrationConnectorsCustomEndpoint`<sup>Optional</sup> <a name="integrationConnectorsCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.integrationConnectorsCustomEndpoint"></a>

```typescript
public readonly integrationConnectorsCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#integration_connectors_custom_endpoint GoogleProvider#integration_connectors_custom_endpoint}.

---

##### `integrationsCustomEndpoint`<sup>Optional</sup> <a name="integrationsCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.integrationsCustomEndpoint"></a>

```typescript
public readonly integrationsCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#integrations_custom_endpoint GoogleProvider#integrations_custom_endpoint}.

---

##### `kmsCustomEndpoint`<sup>Optional</sup> <a name="kmsCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.kmsCustomEndpoint"></a>

```typescript
public readonly kmsCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#kms_custom_endpoint GoogleProvider#kms_custom_endpoint}.

---

##### `licenseManagerCustomEndpoint`<sup>Optional</sup> <a name="licenseManagerCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.licenseManagerCustomEndpoint"></a>

```typescript
public readonly licenseManagerCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#license_manager_custom_endpoint GoogleProvider#license_manager_custom_endpoint}.

---

##### `loggingCustomEndpoint`<sup>Optional</sup> <a name="loggingCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.loggingCustomEndpoint"></a>

```typescript
public readonly loggingCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#logging_custom_endpoint GoogleProvider#logging_custom_endpoint}.

---

##### `lookerCustomEndpoint`<sup>Optional</sup> <a name="lookerCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.lookerCustomEndpoint"></a>

```typescript
public readonly lookerCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#looker_custom_endpoint GoogleProvider#looker_custom_endpoint}.

---

##### `lustreCustomEndpoint`<sup>Optional</sup> <a name="lustreCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.lustreCustomEndpoint"></a>

```typescript
public readonly lustreCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#lustre_custom_endpoint GoogleProvider#lustre_custom_endpoint}.

---

##### `managedKafkaCustomEndpoint`<sup>Optional</sup> <a name="managedKafkaCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.managedKafkaCustomEndpoint"></a>

```typescript
public readonly managedKafkaCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#managed_kafka_custom_endpoint GoogleProvider#managed_kafka_custom_endpoint}.

---

##### `memcacheCustomEndpoint`<sup>Optional</sup> <a name="memcacheCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.memcacheCustomEndpoint"></a>

```typescript
public readonly memcacheCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#memcache_custom_endpoint GoogleProvider#memcache_custom_endpoint}.

---

##### `memorystoreCustomEndpoint`<sup>Optional</sup> <a name="memorystoreCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.memorystoreCustomEndpoint"></a>

```typescript
public readonly memorystoreCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#memorystore_custom_endpoint GoogleProvider#memorystore_custom_endpoint}.

---

##### `migrationCenterCustomEndpoint`<sup>Optional</sup> <a name="migrationCenterCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.migrationCenterCustomEndpoint"></a>

```typescript
public readonly migrationCenterCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#migration_center_custom_endpoint GoogleProvider#migration_center_custom_endpoint}.

---

##### `mlEngineCustomEndpoint`<sup>Optional</sup> <a name="mlEngineCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.mlEngineCustomEndpoint"></a>

```typescript
public readonly mlEngineCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#ml_engine_custom_endpoint GoogleProvider#ml_engine_custom_endpoint}.

---

##### `modelArmorCustomEndpoint`<sup>Optional</sup> <a name="modelArmorCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.modelArmorCustomEndpoint"></a>

```typescript
public readonly modelArmorCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#model_armor_custom_endpoint GoogleProvider#model_armor_custom_endpoint}.

---

##### `modelArmorGlobalCustomEndpoint`<sup>Optional</sup> <a name="modelArmorGlobalCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.modelArmorGlobalCustomEndpoint"></a>

```typescript
public readonly modelArmorGlobalCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#model_armor_global_custom_endpoint GoogleProvider#model_armor_global_custom_endpoint}.

---

##### `monitoringCustomEndpoint`<sup>Optional</sup> <a name="monitoringCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.monitoringCustomEndpoint"></a>

```typescript
public readonly monitoringCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#monitoring_custom_endpoint GoogleProvider#monitoring_custom_endpoint}.

---

##### `netappCustomEndpoint`<sup>Optional</sup> <a name="netappCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.netappCustomEndpoint"></a>

```typescript
public readonly netappCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#netapp_custom_endpoint GoogleProvider#netapp_custom_endpoint}.

---

##### `networkConnectivityCustomEndpoint`<sup>Optional</sup> <a name="networkConnectivityCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.networkConnectivityCustomEndpoint"></a>

```typescript
public readonly networkConnectivityCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#network_connectivity_custom_endpoint GoogleProvider#network_connectivity_custom_endpoint}.

---

##### `networkConnectivityv1CustomEndpoint`<sup>Optional</sup> <a name="networkConnectivityv1CustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.networkConnectivityv1CustomEndpoint"></a>

```typescript
public readonly networkConnectivityv1CustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#network_connectivityv1_custom_endpoint GoogleProvider#network_connectivityv1_custom_endpoint}.

---

##### `networkManagementCustomEndpoint`<sup>Optional</sup> <a name="networkManagementCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.networkManagementCustomEndpoint"></a>

```typescript
public readonly networkManagementCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#network_management_custom_endpoint GoogleProvider#network_management_custom_endpoint}.

---

##### `networkSecurityCustomEndpoint`<sup>Optional</sup> <a name="networkSecurityCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.networkSecurityCustomEndpoint"></a>

```typescript
public readonly networkSecurityCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#network_security_custom_endpoint GoogleProvider#network_security_custom_endpoint}.

---

##### `networkServicesCustomEndpoint`<sup>Optional</sup> <a name="networkServicesCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.networkServicesCustomEndpoint"></a>

```typescript
public readonly networkServicesCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#network_services_custom_endpoint GoogleProvider#network_services_custom_endpoint}.

---

##### `notebooksCustomEndpoint`<sup>Optional</sup> <a name="notebooksCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.notebooksCustomEndpoint"></a>

```typescript
public readonly notebooksCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#notebooks_custom_endpoint GoogleProvider#notebooks_custom_endpoint}.

---

##### `observabilityCustomEndpoint`<sup>Optional</sup> <a name="observabilityCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.observabilityCustomEndpoint"></a>

```typescript
public readonly observabilityCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#observability_custom_endpoint GoogleProvider#observability_custom_endpoint}.

---

##### `oracleDatabaseCustomEndpoint`<sup>Optional</sup> <a name="oracleDatabaseCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.oracleDatabaseCustomEndpoint"></a>

```typescript
public readonly oracleDatabaseCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#oracle_database_custom_endpoint GoogleProvider#oracle_database_custom_endpoint}.

---

##### `orgPolicyCustomEndpoint`<sup>Optional</sup> <a name="orgPolicyCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.orgPolicyCustomEndpoint"></a>

```typescript
public readonly orgPolicyCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#org_policy_custom_endpoint GoogleProvider#org_policy_custom_endpoint}.

---

##### `osConfigCustomEndpoint`<sup>Optional</sup> <a name="osConfigCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.osConfigCustomEndpoint"></a>

```typescript
public readonly osConfigCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#os_config_custom_endpoint GoogleProvider#os_config_custom_endpoint}.

---

##### `osConfigV2CustomEndpoint`<sup>Optional</sup> <a name="osConfigV2CustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.osConfigV2CustomEndpoint"></a>

```typescript
public readonly osConfigV2CustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#os_config_v2_custom_endpoint GoogleProvider#os_config_v2_custom_endpoint}.

---

##### `osLoginCustomEndpoint`<sup>Optional</sup> <a name="osLoginCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.osLoginCustomEndpoint"></a>

```typescript
public readonly osLoginCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#os_login_custom_endpoint GoogleProvider#os_login_custom_endpoint}.

---

##### `parallelstoreCustomEndpoint`<sup>Optional</sup> <a name="parallelstoreCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.parallelstoreCustomEndpoint"></a>

```typescript
public readonly parallelstoreCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#parallelstore_custom_endpoint GoogleProvider#parallelstore_custom_endpoint}.

---

##### `parameterManagerCustomEndpoint`<sup>Optional</sup> <a name="parameterManagerCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.parameterManagerCustomEndpoint"></a>

```typescript
public readonly parameterManagerCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#parameter_manager_custom_endpoint GoogleProvider#parameter_manager_custom_endpoint}.

---

##### `parameterManagerRegionalCustomEndpoint`<sup>Optional</sup> <a name="parameterManagerRegionalCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.parameterManagerRegionalCustomEndpoint"></a>

```typescript
public readonly parameterManagerRegionalCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#parameter_manager_regional_custom_endpoint GoogleProvider#parameter_manager_regional_custom_endpoint}.

---

##### `pollInterval`<sup>Optional</sup> <a name="pollInterval" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.pollInterval"></a>

```typescript
public readonly pollInterval: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#poll_interval GoogleProvider#poll_interval}.

---

##### `preferGlobalEndpoints`<sup>Optional</sup> <a name="preferGlobalEndpoints" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.preferGlobalEndpoints"></a>

```typescript
public readonly preferGlobalEndpoints: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#prefer_global_endpoints GoogleProvider#prefer_global_endpoints}.

---

##### `preferRegionalEndpoints`<sup>Optional</sup> <a name="preferRegionalEndpoints" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.preferRegionalEndpoints"></a>

```typescript
public readonly preferRegionalEndpoints: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#prefer_regional_endpoints GoogleProvider#prefer_regional_endpoints}.

---

##### `privatecaCustomEndpoint`<sup>Optional</sup> <a name="privatecaCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.privatecaCustomEndpoint"></a>

```typescript
public readonly privatecaCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#privateca_custom_endpoint GoogleProvider#privateca_custom_endpoint}.

---

##### `privilegedAccessManagerCustomEndpoint`<sup>Optional</sup> <a name="privilegedAccessManagerCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.privilegedAccessManagerCustomEndpoint"></a>

```typescript
public readonly privilegedAccessManagerCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#privileged_access_manager_custom_endpoint GoogleProvider#privileged_access_manager_custom_endpoint}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#project GoogleProvider#project}.

---

##### `publicCaCustomEndpoint`<sup>Optional</sup> <a name="publicCaCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.publicCaCustomEndpoint"></a>

```typescript
public readonly publicCaCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#public_ca_custom_endpoint GoogleProvider#public_ca_custom_endpoint}.

---

##### `pubsubCustomEndpoint`<sup>Optional</sup> <a name="pubsubCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.pubsubCustomEndpoint"></a>

```typescript
public readonly pubsubCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#pubsub_custom_endpoint GoogleProvider#pubsub_custom_endpoint}.

---

##### `pubsubLiteCustomEndpoint`<sup>Optional</sup> <a name="pubsubLiteCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.pubsubLiteCustomEndpoint"></a>

```typescript
public readonly pubsubLiteCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#pubsub_lite_custom_endpoint GoogleProvider#pubsub_lite_custom_endpoint}.

---

##### `recaptchaEnterpriseCustomEndpoint`<sup>Optional</sup> <a name="recaptchaEnterpriseCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.recaptchaEnterpriseCustomEndpoint"></a>

```typescript
public readonly recaptchaEnterpriseCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#recaptcha_enterprise_custom_endpoint GoogleProvider#recaptcha_enterprise_custom_endpoint}.

---

##### `redisCustomEndpoint`<sup>Optional</sup> <a name="redisCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.redisCustomEndpoint"></a>

```typescript
public readonly redisCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#redis_custom_endpoint GoogleProvider#redis_custom_endpoint}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#region GoogleProvider#region}.

---

##### `requestReason`<sup>Optional</sup> <a name="requestReason" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.requestReason"></a>

```typescript
public readonly requestReason: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#request_reason GoogleProvider#request_reason}.

---

##### `requestTimeout`<sup>Optional</sup> <a name="requestTimeout" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.requestTimeout"></a>

```typescript
public readonly requestTimeout: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#request_timeout GoogleProvider#request_timeout}.

---

##### `resourceManager3CustomEndpoint`<sup>Optional</sup> <a name="resourceManager3CustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.resourceManager3CustomEndpoint"></a>

```typescript
public readonly resourceManager3CustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#resource_manager3_custom_endpoint GoogleProvider#resource_manager3_custom_endpoint}.

---

##### `resourceManagerCustomEndpoint`<sup>Optional</sup> <a name="resourceManagerCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.resourceManagerCustomEndpoint"></a>

```typescript
public readonly resourceManagerCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#resource_manager_custom_endpoint GoogleProvider#resource_manager_custom_endpoint}.

---

##### `resourceManagerV3CustomEndpoint`<sup>Optional</sup> <a name="resourceManagerV3CustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.resourceManagerV3CustomEndpoint"></a>

```typescript
public readonly resourceManagerV3CustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#resource_manager_v3_custom_endpoint GoogleProvider#resource_manager_v3_custom_endpoint}.

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.scopes"></a>

```typescript
public readonly scopes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#scopes GoogleProvider#scopes}.

---

##### `secretManagerCustomEndpoint`<sup>Optional</sup> <a name="secretManagerCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.secretManagerCustomEndpoint"></a>

```typescript
public readonly secretManagerCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#secret_manager_custom_endpoint GoogleProvider#secret_manager_custom_endpoint}.

---

##### `secretManagerRegionalCustomEndpoint`<sup>Optional</sup> <a name="secretManagerRegionalCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.secretManagerRegionalCustomEndpoint"></a>

```typescript
public readonly secretManagerRegionalCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#secret_manager_regional_custom_endpoint GoogleProvider#secret_manager_regional_custom_endpoint}.

---

##### `secureSourceManagerCustomEndpoint`<sup>Optional</sup> <a name="secureSourceManagerCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.secureSourceManagerCustomEndpoint"></a>

```typescript
public readonly secureSourceManagerCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#secure_source_manager_custom_endpoint GoogleProvider#secure_source_manager_custom_endpoint}.

---

##### `securityCenterCustomEndpoint`<sup>Optional</sup> <a name="securityCenterCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.securityCenterCustomEndpoint"></a>

```typescript
public readonly securityCenterCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#security_center_custom_endpoint GoogleProvider#security_center_custom_endpoint}.

---

##### `securityCenterManagementCustomEndpoint`<sup>Optional</sup> <a name="securityCenterManagementCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.securityCenterManagementCustomEndpoint"></a>

```typescript
public readonly securityCenterManagementCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#security_center_management_custom_endpoint GoogleProvider#security_center_management_custom_endpoint}.

---

##### `securityCenterV2CustomEndpoint`<sup>Optional</sup> <a name="securityCenterV2CustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.securityCenterV2CustomEndpoint"></a>

```typescript
public readonly securityCenterV2CustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#security_center_v2_custom_endpoint GoogleProvider#security_center_v2_custom_endpoint}.

---

##### `securitypostureCustomEndpoint`<sup>Optional</sup> <a name="securitypostureCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.securitypostureCustomEndpoint"></a>

```typescript
public readonly securitypostureCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#securityposture_custom_endpoint GoogleProvider#securityposture_custom_endpoint}.

---

##### `serviceDirectoryCustomEndpoint`<sup>Optional</sup> <a name="serviceDirectoryCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.serviceDirectoryCustomEndpoint"></a>

```typescript
public readonly serviceDirectoryCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#service_directory_custom_endpoint GoogleProvider#service_directory_custom_endpoint}.

---

##### `serviceManagementCustomEndpoint`<sup>Optional</sup> <a name="serviceManagementCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.serviceManagementCustomEndpoint"></a>

```typescript
public readonly serviceManagementCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#service_management_custom_endpoint GoogleProvider#service_management_custom_endpoint}.

---

##### `serviceNetworkingCustomEndpoint`<sup>Optional</sup> <a name="serviceNetworkingCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.serviceNetworkingCustomEndpoint"></a>

```typescript
public readonly serviceNetworkingCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#service_networking_custom_endpoint GoogleProvider#service_networking_custom_endpoint}.

---

##### `serviceUsageCustomEndpoint`<sup>Optional</sup> <a name="serviceUsageCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.serviceUsageCustomEndpoint"></a>

```typescript
public readonly serviceUsageCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#service_usage_custom_endpoint GoogleProvider#service_usage_custom_endpoint}.

---

##### `siteVerificationCustomEndpoint`<sup>Optional</sup> <a name="siteVerificationCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.siteVerificationCustomEndpoint"></a>

```typescript
public readonly siteVerificationCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#site_verification_custom_endpoint GoogleProvider#site_verification_custom_endpoint}.

---

##### `sourceRepoCustomEndpoint`<sup>Optional</sup> <a name="sourceRepoCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.sourceRepoCustomEndpoint"></a>

```typescript
public readonly sourceRepoCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#source_repo_custom_endpoint GoogleProvider#source_repo_custom_endpoint}.

---

##### `spannerCustomEndpoint`<sup>Optional</sup> <a name="spannerCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.spannerCustomEndpoint"></a>

```typescript
public readonly spannerCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#spanner_custom_endpoint GoogleProvider#spanner_custom_endpoint}.

---

##### `sqlCustomEndpoint`<sup>Optional</sup> <a name="sqlCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.sqlCustomEndpoint"></a>

```typescript
public readonly sqlCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#sql_custom_endpoint GoogleProvider#sql_custom_endpoint}.

---

##### `storageBatchOperationsCustomEndpoint`<sup>Optional</sup> <a name="storageBatchOperationsCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.storageBatchOperationsCustomEndpoint"></a>

```typescript
public readonly storageBatchOperationsCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#storage_batch_operations_custom_endpoint GoogleProvider#storage_batch_operations_custom_endpoint}.

---

##### `storageControlCustomEndpoint`<sup>Optional</sup> <a name="storageControlCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.storageControlCustomEndpoint"></a>

```typescript
public readonly storageControlCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#storage_control_custom_endpoint GoogleProvider#storage_control_custom_endpoint}.

---

##### `storageCustomEndpoint`<sup>Optional</sup> <a name="storageCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.storageCustomEndpoint"></a>

```typescript
public readonly storageCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#storage_custom_endpoint GoogleProvider#storage_custom_endpoint}.

---

##### `storageInsightsCustomEndpoint`<sup>Optional</sup> <a name="storageInsightsCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.storageInsightsCustomEndpoint"></a>

```typescript
public readonly storageInsightsCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#storage_insights_custom_endpoint GoogleProvider#storage_insights_custom_endpoint}.

---

##### `storageTransferCustomEndpoint`<sup>Optional</sup> <a name="storageTransferCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.storageTransferCustomEndpoint"></a>

```typescript
public readonly storageTransferCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#storage_transfer_custom_endpoint GoogleProvider#storage_transfer_custom_endpoint}.

---

##### `tagsCustomEndpoint`<sup>Optional</sup> <a name="tagsCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.tagsCustomEndpoint"></a>

```typescript
public readonly tagsCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#tags_custom_endpoint GoogleProvider#tags_custom_endpoint}.

---

##### `tagsLocationCustomEndpoint`<sup>Optional</sup> <a name="tagsLocationCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.tagsLocationCustomEndpoint"></a>

```typescript
public readonly tagsLocationCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#tags_location_custom_endpoint GoogleProvider#tags_location_custom_endpoint}.

---

##### `terraformAttributionLabelAdditionStrategy`<sup>Optional</sup> <a name="terraformAttributionLabelAdditionStrategy" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.terraformAttributionLabelAdditionStrategy"></a>

```typescript
public readonly terraformAttributionLabelAdditionStrategy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#terraform_attribution_label_addition_strategy GoogleProvider#terraform_attribution_label_addition_strategy}.

---

##### `transcoderCustomEndpoint`<sup>Optional</sup> <a name="transcoderCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.transcoderCustomEndpoint"></a>

```typescript
public readonly transcoderCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#transcoder_custom_endpoint GoogleProvider#transcoder_custom_endpoint}.

---

##### `universeDomain`<sup>Optional</sup> <a name="universeDomain" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.universeDomain"></a>

```typescript
public readonly universeDomain: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#universe_domain GoogleProvider#universe_domain}.

---

##### `userProjectOverride`<sup>Optional</sup> <a name="userProjectOverride" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.userProjectOverride"></a>

```typescript
public readonly userProjectOverride: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#user_project_override GoogleProvider#user_project_override}.

---

##### `vectorSearchCustomEndpoint`<sup>Optional</sup> <a name="vectorSearchCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.vectorSearchCustomEndpoint"></a>

```typescript
public readonly vectorSearchCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#vector_search_custom_endpoint GoogleProvider#vector_search_custom_endpoint}.

---

##### `vertexAiCustomEndpoint`<sup>Optional</sup> <a name="vertexAiCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.vertexAiCustomEndpoint"></a>

```typescript
public readonly vertexAiCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#vertex_ai_custom_endpoint GoogleProvider#vertex_ai_custom_endpoint}.

---

##### `vmwareengineCustomEndpoint`<sup>Optional</sup> <a name="vmwareengineCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.vmwareengineCustomEndpoint"></a>

```typescript
public readonly vmwareengineCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#vmwareengine_custom_endpoint GoogleProvider#vmwareengine_custom_endpoint}.

---

##### `vpcAccessCustomEndpoint`<sup>Optional</sup> <a name="vpcAccessCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.vpcAccessCustomEndpoint"></a>

```typescript
public readonly vpcAccessCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#vpc_access_custom_endpoint GoogleProvider#vpc_access_custom_endpoint}.

---

##### `workbenchCustomEndpoint`<sup>Optional</sup> <a name="workbenchCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.workbenchCustomEndpoint"></a>

```typescript
public readonly workbenchCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#workbench_custom_endpoint GoogleProvider#workbench_custom_endpoint}.

---

##### `workflowsCustomEndpoint`<sup>Optional</sup> <a name="workflowsCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.workflowsCustomEndpoint"></a>

```typescript
public readonly workflowsCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#workflows_custom_endpoint GoogleProvider#workflows_custom_endpoint}.

---

##### `workloadIdentityCustomEndpoint`<sup>Optional</sup> <a name="workloadIdentityCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.workloadIdentityCustomEndpoint"></a>

```typescript
public readonly workloadIdentityCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#workload_identity_custom_endpoint GoogleProvider#workload_identity_custom_endpoint}.

---

##### `workstationsCustomEndpoint`<sup>Optional</sup> <a name="workstationsCustomEndpoint" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.workstationsCustomEndpoint"></a>

```typescript
public readonly workstationsCustomEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#workstations_custom_endpoint GoogleProvider#workstations_custom_endpoint}.

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktn/provider-google.provider.GoogleProviderConfig.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#zone GoogleProvider#zone}.

---

### GoogleProviderExternalCredentials <a name="GoogleProviderExternalCredentials" id="@cdktn/provider-google.provider.GoogleProviderExternalCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.provider.GoogleProviderExternalCredentials.Initializer"></a>

```typescript
import { provider } from '@cdktn/provider-google'

const googleProviderExternalCredentials: provider.GoogleProviderExternalCredentials = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderExternalCredentials.property.audience">audience</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#audience GoogleProvider#audience}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderExternalCredentials.property.identityToken">identityToken</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#identity_token GoogleProvider#identity_token}. |
| <code><a href="#@cdktn/provider-google.provider.GoogleProviderExternalCredentials.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#service_account_email GoogleProvider#service_account_email}. |

---

##### `audience`<sup>Required</sup> <a name="audience" id="@cdktn/provider-google.provider.GoogleProviderExternalCredentials.property.audience"></a>

```typescript
public readonly audience: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#audience GoogleProvider#audience}.

---

##### `identityToken`<sup>Required</sup> <a name="identityToken" id="@cdktn/provider-google.provider.GoogleProviderExternalCredentials.property.identityToken"></a>

```typescript
public readonly identityToken: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#identity_token GoogleProvider#identity_token}.

---

##### `serviceAccountEmail`<sup>Required</sup> <a name="serviceAccountEmail" id="@cdktn/provider-google.provider.GoogleProviderExternalCredentials.property.serviceAccountEmail"></a>

```typescript
public readonly serviceAccountEmail: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs#service_account_email GoogleProvider#service_account_email}.

---



