# `discoveryEngineDataConnector` Submodule <a name="`discoveryEngineDataConnector` Submodule" id="@cdktn/provider-google.discoveryEngineDataConnector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DiscoveryEngineDataConnector <a name="DiscoveryEngineDataConnector" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/discovery_engine_data_connector google_discovery_engine_data_connector}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer"></a>

```python
from cdktn_provider_google import discovery_engine_data_connector

discoveryEngineDataConnector.DiscoveryEngineDataConnector(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  collection_display_name: str,
  collection_id: str,
  data_source: str,
  location: str,
  refresh_interval: str,
  action_config: DiscoveryEngineDataConnectorActionConfig = None,
  auto_run_disabled: bool | IResolvable = None,
  bap_config: DiscoveryEngineDataConnectorBapConfig = None,
  connector_modes: typing.List[str] = None,
  data_source_version: typing.Union[int, float] = None,
  destination_configs: IResolvable | typing.List[DiscoveryEngineDataConnectorDestinationConfigs] = None,
  entities: IResolvable | typing.List[DiscoveryEngineDataConnectorEntities] = None,
  id: str = None,
  incremental_refresh_interval: str = None,
  incremental_sync_disabled: bool | IResolvable = None,
  json_params: str = None,
  kms_key_name: str = None,
  params: typing.Mapping[str] = None,
  project: str = None,
  static_ip_enabled: bool | IResolvable = None,
  sync_mode: str = None,
  timeouts: DiscoveryEngineDataConnectorTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.collectionDisplayName">collection_display_name</a></code> | <code>str</code> | The display name of the Collection. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.collectionId">collection_id</a></code> | <code>str</code> | The ID to use for the Collection, which will become the final component of the Collection's resource name. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.dataSource">data_source</a></code> | <code>str</code> | The identifier for the data source. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.location">location</a></code> | <code>str</code> | The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu". |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.refreshInterval">refresh_interval</a></code> | <code>str</code> | The refresh interval for data sync. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.actionConfig">action_config</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfig">DiscoveryEngineDataConnectorActionConfig</a></code> | action_config block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.autoRunDisabled">auto_run_disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether full syncs are paused for this connector. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.bapConfig">bap_config</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfig">DiscoveryEngineDataConnectorBapConfig</a></code> | bap_config block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.connectorModes">connector_modes</a></code> | <code>typing.List[str]</code> | The modes enabled for this connector. The possible value can be: 'DATA_INGESTION', 'ACTIONS', 'FEDERATED' 'EUA', 'FEDERATED_AND_EUA'. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.dataSourceVersion">data_source_version</a></code> | <code>typing.Union[int, float]</code> | The version of the data source. For example, '3' for Jira v3. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.destinationConfigs">destination_configs</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigs">DiscoveryEngineDataConnectorDestinationConfigs</a>]</code> | destination_configs block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.entities">entities</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntities">DiscoveryEngineDataConnectorEntities</a>]</code> | entities block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/discovery_engine_data_connector#id DiscoveryEngineDataConnector#id}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.incrementalRefreshInterval">incremental_refresh_interval</a></code> | <code>str</code> | The refresh interval specifically for incremental data syncs. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.incrementalSyncDisabled">incremental_sync_disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether incremental syncs are paused for this connector. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.jsonParams">json_params</a></code> | <code>str</code> | Params needed to access the source in the format of json string. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.kmsKeyName">kms_key_name</a></code> | <code>str</code> | The KMS key to be used to protect the DataStores managed by this connector. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.params">params</a></code> | <code>typing.Mapping[str]</code> | Params needed to access the source in the format of String-to-String (Key, Value) pairs. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/discovery_engine_data_connector#project DiscoveryEngineDataConnector#project}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.staticIpEnabled">static_ip_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether customer has enabled static IP addresses for this connector. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.syncMode">sync_mode</a></code> | <code>str</code> | The data synchronization mode supported by the data connector. The possible value can be: 'PERIODIC', 'STREAMING'. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeouts">DiscoveryEngineDataConnectorTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `collection_display_name`<sup>Required</sup> <a name="collection_display_name" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.collectionDisplayName"></a>

- *Type:* str

The display name of the Collection.

Should be human readable, used to display collections in the Console
Dashboard. UTF-8 encoded string with limit of 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/discovery_engine_data_connector#collection_display_name DiscoveryEngineDataConnector#collection_display_name}

---

##### `collection_id`<sup>Required</sup> <a name="collection_id" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.collectionId"></a>

- *Type:* str

The ID to use for the Collection, which will become the final component of the Collection's resource name.

A new Collection is created as
part of the DataConnector setup. DataConnector is a singleton
resource under Collection, managing all DataStores of the Collection.
This field must conform to [RFC-1034](https://tools.ietf.org/html/rfc1034)
standard with a length limit of 63 characters. Otherwise, an
INVALID_ARGUMENT error is returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/discovery_engine_data_connector#collection_id DiscoveryEngineDataConnector#collection_id}

---

##### `data_source`<sup>Required</sup> <a name="data_source" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.dataSource"></a>

- *Type:* str

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/discovery_engine_data_connector#data_source DiscoveryEngineDataConnector#data_source}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.location"></a>

- *Type:* str

The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/discovery_engine_data_connector#location DiscoveryEngineDataConnector#location}

---

##### `refresh_interval`<sup>Required</sup> <a name="refresh_interval" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.refreshInterval"></a>

- *Type:* str

The refresh interval for data sync.

If duration is set to 0, the data will
be synced in real time. The streaming feature is not supported yet. The
minimum is 30 minutes and maximum is 7 days. When the refresh interval is
set to the same value as the incremental refresh interval, incremental
sync will be disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/discovery_engine_data_connector#refresh_interval DiscoveryEngineDataConnector#refresh_interval}

---

##### `action_config`<sup>Optional</sup> <a name="action_config" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.actionConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfig">DiscoveryEngineDataConnectorActionConfig</a>

action_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/discovery_engine_data_connector#action_config DiscoveryEngineDataConnector#action_config}

---

##### `auto_run_disabled`<sup>Optional</sup> <a name="auto_run_disabled" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.autoRunDisabled"></a>

- *Type:* bool | cdktn.IResolvable

Indicates whether full syncs are paused for this connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/discovery_engine_data_connector#auto_run_disabled DiscoveryEngineDataConnector#auto_run_disabled}

---

##### `bap_config`<sup>Optional</sup> <a name="bap_config" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.bapConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfig">DiscoveryEngineDataConnectorBapConfig</a>

bap_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/discovery_engine_data_connector#bap_config DiscoveryEngineDataConnector#bap_config}

---

##### `connector_modes`<sup>Optional</sup> <a name="connector_modes" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.connectorModes"></a>

- *Type:* typing.List[str]

The modes enabled for this connector. The possible value can be: 'DATA_INGESTION', 'ACTIONS', 'FEDERATED' 'EUA', 'FEDERATED_AND_EUA'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/discovery_engine_data_connector#connector_modes DiscoveryEngineDataConnector#connector_modes}

---

##### `data_source_version`<sup>Optional</sup> <a name="data_source_version" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.dataSourceVersion"></a>

- *Type:* typing.Union[int, float]

The version of the data source. For example, '3' for Jira v3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/discovery_engine_data_connector#data_source_version DiscoveryEngineDataConnector#data_source_version}

---

##### `destination_configs`<sup>Optional</sup> <a name="destination_configs" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.destinationConfigs"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigs">DiscoveryEngineDataConnectorDestinationConfigs</a>]

destination_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/discovery_engine_data_connector#destination_configs DiscoveryEngineDataConnector#destination_configs}

---

##### `entities`<sup>Optional</sup> <a name="entities" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.entities"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntities">DiscoveryEngineDataConnectorEntities</a>]

entities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/discovery_engine_data_connector#entities DiscoveryEngineDataConnector#entities}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/discovery_engine_data_connector#id DiscoveryEngineDataConnector#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `incremental_refresh_interval`<sup>Optional</sup> <a name="incremental_refresh_interval" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.incrementalRefreshInterval"></a>

- *Type:* str

The refresh interval specifically for incremental data syncs.

If unset,
incremental syncs will use the default from env, set to 3hrs.
The minimum is 30 minutes and maximum is 7 days. Applicable to only 3P
connectors. When the refresh interval is
set to the same value as the incremental refresh interval, incremental
sync will be disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/discovery_engine_data_connector#incremental_refresh_interval DiscoveryEngineDataConnector#incremental_refresh_interval}

---

##### `incremental_sync_disabled`<sup>Optional</sup> <a name="incremental_sync_disabled" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.incrementalSyncDisabled"></a>

- *Type:* bool | cdktn.IResolvable

Indicates whether incremental syncs are paused for this connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/discovery_engine_data_connector#incremental_sync_disabled DiscoveryEngineDataConnector#incremental_sync_disabled}

---

##### `json_params`<sup>Optional</sup> <a name="json_params" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.jsonParams"></a>

- *Type:* str

Params needed to access the source in the format of json string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/discovery_engine_data_connector#json_params DiscoveryEngineDataConnector#json_params}

---

##### `kms_key_name`<sup>Optional</sup> <a name="kms_key_name" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.kmsKeyName"></a>

- *Type:* str

The KMS key to be used to protect the DataStores managed by this connector.

Must be set for requests that need to comply with CMEK Org Policy
protections.
If this field is set and processed successfully, the DataStores created by
this connector will be protected by the KMS key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/discovery_engine_data_connector#kms_key_name DiscoveryEngineDataConnector#kms_key_name}

---

##### `params`<sup>Optional</sup> <a name="params" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.params"></a>

- *Type:* typing.Mapping[str]

Params needed to access the source in the format of String-to-String (Key, Value) pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/discovery_engine_data_connector#params DiscoveryEngineDataConnector#params}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/discovery_engine_data_connector#project DiscoveryEngineDataConnector#project}.

---

##### `static_ip_enabled`<sup>Optional</sup> <a name="static_ip_enabled" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.staticIpEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether customer has enabled static IP addresses for this connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/discovery_engine_data_connector#static_ip_enabled DiscoveryEngineDataConnector#static_ip_enabled}

---

##### `sync_mode`<sup>Optional</sup> <a name="sync_mode" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.syncMode"></a>

- *Type:* str

The data synchronization mode supported by the data connector. The possible value can be: 'PERIODIC', 'STREAMING'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/discovery_engine_data_connector#sync_mode DiscoveryEngineDataConnector#sync_mode}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeouts">DiscoveryEngineDataConnectorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/discovery_engine_data_connector#timeouts DiscoveryEngineDataConnector#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.putActionConfig">put_action_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.putBapConfig">put_bap_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.putDestinationConfigs">put_destination_configs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.putEntities">put_entities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetActionConfig">reset_action_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetAutoRunDisabled">reset_auto_run_disabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetBapConfig">reset_bap_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetConnectorModes">reset_connector_modes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetDataSourceVersion">reset_data_source_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetDestinationConfigs">reset_destination_configs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetEntities">reset_entities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetIncrementalRefreshInterval">reset_incremental_refresh_interval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetIncrementalSyncDisabled">reset_incremental_sync_disabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetJsonParams">reset_json_params</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetKmsKeyName">reset_kms_key_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetParams">reset_params</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetStaticIpEnabled">reset_static_ip_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetSyncMode">reset_sync_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.with"></a>

```python
def with(
  mixins: *IMixin
) -> IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_action_config` <a name="put_action_config" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.putActionConfig"></a>

```python
def put_action_config(
  action_params: typing.Mapping[str] = None,
  create_bap_connection: bool | IResolvable = None
) -> None
```

###### `action_params`<sup>Optional</sup> <a name="action_params" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.putActionConfig.parameter.actionParams"></a>

- *Type:* typing.Mapping[str]

Params needed to configure the actions in the format of String-to-String (Key, Value) pairs.

Contains connection
credentials and configuration for the action connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/discovery_engine_data_connector#action_params DiscoveryEngineDataConnector#action_params}

---

###### `create_bap_connection`<sup>Optional</sup> <a name="create_bap_connection" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.putActionConfig.parameter.createBapConnection"></a>

- *Type:* bool | cdktn.IResolvable

Whether to create a BAP (Business Application Platform) connection for this action connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/discovery_engine_data_connector#create_bap_connection DiscoveryEngineDataConnector#create_bap_connection}

---

##### `put_bap_config` <a name="put_bap_config" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.putBapConfig"></a>

```python
def put_bap_config(
  enabled_actions: typing.List[str] = None,
  supported_connector_modes: typing.List[str] = None
) -> None
```

###### `enabled_actions`<sup>Optional</sup> <a name="enabled_actions" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.putBapConfig.parameter.enabledActions"></a>

- *Type:* typing.List[str]

The list of enabled actions for this connector. Supported values include: 'create_issue', 'update_issue', 'change_issue_status', 'create_comment', 'update_comment', 'upload_attachment'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/discovery_engine_data_connector#enabled_actions DiscoveryEngineDataConnector#enabled_actions}

---

###### `supported_connector_modes`<sup>Optional</sup> <a name="supported_connector_modes" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.putBapConfig.parameter.supportedConnectorModes"></a>

- *Type:* typing.List[str]

The connector modes supported by the BAP configuration. The possible values include: 'ACTIONS'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/discovery_engine_data_connector#supported_connector_modes DiscoveryEngineDataConnector#supported_connector_modes}

---

##### `put_destination_configs` <a name="put_destination_configs" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.putDestinationConfigs"></a>

```python
def put_destination_configs(
  value: IResolvable | typing.List[DiscoveryEngineDataConnectorDestinationConfigs]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.putDestinationConfigs.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigs">DiscoveryEngineDataConnectorDestinationConfigs</a>]

---

##### `put_entities` <a name="put_entities" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.putEntities"></a>

```python
def put_entities(
  value: IResolvable | typing.List[DiscoveryEngineDataConnectorEntities]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.putEntities.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntities">DiscoveryEngineDataConnectorEntities</a>]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/discovery_engine_data_connector#create DiscoveryEngineDataConnector#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/discovery_engine_data_connector#delete DiscoveryEngineDataConnector#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/discovery_engine_data_connector#update DiscoveryEngineDataConnector#update}.

---

##### `reset_action_config` <a name="reset_action_config" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetActionConfig"></a>

```python
def reset_action_config() -> None
```

##### `reset_auto_run_disabled` <a name="reset_auto_run_disabled" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetAutoRunDisabled"></a>

```python
def reset_auto_run_disabled() -> None
```

##### `reset_bap_config` <a name="reset_bap_config" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetBapConfig"></a>

```python
def reset_bap_config() -> None
```

##### `reset_connector_modes` <a name="reset_connector_modes" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetConnectorModes"></a>

```python
def reset_connector_modes() -> None
```

##### `reset_data_source_version` <a name="reset_data_source_version" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetDataSourceVersion"></a>

```python
def reset_data_source_version() -> None
```

##### `reset_destination_configs` <a name="reset_destination_configs" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetDestinationConfigs"></a>

```python
def reset_destination_configs() -> None
```

##### `reset_entities` <a name="reset_entities" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetEntities"></a>

```python
def reset_entities() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_incremental_refresh_interval` <a name="reset_incremental_refresh_interval" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetIncrementalRefreshInterval"></a>

```python
def reset_incremental_refresh_interval() -> None
```

##### `reset_incremental_sync_disabled` <a name="reset_incremental_sync_disabled" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetIncrementalSyncDisabled"></a>

```python
def reset_incremental_sync_disabled() -> None
```

##### `reset_json_params` <a name="reset_json_params" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetJsonParams"></a>

```python
def reset_json_params() -> None
```

##### `reset_kms_key_name` <a name="reset_kms_key_name" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetKmsKeyName"></a>

```python
def reset_kms_key_name() -> None
```

##### `reset_params` <a name="reset_params" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetParams"></a>

```python
def reset_params() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_static_ip_enabled` <a name="reset_static_ip_enabled" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetStaticIpEnabled"></a>

```python
def reset_static_ip_enabled() -> None
```

##### `reset_sync_mode` <a name="reset_sync_mode" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetSyncMode"></a>

```python
def reset_sync_mode() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DiscoveryEngineDataConnector resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.isConstruct"></a>

```python
from cdktn_provider_google import discovery_engine_data_connector

discoveryEngineDataConnector.DiscoveryEngineDataConnector.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.isTerraformElement"></a>

```python
from cdktn_provider_google import discovery_engine_data_connector

discoveryEngineDataConnector.DiscoveryEngineDataConnector.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.isTerraformResource"></a>

```python
from cdktn_provider_google import discovery_engine_data_connector

discoveryEngineDataConnector.DiscoveryEngineDataConnector.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.generateConfigForImport"></a>

```python
from cdktn_provider_google import discovery_engine_data_connector

discoveryEngineDataConnector.DiscoveryEngineDataConnector.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DiscoveryEngineDataConnector resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DiscoveryEngineDataConnector to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DiscoveryEngineDataConnector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/discovery_engine_data_connector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DiscoveryEngineDataConnector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.actionConfig">action_config</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference">DiscoveryEngineDataConnectorActionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.actionState">action_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.bapConfig">bap_config</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference">DiscoveryEngineDataConnectorBapConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.blockingReasons">blocking_reasons</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.connectorType">connector_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.destinationConfigs">destination_configs</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList">DiscoveryEngineDataConnectorDestinationConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.entities">entities</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList">DiscoveryEngineDataConnectorEntitiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.errors">errors</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList">DiscoveryEngineDataConnectorErrorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.lastSyncTime">last_sync_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.latestPauseTime">latest_pause_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.privateConnectivityProjectId">private_connectivity_project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.realtimeState">realtime_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.staticIpAddresses">static_ip_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference">DiscoveryEngineDataConnectorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.actionConfigInput">action_config_input</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfig">DiscoveryEngineDataConnectorActionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.autoRunDisabledInput">auto_run_disabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.bapConfigInput">bap_config_input</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfig">DiscoveryEngineDataConnectorBapConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.collectionDisplayNameInput">collection_display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.collectionIdInput">collection_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.connectorModesInput">connector_modes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.dataSourceInput">data_source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.dataSourceVersionInput">data_source_version_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.destinationConfigsInput">destination_configs_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigs">DiscoveryEngineDataConnectorDestinationConfigs</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.entitiesInput">entities_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntities">DiscoveryEngineDataConnectorEntities</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.incrementalRefreshIntervalInput">incremental_refresh_interval_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.incrementalSyncDisabledInput">incremental_sync_disabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.jsonParamsInput">json_params_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.kmsKeyNameInput">kms_key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.paramsInput">params_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.refreshIntervalInput">refresh_interval_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.staticIpEnabledInput">static_ip_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.syncModeInput">sync_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeouts">DiscoveryEngineDataConnectorTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.autoRunDisabled">auto_run_disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.collectionDisplayName">collection_display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.collectionId">collection_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.connectorModes">connector_modes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.dataSource">data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.dataSourceVersion">data_source_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.incrementalRefreshInterval">incremental_refresh_interval</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.incrementalSyncDisabled">incremental_sync_disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.jsonParams">json_params</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.params">params</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.refreshInterval">refresh_interval</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.staticIpEnabled">static_ip_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.syncMode">sync_mode</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `action_config`<sup>Required</sup> <a name="action_config" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.actionConfig"></a>

```python
action_config: DiscoveryEngineDataConnectorActionConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference">DiscoveryEngineDataConnectorActionConfigOutputReference</a>

---

##### `action_state`<sup>Required</sup> <a name="action_state" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.actionState"></a>

```python
action_state: str
```

- *Type:* str

---

##### `bap_config`<sup>Required</sup> <a name="bap_config" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.bapConfig"></a>

```python
bap_config: DiscoveryEngineDataConnectorBapConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference">DiscoveryEngineDataConnectorBapConfigOutputReference</a>

---

##### `blocking_reasons`<sup>Required</sup> <a name="blocking_reasons" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.blockingReasons"></a>

```python
blocking_reasons: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `connector_type`<sup>Required</sup> <a name="connector_type" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.connectorType"></a>

```python
connector_type: str
```

- *Type:* str

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `destination_configs`<sup>Required</sup> <a name="destination_configs" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.destinationConfigs"></a>

```python
destination_configs: DiscoveryEngineDataConnectorDestinationConfigsList
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList">DiscoveryEngineDataConnectorDestinationConfigsList</a>

---

##### `entities`<sup>Required</sup> <a name="entities" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.entities"></a>

```python
entities: DiscoveryEngineDataConnectorEntitiesList
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList">DiscoveryEngineDataConnectorEntitiesList</a>

---

##### `errors`<sup>Required</sup> <a name="errors" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.errors"></a>

```python
errors: DiscoveryEngineDataConnectorErrorsList
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList">DiscoveryEngineDataConnectorErrorsList</a>

---

##### `last_sync_time`<sup>Required</sup> <a name="last_sync_time" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.lastSyncTime"></a>

```python
last_sync_time: str
```

- *Type:* str

---

##### `latest_pause_time`<sup>Required</sup> <a name="latest_pause_time" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.latestPauseTime"></a>

```python
latest_pause_time: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `private_connectivity_project_id`<sup>Required</sup> <a name="private_connectivity_project_id" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.privateConnectivityProjectId"></a>

```python
private_connectivity_project_id: str
```

- *Type:* str

---

##### `realtime_state`<sup>Required</sup> <a name="realtime_state" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.realtimeState"></a>

```python
realtime_state: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `static_ip_addresses`<sup>Required</sup> <a name="static_ip_addresses" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.staticIpAddresses"></a>

```python
static_ip_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.timeouts"></a>

```python
timeouts: DiscoveryEngineDataConnectorTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference">DiscoveryEngineDataConnectorTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `action_config_input`<sup>Optional</sup> <a name="action_config_input" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.actionConfigInput"></a>

```python
action_config_input: DiscoveryEngineDataConnectorActionConfig
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfig">DiscoveryEngineDataConnectorActionConfig</a>

---

##### `auto_run_disabled_input`<sup>Optional</sup> <a name="auto_run_disabled_input" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.autoRunDisabledInput"></a>

```python
auto_run_disabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `bap_config_input`<sup>Optional</sup> <a name="bap_config_input" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.bapConfigInput"></a>

```python
bap_config_input: DiscoveryEngineDataConnectorBapConfig
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfig">DiscoveryEngineDataConnectorBapConfig</a>

---

##### `collection_display_name_input`<sup>Optional</sup> <a name="collection_display_name_input" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.collectionDisplayNameInput"></a>

```python
collection_display_name_input: str
```

- *Type:* str

---

##### `collection_id_input`<sup>Optional</sup> <a name="collection_id_input" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.collectionIdInput"></a>

```python
collection_id_input: str
```

- *Type:* str

---

##### `connector_modes_input`<sup>Optional</sup> <a name="connector_modes_input" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.connectorModesInput"></a>

```python
connector_modes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `data_source_input`<sup>Optional</sup> <a name="data_source_input" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.dataSourceInput"></a>

```python
data_source_input: str
```

- *Type:* str

---

##### `data_source_version_input`<sup>Optional</sup> <a name="data_source_version_input" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.dataSourceVersionInput"></a>

```python
data_source_version_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `destination_configs_input`<sup>Optional</sup> <a name="destination_configs_input" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.destinationConfigsInput"></a>

```python
destination_configs_input: IResolvable | typing.List[DiscoveryEngineDataConnectorDestinationConfigs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigs">DiscoveryEngineDataConnectorDestinationConfigs</a>]

---

##### `entities_input`<sup>Optional</sup> <a name="entities_input" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.entitiesInput"></a>

```python
entities_input: IResolvable | typing.List[DiscoveryEngineDataConnectorEntities]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntities">DiscoveryEngineDataConnectorEntities</a>]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `incremental_refresh_interval_input`<sup>Optional</sup> <a name="incremental_refresh_interval_input" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.incrementalRefreshIntervalInput"></a>

```python
incremental_refresh_interval_input: str
```

- *Type:* str

---

##### `incremental_sync_disabled_input`<sup>Optional</sup> <a name="incremental_sync_disabled_input" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.incrementalSyncDisabledInput"></a>

```python
incremental_sync_disabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `json_params_input`<sup>Optional</sup> <a name="json_params_input" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.jsonParamsInput"></a>

```python
json_params_input: str
```

- *Type:* str

---

##### `kms_key_name_input`<sup>Optional</sup> <a name="kms_key_name_input" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.kmsKeyNameInput"></a>

```python
kms_key_name_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `params_input`<sup>Optional</sup> <a name="params_input" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.paramsInput"></a>

```python
params_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `refresh_interval_input`<sup>Optional</sup> <a name="refresh_interval_input" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.refreshIntervalInput"></a>

```python
refresh_interval_input: str
```

- *Type:* str

---

##### `static_ip_enabled_input`<sup>Optional</sup> <a name="static_ip_enabled_input" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.staticIpEnabledInput"></a>

```python
static_ip_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `sync_mode_input`<sup>Optional</sup> <a name="sync_mode_input" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.syncModeInput"></a>

```python
sync_mode_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | DiscoveryEngineDataConnectorTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeouts">DiscoveryEngineDataConnectorTimeouts</a>

---

##### `auto_run_disabled`<sup>Required</sup> <a name="auto_run_disabled" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.autoRunDisabled"></a>

```python
auto_run_disabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `collection_display_name`<sup>Required</sup> <a name="collection_display_name" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.collectionDisplayName"></a>

```python
collection_display_name: str
```

- *Type:* str

---

##### `collection_id`<sup>Required</sup> <a name="collection_id" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.collectionId"></a>

```python
collection_id: str
```

- *Type:* str

---

##### `connector_modes`<sup>Required</sup> <a name="connector_modes" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.connectorModes"></a>

```python
connector_modes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `data_source`<sup>Required</sup> <a name="data_source" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.dataSource"></a>

```python
data_source: str
```

- *Type:* str

---

##### `data_source_version`<sup>Required</sup> <a name="data_source_version" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.dataSourceVersion"></a>

```python
data_source_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `incremental_refresh_interval`<sup>Required</sup> <a name="incremental_refresh_interval" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.incrementalRefreshInterval"></a>

```python
incremental_refresh_interval: str
```

- *Type:* str

---

##### `incremental_sync_disabled`<sup>Required</sup> <a name="incremental_sync_disabled" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.incrementalSyncDisabled"></a>

```python
incremental_sync_disabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `json_params`<sup>Required</sup> <a name="json_params" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.jsonParams"></a>

```python
json_params: str
```

- *Type:* str

---

##### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `params`<sup>Required</sup> <a name="params" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.params"></a>

```python
params: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `refresh_interval`<sup>Required</sup> <a name="refresh_interval" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.refreshInterval"></a>

```python
refresh_interval: str
```

- *Type:* str

---

##### `static_ip_enabled`<sup>Required</sup> <a name="static_ip_enabled" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.staticIpEnabled"></a>

```python
static_ip_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `sync_mode`<sup>Required</sup> <a name="sync_mode" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.syncMode"></a>

```python
sync_mode: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnector.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DiscoveryEngineDataConnectorActionConfig <a name="DiscoveryEngineDataConnectorActionConfig" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfig.Initializer"></a>

```python
from cdktn_provider_google import discovery_engine_data_connector

discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfig(
  action_params: typing.Mapping[str] = None,
  create_bap_connection: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfig.property.actionParams">action_params</a></code> | <code>typing.Mapping[str]</code> | Params needed to configure the actions in the format of String-to-String (Key, Value) pairs. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfig.property.createBapConnection">create_bap_connection</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to create a BAP (Business Application Platform) connection for this action connector. |

---

##### `action_params`<sup>Optional</sup> <a name="action_params" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfig.property.actionParams"></a>

```python
action_params: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Params needed to configure the actions in the format of String-to-String (Key, Value) pairs.

Contains connection
credentials and configuration for the action connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/discovery_engine_data_connector#action_params DiscoveryEngineDataConnector#action_params}

---

##### `create_bap_connection`<sup>Optional</sup> <a name="create_bap_connection" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfig.property.createBapConnection"></a>

```python
create_bap_connection: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether to create a BAP (Business Application Platform) connection for this action connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/discovery_engine_data_connector#create_bap_connection DiscoveryEngineDataConnector#create_bap_connection}

---

### DiscoveryEngineDataConnectorBapConfig <a name="DiscoveryEngineDataConnectorBapConfig" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfig.Initializer"></a>

```python
from cdktn_provider_google import discovery_engine_data_connector

discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfig(
  enabled_actions: typing.List[str] = None,
  supported_connector_modes: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfig.property.enabledActions">enabled_actions</a></code> | <code>typing.List[str]</code> | The list of enabled actions for this connector. Supported values include: 'create_issue', 'update_issue', 'change_issue_status', 'create_comment', 'update_comment', 'upload_attachment'. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfig.property.supportedConnectorModes">supported_connector_modes</a></code> | <code>typing.List[str]</code> | The connector modes supported by the BAP configuration. The possible values include: 'ACTIONS'. |

---

##### `enabled_actions`<sup>Optional</sup> <a name="enabled_actions" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfig.property.enabledActions"></a>

```python
enabled_actions: typing.List[str]
```

- *Type:* typing.List[str]

The list of enabled actions for this connector. Supported values include: 'create_issue', 'update_issue', 'change_issue_status', 'create_comment', 'update_comment', 'upload_attachment'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/discovery_engine_data_connector#enabled_actions DiscoveryEngineDataConnector#enabled_actions}

---

##### `supported_connector_modes`<sup>Optional</sup> <a name="supported_connector_modes" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfig.property.supportedConnectorModes"></a>

```python
supported_connector_modes: typing.List[str]
```

- *Type:* typing.List[str]

The connector modes supported by the BAP configuration. The possible values include: 'ACTIONS'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/discovery_engine_data_connector#supported_connector_modes DiscoveryEngineDataConnector#supported_connector_modes}

---

### DiscoveryEngineDataConnectorConfig <a name="DiscoveryEngineDataConnectorConfig" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.Initializer"></a>

```python
from cdktn_provider_google import discovery_engine_data_connector

discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  collection_display_name: str,
  collection_id: str,
  data_source: str,
  location: str,
  refresh_interval: str,
  action_config: DiscoveryEngineDataConnectorActionConfig = None,
  auto_run_disabled: bool | IResolvable = None,
  bap_config: DiscoveryEngineDataConnectorBapConfig = None,
  connector_modes: typing.List[str] = None,
  data_source_version: typing.Union[int, float] = None,
  destination_configs: IResolvable | typing.List[DiscoveryEngineDataConnectorDestinationConfigs] = None,
  entities: IResolvable | typing.List[DiscoveryEngineDataConnectorEntities] = None,
  id: str = None,
  incremental_refresh_interval: str = None,
  incremental_sync_disabled: bool | IResolvable = None,
  json_params: str = None,
  kms_key_name: str = None,
  params: typing.Mapping[str] = None,
  project: str = None,
  static_ip_enabled: bool | IResolvable = None,
  sync_mode: str = None,
  timeouts: DiscoveryEngineDataConnectorTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.collectionDisplayName">collection_display_name</a></code> | <code>str</code> | The display name of the Collection. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.collectionId">collection_id</a></code> | <code>str</code> | The ID to use for the Collection, which will become the final component of the Collection's resource name. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.dataSource">data_source</a></code> | <code>str</code> | The identifier for the data source. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.location">location</a></code> | <code>str</code> | The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu". |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.refreshInterval">refresh_interval</a></code> | <code>str</code> | The refresh interval for data sync. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.actionConfig">action_config</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfig">DiscoveryEngineDataConnectorActionConfig</a></code> | action_config block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.autoRunDisabled">auto_run_disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether full syncs are paused for this connector. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.bapConfig">bap_config</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfig">DiscoveryEngineDataConnectorBapConfig</a></code> | bap_config block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.connectorModes">connector_modes</a></code> | <code>typing.List[str]</code> | The modes enabled for this connector. The possible value can be: 'DATA_INGESTION', 'ACTIONS', 'FEDERATED' 'EUA', 'FEDERATED_AND_EUA'. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.dataSourceVersion">data_source_version</a></code> | <code>typing.Union[int, float]</code> | The version of the data source. For example, '3' for Jira v3. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.destinationConfigs">destination_configs</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigs">DiscoveryEngineDataConnectorDestinationConfigs</a>]</code> | destination_configs block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.entities">entities</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntities">DiscoveryEngineDataConnectorEntities</a>]</code> | entities block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/discovery_engine_data_connector#id DiscoveryEngineDataConnector#id}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.incrementalRefreshInterval">incremental_refresh_interval</a></code> | <code>str</code> | The refresh interval specifically for incremental data syncs. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.incrementalSyncDisabled">incremental_sync_disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether incremental syncs are paused for this connector. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.jsonParams">json_params</a></code> | <code>str</code> | Params needed to access the source in the format of json string. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | The KMS key to be used to protect the DataStores managed by this connector. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.params">params</a></code> | <code>typing.Mapping[str]</code> | Params needed to access the source in the format of String-to-String (Key, Value) pairs. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/discovery_engine_data_connector#project DiscoveryEngineDataConnector#project}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.staticIpEnabled">static_ip_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether customer has enabled static IP addresses for this connector. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.syncMode">sync_mode</a></code> | <code>str</code> | The data synchronization mode supported by the data connector. The possible value can be: 'PERIODIC', 'STREAMING'. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeouts">DiscoveryEngineDataConnectorTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `collection_display_name`<sup>Required</sup> <a name="collection_display_name" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.collectionDisplayName"></a>

```python
collection_display_name: str
```

- *Type:* str

The display name of the Collection.

Should be human readable, used to display collections in the Console
Dashboard. UTF-8 encoded string with limit of 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/discovery_engine_data_connector#collection_display_name DiscoveryEngineDataConnector#collection_display_name}

---

##### `collection_id`<sup>Required</sup> <a name="collection_id" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.collectionId"></a>

```python
collection_id: str
```

- *Type:* str

The ID to use for the Collection, which will become the final component of the Collection's resource name.

A new Collection is created as
part of the DataConnector setup. DataConnector is a singleton
resource under Collection, managing all DataStores of the Collection.
This field must conform to [RFC-1034](https://tools.ietf.org/html/rfc1034)
standard with a length limit of 63 characters. Otherwise, an
INVALID_ARGUMENT error is returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/discovery_engine_data_connector#collection_id DiscoveryEngineDataConnector#collection_id}

---

##### `data_source`<sup>Required</sup> <a name="data_source" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.dataSource"></a>

```python
data_source: str
```

- *Type:* str

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/discovery_engine_data_connector#data_source DiscoveryEngineDataConnector#data_source}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/discovery_engine_data_connector#location DiscoveryEngineDataConnector#location}

---

##### `refresh_interval`<sup>Required</sup> <a name="refresh_interval" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.refreshInterval"></a>

```python
refresh_interval: str
```

- *Type:* str

The refresh interval for data sync.

If duration is set to 0, the data will
be synced in real time. The streaming feature is not supported yet. The
minimum is 30 minutes and maximum is 7 days. When the refresh interval is
set to the same value as the incremental refresh interval, incremental
sync will be disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/discovery_engine_data_connector#refresh_interval DiscoveryEngineDataConnector#refresh_interval}

---

##### `action_config`<sup>Optional</sup> <a name="action_config" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.actionConfig"></a>

```python
action_config: DiscoveryEngineDataConnectorActionConfig
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfig">DiscoveryEngineDataConnectorActionConfig</a>

action_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/discovery_engine_data_connector#action_config DiscoveryEngineDataConnector#action_config}

---

##### `auto_run_disabled`<sup>Optional</sup> <a name="auto_run_disabled" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.autoRunDisabled"></a>

```python
auto_run_disabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether full syncs are paused for this connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/discovery_engine_data_connector#auto_run_disabled DiscoveryEngineDataConnector#auto_run_disabled}

---

##### `bap_config`<sup>Optional</sup> <a name="bap_config" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.bapConfig"></a>

```python
bap_config: DiscoveryEngineDataConnectorBapConfig
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfig">DiscoveryEngineDataConnectorBapConfig</a>

bap_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/discovery_engine_data_connector#bap_config DiscoveryEngineDataConnector#bap_config}

---

##### `connector_modes`<sup>Optional</sup> <a name="connector_modes" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.connectorModes"></a>

```python
connector_modes: typing.List[str]
```

- *Type:* typing.List[str]

The modes enabled for this connector. The possible value can be: 'DATA_INGESTION', 'ACTIONS', 'FEDERATED' 'EUA', 'FEDERATED_AND_EUA'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/discovery_engine_data_connector#connector_modes DiscoveryEngineDataConnector#connector_modes}

---

##### `data_source_version`<sup>Optional</sup> <a name="data_source_version" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.dataSourceVersion"></a>

```python
data_source_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The version of the data source. For example, '3' for Jira v3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/discovery_engine_data_connector#data_source_version DiscoveryEngineDataConnector#data_source_version}

---

##### `destination_configs`<sup>Optional</sup> <a name="destination_configs" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.destinationConfigs"></a>

```python
destination_configs: IResolvable | typing.List[DiscoveryEngineDataConnectorDestinationConfigs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigs">DiscoveryEngineDataConnectorDestinationConfigs</a>]

destination_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/discovery_engine_data_connector#destination_configs DiscoveryEngineDataConnector#destination_configs}

---

##### `entities`<sup>Optional</sup> <a name="entities" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.entities"></a>

```python
entities: IResolvable | typing.List[DiscoveryEngineDataConnectorEntities]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntities">DiscoveryEngineDataConnectorEntities</a>]

entities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/discovery_engine_data_connector#entities DiscoveryEngineDataConnector#entities}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/discovery_engine_data_connector#id DiscoveryEngineDataConnector#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `incremental_refresh_interval`<sup>Optional</sup> <a name="incremental_refresh_interval" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.incrementalRefreshInterval"></a>

```python
incremental_refresh_interval: str
```

- *Type:* str

The refresh interval specifically for incremental data syncs.

If unset,
incremental syncs will use the default from env, set to 3hrs.
The minimum is 30 minutes and maximum is 7 days. Applicable to only 3P
connectors. When the refresh interval is
set to the same value as the incremental refresh interval, incremental
sync will be disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/discovery_engine_data_connector#incremental_refresh_interval DiscoveryEngineDataConnector#incremental_refresh_interval}

---

##### `incremental_sync_disabled`<sup>Optional</sup> <a name="incremental_sync_disabled" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.incrementalSyncDisabled"></a>

```python
incremental_sync_disabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether incremental syncs are paused for this connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/discovery_engine_data_connector#incremental_sync_disabled DiscoveryEngineDataConnector#incremental_sync_disabled}

---

##### `json_params`<sup>Optional</sup> <a name="json_params" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.jsonParams"></a>

```python
json_params: str
```

- *Type:* str

Params needed to access the source in the format of json string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/discovery_engine_data_connector#json_params DiscoveryEngineDataConnector#json_params}

---

##### `kms_key_name`<sup>Optional</sup> <a name="kms_key_name" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

The KMS key to be used to protect the DataStores managed by this connector.

Must be set for requests that need to comply with CMEK Org Policy
protections.
If this field is set and processed successfully, the DataStores created by
this connector will be protected by the KMS key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/discovery_engine_data_connector#kms_key_name DiscoveryEngineDataConnector#kms_key_name}

---

##### `params`<sup>Optional</sup> <a name="params" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.params"></a>

```python
params: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Params needed to access the source in the format of String-to-String (Key, Value) pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/discovery_engine_data_connector#params DiscoveryEngineDataConnector#params}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/discovery_engine_data_connector#project DiscoveryEngineDataConnector#project}.

---

##### `static_ip_enabled`<sup>Optional</sup> <a name="static_ip_enabled" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.staticIpEnabled"></a>

```python
static_ip_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether customer has enabled static IP addresses for this connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/discovery_engine_data_connector#static_ip_enabled DiscoveryEngineDataConnector#static_ip_enabled}

---

##### `sync_mode`<sup>Optional</sup> <a name="sync_mode" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.syncMode"></a>

```python
sync_mode: str
```

- *Type:* str

The data synchronization mode supported by the data connector. The possible value can be: 'PERIODIC', 'STREAMING'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/discovery_engine_data_connector#sync_mode DiscoveryEngineDataConnector#sync_mode}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorConfig.property.timeouts"></a>

```python
timeouts: DiscoveryEngineDataConnectorTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeouts">DiscoveryEngineDataConnectorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/discovery_engine_data_connector#timeouts DiscoveryEngineDataConnector#timeouts}

---

### DiscoveryEngineDataConnectorDestinationConfigs <a name="DiscoveryEngineDataConnectorDestinationConfigs" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigs.Initializer"></a>

```python
from cdktn_provider_google import discovery_engine_data_connector

discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigs(
  destinations: IResolvable | typing.List[DiscoveryEngineDataConnectorDestinationConfigsDestinations] = None,
  key: str = None,
  params: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigs.property.destinations">destinations</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinations">DiscoveryEngineDataConnectorDestinationConfigsDestinations</a>]</code> | destinations block. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigs.property.key">key</a></code> | <code>str</code> | The key of the destination configuration, for example 'url'. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigs.property.params">params</a></code> | <code>str</code> | Additional parameters for this destination config in structured json format. |

---

##### `destinations`<sup>Optional</sup> <a name="destinations" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigs.property.destinations"></a>

```python
destinations: IResolvable | typing.List[DiscoveryEngineDataConnectorDestinationConfigsDestinations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinations">DiscoveryEngineDataConnectorDestinationConfigsDestinations</a>]

destinations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/discovery_engine_data_connector#destinations DiscoveryEngineDataConnector#destinations}

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigs.property.key"></a>

```python
key: str
```

- *Type:* str

The key of the destination configuration, for example 'url'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/discovery_engine_data_connector#key DiscoveryEngineDataConnector#key}

---

##### `params`<sup>Optional</sup> <a name="params" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigs.property.params"></a>

```python
params: str
```

- *Type:* str

Additional parameters for this destination config in structured json format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/discovery_engine_data_connector#params DiscoveryEngineDataConnector#params}

---

### DiscoveryEngineDataConnectorDestinationConfigsDestinations <a name="DiscoveryEngineDataConnectorDestinationConfigsDestinations" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinations.Initializer"></a>

```python
from cdktn_provider_google import discovery_engine_data_connector

discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinations(
  host: str = None,
  port: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinations.property.host">host</a></code> | <code>str</code> | The host of the destination, for example 'https://example.atlassian.net'. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinations.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Target port number accepted by the destination. |

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinations.property.host"></a>

```python
host: str
```

- *Type:* str

The host of the destination, for example 'https://example.atlassian.net'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/discovery_engine_data_connector#host DiscoveryEngineDataConnector#host}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinations.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Target port number accepted by the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/discovery_engine_data_connector#port DiscoveryEngineDataConnector#port}

---

### DiscoveryEngineDataConnectorEntities <a name="DiscoveryEngineDataConnectorEntities" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntities"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntities.Initializer"></a>

```python
from cdktn_provider_google import discovery_engine_data_connector

discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntities(
  entity_name: str = None,
  key_property_mappings: typing.Mapping[str] = None,
  params: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntities.property.entityName">entity_name</a></code> | <code>str</code> | The name of the entity. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntities.property.keyPropertyMappings">key_property_mappings</a></code> | <code>typing.Mapping[str]</code> | Attributes for indexing. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntities.property.params">params</a></code> | <code>str</code> | The parameters for the entity to facilitate data ingestion. |

---

##### `entity_name`<sup>Optional</sup> <a name="entity_name" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntities.property.entityName"></a>

```python
entity_name: str
```

- *Type:* str

The name of the entity.

Supported values by data source:

* Salesforce: 'Lead', 'Opportunity', 'Contact', 'Account', 'Case', 'Contract', 'Campaign'
* Jira: project, issue, attachment, comment, worklog
* Confluence: 'Content', 'Space'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/discovery_engine_data_connector#entity_name DiscoveryEngineDataConnector#entity_name}

---

##### `key_property_mappings`<sup>Optional</sup> <a name="key_property_mappings" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntities.property.keyPropertyMappings"></a>

```python
key_property_mappings: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Attributes for indexing.

Key: Field name.
Value: The key property to map a field to, such as 'title', and
'description'. Supported key properties:

* 'title': The title for data record. This would be displayed on search
  results.
* 'description': The description for data record. This would be displayed
  on search results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/discovery_engine_data_connector#key_property_mappings DiscoveryEngineDataConnector#key_property_mappings}

---

##### `params`<sup>Optional</sup> <a name="params" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntities.property.params"></a>

```python
params: str
```

- *Type:* str

The parameters for the entity to facilitate data ingestion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/discovery_engine_data_connector#params DiscoveryEngineDataConnector#params}

---

### DiscoveryEngineDataConnectorErrors <a name="DiscoveryEngineDataConnectorErrors" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrors.Initializer"></a>

```python
from cdktn_provider_google import discovery_engine_data_connector

discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrors()
```


### DiscoveryEngineDataConnectorTimeouts <a name="DiscoveryEngineDataConnectorTimeouts" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeouts.Initializer"></a>

```python
from cdktn_provider_google import discovery_engine_data_connector

discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/discovery_engine_data_connector#create DiscoveryEngineDataConnector#create}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/discovery_engine_data_connector#delete DiscoveryEngineDataConnector#delete}. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/discovery_engine_data_connector#update DiscoveryEngineDataConnector#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/discovery_engine_data_connector#create DiscoveryEngineDataConnector#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/discovery_engine_data_connector#delete DiscoveryEngineDataConnector#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/discovery_engine_data_connector#update DiscoveryEngineDataConnector#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DiscoveryEngineDataConnectorActionConfigOutputReference <a name="DiscoveryEngineDataConnectorActionConfigOutputReference" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google import discovery_engine_data_connector

discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.resetActionParams">reset_action_params</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.resetCreateBapConnection">reset_create_bap_connection</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_action_params` <a name="reset_action_params" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.resetActionParams"></a>

```python
def reset_action_params() -> None
```

##### `reset_create_bap_connection` <a name="reset_create_bap_connection" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.resetCreateBapConnection"></a>

```python
def reset_create_bap_connection() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.property.isActionConfigured">is_action_configured</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.property.actionParamsInput">action_params_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.property.createBapConnectionInput">create_bap_connection_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.property.actionParams">action_params</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.property.createBapConnection">create_bap_connection</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfig">DiscoveryEngineDataConnectorActionConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_action_configured`<sup>Required</sup> <a name="is_action_configured" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.property.isActionConfigured"></a>

```python
is_action_configured: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `action_params_input`<sup>Optional</sup> <a name="action_params_input" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.property.actionParamsInput"></a>

```python
action_params_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `create_bap_connection_input`<sup>Optional</sup> <a name="create_bap_connection_input" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.property.createBapConnectionInput"></a>

```python
create_bap_connection_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `action_params`<sup>Required</sup> <a name="action_params" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.property.actionParams"></a>

```python
action_params: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `create_bap_connection`<sup>Required</sup> <a name="create_bap_connection" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.property.createBapConnection"></a>

```python
create_bap_connection: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfigOutputReference.property.internalValue"></a>

```python
internal_value: DiscoveryEngineDataConnectorActionConfig
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorActionConfig">DiscoveryEngineDataConnectorActionConfig</a>

---


### DiscoveryEngineDataConnectorBapConfigOutputReference <a name="DiscoveryEngineDataConnectorBapConfigOutputReference" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google import discovery_engine_data_connector

discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.resetEnabledActions">reset_enabled_actions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.resetSupportedConnectorModes">reset_supported_connector_modes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled_actions` <a name="reset_enabled_actions" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.resetEnabledActions"></a>

```python
def reset_enabled_actions() -> None
```

##### `reset_supported_connector_modes` <a name="reset_supported_connector_modes" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.resetSupportedConnectorModes"></a>

```python
def reset_supported_connector_modes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.property.enabledActionsInput">enabled_actions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.property.supportedConnectorModesInput">supported_connector_modes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.property.enabledActions">enabled_actions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.property.supportedConnectorModes">supported_connector_modes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfig">DiscoveryEngineDataConnectorBapConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_actions_input`<sup>Optional</sup> <a name="enabled_actions_input" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.property.enabledActionsInput"></a>

```python
enabled_actions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `supported_connector_modes_input`<sup>Optional</sup> <a name="supported_connector_modes_input" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.property.supportedConnectorModesInput"></a>

```python
supported_connector_modes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enabled_actions`<sup>Required</sup> <a name="enabled_actions" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.property.enabledActions"></a>

```python
enabled_actions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `supported_connector_modes`<sup>Required</sup> <a name="supported_connector_modes" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.property.supportedConnectorModes"></a>

```python
supported_connector_modes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfigOutputReference.property.internalValue"></a>

```python
internal_value: DiscoveryEngineDataConnectorBapConfig
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorBapConfig">DiscoveryEngineDataConnectorBapConfig</a>

---


### DiscoveryEngineDataConnectorDestinationConfigsDestinationsList <a name="DiscoveryEngineDataConnectorDestinationConfigsDestinationsList" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList.Initializer"></a>

```python
from cdktn_provider_google import discovery_engine_data_connector

discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinations">DiscoveryEngineDataConnectorDestinationConfigsDestinations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DiscoveryEngineDataConnectorDestinationConfigsDestinations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinations">DiscoveryEngineDataConnectorDestinationConfigsDestinations</a>]

---


### DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference <a name="DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import discovery_engine_data_connector

discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.resetHost">reset_host</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.resetPort">reset_port</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_host` <a name="reset_host" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.resetHost"></a>

```python
def reset_host() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.resetPort"></a>

```python
def reset_port() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.property.hostInput">host_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinations">DiscoveryEngineDataConnectorDestinationConfigsDestinations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `host_input`<sup>Optional</sup> <a name="host_input" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.property.hostInput"></a>

```python
host_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DiscoveryEngineDataConnectorDestinationConfigsDestinations
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinations">DiscoveryEngineDataConnectorDestinationConfigsDestinations</a>

---


### DiscoveryEngineDataConnectorDestinationConfigsList <a name="DiscoveryEngineDataConnectorDestinationConfigsList" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList.Initializer"></a>

```python
from cdktn_provider_google import discovery_engine_data_connector

discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DiscoveryEngineDataConnectorDestinationConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigs">DiscoveryEngineDataConnectorDestinationConfigs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DiscoveryEngineDataConnectorDestinationConfigs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigs">DiscoveryEngineDataConnectorDestinationConfigs</a>]

---


### DiscoveryEngineDataConnectorDestinationConfigsOutputReference <a name="DiscoveryEngineDataConnectorDestinationConfigsOutputReference" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import discovery_engine_data_connector

discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.putDestinations">put_destinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.resetDestinations">reset_destinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.resetParams">reset_params</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_destinations` <a name="put_destinations" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.putDestinations"></a>

```python
def put_destinations(
  value: IResolvable | typing.List[DiscoveryEngineDataConnectorDestinationConfigsDestinations]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.putDestinations.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinations">DiscoveryEngineDataConnectorDestinationConfigsDestinations</a>]

---

##### `reset_destinations` <a name="reset_destinations" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.resetDestinations"></a>

```python
def reset_destinations() -> None
```

##### `reset_key` <a name="reset_key" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_params` <a name="reset_params" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.resetParams"></a>

```python
def reset_params() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.destinations">destinations</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList">DiscoveryEngineDataConnectorDestinationConfigsDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.destinationsInput">destinations_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinations">DiscoveryEngineDataConnectorDestinationConfigsDestinations</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.paramsInput">params_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.params">params</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigs">DiscoveryEngineDataConnectorDestinationConfigs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.destinations"></a>

```python
destinations: DiscoveryEngineDataConnectorDestinationConfigsDestinationsList
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinationsList">DiscoveryEngineDataConnectorDestinationConfigsDestinationsList</a>

---

##### `destinations_input`<sup>Optional</sup> <a name="destinations_input" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.destinationsInput"></a>

```python
destinations_input: IResolvable | typing.List[DiscoveryEngineDataConnectorDestinationConfigsDestinations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsDestinations">DiscoveryEngineDataConnectorDestinationConfigsDestinations</a>]

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `params_input`<sup>Optional</sup> <a name="params_input" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.paramsInput"></a>

```python
params_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `params`<sup>Required</sup> <a name="params" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.params"></a>

```python
params: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DiscoveryEngineDataConnectorDestinationConfigs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorDestinationConfigs">DiscoveryEngineDataConnectorDestinationConfigs</a>

---


### DiscoveryEngineDataConnectorEntitiesList <a name="DiscoveryEngineDataConnectorEntitiesList" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList.Initializer"></a>

```python
from cdktn_provider_google import discovery_engine_data_connector

discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DiscoveryEngineDataConnectorEntitiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntities">DiscoveryEngineDataConnectorEntities</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DiscoveryEngineDataConnectorEntities]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntities">DiscoveryEngineDataConnectorEntities</a>]

---


### DiscoveryEngineDataConnectorEntitiesOutputReference <a name="DiscoveryEngineDataConnectorEntitiesOutputReference" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.Initializer"></a>

```python
from cdktn_provider_google import discovery_engine_data_connector

discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.resetEntityName">reset_entity_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.resetKeyPropertyMappings">reset_key_property_mappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.resetParams">reset_params</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_entity_name` <a name="reset_entity_name" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.resetEntityName"></a>

```python
def reset_entity_name() -> None
```

##### `reset_key_property_mappings` <a name="reset_key_property_mappings" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.resetKeyPropertyMappings"></a>

```python
def reset_key_property_mappings() -> None
```

##### `reset_params` <a name="reset_params" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.resetParams"></a>

```python
def reset_params() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.property.dataStore">data_store</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.property.entityNameInput">entity_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.property.keyPropertyMappingsInput">key_property_mappings_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.property.paramsInput">params_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.property.entityName">entity_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.property.keyPropertyMappings">key_property_mappings</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.property.params">params</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntities">DiscoveryEngineDataConnectorEntities</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_store`<sup>Required</sup> <a name="data_store" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.property.dataStore"></a>

```python
data_store: str
```

- *Type:* str

---

##### `entity_name_input`<sup>Optional</sup> <a name="entity_name_input" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.property.entityNameInput"></a>

```python
entity_name_input: str
```

- *Type:* str

---

##### `key_property_mappings_input`<sup>Optional</sup> <a name="key_property_mappings_input" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.property.keyPropertyMappingsInput"></a>

```python
key_property_mappings_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `params_input`<sup>Optional</sup> <a name="params_input" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.property.paramsInput"></a>

```python
params_input: str
```

- *Type:* str

---

##### `entity_name`<sup>Required</sup> <a name="entity_name" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.property.entityName"></a>

```python
entity_name: str
```

- *Type:* str

---

##### `key_property_mappings`<sup>Required</sup> <a name="key_property_mappings" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.property.keyPropertyMappings"></a>

```python
key_property_mappings: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `params`<sup>Required</sup> <a name="params" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.property.params"></a>

```python
params: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntitiesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DiscoveryEngineDataConnectorEntities
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorEntities">DiscoveryEngineDataConnectorEntities</a>

---


### DiscoveryEngineDataConnectorErrorsList <a name="DiscoveryEngineDataConnectorErrorsList" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList.Initializer"></a>

```python
from cdktn_provider_google import discovery_engine_data_connector

discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DiscoveryEngineDataConnectorErrorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DiscoveryEngineDataConnectorErrorsOutputReference <a name="DiscoveryEngineDataConnectorErrorsOutputReference" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import discovery_engine_data_connector

discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.property.code">code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrors">DiscoveryEngineDataConnectorErrors</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.property.code"></a>

```python
code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrorsOutputReference.property.internalValue"></a>

```python
internal_value: DiscoveryEngineDataConnectorErrors
```

- *Type:* <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorErrors">DiscoveryEngineDataConnectorErrors</a>

---


### DiscoveryEngineDataConnectorTimeoutsOutputReference <a name="DiscoveryEngineDataConnectorTimeoutsOutputReference" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import discovery_engine_data_connector

discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeouts">DiscoveryEngineDataConnectorTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DiscoveryEngineDataConnectorTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.discoveryEngineDataConnector.DiscoveryEngineDataConnectorTimeouts">DiscoveryEngineDataConnectorTimeouts</a>

---



