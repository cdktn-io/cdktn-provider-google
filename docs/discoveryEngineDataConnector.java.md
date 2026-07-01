# `discoveryEngineDataConnector` Submodule <a name="`discoveryEngineDataConnector` Submodule" id="@cdktn/provider-google.discoveryEngineDataConnector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DiscoveryEngineDataConnector <a name="DiscoveryEngineDataConnector" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_data_connector google_discovery_engine_data_connector}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_data_connector.DiscoveryEngineDataConnector;

DiscoveryEngineDataConnector.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .collectionDisplayName(java.lang.String)
    .collectionId(java.lang.String)
    .dataSource(java.lang.String)
    .location(java.lang.String)
    .refreshInterval(java.lang.String)
//  .actionConfig(DiscoveryEngineDataConnectorActionConfig)
//  .autoRunDisabled(java.lang.Boolean|IResolvable)
//  .bapConfig(DiscoveryEngineDataConnectorBapConfig)
//  .connectorModes(java.util.List<java.lang.String>)
//  .dataSourceVersion(java.lang.Number)
//  .deletionPolicy(java.lang.String)
//  .destinationConfigs(IResolvable|java.util.List<DiscoveryEngineDataConnectorDestinationConfigs>)
//  .entities(IResolvable|java.util.List<DiscoveryEngineDataConnectorEntities>)
//  .id(java.lang.String)
//  .incrementalRefreshInterval(java.lang.String)
//  .incrementalSyncDisabled(java.lang.Boolean|IResolvable)
//  .jsonParams(java.lang.String)
//  .kmsKeyName(java.lang.String)
//  .params(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .staticIpEnabled(java.lang.Boolean|IResolvable)
//  .syncMode(java.lang.String)
//  .timeouts(DiscoveryEngineDataConnectorTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.collectionDisplayName">collectionDisplayName</a></code> | <code>java.lang.String</code> | The display name of the Collection. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.collectionId">collectionId</a></code> | <code>java.lang.String</code> | The ID to use for the Collection, which will become the final component of the Collection's resource name. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.dataSource">dataSource</a></code> | <code>java.lang.String</code> | The identifier for the data source. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu". |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.refreshInterval">refreshInterval</a></code> | <code>java.lang.String</code> | The refresh interval for data sync. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.actionConfig">actionConfig</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfig">DiscoveryEngineDataConnectorActionConfig</a></code> | action_config block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.autoRunDisabled">autoRunDisabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether full syncs are paused for this connector. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.bapConfig">bapConfig</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfig">DiscoveryEngineDataConnectorBapConfig</a></code> | bap_config block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.connectorModes">connectorModes</a></code> | <code>java.util.List<java.lang.String></code> | The modes enabled for this connector. The possible value can be: 'DATA_INGESTION', 'ACTIONS', 'FEDERATED' 'EUA', 'FEDERATED_AND_EUA'. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.dataSourceVersion">dataSourceVersion</a></code> | <code>java.lang.Number</code> | The version of the data source. For example, '3' for Jira v3. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.destinationConfigs">destinationConfigs</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigs">DiscoveryEngineDataConnectorDestinationConfigs</a>></code> | destination_configs block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.entities">entities</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntities">DiscoveryEngineDataConnectorEntities</a>></code> | entities block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_data_connector#id DiscoveryEngineDataConnector#id}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.incrementalRefreshInterval">incrementalRefreshInterval</a></code> | <code>java.lang.String</code> | The refresh interval specifically for incremental data syncs. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.incrementalSyncDisabled">incrementalSyncDisabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether incremental syncs are paused for this connector. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.jsonParams">jsonParams</a></code> | <code>java.lang.String</code> | Params needed to access the source in the format of json string. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.kmsKeyName">kmsKeyName</a></code> | <code>java.lang.String</code> | The KMS key to be used to protect the DataStores managed by this connector. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.params">params</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Params needed to access the source in the format of String-to-String (Key, Value) pairs. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_data_connector#project DiscoveryEngineDataConnector#project}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.staticIpEnabled">staticIpEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether customer has enabled static IP addresses for this connector. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.syncMode">syncMode</a></code> | <code>java.lang.String</code> | The data synchronization mode supported by the data connector. The possible value can be: 'PERIODIC', 'STREAMING'. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeouts">DiscoveryEngineDataConnectorTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `collectionDisplayName`<sup>Required</sup> <a name="collectionDisplayName" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.collectionDisplayName"></a>

- *Type:* java.lang.String

The display name of the Collection.

Should be human readable, used to display collections in the Console
Dashboard. UTF-8 encoded string with limit of 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_data_connector#collection_display_name DiscoveryEngineDataConnector#collection_display_name}

---

##### `collectionId`<sup>Required</sup> <a name="collectionId" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.collectionId"></a>

- *Type:* java.lang.String

The ID to use for the Collection, which will become the final component of the Collection's resource name.

A new Collection is created as
part of the DataConnector setup. DataConnector is a singleton
resource under Collection, managing all DataStores of the Collection.
This field must conform to [RFC-1034](https://tools.ietf.org/html/rfc1034)
standard with a length limit of 63 characters. Otherwise, an
INVALID_ARGUMENT error is returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_data_connector#collection_id DiscoveryEngineDataConnector#collection_id}

---

##### `dataSource`<sup>Required</sup> <a name="dataSource" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.dataSource"></a>

- *Type:* java.lang.String

The identifier for the data source.

This is a partial list of supported connectors. Please refer to the
[documentation](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/introduction-to-connectors-and-data-stores)
for the full list of connectors.

Supported first-party connectors include:

* 'bigquery'
* 'gcp_fhir'
* 'google_mail'
* 'google_drive'
* 'google_calendar'
* 'google_chat'

Supported third-party connectors include:
Generally available (GA) connectors:

* 'onedrive'
* 'outlook'
* 'confluence'
* 'jira'
* 'servicenow'
* 'sharepoint'

Preview connectors:

* 'asana'
* 'azure_active_directory'
* 'box'
* 'canva'
* 'confluence_server'
* 'custom_connector'
* 'docusign'
* 'dropbox'
* 'dynamics365'
* 'github'
* 'gitlab'
* 'hubspot'
* 'jira_server'
* 'linear'
* 'native_cloud_identity'
* 'notion'
* 'okta'
* 'pagerduty'
* 'peoplesoft'
* 'salesforce'
* 'shopify'
* 'slack'
* 'snowflake'
* 'teams'
* 'trello'
* 'workday'
* 'zendesk'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_data_connector#data_source DiscoveryEngineDataConnector#data_source}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_data_connector#location DiscoveryEngineDataConnector#location}

---

##### `refreshInterval`<sup>Required</sup> <a name="refreshInterval" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.refreshInterval"></a>

- *Type:* java.lang.String

The refresh interval for data sync.

If duration is set to 0, the data will
be synced in real time. The streaming feature is not supported yet. The
minimum is 30 minutes and maximum is 7 days. When the refresh interval is
set to the same value as the incremental refresh interval, incremental
sync will be disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_data_connector#refresh_interval DiscoveryEngineDataConnector#refresh_interval}

---

##### `actionConfig`<sup>Optional</sup> <a name="actionConfig" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.actionConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfig">DiscoveryEngineDataConnectorActionConfig</a>

action_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_data_connector#action_config DiscoveryEngineDataConnector#action_config}

---

##### `autoRunDisabled`<sup>Optional</sup> <a name="autoRunDisabled" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.autoRunDisabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether full syncs are paused for this connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_data_connector#auto_run_disabled DiscoveryEngineDataConnector#auto_run_disabled}

---

##### `bapConfig`<sup>Optional</sup> <a name="bapConfig" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.bapConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfig">DiscoveryEngineDataConnectorBapConfig</a>

bap_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_data_connector#bap_config DiscoveryEngineDataConnector#bap_config}

---

##### `connectorModes`<sup>Optional</sup> <a name="connectorModes" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.connectorModes"></a>

- *Type:* java.util.List<java.lang.String>

The modes enabled for this connector. The possible value can be: 'DATA_INGESTION', 'ACTIONS', 'FEDERATED' 'EUA', 'FEDERATED_AND_EUA'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_data_connector#connector_modes DiscoveryEngineDataConnector#connector_modes}

---

##### `dataSourceVersion`<sup>Optional</sup> <a name="dataSourceVersion" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.dataSourceVersion"></a>

- *Type:* java.lang.Number

The version of the data source. For example, '3' for Jira v3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_data_connector#data_source_version DiscoveryEngineDataConnector#data_source_version}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_data_connector#deletion_policy DiscoveryEngineDataConnector#deletion_policy}

---

##### `destinationConfigs`<sup>Optional</sup> <a name="destinationConfigs" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.destinationConfigs"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigs">DiscoveryEngineDataConnectorDestinationConfigs</a>>

destination_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_data_connector#destination_configs DiscoveryEngineDataConnector#destination_configs}

---

##### `entities`<sup>Optional</sup> <a name="entities" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.entities"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntities">DiscoveryEngineDataConnectorEntities</a>>

entities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_data_connector#entities DiscoveryEngineDataConnector#entities}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_data_connector#id DiscoveryEngineDataConnector#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `incrementalRefreshInterval`<sup>Optional</sup> <a name="incrementalRefreshInterval" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.incrementalRefreshInterval"></a>

- *Type:* java.lang.String

The refresh interval specifically for incremental data syncs.

If unset,
incremental syncs will use the default from env, set to 3hrs.
The minimum is 30 minutes and maximum is 7 days. Applicable to only 3P
connectors. When the refresh interval is
set to the same value as the incremental refresh interval, incremental
sync will be disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_data_connector#incremental_refresh_interval DiscoveryEngineDataConnector#incremental_refresh_interval}

---

##### `incrementalSyncDisabled`<sup>Optional</sup> <a name="incrementalSyncDisabled" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.incrementalSyncDisabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether incremental syncs are paused for this connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_data_connector#incremental_sync_disabled DiscoveryEngineDataConnector#incremental_sync_disabled}

---

##### `jsonParams`<sup>Optional</sup> <a name="jsonParams" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.jsonParams"></a>

- *Type:* java.lang.String

Params needed to access the source in the format of json string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_data_connector#json_params DiscoveryEngineDataConnector#json_params}

---

##### `kmsKeyName`<sup>Optional</sup> <a name="kmsKeyName" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.kmsKeyName"></a>

- *Type:* java.lang.String

The KMS key to be used to protect the DataStores managed by this connector.

Must be set for requests that need to comply with CMEK Org Policy
protections.
If this field is set and processed successfully, the DataStores created by
this connector will be protected by the KMS key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_data_connector#kms_key_name DiscoveryEngineDataConnector#kms_key_name}

---

##### `params`<sup>Optional</sup> <a name="params" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.params"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Params needed to access the source in the format of String-to-String (Key, Value) pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_data_connector#params DiscoveryEngineDataConnector#params}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_data_connector#project DiscoveryEngineDataConnector#project}.

---

##### `staticIpEnabled`<sup>Optional</sup> <a name="staticIpEnabled" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.staticIpEnabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether customer has enabled static IP addresses for this connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_data_connector#static_ip_enabled DiscoveryEngineDataConnector#static_ip_enabled}

---

##### `syncMode`<sup>Optional</sup> <a name="syncMode" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.syncMode"></a>

- *Type:* java.lang.String

The data synchronization mode supported by the data connector. The possible value can be: 'PERIODIC', 'STREAMING'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_data_connector#sync_mode DiscoveryEngineDataConnector#sync_mode}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeouts">DiscoveryEngineDataConnectorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_data_connector#timeouts DiscoveryEngineDataConnector#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.putActionConfig">putActionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.putBapConfig">putBapConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.putDestinationConfigs">putDestinationConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.putEntities">putEntities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetActionConfig">resetActionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetAutoRunDisabled">resetAutoRunDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetBapConfig">resetBapConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetConnectorModes">resetConnectorModes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetDataSourceVersion">resetDataSourceVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetDestinationConfigs">resetDestinationConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetEntities">resetEntities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetIncrementalRefreshInterval">resetIncrementalRefreshInterval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetIncrementalSyncDisabled">resetIncrementalSyncDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetJsonParams">resetJsonParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetKmsKeyName">resetKmsKeyName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetParams">resetParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetStaticIpEnabled">resetStaticIpEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetSyncMode">resetSyncMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putActionConfig` <a name="putActionConfig" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.putActionConfig"></a>

```java
public void putActionConfig(DiscoveryEngineDataConnectorActionConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.putActionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfig">DiscoveryEngineDataConnectorActionConfig</a>

---

##### `putBapConfig` <a name="putBapConfig" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.putBapConfig"></a>

```java
public void putBapConfig(DiscoveryEngineDataConnectorBapConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.putBapConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfig">DiscoveryEngineDataConnectorBapConfig</a>

---

##### `putDestinationConfigs` <a name="putDestinationConfigs" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.putDestinationConfigs"></a>

```java
public void putDestinationConfigs(IResolvable|java.util.List<DiscoveryEngineDataConnectorDestinationConfigs> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.putDestinationConfigs.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigs">DiscoveryEngineDataConnectorDestinationConfigs</a>>

---

##### `putEntities` <a name="putEntities" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.putEntities"></a>

```java
public void putEntities(IResolvable|java.util.List<DiscoveryEngineDataConnectorEntities> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.putEntities.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntities">DiscoveryEngineDataConnectorEntities</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.putTimeouts"></a>

```java
public void putTimeouts(DiscoveryEngineDataConnectorTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeouts">DiscoveryEngineDataConnectorTimeouts</a>

---

##### `resetActionConfig` <a name="resetActionConfig" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetActionConfig"></a>

```java
public void resetActionConfig()
```

##### `resetAutoRunDisabled` <a name="resetAutoRunDisabled" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetAutoRunDisabled"></a>

```java
public void resetAutoRunDisabled()
```

##### `resetBapConfig` <a name="resetBapConfig" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetBapConfig"></a>

```java
public void resetBapConfig()
```

##### `resetConnectorModes` <a name="resetConnectorModes" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetConnectorModes"></a>

```java
public void resetConnectorModes()
```

##### `resetDataSourceVersion` <a name="resetDataSourceVersion" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetDataSourceVersion"></a>

```java
public void resetDataSourceVersion()
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDestinationConfigs` <a name="resetDestinationConfigs" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetDestinationConfigs"></a>

```java
public void resetDestinationConfigs()
```

##### `resetEntities` <a name="resetEntities" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetEntities"></a>

```java
public void resetEntities()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetId"></a>

```java
public void resetId()
```

##### `resetIncrementalRefreshInterval` <a name="resetIncrementalRefreshInterval" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetIncrementalRefreshInterval"></a>

```java
public void resetIncrementalRefreshInterval()
```

##### `resetIncrementalSyncDisabled` <a name="resetIncrementalSyncDisabled" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetIncrementalSyncDisabled"></a>

```java
public void resetIncrementalSyncDisabled()
```

##### `resetJsonParams` <a name="resetJsonParams" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetJsonParams"></a>

```java
public void resetJsonParams()
```

##### `resetKmsKeyName` <a name="resetKmsKeyName" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetKmsKeyName"></a>

```java
public void resetKmsKeyName()
```

##### `resetParams` <a name="resetParams" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetParams"></a>

```java
public void resetParams()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetProject"></a>

```java
public void resetProject()
```

##### `resetStaticIpEnabled` <a name="resetStaticIpEnabled" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetStaticIpEnabled"></a>

```java
public void resetStaticIpEnabled()
```

##### `resetSyncMode` <a name="resetSyncMode" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetSyncMode"></a>

```java
public void resetSyncMode()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DiscoveryEngineDataConnector resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.isConstruct"></a>

```java
import io.cdktn.providers.google.discovery_engine_data_connector.DiscoveryEngineDataConnector;

DiscoveryEngineDataConnector.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.isTerraformElement"></a>

```java
import io.cdktn.providers.google.discovery_engine_data_connector.DiscoveryEngineDataConnector;

DiscoveryEngineDataConnector.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.isTerraformResource"></a>

```java
import io.cdktn.providers.google.discovery_engine_data_connector.DiscoveryEngineDataConnector;

DiscoveryEngineDataConnector.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.discovery_engine_data_connector.DiscoveryEngineDataConnector;

DiscoveryEngineDataConnector.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DiscoveryEngineDataConnector.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DiscoveryEngineDataConnector resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DiscoveryEngineDataConnector to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DiscoveryEngineDataConnector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_data_connector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DiscoveryEngineDataConnector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.actionConfig">actionConfig</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference">DiscoveryEngineDataConnectorActionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.actionState">actionState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.bapConfig">bapConfig</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference">DiscoveryEngineDataConnectorBapConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.blockingReasons">blockingReasons</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.connectorType">connectorType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.destinationConfigs">destinationConfigs</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList">DiscoveryEngineDataConnectorDestinationConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.entities">entities</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList">DiscoveryEngineDataConnectorEntitiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.errors">errors</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList">DiscoveryEngineDataConnectorErrorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.lastSyncTime">lastSyncTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.latestPauseTime">latestPauseTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.privateConnectivityProjectId">privateConnectivityProjectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.realtimeState">realtimeState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.staticIpAddresses">staticIpAddresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference">DiscoveryEngineDataConnectorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.actionConfigInput">actionConfigInput</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfig">DiscoveryEngineDataConnectorActionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.autoRunDisabledInput">autoRunDisabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.bapConfigInput">bapConfigInput</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfig">DiscoveryEngineDataConnectorBapConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.collectionDisplayNameInput">collectionDisplayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.collectionIdInput">collectionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.connectorModesInput">connectorModesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.dataSourceInput">dataSourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.dataSourceVersionInput">dataSourceVersionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.destinationConfigsInput">destinationConfigsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigs">DiscoveryEngineDataConnectorDestinationConfigs</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.entitiesInput">entitiesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntities">DiscoveryEngineDataConnectorEntities</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.incrementalRefreshIntervalInput">incrementalRefreshIntervalInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.incrementalSyncDisabledInput">incrementalSyncDisabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.jsonParamsInput">jsonParamsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.kmsKeyNameInput">kmsKeyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.paramsInput">paramsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.refreshIntervalInput">refreshIntervalInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.staticIpEnabledInput">staticIpEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.syncModeInput">syncModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeouts">DiscoveryEngineDataConnectorTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.autoRunDisabled">autoRunDisabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.collectionDisplayName">collectionDisplayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.collectionId">collectionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.connectorModes">connectorModes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.dataSource">dataSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.dataSourceVersion">dataSourceVersion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.incrementalRefreshInterval">incrementalRefreshInterval</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.incrementalSyncDisabled">incrementalSyncDisabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.jsonParams">jsonParams</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.kmsKeyName">kmsKeyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.params">params</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.refreshInterval">refreshInterval</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.staticIpEnabled">staticIpEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.syncMode">syncMode</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `actionConfig`<sup>Required</sup> <a name="actionConfig" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.actionConfig"></a>

```java
public DiscoveryEngineDataConnectorActionConfigOutputReference getActionConfig();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference">DiscoveryEngineDataConnectorActionConfigOutputReference</a>

---

##### `actionState`<sup>Required</sup> <a name="actionState" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.actionState"></a>

```java
public java.lang.String getActionState();
```

- *Type:* java.lang.String

---

##### `bapConfig`<sup>Required</sup> <a name="bapConfig" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.bapConfig"></a>

```java
public DiscoveryEngineDataConnectorBapConfigOutputReference getBapConfig();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference">DiscoveryEngineDataConnectorBapConfigOutputReference</a>

---

##### `blockingReasons`<sup>Required</sup> <a name="blockingReasons" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.blockingReasons"></a>

```java
public java.util.List<java.lang.String> getBlockingReasons();
```

- *Type:* java.util.List<java.lang.String>

---

##### `connectorType`<sup>Required</sup> <a name="connectorType" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.connectorType"></a>

```java
public java.lang.String getConnectorType();
```

- *Type:* java.lang.String

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `destinationConfigs`<sup>Required</sup> <a name="destinationConfigs" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.destinationConfigs"></a>

```java
public DiscoveryEngineDataConnectorDestinationConfigsList getDestinationConfigs();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList">DiscoveryEngineDataConnectorDestinationConfigsList</a>

---

##### `entities`<sup>Required</sup> <a name="entities" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.entities"></a>

```java
public DiscoveryEngineDataConnectorEntitiesList getEntities();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList">DiscoveryEngineDataConnectorEntitiesList</a>

---

##### `errors`<sup>Required</sup> <a name="errors" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.errors"></a>

```java
public DiscoveryEngineDataConnectorErrorsList getErrors();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList">DiscoveryEngineDataConnectorErrorsList</a>

---

##### `lastSyncTime`<sup>Required</sup> <a name="lastSyncTime" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.lastSyncTime"></a>

```java
public java.lang.String getLastSyncTime();
```

- *Type:* java.lang.String

---

##### `latestPauseTime`<sup>Required</sup> <a name="latestPauseTime" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.latestPauseTime"></a>

```java
public java.lang.String getLatestPauseTime();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `privateConnectivityProjectId`<sup>Required</sup> <a name="privateConnectivityProjectId" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.privateConnectivityProjectId"></a>

```java
public java.lang.String getPrivateConnectivityProjectId();
```

- *Type:* java.lang.String

---

##### `realtimeState`<sup>Required</sup> <a name="realtimeState" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.realtimeState"></a>

```java
public java.lang.String getRealtimeState();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `staticIpAddresses`<sup>Required</sup> <a name="staticIpAddresses" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.staticIpAddresses"></a>

```java
public java.util.List<java.lang.String> getStaticIpAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.timeouts"></a>

```java
public DiscoveryEngineDataConnectorTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference">DiscoveryEngineDataConnectorTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `actionConfigInput`<sup>Optional</sup> <a name="actionConfigInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.actionConfigInput"></a>

```java
public DiscoveryEngineDataConnectorActionConfig getActionConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfig">DiscoveryEngineDataConnectorActionConfig</a>

---

##### `autoRunDisabledInput`<sup>Optional</sup> <a name="autoRunDisabledInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.autoRunDisabledInput"></a>

```java
public java.lang.Boolean|IResolvable getAutoRunDisabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `bapConfigInput`<sup>Optional</sup> <a name="bapConfigInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.bapConfigInput"></a>

```java
public DiscoveryEngineDataConnectorBapConfig getBapConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfig">DiscoveryEngineDataConnectorBapConfig</a>

---

##### `collectionDisplayNameInput`<sup>Optional</sup> <a name="collectionDisplayNameInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.collectionDisplayNameInput"></a>

```java
public java.lang.String getCollectionDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `collectionIdInput`<sup>Optional</sup> <a name="collectionIdInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.collectionIdInput"></a>

```java
public java.lang.String getCollectionIdInput();
```

- *Type:* java.lang.String

---

##### `connectorModesInput`<sup>Optional</sup> <a name="connectorModesInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.connectorModesInput"></a>

```java
public java.util.List<java.lang.String> getConnectorModesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dataSourceInput`<sup>Optional</sup> <a name="dataSourceInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.dataSourceInput"></a>

```java
public java.lang.String getDataSourceInput();
```

- *Type:* java.lang.String

---

##### `dataSourceVersionInput`<sup>Optional</sup> <a name="dataSourceVersionInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.dataSourceVersionInput"></a>

```java
public java.lang.Number getDataSourceVersionInput();
```

- *Type:* java.lang.Number

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `destinationConfigsInput`<sup>Optional</sup> <a name="destinationConfigsInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.destinationConfigsInput"></a>

```java
public IResolvable|java.util.List<DiscoveryEngineDataConnectorDestinationConfigs> getDestinationConfigsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigs">DiscoveryEngineDataConnectorDestinationConfigs</a>>

---

##### `entitiesInput`<sup>Optional</sup> <a name="entitiesInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.entitiesInput"></a>

```java
public IResolvable|java.util.List<DiscoveryEngineDataConnectorEntities> getEntitiesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntities">DiscoveryEngineDataConnectorEntities</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `incrementalRefreshIntervalInput`<sup>Optional</sup> <a name="incrementalRefreshIntervalInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.incrementalRefreshIntervalInput"></a>

```java
public java.lang.String getIncrementalRefreshIntervalInput();
```

- *Type:* java.lang.String

---

##### `incrementalSyncDisabledInput`<sup>Optional</sup> <a name="incrementalSyncDisabledInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.incrementalSyncDisabledInput"></a>

```java
public java.lang.Boolean|IResolvable getIncrementalSyncDisabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `jsonParamsInput`<sup>Optional</sup> <a name="jsonParamsInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.jsonParamsInput"></a>

```java
public java.lang.String getJsonParamsInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyNameInput`<sup>Optional</sup> <a name="kmsKeyNameInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.kmsKeyNameInput"></a>

```java
public java.lang.String getKmsKeyNameInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `paramsInput`<sup>Optional</sup> <a name="paramsInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.paramsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParamsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `refreshIntervalInput`<sup>Optional</sup> <a name="refreshIntervalInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.refreshIntervalInput"></a>

```java
public java.lang.String getRefreshIntervalInput();
```

- *Type:* java.lang.String

---

##### `staticIpEnabledInput`<sup>Optional</sup> <a name="staticIpEnabledInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.staticIpEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getStaticIpEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `syncModeInput`<sup>Optional</sup> <a name="syncModeInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.syncModeInput"></a>

```java
public java.lang.String getSyncModeInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.timeoutsInput"></a>

```java
public IResolvable|DiscoveryEngineDataConnectorTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeouts">DiscoveryEngineDataConnectorTimeouts</a>

---

##### `autoRunDisabled`<sup>Required</sup> <a name="autoRunDisabled" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.autoRunDisabled"></a>

```java
public java.lang.Boolean|IResolvable getAutoRunDisabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `collectionDisplayName`<sup>Required</sup> <a name="collectionDisplayName" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.collectionDisplayName"></a>

```java
public java.lang.String getCollectionDisplayName();
```

- *Type:* java.lang.String

---

##### `collectionId`<sup>Required</sup> <a name="collectionId" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.collectionId"></a>

```java
public java.lang.String getCollectionId();
```

- *Type:* java.lang.String

---

##### `connectorModes`<sup>Required</sup> <a name="connectorModes" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.connectorModes"></a>

```java
public java.util.List<java.lang.String> getConnectorModes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dataSource`<sup>Required</sup> <a name="dataSource" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.dataSource"></a>

```java
public java.lang.String getDataSource();
```

- *Type:* java.lang.String

---

##### `dataSourceVersion`<sup>Required</sup> <a name="dataSourceVersion" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.dataSourceVersion"></a>

```java
public java.lang.Number getDataSourceVersion();
```

- *Type:* java.lang.Number

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `incrementalRefreshInterval`<sup>Required</sup> <a name="incrementalRefreshInterval" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.incrementalRefreshInterval"></a>

```java
public java.lang.String getIncrementalRefreshInterval();
```

- *Type:* java.lang.String

---

##### `incrementalSyncDisabled`<sup>Required</sup> <a name="incrementalSyncDisabled" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.incrementalSyncDisabled"></a>

```java
public java.lang.Boolean|IResolvable getIncrementalSyncDisabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `jsonParams`<sup>Required</sup> <a name="jsonParams" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.jsonParams"></a>

```java
public java.lang.String getJsonParams();
```

- *Type:* java.lang.String

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.kmsKeyName"></a>

```java
public java.lang.String getKmsKeyName();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `params`<sup>Required</sup> <a name="params" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.params"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParams();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `refreshInterval`<sup>Required</sup> <a name="refreshInterval" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.refreshInterval"></a>

```java
public java.lang.String getRefreshInterval();
```

- *Type:* java.lang.String

---

##### `staticIpEnabled`<sup>Required</sup> <a name="staticIpEnabled" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.staticIpEnabled"></a>

```java
public java.lang.Boolean|IResolvable getStaticIpEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `syncMode`<sup>Required</sup> <a name="syncMode" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.syncMode"></a>

```java
public java.lang.String getSyncMode();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DiscoveryEngineDataConnectorActionConfig <a name="DiscoveryEngineDataConnectorActionConfig" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfig.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_data_connector.DiscoveryEngineDataConnectorActionConfig;

DiscoveryEngineDataConnectorActionConfig.builder()
//  .actionParams(java.util.Map<java.lang.String, java.lang.String>)
//  .createBapConnection(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfig.property.actionParams">actionParams</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Params needed to configure the actions in the format of String-to-String (Key, Value) pairs. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfig.property.createBapConnection">createBapConnection</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to create a BAP (Business Application Platform) connection for this action connector. |

---

##### `actionParams`<sup>Optional</sup> <a name="actionParams" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfig.property.actionParams"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getActionParams();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Params needed to configure the actions in the format of String-to-String (Key, Value) pairs.

Contains connection
credentials and configuration for the action connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_data_connector#action_params DiscoveryEngineDataConnector#action_params}

---

##### `createBapConnection`<sup>Optional</sup> <a name="createBapConnection" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfig.property.createBapConnection"></a>

```java
public java.lang.Boolean|IResolvable getCreateBapConnection();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to create a BAP (Business Application Platform) connection for this action connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_data_connector#create_bap_connection DiscoveryEngineDataConnector#create_bap_connection}

---

### DiscoveryEngineDataConnectorBapConfig <a name="DiscoveryEngineDataConnectorBapConfig" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfig.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_data_connector.DiscoveryEngineDataConnectorBapConfig;

DiscoveryEngineDataConnectorBapConfig.builder()
//  .enabledActions(java.util.List<java.lang.String>)
//  .supportedConnectorModes(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfig.property.enabledActions">enabledActions</a></code> | <code>java.util.List<java.lang.String></code> | The list of enabled actions for this connector. Supported values include: 'create_issue', 'update_issue', 'change_issue_status', 'create_comment', 'update_comment', 'upload_attachment'. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfig.property.supportedConnectorModes">supportedConnectorModes</a></code> | <code>java.util.List<java.lang.String></code> | The connector modes supported by the BAP configuration. The possible values include: 'ACTIONS'. |

---

##### `enabledActions`<sup>Optional</sup> <a name="enabledActions" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfig.property.enabledActions"></a>

```java
public java.util.List<java.lang.String> getEnabledActions();
```

- *Type:* java.util.List<java.lang.String>

The list of enabled actions for this connector. Supported values include: 'create_issue', 'update_issue', 'change_issue_status', 'create_comment', 'update_comment', 'upload_attachment'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_data_connector#enabled_actions DiscoveryEngineDataConnector#enabled_actions}

---

##### `supportedConnectorModes`<sup>Optional</sup> <a name="supportedConnectorModes" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfig.property.supportedConnectorModes"></a>

```java
public java.util.List<java.lang.String> getSupportedConnectorModes();
```

- *Type:* java.util.List<java.lang.String>

The connector modes supported by the BAP configuration. The possible values include: 'ACTIONS'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_data_connector#supported_connector_modes DiscoveryEngineDataConnector#supported_connector_modes}

---

### DiscoveryEngineDataConnectorConfig <a name="DiscoveryEngineDataConnectorConfig" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_data_connector.DiscoveryEngineDataConnectorConfig;

DiscoveryEngineDataConnectorConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .collectionDisplayName(java.lang.String)
    .collectionId(java.lang.String)
    .dataSource(java.lang.String)
    .location(java.lang.String)
    .refreshInterval(java.lang.String)
//  .actionConfig(DiscoveryEngineDataConnectorActionConfig)
//  .autoRunDisabled(java.lang.Boolean|IResolvable)
//  .bapConfig(DiscoveryEngineDataConnectorBapConfig)
//  .connectorModes(java.util.List<java.lang.String>)
//  .dataSourceVersion(java.lang.Number)
//  .deletionPolicy(java.lang.String)
//  .destinationConfigs(IResolvable|java.util.List<DiscoveryEngineDataConnectorDestinationConfigs>)
//  .entities(IResolvable|java.util.List<DiscoveryEngineDataConnectorEntities>)
//  .id(java.lang.String)
//  .incrementalRefreshInterval(java.lang.String)
//  .incrementalSyncDisabled(java.lang.Boolean|IResolvable)
//  .jsonParams(java.lang.String)
//  .kmsKeyName(java.lang.String)
//  .params(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .staticIpEnabled(java.lang.Boolean|IResolvable)
//  .syncMode(java.lang.String)
//  .timeouts(DiscoveryEngineDataConnectorTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.collectionDisplayName">collectionDisplayName</a></code> | <code>java.lang.String</code> | The display name of the Collection. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.collectionId">collectionId</a></code> | <code>java.lang.String</code> | The ID to use for the Collection, which will become the final component of the Collection's resource name. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.dataSource">dataSource</a></code> | <code>java.lang.String</code> | The identifier for the data source. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.location">location</a></code> | <code>java.lang.String</code> | The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu". |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.refreshInterval">refreshInterval</a></code> | <code>java.lang.String</code> | The refresh interval for data sync. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.actionConfig">actionConfig</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfig">DiscoveryEngineDataConnectorActionConfig</a></code> | action_config block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.autoRunDisabled">autoRunDisabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether full syncs are paused for this connector. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.bapConfig">bapConfig</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfig">DiscoveryEngineDataConnectorBapConfig</a></code> | bap_config block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.connectorModes">connectorModes</a></code> | <code>java.util.List<java.lang.String></code> | The modes enabled for this connector. The possible value can be: 'DATA_INGESTION', 'ACTIONS', 'FEDERATED' 'EUA', 'FEDERATED_AND_EUA'. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.dataSourceVersion">dataSourceVersion</a></code> | <code>java.lang.Number</code> | The version of the data source. For example, '3' for Jira v3. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.destinationConfigs">destinationConfigs</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigs">DiscoveryEngineDataConnectorDestinationConfigs</a>></code> | destination_configs block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.entities">entities</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntities">DiscoveryEngineDataConnectorEntities</a>></code> | entities block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_data_connector#id DiscoveryEngineDataConnector#id}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.incrementalRefreshInterval">incrementalRefreshInterval</a></code> | <code>java.lang.String</code> | The refresh interval specifically for incremental data syncs. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.incrementalSyncDisabled">incrementalSyncDisabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether incremental syncs are paused for this connector. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.jsonParams">jsonParams</a></code> | <code>java.lang.String</code> | Params needed to access the source in the format of json string. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.kmsKeyName">kmsKeyName</a></code> | <code>java.lang.String</code> | The KMS key to be used to protect the DataStores managed by this connector. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.params">params</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Params needed to access the source in the format of String-to-String (Key, Value) pairs. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_data_connector#project DiscoveryEngineDataConnector#project}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.staticIpEnabled">staticIpEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether customer has enabled static IP addresses for this connector. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.syncMode">syncMode</a></code> | <code>java.lang.String</code> | The data synchronization mode supported by the data connector. The possible value can be: 'PERIODIC', 'STREAMING'. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeouts">DiscoveryEngineDataConnectorTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `collectionDisplayName`<sup>Required</sup> <a name="collectionDisplayName" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.collectionDisplayName"></a>

```java
public java.lang.String getCollectionDisplayName();
```

- *Type:* java.lang.String

The display name of the Collection.

Should be human readable, used to display collections in the Console
Dashboard. UTF-8 encoded string with limit of 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_data_connector#collection_display_name DiscoveryEngineDataConnector#collection_display_name}

---

##### `collectionId`<sup>Required</sup> <a name="collectionId" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.collectionId"></a>

```java
public java.lang.String getCollectionId();
```

- *Type:* java.lang.String

The ID to use for the Collection, which will become the final component of the Collection's resource name.

A new Collection is created as
part of the DataConnector setup. DataConnector is a singleton
resource under Collection, managing all DataStores of the Collection.
This field must conform to [RFC-1034](https://tools.ietf.org/html/rfc1034)
standard with a length limit of 63 characters. Otherwise, an
INVALID_ARGUMENT error is returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_data_connector#collection_id DiscoveryEngineDataConnector#collection_id}

---

##### `dataSource`<sup>Required</sup> <a name="dataSource" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.dataSource"></a>

```java
public java.lang.String getDataSource();
```

- *Type:* java.lang.String

The identifier for the data source.

This is a partial list of supported connectors. Please refer to the
[documentation](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/introduction-to-connectors-and-data-stores)
for the full list of connectors.

Supported first-party connectors include:

* 'bigquery'
* 'gcp_fhir'
* 'google_mail'
* 'google_drive'
* 'google_calendar'
* 'google_chat'

Supported third-party connectors include:
Generally available (GA) connectors:

* 'onedrive'
* 'outlook'
* 'confluence'
* 'jira'
* 'servicenow'
* 'sharepoint'

Preview connectors:

* 'asana'
* 'azure_active_directory'
* 'box'
* 'canva'
* 'confluence_server'
* 'custom_connector'
* 'docusign'
* 'dropbox'
* 'dynamics365'
* 'github'
* 'gitlab'
* 'hubspot'
* 'jira_server'
* 'linear'
* 'native_cloud_identity'
* 'notion'
* 'okta'
* 'pagerduty'
* 'peoplesoft'
* 'salesforce'
* 'shopify'
* 'slack'
* 'snowflake'
* 'teams'
* 'trello'
* 'workday'
* 'zendesk'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_data_connector#data_source DiscoveryEngineDataConnector#data_source}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_data_connector#location DiscoveryEngineDataConnector#location}

---

##### `refreshInterval`<sup>Required</sup> <a name="refreshInterval" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.refreshInterval"></a>

```java
public java.lang.String getRefreshInterval();
```

- *Type:* java.lang.String

The refresh interval for data sync.

If duration is set to 0, the data will
be synced in real time. The streaming feature is not supported yet. The
minimum is 30 minutes and maximum is 7 days. When the refresh interval is
set to the same value as the incremental refresh interval, incremental
sync will be disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_data_connector#refresh_interval DiscoveryEngineDataConnector#refresh_interval}

---

##### `actionConfig`<sup>Optional</sup> <a name="actionConfig" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.actionConfig"></a>

```java
public DiscoveryEngineDataConnectorActionConfig getActionConfig();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfig">DiscoveryEngineDataConnectorActionConfig</a>

action_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_data_connector#action_config DiscoveryEngineDataConnector#action_config}

---

##### `autoRunDisabled`<sup>Optional</sup> <a name="autoRunDisabled" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.autoRunDisabled"></a>

```java
public java.lang.Boolean|IResolvable getAutoRunDisabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether full syncs are paused for this connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_data_connector#auto_run_disabled DiscoveryEngineDataConnector#auto_run_disabled}

---

##### `bapConfig`<sup>Optional</sup> <a name="bapConfig" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.bapConfig"></a>

```java
public DiscoveryEngineDataConnectorBapConfig getBapConfig();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfig">DiscoveryEngineDataConnectorBapConfig</a>

bap_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_data_connector#bap_config DiscoveryEngineDataConnector#bap_config}

---

##### `connectorModes`<sup>Optional</sup> <a name="connectorModes" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.connectorModes"></a>

```java
public java.util.List<java.lang.String> getConnectorModes();
```

- *Type:* java.util.List<java.lang.String>

The modes enabled for this connector. The possible value can be: 'DATA_INGESTION', 'ACTIONS', 'FEDERATED' 'EUA', 'FEDERATED_AND_EUA'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_data_connector#connector_modes DiscoveryEngineDataConnector#connector_modes}

---

##### `dataSourceVersion`<sup>Optional</sup> <a name="dataSourceVersion" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.dataSourceVersion"></a>

```java
public java.lang.Number getDataSourceVersion();
```

- *Type:* java.lang.Number

The version of the data source. For example, '3' for Jira v3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_data_connector#data_source_version DiscoveryEngineDataConnector#data_source_version}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_data_connector#deletion_policy DiscoveryEngineDataConnector#deletion_policy}

---

##### `destinationConfigs`<sup>Optional</sup> <a name="destinationConfigs" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.destinationConfigs"></a>

```java
public IResolvable|java.util.List<DiscoveryEngineDataConnectorDestinationConfigs> getDestinationConfigs();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigs">DiscoveryEngineDataConnectorDestinationConfigs</a>>

destination_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_data_connector#destination_configs DiscoveryEngineDataConnector#destination_configs}

---

##### `entities`<sup>Optional</sup> <a name="entities" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.entities"></a>

```java
public IResolvable|java.util.List<DiscoveryEngineDataConnectorEntities> getEntities();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntities">DiscoveryEngineDataConnectorEntities</a>>

entities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_data_connector#entities DiscoveryEngineDataConnector#entities}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_data_connector#id DiscoveryEngineDataConnector#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `incrementalRefreshInterval`<sup>Optional</sup> <a name="incrementalRefreshInterval" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.incrementalRefreshInterval"></a>

```java
public java.lang.String getIncrementalRefreshInterval();
```

- *Type:* java.lang.String

The refresh interval specifically for incremental data syncs.

If unset,
incremental syncs will use the default from env, set to 3hrs.
The minimum is 30 minutes and maximum is 7 days. Applicable to only 3P
connectors. When the refresh interval is
set to the same value as the incremental refresh interval, incremental
sync will be disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_data_connector#incremental_refresh_interval DiscoveryEngineDataConnector#incremental_refresh_interval}

---

##### `incrementalSyncDisabled`<sup>Optional</sup> <a name="incrementalSyncDisabled" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.incrementalSyncDisabled"></a>

```java
public java.lang.Boolean|IResolvable getIncrementalSyncDisabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether incremental syncs are paused for this connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_data_connector#incremental_sync_disabled DiscoveryEngineDataConnector#incremental_sync_disabled}

---

##### `jsonParams`<sup>Optional</sup> <a name="jsonParams" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.jsonParams"></a>

```java
public java.lang.String getJsonParams();
```

- *Type:* java.lang.String

Params needed to access the source in the format of json string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_data_connector#json_params DiscoveryEngineDataConnector#json_params}

---

##### `kmsKeyName`<sup>Optional</sup> <a name="kmsKeyName" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.kmsKeyName"></a>

```java
public java.lang.String getKmsKeyName();
```

- *Type:* java.lang.String

The KMS key to be used to protect the DataStores managed by this connector.

Must be set for requests that need to comply with CMEK Org Policy
protections.
If this field is set and processed successfully, the DataStores created by
this connector will be protected by the KMS key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_data_connector#kms_key_name DiscoveryEngineDataConnector#kms_key_name}

---

##### `params`<sup>Optional</sup> <a name="params" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.params"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParams();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Params needed to access the source in the format of String-to-String (Key, Value) pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_data_connector#params DiscoveryEngineDataConnector#params}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_data_connector#project DiscoveryEngineDataConnector#project}.

---

##### `staticIpEnabled`<sup>Optional</sup> <a name="staticIpEnabled" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.staticIpEnabled"></a>

```java
public java.lang.Boolean|IResolvable getStaticIpEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether customer has enabled static IP addresses for this connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_data_connector#static_ip_enabled DiscoveryEngineDataConnector#static_ip_enabled}

---

##### `syncMode`<sup>Optional</sup> <a name="syncMode" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.syncMode"></a>

```java
public java.lang.String getSyncMode();
```

- *Type:* java.lang.String

The data synchronization mode supported by the data connector. The possible value can be: 'PERIODIC', 'STREAMING'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_data_connector#sync_mode DiscoveryEngineDataConnector#sync_mode}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.timeouts"></a>

```java
public DiscoveryEngineDataConnectorTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeouts">DiscoveryEngineDataConnectorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_data_connector#timeouts DiscoveryEngineDataConnector#timeouts}

---

### DiscoveryEngineDataConnectorDestinationConfigs <a name="DiscoveryEngineDataConnectorDestinationConfigs" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigs.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_data_connector.DiscoveryEngineDataConnectorDestinationConfigs;

DiscoveryEngineDataConnectorDestinationConfigs.builder()
//  .destinations(IResolvable|java.util.List<DiscoveryEngineDataConnectorDestinationConfigsDestinations>)
//  .key(java.lang.String)
//  .params(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigs.property.destinations">destinations</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinations">DiscoveryEngineDataConnectorDestinationConfigsDestinations</a>></code> | destinations block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigs.property.key">key</a></code> | <code>java.lang.String</code> | The key of the destination configuration, for example 'url'. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigs.property.params">params</a></code> | <code>java.lang.String</code> | Additional parameters for this destination config in structured json format. |

---

##### `destinations`<sup>Optional</sup> <a name="destinations" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigs.property.destinations"></a>

```java
public IResolvable|java.util.List<DiscoveryEngineDataConnectorDestinationConfigsDestinations> getDestinations();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinations">DiscoveryEngineDataConnectorDestinationConfigsDestinations</a>>

destinations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_data_connector#destinations DiscoveryEngineDataConnector#destinations}

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigs.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key of the destination configuration, for example 'url'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_data_connector#key DiscoveryEngineDataConnector#key}

---

##### `params`<sup>Optional</sup> <a name="params" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigs.property.params"></a>

```java
public java.lang.String getParams();
```

- *Type:* java.lang.String

Additional parameters for this destination config in structured json format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_data_connector#params DiscoveryEngineDataConnector#params}

---

### DiscoveryEngineDataConnectorDestinationConfigsDestinations <a name="DiscoveryEngineDataConnectorDestinationConfigsDestinations" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinations.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_data_connector.DiscoveryEngineDataConnectorDestinationConfigsDestinations;

DiscoveryEngineDataConnectorDestinationConfigsDestinations.builder()
//  .host(java.lang.String)
//  .port(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinations.property.host">host</a></code> | <code>java.lang.String</code> | The host of the destination, for example 'https://example.atlassian.net'. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinations.property.port">port</a></code> | <code>java.lang.Number</code> | Target port number accepted by the destination. |

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinations.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

The host of the destination, for example 'https://example.atlassian.net'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_data_connector#host DiscoveryEngineDataConnector#host}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinations.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Target port number accepted by the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_data_connector#port DiscoveryEngineDataConnector#port}

---

### DiscoveryEngineDataConnectorEntities <a name="DiscoveryEngineDataConnectorEntities" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntities"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntities.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_data_connector.DiscoveryEngineDataConnectorEntities;

DiscoveryEngineDataConnectorEntities.builder()
//  .entityName(java.lang.String)
//  .keyPropertyMappings(java.util.Map<java.lang.String, java.lang.String>)
//  .params(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntities.property.entityName">entityName</a></code> | <code>java.lang.String</code> | The name of the entity. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntities.property.keyPropertyMappings">keyPropertyMappings</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Attributes for indexing. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntities.property.params">params</a></code> | <code>java.lang.String</code> | The parameters for the entity to facilitate data ingestion. |

---

##### `entityName`<sup>Optional</sup> <a name="entityName" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntities.property.entityName"></a>

```java
public java.lang.String getEntityName();
```

- *Type:* java.lang.String

The name of the entity.

Supported values by data source:

* Salesforce: 'Lead', 'Opportunity', 'Contact', 'Account', 'Case', 'Contract', 'Campaign'
* Jira: project, issue, attachment, comment, worklog
* Confluence: 'Content', 'Space'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_data_connector#entity_name DiscoveryEngineDataConnector#entity_name}

---

##### `keyPropertyMappings`<sup>Optional</sup> <a name="keyPropertyMappings" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntities.property.keyPropertyMappings"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getKeyPropertyMappings();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Attributes for indexing.

Key: Field name.
Value: The key property to map a field to, such as 'title', and
'description'. Supported key properties:

* 'title': The title for data record. This would be displayed on search
  results.
* 'description': The description for data record. This would be displayed
  on search results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_data_connector#key_property_mappings DiscoveryEngineDataConnector#key_property_mappings}

---

##### `params`<sup>Optional</sup> <a name="params" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntities.property.params"></a>

```java
public java.lang.String getParams();
```

- *Type:* java.lang.String

The parameters for the entity to facilitate data ingestion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_data_connector#params DiscoveryEngineDataConnector#params}

---

### DiscoveryEngineDataConnectorErrors <a name="DiscoveryEngineDataConnectorErrors" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrors.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_data_connector.DiscoveryEngineDataConnectorErrors;

DiscoveryEngineDataConnectorErrors.builder()
    .build();
```


### DiscoveryEngineDataConnectorTimeouts <a name="DiscoveryEngineDataConnectorTimeouts" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_data_connector.DiscoveryEngineDataConnectorTimeouts;

DiscoveryEngineDataConnectorTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_data_connector#create DiscoveryEngineDataConnector#create}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_data_connector#delete DiscoveryEngineDataConnector#delete}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_data_connector#update DiscoveryEngineDataConnector#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_data_connector#create DiscoveryEngineDataConnector#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_data_connector#delete DiscoveryEngineDataConnector#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/discovery_engine_data_connector#update DiscoveryEngineDataConnector#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DiscoveryEngineDataConnectorActionConfigOutputReference <a name="DiscoveryEngineDataConnectorActionConfigOutputReference" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_data_connector.DiscoveryEngineDataConnectorActionConfigOutputReference;

new DiscoveryEngineDataConnectorActionConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.resetActionParams">resetActionParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.resetCreateBapConnection">resetCreateBapConnection</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetActionParams` <a name="resetActionParams" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.resetActionParams"></a>

```java
public void resetActionParams()
```

##### `resetCreateBapConnection` <a name="resetCreateBapConnection" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.resetCreateBapConnection"></a>

```java
public void resetCreateBapConnection()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.property.isActionConfigured">isActionConfigured</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.property.actionParamsInput">actionParamsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.property.createBapConnectionInput">createBapConnectionInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.property.actionParams">actionParams</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.property.createBapConnection">createBapConnection</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfig">DiscoveryEngineDataConnectorActionConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `isActionConfigured`<sup>Required</sup> <a name="isActionConfigured" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.property.isActionConfigured"></a>

```java
public IResolvable getIsActionConfigured();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `actionParamsInput`<sup>Optional</sup> <a name="actionParamsInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.property.actionParamsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getActionParamsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `createBapConnectionInput`<sup>Optional</sup> <a name="createBapConnectionInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.property.createBapConnectionInput"></a>

```java
public java.lang.Boolean|IResolvable getCreateBapConnectionInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `actionParams`<sup>Required</sup> <a name="actionParams" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.property.actionParams"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getActionParams();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `createBapConnection`<sup>Required</sup> <a name="createBapConnection" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.property.createBapConnection"></a>

```java
public java.lang.Boolean|IResolvable getCreateBapConnection();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.property.internalValue"></a>

```java
public DiscoveryEngineDataConnectorActionConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfig">DiscoveryEngineDataConnectorActionConfig</a>

---


### DiscoveryEngineDataConnectorBapConfigOutputReference <a name="DiscoveryEngineDataConnectorBapConfigOutputReference" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_data_connector.DiscoveryEngineDataConnectorBapConfigOutputReference;

new DiscoveryEngineDataConnectorBapConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.resetEnabledActions">resetEnabledActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.resetSupportedConnectorModes">resetSupportedConnectorModes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabledActions` <a name="resetEnabledActions" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.resetEnabledActions"></a>

```java
public void resetEnabledActions()
```

##### `resetSupportedConnectorModes` <a name="resetSupportedConnectorModes" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.resetSupportedConnectorModes"></a>

```java
public void resetSupportedConnectorModes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.property.enabledActionsInput">enabledActionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.property.supportedConnectorModesInput">supportedConnectorModesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.property.enabledActions">enabledActions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.property.supportedConnectorModes">supportedConnectorModes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfig">DiscoveryEngineDataConnectorBapConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledActionsInput`<sup>Optional</sup> <a name="enabledActionsInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.property.enabledActionsInput"></a>

```java
public java.util.List<java.lang.String> getEnabledActionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `supportedConnectorModesInput`<sup>Optional</sup> <a name="supportedConnectorModesInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.property.supportedConnectorModesInput"></a>

```java
public java.util.List<java.lang.String> getSupportedConnectorModesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enabledActions`<sup>Required</sup> <a name="enabledActions" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.property.enabledActions"></a>

```java
public java.util.List<java.lang.String> getEnabledActions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `supportedConnectorModes`<sup>Required</sup> <a name="supportedConnectorModes" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.property.supportedConnectorModes"></a>

```java
public java.util.List<java.lang.String> getSupportedConnectorModes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.property.internalValue"></a>

```java
public DiscoveryEngineDataConnectorBapConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfig">DiscoveryEngineDataConnectorBapConfig</a>

---


### DiscoveryEngineDataConnectorDestinationConfigsDestinationsList <a name="DiscoveryEngineDataConnectorDestinationConfigsDestinationsList" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_data_connector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList;

new DiscoveryEngineDataConnectorDestinationConfigsDestinationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList.get"></a>

```java
public DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinations">DiscoveryEngineDataConnectorDestinationConfigsDestinations</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DiscoveryEngineDataConnectorDestinationConfigsDestinations> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinations">DiscoveryEngineDataConnectorDestinationConfigsDestinations</a>>

---


### DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference <a name="DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_data_connector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference;

new DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.resetHost">resetHost</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.resetPort">resetPort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHost` <a name="resetHost" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.resetHost"></a>

```java
public void resetHost()
```

##### `resetPort` <a name="resetPort" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.resetPort"></a>

```java
public void resetPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.property.hostInput">hostInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.property.host">host</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinations">DiscoveryEngineDataConnectorDestinationConfigsDestinations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.property.hostInput"></a>

```java
public java.lang.String getHostInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.property.internalValue"></a>

```java
public IResolvable|DiscoveryEngineDataConnectorDestinationConfigsDestinations getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinations">DiscoveryEngineDataConnectorDestinationConfigsDestinations</a>

---


### DiscoveryEngineDataConnectorDestinationConfigsList <a name="DiscoveryEngineDataConnectorDestinationConfigsList" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_data_connector.DiscoveryEngineDataConnectorDestinationConfigsList;

new DiscoveryEngineDataConnectorDestinationConfigsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList.get"></a>

```java
public DiscoveryEngineDataConnectorDestinationConfigsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigs">DiscoveryEngineDataConnectorDestinationConfigs</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DiscoveryEngineDataConnectorDestinationConfigs> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigs">DiscoveryEngineDataConnectorDestinationConfigs</a>>

---


### DiscoveryEngineDataConnectorDestinationConfigsOutputReference <a name="DiscoveryEngineDataConnectorDestinationConfigsOutputReference" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_data_connector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference;

new DiscoveryEngineDataConnectorDestinationConfigsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.putDestinations">putDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.resetDestinations">resetDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.resetParams">resetParams</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDestinations` <a name="putDestinations" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.putDestinations"></a>

```java
public void putDestinations(IResolvable|java.util.List<DiscoveryEngineDataConnectorDestinationConfigsDestinations> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.putDestinations.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinations">DiscoveryEngineDataConnectorDestinationConfigsDestinations</a>>

---

##### `resetDestinations` <a name="resetDestinations" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.resetDestinations"></a>

```java
public void resetDestinations()
```

##### `resetKey` <a name="resetKey" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetParams` <a name="resetParams" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.resetParams"></a>

```java
public void resetParams()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.destinations">destinations</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList">DiscoveryEngineDataConnectorDestinationConfigsDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.destinationsInput">destinationsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinations">DiscoveryEngineDataConnectorDestinationConfigsDestinations</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.paramsInput">paramsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.params">params</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigs">DiscoveryEngineDataConnectorDestinationConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.destinations"></a>

```java
public DiscoveryEngineDataConnectorDestinationConfigsDestinationsList getDestinations();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList">DiscoveryEngineDataConnectorDestinationConfigsDestinationsList</a>

---

##### `destinationsInput`<sup>Optional</sup> <a name="destinationsInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.destinationsInput"></a>

```java
public IResolvable|java.util.List<DiscoveryEngineDataConnectorDestinationConfigsDestinations> getDestinationsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinations">DiscoveryEngineDataConnectorDestinationConfigsDestinations</a>>

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `paramsInput`<sup>Optional</sup> <a name="paramsInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.paramsInput"></a>

```java
public java.lang.String getParamsInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `params`<sup>Required</sup> <a name="params" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.params"></a>

```java
public java.lang.String getParams();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.internalValue"></a>

```java
public IResolvable|DiscoveryEngineDataConnectorDestinationConfigs getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigs">DiscoveryEngineDataConnectorDestinationConfigs</a>

---


### DiscoveryEngineDataConnectorEntitiesList <a name="DiscoveryEngineDataConnectorEntitiesList" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_data_connector.DiscoveryEngineDataConnectorEntitiesList;

new DiscoveryEngineDataConnectorEntitiesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList.get"></a>

```java
public DiscoveryEngineDataConnectorEntitiesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntities">DiscoveryEngineDataConnectorEntities</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DiscoveryEngineDataConnectorEntities> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntities">DiscoveryEngineDataConnectorEntities</a>>

---


### DiscoveryEngineDataConnectorEntitiesOutputReference <a name="DiscoveryEngineDataConnectorEntitiesOutputReference" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_data_connector.DiscoveryEngineDataConnectorEntitiesOutputReference;

new DiscoveryEngineDataConnectorEntitiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.resetEntityName">resetEntityName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.resetKeyPropertyMappings">resetKeyPropertyMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.resetParams">resetParams</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEntityName` <a name="resetEntityName" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.resetEntityName"></a>

```java
public void resetEntityName()
```

##### `resetKeyPropertyMappings` <a name="resetKeyPropertyMappings" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.resetKeyPropertyMappings"></a>

```java
public void resetKeyPropertyMappings()
```

##### `resetParams` <a name="resetParams" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.resetParams"></a>

```java
public void resetParams()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.property.dataStore">dataStore</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.property.entityNameInput">entityNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.property.keyPropertyMappingsInput">keyPropertyMappingsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.property.paramsInput">paramsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.property.entityName">entityName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.property.keyPropertyMappings">keyPropertyMappings</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.property.params">params</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntities">DiscoveryEngineDataConnectorEntities</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dataStore`<sup>Required</sup> <a name="dataStore" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.property.dataStore"></a>

```java
public java.lang.String getDataStore();
```

- *Type:* java.lang.String

---

##### `entityNameInput`<sup>Optional</sup> <a name="entityNameInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.property.entityNameInput"></a>

```java
public java.lang.String getEntityNameInput();
```

- *Type:* java.lang.String

---

##### `keyPropertyMappingsInput`<sup>Optional</sup> <a name="keyPropertyMappingsInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.property.keyPropertyMappingsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getKeyPropertyMappingsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `paramsInput`<sup>Optional</sup> <a name="paramsInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.property.paramsInput"></a>

```java
public java.lang.String getParamsInput();
```

- *Type:* java.lang.String

---

##### `entityName`<sup>Required</sup> <a name="entityName" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.property.entityName"></a>

```java
public java.lang.String getEntityName();
```

- *Type:* java.lang.String

---

##### `keyPropertyMappings`<sup>Required</sup> <a name="keyPropertyMappings" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.property.keyPropertyMappings"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getKeyPropertyMappings();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `params`<sup>Required</sup> <a name="params" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.property.params"></a>

```java
public java.lang.String getParams();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.property.internalValue"></a>

```java
public IResolvable|DiscoveryEngineDataConnectorEntities getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntities">DiscoveryEngineDataConnectorEntities</a>

---


### DiscoveryEngineDataConnectorErrorsList <a name="DiscoveryEngineDataConnectorErrorsList" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_data_connector.DiscoveryEngineDataConnectorErrorsList;

new DiscoveryEngineDataConnectorErrorsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList.get"></a>

```java
public DiscoveryEngineDataConnectorErrorsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DiscoveryEngineDataConnectorErrorsOutputReference <a name="DiscoveryEngineDataConnectorErrorsOutputReference" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_data_connector.DiscoveryEngineDataConnectorErrorsOutputReference;

new DiscoveryEngineDataConnectorErrorsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.property.code">code</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrors">DiscoveryEngineDataConnectorErrors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.property.code"></a>

```java
public java.lang.Number getCode();
```

- *Type:* java.lang.Number

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.property.internalValue"></a>

```java
public DiscoveryEngineDataConnectorErrors getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrors">DiscoveryEngineDataConnectorErrors</a>

---


### DiscoveryEngineDataConnectorTimeoutsOutputReference <a name="DiscoveryEngineDataConnectorTimeoutsOutputReference" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.discovery_engine_data_connector.DiscoveryEngineDataConnectorTimeoutsOutputReference;

new DiscoveryEngineDataConnectorTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeouts">DiscoveryEngineDataConnectorTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|DiscoveryEngineDataConnectorTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeouts">DiscoveryEngineDataConnectorTimeouts</a>

---



