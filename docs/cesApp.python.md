# `cesApp` Submodule <a name="`cesApp` Submodule" id="@cdktn/provider-google.cesApp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CesApp <a name="CesApp" id="@cdktn/provider-google.cesApp.CesApp"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app google_ces_app}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesApp.CesApp.Initializer"></a>

```python
from cdktn_provider_google import ces_app

cesApp.CesApp(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  app_id: str,
  display_name: str,
  location: str,
  audio_processing_config: CesAppAudioProcessingConfig = None,
  client_certificate_settings: CesAppClientCertificateSettings = None,
  data_store_settings: CesAppDataStoreSettings = None,
  default_channel_profile: CesAppDefaultChannelProfile = None,
  deletion_policy: str = None,
  description: str = None,
  evaluation_metrics_thresholds: CesAppEvaluationMetricsThresholds = None,
  global_instruction: str = None,
  guardrails: typing.List[str] = None,
  id: str = None,
  language_settings: CesAppLanguageSettings = None,
  logging_settings: CesAppLoggingSettings = None,
  metadata: typing.Mapping[str] = None,
  model_settings: CesAppModelSettings = None,
  pinned: bool | IResolvable = None,
  project: str = None,
  root_agent: str = None,
  timeouts: CesAppTimeouts = None,
  time_zone_settings: CesAppTimeZoneSettings = None,
  tool_execution_mode: str = None,
  variable_declarations: IResolvable | typing.List[CesAppVariableDeclarations] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.appId">app_id</a></code> | <code>str</code> | The ID to use for the app, which will become the final component of the app's resource name. |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Display name of the app. |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.audioProcessingConfig">audio_processing_config</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfig">CesAppAudioProcessingConfig</a></code> | audio_processing_config block. |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.clientCertificateSettings">client_certificate_settings</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettings">CesAppClientCertificateSettings</a></code> | client_certificate_settings block. |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.dataStoreSettings">data_store_settings</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettings">CesAppDataStoreSettings</a></code> | data_store_settings block. |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.defaultChannelProfile">default_channel_profile</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfile">CesAppDefaultChannelProfile</a></code> | default_channel_profile block. |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.description">description</a></code> | <code>str</code> | Human-readable description of the app. |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.evaluationMetricsThresholds">evaluation_metrics_thresholds</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholds">CesAppEvaluationMetricsThresholds</a></code> | evaluation_metrics_thresholds block. |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.globalInstruction">global_instruction</a></code> | <code>str</code> | Instructions for all the agents in the app. |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.guardrails">guardrails</a></code> | <code>typing.List[str]</code> | List of guardrails for the app. Format: 'projects/{project}/locations/{location}/apps/{app}/guardrails/{guardrail}'. |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#id CesApp#id}. |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.languageSettings">language_settings</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettings">CesAppLanguageSettings</a></code> | language_settings block. |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.loggingSettings">logging_settings</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettings">CesAppLoggingSettings</a></code> | logging_settings block. |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | Metadata about the app. |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.modelSettings">model_settings</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppModelSettings">CesAppModelSettings</a></code> | model_settings block. |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.pinned">pinned</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the app is pinned in the app list. |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#project CesApp#project}. |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.rootAgent">root_agent</a></code> | <code>str</code> | The root agent is the entry point of the app. Format: 'projects/{project}/locations/{location}/apps/{app}/agents/{agent}'. |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeouts">CesAppTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.timeZoneSettings">time_zone_settings</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeZoneSettings">CesAppTimeZoneSettings</a></code> | time_zone_settings block. |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.toolExecutionMode">tool_execution_mode</a></code> | <code>str</code> | The tool execution mode for the app. See the [API reference](https://docs.cloud.google.com/customer-engagement-ai/conversational-agents/ps/reference/rpc/google.cloud.ces.v1#google.cloud.ces.v1.App.ToolExecutionMode) for more details. |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.variableDeclarations">variable_declarations</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarations">CesAppVariableDeclarations</a>]</code> | variable_declarations block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `app_id`<sup>Required</sup> <a name="app_id" id="@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.appId"></a>

- *Type:* str

The ID to use for the app, which will become the final component of the app's resource name.

If not provided, a unique ID will be
automatically assigned for the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#app_id CesApp#app_id}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.displayName"></a>

- *Type:* str

Display name of the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#display_name CesApp#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.location"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#location CesApp#location}

---

##### `audio_processing_config`<sup>Optional</sup> <a name="audio_processing_config" id="@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.audioProcessingConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfig">CesAppAudioProcessingConfig</a>

audio_processing_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#audio_processing_config CesApp#audio_processing_config}

---

##### `client_certificate_settings`<sup>Optional</sup> <a name="client_certificate_settings" id="@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.clientCertificateSettings"></a>

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettings">CesAppClientCertificateSettings</a>

client_certificate_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#client_certificate_settings CesApp#client_certificate_settings}

---

##### `data_store_settings`<sup>Optional</sup> <a name="data_store_settings" id="@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.dataStoreSettings"></a>

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettings">CesAppDataStoreSettings</a>

data_store_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#data_store_settings CesApp#data_store_settings}

---

##### `default_channel_profile`<sup>Optional</sup> <a name="default_channel_profile" id="@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.defaultChannelProfile"></a>

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfile">CesAppDefaultChannelProfile</a>

default_channel_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#default_channel_profile CesApp#default_channel_profile}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#deletion_policy CesApp#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.description"></a>

- *Type:* str

Human-readable description of the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#description CesApp#description}

---

##### `evaluation_metrics_thresholds`<sup>Optional</sup> <a name="evaluation_metrics_thresholds" id="@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.evaluationMetricsThresholds"></a>

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholds">CesAppEvaluationMetricsThresholds</a>

evaluation_metrics_thresholds block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#evaluation_metrics_thresholds CesApp#evaluation_metrics_thresholds}

---

##### `global_instruction`<sup>Optional</sup> <a name="global_instruction" id="@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.globalInstruction"></a>

- *Type:* str

Instructions for all the agents in the app.

You can use this instruction to set up a stable identity or personality
across all the agents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#global_instruction CesApp#global_instruction}

---

##### `guardrails`<sup>Optional</sup> <a name="guardrails" id="@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.guardrails"></a>

- *Type:* typing.List[str]

List of guardrails for the app. Format: 'projects/{project}/locations/{location}/apps/{app}/guardrails/{guardrail}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#guardrails CesApp#guardrails}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#id CesApp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `language_settings`<sup>Optional</sup> <a name="language_settings" id="@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.languageSettings"></a>

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettings">CesAppLanguageSettings</a>

language_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#language_settings CesApp#language_settings}

---

##### `logging_settings`<sup>Optional</sup> <a name="logging_settings" id="@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.loggingSettings"></a>

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettings">CesAppLoggingSettings</a>

logging_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#logging_settings CesApp#logging_settings}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.metadata"></a>

- *Type:* typing.Mapping[str]

Metadata about the app.

This field can be used to store additional
information relevant to the app's details or intended usages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#metadata CesApp#metadata}

---

##### `model_settings`<sup>Optional</sup> <a name="model_settings" id="@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.modelSettings"></a>

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppModelSettings">CesAppModelSettings</a>

model_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#model_settings CesApp#model_settings}

---

##### `pinned`<sup>Optional</sup> <a name="pinned" id="@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.pinned"></a>

- *Type:* bool | cdktn.IResolvable

Whether the app is pinned in the app list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#pinned CesApp#pinned}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#project CesApp#project}.

---

##### `root_agent`<sup>Optional</sup> <a name="root_agent" id="@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.rootAgent"></a>

- *Type:* str

The root agent is the entry point of the app. Format: 'projects/{project}/locations/{location}/apps/{app}/agents/{agent}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#root_agent CesApp#root_agent}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppTimeouts">CesAppTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#timeouts CesApp#timeouts}

---

##### `time_zone_settings`<sup>Optional</sup> <a name="time_zone_settings" id="@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.timeZoneSettings"></a>

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppTimeZoneSettings">CesAppTimeZoneSettings</a>

time_zone_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#time_zone_settings CesApp#time_zone_settings}

---

##### `tool_execution_mode`<sup>Optional</sup> <a name="tool_execution_mode" id="@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.toolExecutionMode"></a>

- *Type:* str

The tool execution mode for the app. See the [API reference](https://docs.cloud.google.com/customer-engagement-ai/conversational-agents/ps/reference/rpc/google.cloud.ces.v1#google.cloud.ces.v1.App.ToolExecutionMode) for more details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#tool_execution_mode CesApp#tool_execution_mode}

---

##### `variable_declarations`<sup>Optional</sup> <a name="variable_declarations" id="@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.variableDeclarations"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarations">CesAppVariableDeclarations</a>]

variable_declarations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#variable_declarations CesApp#variable_declarations}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.putAudioProcessingConfig">put_audio_processing_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.putClientCertificateSettings">put_client_certificate_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.putDataStoreSettings">put_data_store_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.putDefaultChannelProfile">put_default_channel_profile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.putEvaluationMetricsThresholds">put_evaluation_metrics_thresholds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.putLanguageSettings">put_language_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.putLoggingSettings">put_logging_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.putModelSettings">put_model_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.putTimeZoneSettings">put_time_zone_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.putVariableDeclarations">put_variable_declarations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.resetAudioProcessingConfig">reset_audio_processing_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.resetClientCertificateSettings">reset_client_certificate_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.resetDataStoreSettings">reset_data_store_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.resetDefaultChannelProfile">reset_default_channel_profile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.resetEvaluationMetricsThresholds">reset_evaluation_metrics_thresholds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.resetGlobalInstruction">reset_global_instruction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.resetGuardrails">reset_guardrails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.resetLanguageSettings">reset_language_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.resetLoggingSettings">reset_logging_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.resetMetadata">reset_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.resetModelSettings">reset_model_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.resetPinned">reset_pinned</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.resetRootAgent">reset_root_agent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.resetTimeZoneSettings">reset_time_zone_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.resetToolExecutionMode">reset_tool_execution_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.resetVariableDeclarations">reset_variable_declarations</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesApp.CesApp.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.cesApp.CesApp.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.cesApp.CesApp.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.cesApp.CesApp.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.cesApp.CesApp.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesApp.CesApp.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.cesApp.CesApp.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.cesApp.CesApp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.cesApp.CesApp.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.cesApp.CesApp.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.cesApp.CesApp.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.cesApp.CesApp.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.cesApp.CesApp.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.cesApp.CesApp.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesApp.CesApp.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesApp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesApp.CesApp.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesApp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesApp.CesApp.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesApp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesApp.CesApp.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesApp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesApp.CesApp.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesApp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesApp.CesApp.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesApp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesApp.CesApp.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesApp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesApp.CesApp.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesApp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesApp.CesApp.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesApp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.cesApp.CesApp.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.cesApp.CesApp.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cesApp.CesApp.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cesApp.CesApp.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesApp.CesApp.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesApp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.cesApp.CesApp.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cesApp.CesApp.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.cesApp.CesApp.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.cesApp.CesApp.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.cesApp.CesApp.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.cesApp.CesApp.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cesApp.CesApp.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_audio_processing_config` <a name="put_audio_processing_config" id="@cdktn/provider-google.cesApp.CesApp.putAudioProcessingConfig"></a>

```python
def put_audio_processing_config(
  ambient_sound_config: CesAppAudioProcessingConfigAmbientSoundConfig = None,
  barge_in_config: CesAppAudioProcessingConfigBargeInConfig = None,
  inactivity_timeout: str = None,
  synthesize_speech_configs: IResolvable | typing.List[CesAppAudioProcessingConfigSynthesizeSpeechConfigs] = None
) -> None
```

###### `ambient_sound_config`<sup>Optional</sup> <a name="ambient_sound_config" id="@cdktn/provider-google.cesApp.CesApp.putAudioProcessingConfig.parameter.ambientSoundConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfig">CesAppAudioProcessingConfigAmbientSoundConfig</a>

ambient_sound_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#ambient_sound_config CesApp#ambient_sound_config}

---

###### `barge_in_config`<sup>Optional</sup> <a name="barge_in_config" id="@cdktn/provider-google.cesApp.CesApp.putAudioProcessingConfig.parameter.bargeInConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfig">CesAppAudioProcessingConfigBargeInConfig</a>

barge_in_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#barge_in_config CesApp#barge_in_config}

---

###### `inactivity_timeout`<sup>Optional</sup> <a name="inactivity_timeout" id="@cdktn/provider-google.cesApp.CesApp.putAudioProcessingConfig.parameter.inactivityTimeout"></a>

- *Type:* str

The duration of user inactivity (no speech or interaction) before the agent prompts the user for reengagement.

If not set, the agent will not prompt
the user for reengagement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#inactivity_timeout CesApp#inactivity_timeout}

---

###### `synthesize_speech_configs`<sup>Optional</sup> <a name="synthesize_speech_configs" id="@cdktn/provider-google.cesApp.CesApp.putAudioProcessingConfig.parameter.synthesizeSpeechConfigs"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigs">CesAppAudioProcessingConfigSynthesizeSpeechConfigs</a>]

synthesize_speech_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#synthesize_speech_configs CesApp#synthesize_speech_configs}

---

##### `put_client_certificate_settings` <a name="put_client_certificate_settings" id="@cdktn/provider-google.cesApp.CesApp.putClientCertificateSettings"></a>

```python
def put_client_certificate_settings(
  private_key: str,
  tls_certificate: str,
  passphrase: str = None
) -> None
```

###### `private_key`<sup>Required</sup> <a name="private_key" id="@cdktn/provider-google.cesApp.CesApp.putClientCertificateSettings.parameter.privateKey"></a>

- *Type:* str

The name of the SecretManager secret version resource storing the private key encoded in PEM format. Format: projects/{project}/secrets/{secret}/versions/{version}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#private_key CesApp#private_key}

---

###### `tls_certificate`<sup>Required</sup> <a name="tls_certificate" id="@cdktn/provider-google.cesApp.CesApp.putClientCertificateSettings.parameter.tlsCertificate"></a>

- *Type:* str

The TLS certificate encoded in PEM format. This string must include the begin header and end footer lines.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#tls_certificate CesApp#tls_certificate}

---

###### `passphrase`<sup>Optional</sup> <a name="passphrase" id="@cdktn/provider-google.cesApp.CesApp.putClientCertificateSettings.parameter.passphrase"></a>

- *Type:* str

The passphrase to decrypt the private key. Should be left unset if the private key is not encrypted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#passphrase CesApp#passphrase}

---

##### `put_data_store_settings` <a name="put_data_store_settings" id="@cdktn/provider-google.cesApp.CesApp.putDataStoreSettings"></a>

```python
def put_data_store_settings() -> None
```

##### `put_default_channel_profile` <a name="put_default_channel_profile" id="@cdktn/provider-google.cesApp.CesApp.putDefaultChannelProfile"></a>

```python
def put_default_channel_profile(
  channel_type: str = None,
  disable_barge_in_control: bool | IResolvable = None,
  disable_dtmf: bool | IResolvable = None,
  persona_property: CesAppDefaultChannelProfilePersonaProperty = None,
  profile_id: str = None,
  web_widget_config: CesAppDefaultChannelProfileWebWidgetConfig = None
) -> None
```

###### `channel_type`<sup>Optional</sup> <a name="channel_type" id="@cdktn/provider-google.cesApp.CesApp.putDefaultChannelProfile.parameter.channelType"></a>

- *Type:* str

The type of the channel profile. Possible values: UNKNOWN WEB_UI API TWILIO GOOGLE_TELEPHONY_PLATFORM CONTACT_CENTER_AS_A_SERVICE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#channel_type CesApp#channel_type}

---

###### `disable_barge_in_control`<sup>Optional</sup> <a name="disable_barge_in_control" id="@cdktn/provider-google.cesApp.CesApp.putDefaultChannelProfile.parameter.disableBargeInControl"></a>

- *Type:* bool | cdktn.IResolvable

Whether to disable user barge-in in the conversation.

* true: User interruptions are disabled while the agent is speaking.
* false: The agent retains automatic control over when the user can interrupt.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#disable_barge_in_control CesApp#disable_barge_in_control}

---

###### `disable_dtmf`<sup>Optional</sup> <a name="disable_dtmf" id="@cdktn/provider-google.cesApp.CesApp.putDefaultChannelProfile.parameter.disableDtmf"></a>

- *Type:* bool | cdktn.IResolvable

Whether to disable DTMF (dual-tone multi-frequency).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#disable_dtmf CesApp#disable_dtmf}

---

###### `persona_property`<sup>Optional</sup> <a name="persona_property" id="@cdktn/provider-google.cesApp.CesApp.putDefaultChannelProfile.parameter.personaProperty"></a>

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaProperty">CesAppDefaultChannelProfilePersonaProperty</a>

persona_property block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#persona_property CesApp#persona_property}

---

###### `profile_id`<sup>Optional</sup> <a name="profile_id" id="@cdktn/provider-google.cesApp.CesApp.putDefaultChannelProfile.parameter.profileId"></a>

- *Type:* str

The unique identifier of the channel profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#profile_id CesApp#profile_id}

---

###### `web_widget_config`<sup>Optional</sup> <a name="web_widget_config" id="@cdktn/provider-google.cesApp.CesApp.putDefaultChannelProfile.parameter.webWidgetConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfig">CesAppDefaultChannelProfileWebWidgetConfig</a>

web_widget_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#web_widget_config CesApp#web_widget_config}

---

##### `put_evaluation_metrics_thresholds` <a name="put_evaluation_metrics_thresholds" id="@cdktn/provider-google.cesApp.CesApp.putEvaluationMetricsThresholds"></a>

```python
def put_evaluation_metrics_thresholds(
  golden_evaluation_metrics_thresholds: CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds = None
) -> None
```

###### `golden_evaluation_metrics_thresholds`<sup>Optional</sup> <a name="golden_evaluation_metrics_thresholds" id="@cdktn/provider-google.cesApp.CesApp.putEvaluationMetricsThresholds.parameter.goldenEvaluationMetricsThresholds"></a>

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds">CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds</a>

golden_evaluation_metrics_thresholds block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#golden_evaluation_metrics_thresholds CesApp#golden_evaluation_metrics_thresholds}

---

##### `put_language_settings` <a name="put_language_settings" id="@cdktn/provider-google.cesApp.CesApp.putLanguageSettings"></a>

```python
def put_language_settings(
  default_language_code: str = None,
  enable_multilingual_support: bool | IResolvable = None,
  fallback_action: str = None,
  supported_language_codes: typing.List[str] = None
) -> None
```

###### `default_language_code`<sup>Optional</sup> <a name="default_language_code" id="@cdktn/provider-google.cesApp.CesApp.putLanguageSettings.parameter.defaultLanguageCode"></a>

- *Type:* str

The default language code of the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#default_language_code CesApp#default_language_code}

---

###### `enable_multilingual_support`<sup>Optional</sup> <a name="enable_multilingual_support" id="@cdktn/provider-google.cesApp.CesApp.putLanguageSettings.parameter.enableMultilingualSupport"></a>

- *Type:* bool | cdktn.IResolvable

Enables multilingual support. If true, agents in the app will use pre-built instructions to improve handling of multilingual input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#enable_multilingual_support CesApp#enable_multilingual_support}

---

###### `fallback_action`<sup>Optional</sup> <a name="fallback_action" id="@cdktn/provider-google.cesApp.CesApp.putLanguageSettings.parameter.fallbackAction"></a>

- *Type:* str

The action to perform when an agent receives input in an unsupported language.

This can be a predefined action or a custom tool call.
Valid values are:

* A tool's full resource name, which triggers a specific tool execution.
* A predefined system action, such as "escalate" or "exit", which triggers
  an EndSession signal with corresponding metadata
  to terminate the conversation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#fallback_action CesApp#fallback_action}

---

###### `supported_language_codes`<sup>Optional</sup> <a name="supported_language_codes" id="@cdktn/provider-google.cesApp.CesApp.putLanguageSettings.parameter.supportedLanguageCodes"></a>

- *Type:* typing.List[str]

List of languages codes supported by the app, in addition to the 'default_language_code'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#supported_language_codes CesApp#supported_language_codes}

---

##### `put_logging_settings` <a name="put_logging_settings" id="@cdktn/provider-google.cesApp.CesApp.putLoggingSettings"></a>

```python
def put_logging_settings(
  audio_recording_config: CesAppLoggingSettingsAudioRecordingConfig = None,
  bigquery_export_settings: CesAppLoggingSettingsBigqueryExportSettings = None,
  cloud_logging_settings: CesAppLoggingSettingsCloudLoggingSettings = None,
  conversation_logging_settings: CesAppLoggingSettingsConversationLoggingSettings = None,
  redaction_config: CesAppLoggingSettingsRedactionConfig = None
) -> None
```

###### `audio_recording_config`<sup>Optional</sup> <a name="audio_recording_config" id="@cdktn/provider-google.cesApp.CesApp.putLoggingSettings.parameter.audioRecordingConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfig">CesAppLoggingSettingsAudioRecordingConfig</a>

audio_recording_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#audio_recording_config CesApp#audio_recording_config}

---

###### `bigquery_export_settings`<sup>Optional</sup> <a name="bigquery_export_settings" id="@cdktn/provider-google.cesApp.CesApp.putLoggingSettings.parameter.bigqueryExportSettings"></a>

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettings">CesAppLoggingSettingsBigqueryExportSettings</a>

bigquery_export_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#bigquery_export_settings CesApp#bigquery_export_settings}

---

###### `cloud_logging_settings`<sup>Optional</sup> <a name="cloud_logging_settings" id="@cdktn/provider-google.cesApp.CesApp.putLoggingSettings.parameter.cloudLoggingSettings"></a>

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettings">CesAppLoggingSettingsCloudLoggingSettings</a>

cloud_logging_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#cloud_logging_settings CesApp#cloud_logging_settings}

---

###### `conversation_logging_settings`<sup>Optional</sup> <a name="conversation_logging_settings" id="@cdktn/provider-google.cesApp.CesApp.putLoggingSettings.parameter.conversationLoggingSettings"></a>

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettings">CesAppLoggingSettingsConversationLoggingSettings</a>

conversation_logging_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#conversation_logging_settings CesApp#conversation_logging_settings}

---

###### `redaction_config`<sup>Optional</sup> <a name="redaction_config" id="@cdktn/provider-google.cesApp.CesApp.putLoggingSettings.parameter.redactionConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfig">CesAppLoggingSettingsRedactionConfig</a>

redaction_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#redaction_config CesApp#redaction_config}

---

##### `put_model_settings` <a name="put_model_settings" id="@cdktn/provider-google.cesApp.CesApp.putModelSettings"></a>

```python
def put_model_settings(
  model: str = None,
  temperature: typing.Union[int, float] = None
) -> None
```

###### `model`<sup>Optional</sup> <a name="model" id="@cdktn/provider-google.cesApp.CesApp.putModelSettings.parameter.model"></a>

- *Type:* str

The LLM model that the agent should use.

If not set, the agent will inherit the model from its parent agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#model CesApp#model}

---

###### `temperature`<sup>Optional</sup> <a name="temperature" id="@cdktn/provider-google.cesApp.CesApp.putModelSettings.parameter.temperature"></a>

- *Type:* typing.Union[int, float]

If set, this temperature will be used for the LLM model.

Temperature
controls the randomness of the model's responses. Lower temperatures
produce responses that are more predictable. Higher temperatures produce
responses that are more creative.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#temperature CesApp#temperature}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.cesApp.CesApp.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.cesApp.CesApp.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#create CesApp#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.cesApp.CesApp.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#delete CesApp#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.cesApp.CesApp.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#update CesApp#update}.

---

##### `put_time_zone_settings` <a name="put_time_zone_settings" id="@cdktn/provider-google.cesApp.CesApp.putTimeZoneSettings"></a>

```python
def put_time_zone_settings(
  time_zone: str = None
) -> None
```

###### `time_zone`<sup>Optional</sup> <a name="time_zone" id="@cdktn/provider-google.cesApp.CesApp.putTimeZoneSettings.parameter.timeZone"></a>

- *Type:* str

The time zone of the app from the time zone database, e.g., America/Los_Angeles, Europe/Paris.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#time_zone CesApp#time_zone}

---

##### `put_variable_declarations` <a name="put_variable_declarations" id="@cdktn/provider-google.cesApp.CesApp.putVariableDeclarations"></a>

```python
def put_variable_declarations(
  value: IResolvable | typing.List[CesAppVariableDeclarations]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesApp.CesApp.putVariableDeclarations.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarations">CesAppVariableDeclarations</a>]

---

##### `reset_audio_processing_config` <a name="reset_audio_processing_config" id="@cdktn/provider-google.cesApp.CesApp.resetAudioProcessingConfig"></a>

```python
def reset_audio_processing_config() -> None
```

##### `reset_client_certificate_settings` <a name="reset_client_certificate_settings" id="@cdktn/provider-google.cesApp.CesApp.resetClientCertificateSettings"></a>

```python
def reset_client_certificate_settings() -> None
```

##### `reset_data_store_settings` <a name="reset_data_store_settings" id="@cdktn/provider-google.cesApp.CesApp.resetDataStoreSettings"></a>

```python
def reset_data_store_settings() -> None
```

##### `reset_default_channel_profile` <a name="reset_default_channel_profile" id="@cdktn/provider-google.cesApp.CesApp.resetDefaultChannelProfile"></a>

```python
def reset_default_channel_profile() -> None
```

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.cesApp.CesApp.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google.cesApp.CesApp.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_evaluation_metrics_thresholds` <a name="reset_evaluation_metrics_thresholds" id="@cdktn/provider-google.cesApp.CesApp.resetEvaluationMetricsThresholds"></a>

```python
def reset_evaluation_metrics_thresholds() -> None
```

##### `reset_global_instruction` <a name="reset_global_instruction" id="@cdktn/provider-google.cesApp.CesApp.resetGlobalInstruction"></a>

```python
def reset_global_instruction() -> None
```

##### `reset_guardrails` <a name="reset_guardrails" id="@cdktn/provider-google.cesApp.CesApp.resetGuardrails"></a>

```python
def reset_guardrails() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.cesApp.CesApp.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_language_settings` <a name="reset_language_settings" id="@cdktn/provider-google.cesApp.CesApp.resetLanguageSettings"></a>

```python
def reset_language_settings() -> None
```

##### `reset_logging_settings` <a name="reset_logging_settings" id="@cdktn/provider-google.cesApp.CesApp.resetLoggingSettings"></a>

```python
def reset_logging_settings() -> None
```

##### `reset_metadata` <a name="reset_metadata" id="@cdktn/provider-google.cesApp.CesApp.resetMetadata"></a>

```python
def reset_metadata() -> None
```

##### `reset_model_settings` <a name="reset_model_settings" id="@cdktn/provider-google.cesApp.CesApp.resetModelSettings"></a>

```python
def reset_model_settings() -> None
```

##### `reset_pinned` <a name="reset_pinned" id="@cdktn/provider-google.cesApp.CesApp.resetPinned"></a>

```python
def reset_pinned() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.cesApp.CesApp.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_root_agent` <a name="reset_root_agent" id="@cdktn/provider-google.cesApp.CesApp.resetRootAgent"></a>

```python
def reset_root_agent() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.cesApp.CesApp.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_time_zone_settings` <a name="reset_time_zone_settings" id="@cdktn/provider-google.cesApp.CesApp.resetTimeZoneSettings"></a>

```python
def reset_time_zone_settings() -> None
```

##### `reset_tool_execution_mode` <a name="reset_tool_execution_mode" id="@cdktn/provider-google.cesApp.CesApp.resetToolExecutionMode"></a>

```python
def reset_tool_execution_mode() -> None
```

##### `reset_variable_declarations` <a name="reset_variable_declarations" id="@cdktn/provider-google.cesApp.CesApp.resetVariableDeclarations"></a>

```python
def reset_variable_declarations() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a CesApp resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.cesApp.CesApp.isConstruct"></a>

```python
from cdktn_provider_google import ces_app

cesApp.CesApp.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.cesApp.CesApp.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.cesApp.CesApp.isTerraformElement"></a>

```python
from cdktn_provider_google import ces_app

cesApp.CesApp.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.cesApp.CesApp.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.cesApp.CesApp.isTerraformResource"></a>

```python
from cdktn_provider_google import ces_app

cesApp.CesApp.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.cesApp.CesApp.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.cesApp.CesApp.generateConfigForImport"></a>

```python
from cdktn_provider_google import ces_app

cesApp.CesApp.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a CesApp resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.cesApp.CesApp.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.cesApp.CesApp.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CesApp to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.cesApp.CesApp.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CesApp that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cesApp.CesApp.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CesApp to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.audioProcessingConfig">audio_processing_config</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference">CesAppAudioProcessingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.clientCertificateSettings">client_certificate_settings</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference">CesAppClientCertificateSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.dataStoreSettings">data_store_settings</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference">CesAppDataStoreSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.defaultChannelProfile">default_channel_profile</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference">CesAppDefaultChannelProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.deploymentCount">deployment_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.evaluationMetricsThresholds">evaluation_metrics_thresholds</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference">CesAppEvaluationMetricsThresholdsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.languageSettings">language_settings</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference">CesAppLanguageSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.loggingSettings">logging_settings</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference">CesAppLoggingSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.modelSettings">model_settings</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference">CesAppModelSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference">CesAppTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.timeZoneSettings">time_zone_settings</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference">CesAppTimeZoneSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.variableDeclarations">variable_declarations</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsList">CesAppVariableDeclarationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.appIdInput">app_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.audioProcessingConfigInput">audio_processing_config_input</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfig">CesAppAudioProcessingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.clientCertificateSettingsInput">client_certificate_settings_input</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettings">CesAppClientCertificateSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.dataStoreSettingsInput">data_store_settings_input</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettings">CesAppDataStoreSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.defaultChannelProfileInput">default_channel_profile_input</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfile">CesAppDefaultChannelProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.evaluationMetricsThresholdsInput">evaluation_metrics_thresholds_input</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholds">CesAppEvaluationMetricsThresholds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.globalInstructionInput">global_instruction_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.guardrailsInput">guardrails_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.languageSettingsInput">language_settings_input</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettings">CesAppLanguageSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.loggingSettingsInput">logging_settings_input</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettings">CesAppLoggingSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.metadataInput">metadata_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.modelSettingsInput">model_settings_input</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppModelSettings">CesAppModelSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.pinnedInput">pinned_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.rootAgentInput">root_agent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cesApp.CesAppTimeouts">CesAppTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.timeZoneSettingsInput">time_zone_settings_input</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeZoneSettings">CesAppTimeZoneSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.toolExecutionModeInput">tool_execution_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.variableDeclarationsInput">variable_declarations_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarations">CesAppVariableDeclarations</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.appId">app_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.globalInstruction">global_instruction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.guardrails">guardrails</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.pinned">pinned</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.rootAgent">root_agent</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.toolExecutionMode">tool_execution_mode</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.cesApp.CesApp.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.cesApp.CesApp.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesApp.CesApp.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.cesApp.CesApp.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.cesApp.CesApp.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.cesApp.CesApp.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.cesApp.CesApp.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.cesApp.CesApp.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.cesApp.CesApp.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.cesApp.CesApp.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.cesApp.CesApp.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.cesApp.CesApp.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cesApp.CesApp.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.cesApp.CesApp.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `audio_processing_config`<sup>Required</sup> <a name="audio_processing_config" id="@cdktn/provider-google.cesApp.CesApp.property.audioProcessingConfig"></a>

```python
audio_processing_config: CesAppAudioProcessingConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference">CesAppAudioProcessingConfigOutputReference</a>

---

##### `client_certificate_settings`<sup>Required</sup> <a name="client_certificate_settings" id="@cdktn/provider-google.cesApp.CesApp.property.clientCertificateSettings"></a>

```python
client_certificate_settings: CesAppClientCertificateSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference">CesAppClientCertificateSettingsOutputReference</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google.cesApp.CesApp.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `data_store_settings`<sup>Required</sup> <a name="data_store_settings" id="@cdktn/provider-google.cesApp.CesApp.property.dataStoreSettings"></a>

```python
data_store_settings: CesAppDataStoreSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference">CesAppDataStoreSettingsOutputReference</a>

---

##### `default_channel_profile`<sup>Required</sup> <a name="default_channel_profile" id="@cdktn/provider-google.cesApp.CesApp.property.defaultChannelProfile"></a>

```python
default_channel_profile: CesAppDefaultChannelProfileOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference">CesAppDefaultChannelProfileOutputReference</a>

---

##### `deployment_count`<sup>Required</sup> <a name="deployment_count" id="@cdktn/provider-google.cesApp.CesApp.property.deploymentCount"></a>

```python
deployment_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.cesApp.CesApp.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `evaluation_metrics_thresholds`<sup>Required</sup> <a name="evaluation_metrics_thresholds" id="@cdktn/provider-google.cesApp.CesApp.property.evaluationMetricsThresholds"></a>

```python
evaluation_metrics_thresholds: CesAppEvaluationMetricsThresholdsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference">CesAppEvaluationMetricsThresholdsOutputReference</a>

---

##### `language_settings`<sup>Required</sup> <a name="language_settings" id="@cdktn/provider-google.cesApp.CesApp.property.languageSettings"></a>

```python
language_settings: CesAppLanguageSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference">CesAppLanguageSettingsOutputReference</a>

---

##### `logging_settings`<sup>Required</sup> <a name="logging_settings" id="@cdktn/provider-google.cesApp.CesApp.property.loggingSettings"></a>

```python
logging_settings: CesAppLoggingSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference">CesAppLoggingSettingsOutputReference</a>

---

##### `model_settings`<sup>Required</sup> <a name="model_settings" id="@cdktn/provider-google.cesApp.CesApp.property.modelSettings"></a>

```python
model_settings: CesAppModelSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference">CesAppModelSettingsOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.cesApp.CesApp.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.cesApp.CesApp.property.timeouts"></a>

```python
timeouts: CesAppTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference">CesAppTimeoutsOutputReference</a>

---

##### `time_zone_settings`<sup>Required</sup> <a name="time_zone_settings" id="@cdktn/provider-google.cesApp.CesApp.property.timeZoneSettings"></a>

```python
time_zone_settings: CesAppTimeZoneSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference">CesAppTimeZoneSettingsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google.cesApp.CesApp.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `variable_declarations`<sup>Required</sup> <a name="variable_declarations" id="@cdktn/provider-google.cesApp.CesApp.property.variableDeclarations"></a>

```python
variable_declarations: CesAppVariableDeclarationsList
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsList">CesAppVariableDeclarationsList</a>

---

##### `app_id_input`<sup>Optional</sup> <a name="app_id_input" id="@cdktn/provider-google.cesApp.CesApp.property.appIdInput"></a>

```python
app_id_input: str
```

- *Type:* str

---

##### `audio_processing_config_input`<sup>Optional</sup> <a name="audio_processing_config_input" id="@cdktn/provider-google.cesApp.CesApp.property.audioProcessingConfigInput"></a>

```python
audio_processing_config_input: CesAppAudioProcessingConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfig">CesAppAudioProcessingConfig</a>

---

##### `client_certificate_settings_input`<sup>Optional</sup> <a name="client_certificate_settings_input" id="@cdktn/provider-google.cesApp.CesApp.property.clientCertificateSettingsInput"></a>

```python
client_certificate_settings_input: CesAppClientCertificateSettings
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettings">CesAppClientCertificateSettings</a>

---

##### `data_store_settings_input`<sup>Optional</sup> <a name="data_store_settings_input" id="@cdktn/provider-google.cesApp.CesApp.property.dataStoreSettingsInput"></a>

```python
data_store_settings_input: CesAppDataStoreSettings
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettings">CesAppDataStoreSettings</a>

---

##### `default_channel_profile_input`<sup>Optional</sup> <a name="default_channel_profile_input" id="@cdktn/provider-google.cesApp.CesApp.property.defaultChannelProfileInput"></a>

```python
default_channel_profile_input: CesAppDefaultChannelProfile
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfile">CesAppDefaultChannelProfile</a>

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.cesApp.CesApp.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google.cesApp.CesApp.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google.cesApp.CesApp.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `evaluation_metrics_thresholds_input`<sup>Optional</sup> <a name="evaluation_metrics_thresholds_input" id="@cdktn/provider-google.cesApp.CesApp.property.evaluationMetricsThresholdsInput"></a>

```python
evaluation_metrics_thresholds_input: CesAppEvaluationMetricsThresholds
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholds">CesAppEvaluationMetricsThresholds</a>

---

##### `global_instruction_input`<sup>Optional</sup> <a name="global_instruction_input" id="@cdktn/provider-google.cesApp.CesApp.property.globalInstructionInput"></a>

```python
global_instruction_input: str
```

- *Type:* str

---

##### `guardrails_input`<sup>Optional</sup> <a name="guardrails_input" id="@cdktn/provider-google.cesApp.CesApp.property.guardrailsInput"></a>

```python
guardrails_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.cesApp.CesApp.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `language_settings_input`<sup>Optional</sup> <a name="language_settings_input" id="@cdktn/provider-google.cesApp.CesApp.property.languageSettingsInput"></a>

```python
language_settings_input: CesAppLanguageSettings
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettings">CesAppLanguageSettings</a>

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.cesApp.CesApp.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `logging_settings_input`<sup>Optional</sup> <a name="logging_settings_input" id="@cdktn/provider-google.cesApp.CesApp.property.loggingSettingsInput"></a>

```python
logging_settings_input: CesAppLoggingSettings
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettings">CesAppLoggingSettings</a>

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="@cdktn/provider-google.cesApp.CesApp.property.metadataInput"></a>

```python
metadata_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `model_settings_input`<sup>Optional</sup> <a name="model_settings_input" id="@cdktn/provider-google.cesApp.CesApp.property.modelSettingsInput"></a>

```python
model_settings_input: CesAppModelSettings
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppModelSettings">CesAppModelSettings</a>

---

##### `pinned_input`<sup>Optional</sup> <a name="pinned_input" id="@cdktn/provider-google.cesApp.CesApp.property.pinnedInput"></a>

```python
pinned_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.cesApp.CesApp.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `root_agent_input`<sup>Optional</sup> <a name="root_agent_input" id="@cdktn/provider-google.cesApp.CesApp.property.rootAgentInput"></a>

```python
root_agent_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.cesApp.CesApp.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | CesAppTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesApp.CesAppTimeouts">CesAppTimeouts</a>

---

##### `time_zone_settings_input`<sup>Optional</sup> <a name="time_zone_settings_input" id="@cdktn/provider-google.cesApp.CesApp.property.timeZoneSettingsInput"></a>

```python
time_zone_settings_input: CesAppTimeZoneSettings
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppTimeZoneSettings">CesAppTimeZoneSettings</a>

---

##### `tool_execution_mode_input`<sup>Optional</sup> <a name="tool_execution_mode_input" id="@cdktn/provider-google.cesApp.CesApp.property.toolExecutionModeInput"></a>

```python
tool_execution_mode_input: str
```

- *Type:* str

---

##### `variable_declarations_input`<sup>Optional</sup> <a name="variable_declarations_input" id="@cdktn/provider-google.cesApp.CesApp.property.variableDeclarationsInput"></a>

```python
variable_declarations_input: IResolvable | typing.List[CesAppVariableDeclarations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarations">CesAppVariableDeclarations</a>]

---

##### `app_id`<sup>Required</sup> <a name="app_id" id="@cdktn/provider-google.cesApp.CesApp.property.appId"></a>

```python
app_id: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.cesApp.CesApp.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.cesApp.CesApp.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.cesApp.CesApp.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `global_instruction`<sup>Required</sup> <a name="global_instruction" id="@cdktn/provider-google.cesApp.CesApp.property.globalInstruction"></a>

```python
global_instruction: str
```

- *Type:* str

---

##### `guardrails`<sup>Required</sup> <a name="guardrails" id="@cdktn/provider-google.cesApp.CesApp.property.guardrails"></a>

```python
guardrails: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cesApp.CesApp.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.cesApp.CesApp.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-google.cesApp.CesApp.property.metadata"></a>

```python
metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `pinned`<sup>Required</sup> <a name="pinned" id="@cdktn/provider-google.cesApp.CesApp.property.pinned"></a>

```python
pinned: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.cesApp.CesApp.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `root_agent`<sup>Required</sup> <a name="root_agent" id="@cdktn/provider-google.cesApp.CesApp.property.rootAgent"></a>

```python
root_agent: str
```

- *Type:* str

---

##### `tool_execution_mode`<sup>Required</sup> <a name="tool_execution_mode" id="@cdktn/provider-google.cesApp.CesApp.property.toolExecutionMode"></a>

```python
tool_execution_mode: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.cesApp.CesApp.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CesAppAudioProcessingConfig <a name="CesAppAudioProcessingConfig" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfig.Initializer"></a>

```python
from cdktn_provider_google import ces_app

cesApp.CesAppAudioProcessingConfig(
  ambient_sound_config: CesAppAudioProcessingConfigAmbientSoundConfig = None,
  barge_in_config: CesAppAudioProcessingConfigBargeInConfig = None,
  inactivity_timeout: str = None,
  synthesize_speech_configs: IResolvable | typing.List[CesAppAudioProcessingConfigSynthesizeSpeechConfigs] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfig.property.ambientSoundConfig">ambient_sound_config</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfig">CesAppAudioProcessingConfigAmbientSoundConfig</a></code> | ambient_sound_config block. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfig.property.bargeInConfig">barge_in_config</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfig">CesAppAudioProcessingConfigBargeInConfig</a></code> | barge_in_config block. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfig.property.inactivityTimeout">inactivity_timeout</a></code> | <code>str</code> | The duration of user inactivity (no speech or interaction) before the agent prompts the user for reengagement. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfig.property.synthesizeSpeechConfigs">synthesize_speech_configs</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigs">CesAppAudioProcessingConfigSynthesizeSpeechConfigs</a>]</code> | synthesize_speech_configs block. |

---

##### `ambient_sound_config`<sup>Optional</sup> <a name="ambient_sound_config" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfig.property.ambientSoundConfig"></a>

```python
ambient_sound_config: CesAppAudioProcessingConfigAmbientSoundConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfig">CesAppAudioProcessingConfigAmbientSoundConfig</a>

ambient_sound_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#ambient_sound_config CesApp#ambient_sound_config}

---

##### `barge_in_config`<sup>Optional</sup> <a name="barge_in_config" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfig.property.bargeInConfig"></a>

```python
barge_in_config: CesAppAudioProcessingConfigBargeInConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfig">CesAppAudioProcessingConfigBargeInConfig</a>

barge_in_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#barge_in_config CesApp#barge_in_config}

---

##### `inactivity_timeout`<sup>Optional</sup> <a name="inactivity_timeout" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfig.property.inactivityTimeout"></a>

```python
inactivity_timeout: str
```

- *Type:* str

The duration of user inactivity (no speech or interaction) before the agent prompts the user for reengagement.

If not set, the agent will not prompt
the user for reengagement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#inactivity_timeout CesApp#inactivity_timeout}

---

##### `synthesize_speech_configs`<sup>Optional</sup> <a name="synthesize_speech_configs" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfig.property.synthesizeSpeechConfigs"></a>

```python
synthesize_speech_configs: IResolvable | typing.List[CesAppAudioProcessingConfigSynthesizeSpeechConfigs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigs">CesAppAudioProcessingConfigSynthesizeSpeechConfigs</a>]

synthesize_speech_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#synthesize_speech_configs CesApp#synthesize_speech_configs}

---

### CesAppAudioProcessingConfigAmbientSoundConfig <a name="CesAppAudioProcessingConfigAmbientSoundConfig" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfig.Initializer"></a>

```python
from cdktn_provider_google import ces_app

cesApp.CesAppAudioProcessingConfigAmbientSoundConfig(
  gcs_uri: str = None,
  prebuilt_ambient_sound: str = None,
  volume_gain_db: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfig.property.gcsUri">gcs_uri</a></code> | <code>str</code> | Ambient noise as a mono-channel, 16kHz WAV file stored in [Cloud Storage](https://cloud.google.com/storage). Note: Please make sure the CES service agent 'service-@gcp-sa-ces.iam.gserviceaccount.com' has 'storage.objects.get' permission to the Cloud Storage object. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfig.property.prebuiltAmbientSound">prebuilt_ambient_sound</a></code> | <code>str</code> | Name of the prebuilt ambient sound. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfig.property.volumeGainDb">volume_gain_db</a></code> | <code>typing.Union[int, float]</code> | Volume gain (in dB) of the normal native volume supported by ambient noise, in the range [-96.0, 16.0]. If unset, or set to a value of 0.0 (dB), will play at normal native signal amplitude. A value of -6.0 (dB) will play at approximately half the amplitude of the normal native signal amplitude. A value of +6.0 (dB) will play at approximately twice the amplitude of the normal native signal amplitude. We strongly recommend not to exceed +10 (dB) as there's usually no effective increase in loudness for any value greater than that. |

---

##### `gcs_uri`<sup>Optional</sup> <a name="gcs_uri" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfig.property.gcsUri"></a>

```python
gcs_uri: str
```

- *Type:* str

Ambient noise as a mono-channel, 16kHz WAV file stored in [Cloud Storage](https://cloud.google.com/storage). Note: Please make sure the CES service agent 'service-@gcp-sa-ces.iam.gserviceaccount.com' has 'storage.objects.get' permission to the Cloud Storage object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#gcs_uri CesApp#gcs_uri}

---

##### `prebuilt_ambient_sound`<sup>Optional</sup> <a name="prebuilt_ambient_sound" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfig.property.prebuiltAmbientSound"></a>

```python
prebuilt_ambient_sound: str
```

- *Type:* str

Name of the prebuilt ambient sound.

Valid values are: - "coffee_shop" - "keyboard" - "keypad" - "hum"
-"office_1" - "office_2" - "office_3"
-"room_1" - "room_2" - "room_3"
-"room_4" - "room_5" - "air_conditioner"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#prebuilt_ambient_sound CesApp#prebuilt_ambient_sound}

---

##### `volume_gain_db`<sup>Optional</sup> <a name="volume_gain_db" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfig.property.volumeGainDb"></a>

```python
volume_gain_db: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Volume gain (in dB) of the normal native volume supported by ambient noise, in the range [-96.0, 16.0]. If unset, or set to a value of 0.0 (dB), will play at normal native signal amplitude. A value of -6.0 (dB) will play at approximately half the amplitude of the normal native signal amplitude. A value of +6.0 (dB) will play at approximately twice the amplitude of the normal native signal amplitude. We strongly recommend not to exceed +10 (dB) as there's usually no effective increase in loudness for any value greater than that.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#volume_gain_db CesApp#volume_gain_db}

---

### CesAppAudioProcessingConfigBargeInConfig <a name="CesAppAudioProcessingConfigBargeInConfig" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfig.Initializer"></a>

```python
from cdktn_provider_google import ces_app

cesApp.CesAppAudioProcessingConfigBargeInConfig(
  barge_in_awareness: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfig.property.bargeInAwareness">barge_in_awareness</a></code> | <code>bool \| cdktn.IResolvable</code> | If enabled, the agent will adapt its next response based on the assumption that the user hasn't heard the full preceding agent message. |

---

##### `barge_in_awareness`<sup>Optional</sup> <a name="barge_in_awareness" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfig.property.bargeInAwareness"></a>

```python
barge_in_awareness: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If enabled, the agent will adapt its next response based on the assumption that the user hasn't heard the full preceding agent message.

This should not be used in scenarios where agent responses are displayed
visually.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#barge_in_awareness CesApp#barge_in_awareness}

---

### CesAppAudioProcessingConfigSynthesizeSpeechConfigs <a name="CesAppAudioProcessingConfigSynthesizeSpeechConfigs" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigs.Initializer"></a>

```python
from cdktn_provider_google import ces_app

cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigs(
  language_code: str,
  speaking_rate: typing.Union[int, float] = None,
  voice: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigs.property.languageCode">language_code</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#language_code CesApp#language_code}. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigs.property.speakingRate">speaking_rate</a></code> | <code>typing.Union[int, float]</code> | The speaking rate/speed in the range [0.25, 2.0]. 1.0 is the normal native speed supported by the specific voice. 2.0 is twice as fast, and 0.5 is half as fast. Values outside of the range [0.25, 2.0] will return an error. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigs.property.voice">voice</a></code> | <code>str</code> | The name of the voice. |

---

##### `language_code`<sup>Required</sup> <a name="language_code" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigs.property.languageCode"></a>

```python
language_code: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#language_code CesApp#language_code}.

---

##### `speaking_rate`<sup>Optional</sup> <a name="speaking_rate" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigs.property.speakingRate"></a>

```python
speaking_rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The speaking rate/speed in the range [0.25, 2.0]. 1.0 is the normal native speed supported by the specific voice. 2.0 is twice as fast, and 0.5 is half as fast. Values outside of the range [0.25, 2.0] will return an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#speaking_rate CesApp#speaking_rate}

---

##### `voice`<sup>Optional</sup> <a name="voice" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigs.property.voice"></a>

```python
voice: str
```

- *Type:* str

The name of the voice.

If not set, the service will choose a
voice based on the other parameters such as language_code.
For the list of available voices, please refer to Supported voices and
languages from Cloud Text-to-Speech.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#voice CesApp#voice}

---

### CesAppClientCertificateSettings <a name="CesAppClientCertificateSettings" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettings.Initializer"></a>

```python
from cdktn_provider_google import ces_app

cesApp.CesAppClientCertificateSettings(
  private_key: str,
  tls_certificate: str,
  passphrase: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettings.property.privateKey">private_key</a></code> | <code>str</code> | The name of the SecretManager secret version resource storing the private key encoded in PEM format. Format: projects/{project}/secrets/{secret}/versions/{version}. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettings.property.tlsCertificate">tls_certificate</a></code> | <code>str</code> | The TLS certificate encoded in PEM format. This string must include the begin header and end footer lines. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettings.property.passphrase">passphrase</a></code> | <code>str</code> | The passphrase to decrypt the private key. Should be left unset if the private key is not encrypted. |

---

##### `private_key`<sup>Required</sup> <a name="private_key" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettings.property.privateKey"></a>

```python
private_key: str
```

- *Type:* str

The name of the SecretManager secret version resource storing the private key encoded in PEM format. Format: projects/{project}/secrets/{secret}/versions/{version}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#private_key CesApp#private_key}

---

##### `tls_certificate`<sup>Required</sup> <a name="tls_certificate" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettings.property.tlsCertificate"></a>

```python
tls_certificate: str
```

- *Type:* str

The TLS certificate encoded in PEM format. This string must include the begin header and end footer lines.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#tls_certificate CesApp#tls_certificate}

---

##### `passphrase`<sup>Optional</sup> <a name="passphrase" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettings.property.passphrase"></a>

```python
passphrase: str
```

- *Type:* str

The passphrase to decrypt the private key. Should be left unset if the private key is not encrypted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#passphrase CesApp#passphrase}

---

### CesAppConfig <a name="CesAppConfig" id="@cdktn/provider-google.cesApp.CesAppConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesApp.CesAppConfig.Initializer"></a>

```python
from cdktn_provider_google import ces_app

cesApp.CesAppConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  app_id: str,
  display_name: str,
  location: str,
  audio_processing_config: CesAppAudioProcessingConfig = None,
  client_certificate_settings: CesAppClientCertificateSettings = None,
  data_store_settings: CesAppDataStoreSettings = None,
  default_channel_profile: CesAppDefaultChannelProfile = None,
  deletion_policy: str = None,
  description: str = None,
  evaluation_metrics_thresholds: CesAppEvaluationMetricsThresholds = None,
  global_instruction: str = None,
  guardrails: typing.List[str] = None,
  id: str = None,
  language_settings: CesAppLanguageSettings = None,
  logging_settings: CesAppLoggingSettings = None,
  metadata: typing.Mapping[str] = None,
  model_settings: CesAppModelSettings = None,
  pinned: bool | IResolvable = None,
  project: str = None,
  root_agent: str = None,
  timeouts: CesAppTimeouts = None,
  time_zone_settings: CesAppTimeZoneSettings = None,
  tool_execution_mode: str = None,
  variable_declarations: IResolvable | typing.List[CesAppVariableDeclarations] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppConfig.property.appId">app_id</a></code> | <code>str</code> | The ID to use for the app, which will become the final component of the app's resource name. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppConfig.property.displayName">display_name</a></code> | <code>str</code> | Display name of the app. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppConfig.property.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppConfig.property.audioProcessingConfig">audio_processing_config</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfig">CesAppAudioProcessingConfig</a></code> | audio_processing_config block. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppConfig.property.clientCertificateSettings">client_certificate_settings</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettings">CesAppClientCertificateSettings</a></code> | client_certificate_settings block. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppConfig.property.dataStoreSettings">data_store_settings</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettings">CesAppDataStoreSettings</a></code> | data_store_settings block. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppConfig.property.defaultChannelProfile">default_channel_profile</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfile">CesAppDefaultChannelProfile</a></code> | default_channel_profile block. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppConfig.property.description">description</a></code> | <code>str</code> | Human-readable description of the app. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppConfig.property.evaluationMetricsThresholds">evaluation_metrics_thresholds</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholds">CesAppEvaluationMetricsThresholds</a></code> | evaluation_metrics_thresholds block. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppConfig.property.globalInstruction">global_instruction</a></code> | <code>str</code> | Instructions for all the agents in the app. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppConfig.property.guardrails">guardrails</a></code> | <code>typing.List[str]</code> | List of guardrails for the app. Format: 'projects/{project}/locations/{location}/apps/{app}/guardrails/{guardrail}'. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#id CesApp#id}. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppConfig.property.languageSettings">language_settings</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettings">CesAppLanguageSettings</a></code> | language_settings block. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppConfig.property.loggingSettings">logging_settings</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettings">CesAppLoggingSettings</a></code> | logging_settings block. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppConfig.property.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | Metadata about the app. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppConfig.property.modelSettings">model_settings</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppModelSettings">CesAppModelSettings</a></code> | model_settings block. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppConfig.property.pinned">pinned</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the app is pinned in the app list. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#project CesApp#project}. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppConfig.property.rootAgent">root_agent</a></code> | <code>str</code> | The root agent is the entry point of the app. Format: 'projects/{project}/locations/{location}/apps/{app}/agents/{agent}'. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeouts">CesAppTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppConfig.property.timeZoneSettings">time_zone_settings</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeZoneSettings">CesAppTimeZoneSettings</a></code> | time_zone_settings block. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppConfig.property.toolExecutionMode">tool_execution_mode</a></code> | <code>str</code> | The tool execution mode for the app. See the [API reference](https://docs.cloud.google.com/customer-engagement-ai/conversational-agents/ps/reference/rpc/google.cloud.ces.v1#google.cloud.ces.v1.App.ToolExecutionMode) for more details. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppConfig.property.variableDeclarations">variable_declarations</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarations">CesAppVariableDeclarations</a>]</code> | variable_declarations block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.cesApp.CesAppConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.cesApp.CesAppConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.cesApp.CesAppConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.cesApp.CesAppConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.cesApp.CesAppConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cesApp.CesAppConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.cesApp.CesAppConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `app_id`<sup>Required</sup> <a name="app_id" id="@cdktn/provider-google.cesApp.CesAppConfig.property.appId"></a>

```python
app_id: str
```

- *Type:* str

The ID to use for the app, which will become the final component of the app's resource name.

If not provided, a unique ID will be
automatically assigned for the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#app_id CesApp#app_id}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.cesApp.CesAppConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Display name of the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#display_name CesApp#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.cesApp.CesAppConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#location CesApp#location}

---

##### `audio_processing_config`<sup>Optional</sup> <a name="audio_processing_config" id="@cdktn/provider-google.cesApp.CesAppConfig.property.audioProcessingConfig"></a>

```python
audio_processing_config: CesAppAudioProcessingConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfig">CesAppAudioProcessingConfig</a>

audio_processing_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#audio_processing_config CesApp#audio_processing_config}

---

##### `client_certificate_settings`<sup>Optional</sup> <a name="client_certificate_settings" id="@cdktn/provider-google.cesApp.CesAppConfig.property.clientCertificateSettings"></a>

```python
client_certificate_settings: CesAppClientCertificateSettings
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettings">CesAppClientCertificateSettings</a>

client_certificate_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#client_certificate_settings CesApp#client_certificate_settings}

---

##### `data_store_settings`<sup>Optional</sup> <a name="data_store_settings" id="@cdktn/provider-google.cesApp.CesAppConfig.property.dataStoreSettings"></a>

```python
data_store_settings: CesAppDataStoreSettings
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettings">CesAppDataStoreSettings</a>

data_store_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#data_store_settings CesApp#data_store_settings}

---

##### `default_channel_profile`<sup>Optional</sup> <a name="default_channel_profile" id="@cdktn/provider-google.cesApp.CesAppConfig.property.defaultChannelProfile"></a>

```python
default_channel_profile: CesAppDefaultChannelProfile
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfile">CesAppDefaultChannelProfile</a>

default_channel_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#default_channel_profile CesApp#default_channel_profile}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.cesApp.CesAppConfig.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#deletion_policy CesApp#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.cesApp.CesAppConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Human-readable description of the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#description CesApp#description}

---

##### `evaluation_metrics_thresholds`<sup>Optional</sup> <a name="evaluation_metrics_thresholds" id="@cdktn/provider-google.cesApp.CesAppConfig.property.evaluationMetricsThresholds"></a>

```python
evaluation_metrics_thresholds: CesAppEvaluationMetricsThresholds
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholds">CesAppEvaluationMetricsThresholds</a>

evaluation_metrics_thresholds block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#evaluation_metrics_thresholds CesApp#evaluation_metrics_thresholds}

---

##### `global_instruction`<sup>Optional</sup> <a name="global_instruction" id="@cdktn/provider-google.cesApp.CesAppConfig.property.globalInstruction"></a>

```python
global_instruction: str
```

- *Type:* str

Instructions for all the agents in the app.

You can use this instruction to set up a stable identity or personality
across all the agents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#global_instruction CesApp#global_instruction}

---

##### `guardrails`<sup>Optional</sup> <a name="guardrails" id="@cdktn/provider-google.cesApp.CesAppConfig.property.guardrails"></a>

```python
guardrails: typing.List[str]
```

- *Type:* typing.List[str]

List of guardrails for the app. Format: 'projects/{project}/locations/{location}/apps/{app}/guardrails/{guardrail}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#guardrails CesApp#guardrails}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.cesApp.CesAppConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#id CesApp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `language_settings`<sup>Optional</sup> <a name="language_settings" id="@cdktn/provider-google.cesApp.CesAppConfig.property.languageSettings"></a>

```python
language_settings: CesAppLanguageSettings
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettings">CesAppLanguageSettings</a>

language_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#language_settings CesApp#language_settings}

---

##### `logging_settings`<sup>Optional</sup> <a name="logging_settings" id="@cdktn/provider-google.cesApp.CesAppConfig.property.loggingSettings"></a>

```python
logging_settings: CesAppLoggingSettings
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettings">CesAppLoggingSettings</a>

logging_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#logging_settings CesApp#logging_settings}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktn/provider-google.cesApp.CesAppConfig.property.metadata"></a>

```python
metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Metadata about the app.

This field can be used to store additional
information relevant to the app's details or intended usages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#metadata CesApp#metadata}

---

##### `model_settings`<sup>Optional</sup> <a name="model_settings" id="@cdktn/provider-google.cesApp.CesAppConfig.property.modelSettings"></a>

```python
model_settings: CesAppModelSettings
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppModelSettings">CesAppModelSettings</a>

model_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#model_settings CesApp#model_settings}

---

##### `pinned`<sup>Optional</sup> <a name="pinned" id="@cdktn/provider-google.cesApp.CesAppConfig.property.pinned"></a>

```python
pinned: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether the app is pinned in the app list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#pinned CesApp#pinned}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.cesApp.CesAppConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#project CesApp#project}.

---

##### `root_agent`<sup>Optional</sup> <a name="root_agent" id="@cdktn/provider-google.cesApp.CesAppConfig.property.rootAgent"></a>

```python
root_agent: str
```

- *Type:* str

The root agent is the entry point of the app. Format: 'projects/{project}/locations/{location}/apps/{app}/agents/{agent}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#root_agent CesApp#root_agent}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.cesApp.CesAppConfig.property.timeouts"></a>

```python
timeouts: CesAppTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppTimeouts">CesAppTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#timeouts CesApp#timeouts}

---

##### `time_zone_settings`<sup>Optional</sup> <a name="time_zone_settings" id="@cdktn/provider-google.cesApp.CesAppConfig.property.timeZoneSettings"></a>

```python
time_zone_settings: CesAppTimeZoneSettings
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppTimeZoneSettings">CesAppTimeZoneSettings</a>

time_zone_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#time_zone_settings CesApp#time_zone_settings}

---

##### `tool_execution_mode`<sup>Optional</sup> <a name="tool_execution_mode" id="@cdktn/provider-google.cesApp.CesAppConfig.property.toolExecutionMode"></a>

```python
tool_execution_mode: str
```

- *Type:* str

The tool execution mode for the app. See the [API reference](https://docs.cloud.google.com/customer-engagement-ai/conversational-agents/ps/reference/rpc/google.cloud.ces.v1#google.cloud.ces.v1.App.ToolExecutionMode) for more details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#tool_execution_mode CesApp#tool_execution_mode}

---

##### `variable_declarations`<sup>Optional</sup> <a name="variable_declarations" id="@cdktn/provider-google.cesApp.CesAppConfig.property.variableDeclarations"></a>

```python
variable_declarations: IResolvable | typing.List[CesAppVariableDeclarations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarations">CesAppVariableDeclarations</a>]

variable_declarations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#variable_declarations CesApp#variable_declarations}

---

### CesAppDataStoreSettings <a name="CesAppDataStoreSettings" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettings.Initializer"></a>

```python
from cdktn_provider_google import ces_app

cesApp.CesAppDataStoreSettings()
```


### CesAppDataStoreSettingsEngines <a name="CesAppDataStoreSettingsEngines" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEngines"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEngines.Initializer"></a>

```python
from cdktn_provider_google import ces_app

cesApp.CesAppDataStoreSettingsEngines()
```


### CesAppDefaultChannelProfile <a name="CesAppDefaultChannelProfile" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfile.Initializer"></a>

```python
from cdktn_provider_google import ces_app

cesApp.CesAppDefaultChannelProfile(
  channel_type: str = None,
  disable_barge_in_control: bool | IResolvable = None,
  disable_dtmf: bool | IResolvable = None,
  persona_property: CesAppDefaultChannelProfilePersonaProperty = None,
  profile_id: str = None,
  web_widget_config: CesAppDefaultChannelProfileWebWidgetConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfile.property.channelType">channel_type</a></code> | <code>str</code> | The type of the channel profile. Possible values: UNKNOWN WEB_UI API TWILIO GOOGLE_TELEPHONY_PLATFORM CONTACT_CENTER_AS_A_SERVICE. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfile.property.disableBargeInControl">disable_barge_in_control</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to disable user barge-in in the conversation. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfile.property.disableDtmf">disable_dtmf</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to disable DTMF (dual-tone multi-frequency). |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfile.property.personaProperty">persona_property</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaProperty">CesAppDefaultChannelProfilePersonaProperty</a></code> | persona_property block. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfile.property.profileId">profile_id</a></code> | <code>str</code> | The unique identifier of the channel profile. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfile.property.webWidgetConfig">web_widget_config</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfig">CesAppDefaultChannelProfileWebWidgetConfig</a></code> | web_widget_config block. |

---

##### `channel_type`<sup>Optional</sup> <a name="channel_type" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfile.property.channelType"></a>

```python
channel_type: str
```

- *Type:* str

The type of the channel profile. Possible values: UNKNOWN WEB_UI API TWILIO GOOGLE_TELEPHONY_PLATFORM CONTACT_CENTER_AS_A_SERVICE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#channel_type CesApp#channel_type}

---

##### `disable_barge_in_control`<sup>Optional</sup> <a name="disable_barge_in_control" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfile.property.disableBargeInControl"></a>

```python
disable_barge_in_control: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether to disable user barge-in in the conversation.

* true: User interruptions are disabled while the agent is speaking.
* false: The agent retains automatic control over when the user can interrupt.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#disable_barge_in_control CesApp#disable_barge_in_control}

---

##### `disable_dtmf`<sup>Optional</sup> <a name="disable_dtmf" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfile.property.disableDtmf"></a>

```python
disable_dtmf: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether to disable DTMF (dual-tone multi-frequency).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#disable_dtmf CesApp#disable_dtmf}

---

##### `persona_property`<sup>Optional</sup> <a name="persona_property" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfile.property.personaProperty"></a>

```python
persona_property: CesAppDefaultChannelProfilePersonaProperty
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaProperty">CesAppDefaultChannelProfilePersonaProperty</a>

persona_property block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#persona_property CesApp#persona_property}

---

##### `profile_id`<sup>Optional</sup> <a name="profile_id" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfile.property.profileId"></a>

```python
profile_id: str
```

- *Type:* str

The unique identifier of the channel profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#profile_id CesApp#profile_id}

---

##### `web_widget_config`<sup>Optional</sup> <a name="web_widget_config" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfile.property.webWidgetConfig"></a>

```python
web_widget_config: CesAppDefaultChannelProfileWebWidgetConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfig">CesAppDefaultChannelProfileWebWidgetConfig</a>

web_widget_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#web_widget_config CesApp#web_widget_config}

---

### CesAppDefaultChannelProfilePersonaProperty <a name="CesAppDefaultChannelProfilePersonaProperty" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaProperty"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaProperty.Initializer"></a>

```python
from cdktn_provider_google import ces_app

cesApp.CesAppDefaultChannelProfilePersonaProperty(
  persona: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaProperty.property.persona">persona</a></code> | <code>str</code> | The persona of the channel. Possible values: UNKNOWN CONCISE CHATTY. |

---

##### `persona`<sup>Optional</sup> <a name="persona" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaProperty.property.persona"></a>

```python
persona: str
```

- *Type:* str

The persona of the channel. Possible values: UNKNOWN CONCISE CHATTY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#persona CesApp#persona}

---

### CesAppDefaultChannelProfileWebWidgetConfig <a name="CesAppDefaultChannelProfileWebWidgetConfig" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfig.Initializer"></a>

```python
from cdktn_provider_google import ces_app

cesApp.CesAppDefaultChannelProfileWebWidgetConfig(
  modality: str = None,
  theme: str = None,
  web_widget_title: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfig.property.modality">modality</a></code> | <code>str</code> | The modality of the web widget. Possible values: UNKNOWN_MODALITY CHAT_AND_VOICE VOICE_ONLY CHAT_ONLY. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfig.property.theme">theme</a></code> | <code>str</code> | The theme of the web widget. Possible values: UNKNOWN_THEME LIGHT DARK. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfig.property.webWidgetTitle">web_widget_title</a></code> | <code>str</code> | The title of the web widget. |

---

##### `modality`<sup>Optional</sup> <a name="modality" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfig.property.modality"></a>

```python
modality: str
```

- *Type:* str

The modality of the web widget. Possible values: UNKNOWN_MODALITY CHAT_AND_VOICE VOICE_ONLY CHAT_ONLY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#modality CesApp#modality}

---

##### `theme`<sup>Optional</sup> <a name="theme" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfig.property.theme"></a>

```python
theme: str
```

- *Type:* str

The theme of the web widget. Possible values: UNKNOWN_THEME LIGHT DARK.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#theme CesApp#theme}

---

##### `web_widget_title`<sup>Optional</sup> <a name="web_widget_title" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfig.property.webWidgetTitle"></a>

```python
web_widget_title: str
```

- *Type:* str

The title of the web widget.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#web_widget_title CesApp#web_widget_title}

---

### CesAppEvaluationMetricsThresholds <a name="CesAppEvaluationMetricsThresholds" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholds"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholds.Initializer"></a>

```python
from cdktn_provider_google import ces_app

cesApp.CesAppEvaluationMetricsThresholds(
  golden_evaluation_metrics_thresholds: CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholds.property.goldenEvaluationMetricsThresholds">golden_evaluation_metrics_thresholds</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds">CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds</a></code> | golden_evaluation_metrics_thresholds block. |

---

##### `golden_evaluation_metrics_thresholds`<sup>Optional</sup> <a name="golden_evaluation_metrics_thresholds" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholds.property.goldenEvaluationMetricsThresholds"></a>

```python
golden_evaluation_metrics_thresholds: CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds">CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds</a>

golden_evaluation_metrics_thresholds block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#golden_evaluation_metrics_thresholds CesApp#golden_evaluation_metrics_thresholds}

---

### CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds <a name="CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds.Initializer"></a>

```python
from cdktn_provider_google import ces_app

cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds(
  expectation_level_metrics_thresholds: CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds = None,
  turn_level_metrics_thresholds: CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds.property.expectationLevelMetricsThresholds">expectation_level_metrics_thresholds</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds">CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds</a></code> | expectation_level_metrics_thresholds block. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds.property.turnLevelMetricsThresholds">turn_level_metrics_thresholds</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds">CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds</a></code> | turn_level_metrics_thresholds block. |

---

##### `expectation_level_metrics_thresholds`<sup>Optional</sup> <a name="expectation_level_metrics_thresholds" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds.property.expectationLevelMetricsThresholds"></a>

```python
expectation_level_metrics_thresholds: CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds">CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds</a>

expectation_level_metrics_thresholds block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#expectation_level_metrics_thresholds CesApp#expectation_level_metrics_thresholds}

---

##### `turn_level_metrics_thresholds`<sup>Optional</sup> <a name="turn_level_metrics_thresholds" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds.property.turnLevelMetricsThresholds"></a>

```python
turn_level_metrics_thresholds: CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds">CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds</a>

turn_level_metrics_thresholds block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#turn_level_metrics_thresholds CesApp#turn_level_metrics_thresholds}

---

### CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds <a name="CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds.Initializer"></a>

```python
from cdktn_provider_google import ces_app

cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds(
  tool_invocation_parameter_correctness_threshold: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds.property.toolInvocationParameterCorrectnessThreshold">tool_invocation_parameter_correctness_threshold</a></code> | <code>typing.Union[int, float]</code> | The success threshold for individual tool invocation parameter correctness. Must be a float between 0 and 1. Default is 1.0. |

---

##### `tool_invocation_parameter_correctness_threshold`<sup>Optional</sup> <a name="tool_invocation_parameter_correctness_threshold" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds.property.toolInvocationParameterCorrectnessThreshold"></a>

```python
tool_invocation_parameter_correctness_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The success threshold for individual tool invocation parameter correctness. Must be a float between 0 and 1. Default is 1.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#tool_invocation_parameter_correctness_threshold CesApp#tool_invocation_parameter_correctness_threshold}

---

### CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds <a name="CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds.Initializer"></a>

```python
from cdktn_provider_google import ces_app

cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds(
  overall_tool_invocation_correctness_threshold: typing.Union[int, float] = None,
  semantic_similarity_success_threshold: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds.property.overallToolInvocationCorrectnessThreshold">overall_tool_invocation_correctness_threshold</a></code> | <code>typing.Union[int, float]</code> | The success threshold for overall tool invocation correctness. Must be a float between 0 and 1. Default is 1.0. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds.property.semanticSimilaritySuccessThreshold">semantic_similarity_success_threshold</a></code> | <code>typing.Union[int, float]</code> | The success threshold for semantic similarity. Must be an integer between 0 and 4. Default is >= 3. |

---

##### `overall_tool_invocation_correctness_threshold`<sup>Optional</sup> <a name="overall_tool_invocation_correctness_threshold" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds.property.overallToolInvocationCorrectnessThreshold"></a>

```python
overall_tool_invocation_correctness_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The success threshold for overall tool invocation correctness. Must be a float between 0 and 1. Default is 1.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#overall_tool_invocation_correctness_threshold CesApp#overall_tool_invocation_correctness_threshold}

---

##### `semantic_similarity_success_threshold`<sup>Optional</sup> <a name="semantic_similarity_success_threshold" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds.property.semanticSimilaritySuccessThreshold"></a>

```python
semantic_similarity_success_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The success threshold for semantic similarity. Must be an integer between 0 and 4. Default is >= 3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#semantic_similarity_success_threshold CesApp#semantic_similarity_success_threshold}

---

### CesAppLanguageSettings <a name="CesAppLanguageSettings" id="@cdktn/provider-google.cesApp.CesAppLanguageSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesApp.CesAppLanguageSettings.Initializer"></a>

```python
from cdktn_provider_google import ces_app

cesApp.CesAppLanguageSettings(
  default_language_code: str = None,
  enable_multilingual_support: bool | IResolvable = None,
  fallback_action: str = None,
  supported_language_codes: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettings.property.defaultLanguageCode">default_language_code</a></code> | <code>str</code> | The default language code of the app. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettings.property.enableMultilingualSupport">enable_multilingual_support</a></code> | <code>bool \| cdktn.IResolvable</code> | Enables multilingual support. If true, agents in the app will use pre-built instructions to improve handling of multilingual input. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettings.property.fallbackAction">fallback_action</a></code> | <code>str</code> | The action to perform when an agent receives input in an unsupported language. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettings.property.supportedLanguageCodes">supported_language_codes</a></code> | <code>typing.List[str]</code> | List of languages codes supported by the app, in addition to the 'default_language_code'. |

---

##### `default_language_code`<sup>Optional</sup> <a name="default_language_code" id="@cdktn/provider-google.cesApp.CesAppLanguageSettings.property.defaultLanguageCode"></a>

```python
default_language_code: str
```

- *Type:* str

The default language code of the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#default_language_code CesApp#default_language_code}

---

##### `enable_multilingual_support`<sup>Optional</sup> <a name="enable_multilingual_support" id="@cdktn/provider-google.cesApp.CesAppLanguageSettings.property.enableMultilingualSupport"></a>

```python
enable_multilingual_support: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Enables multilingual support. If true, agents in the app will use pre-built instructions to improve handling of multilingual input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#enable_multilingual_support CesApp#enable_multilingual_support}

---

##### `fallback_action`<sup>Optional</sup> <a name="fallback_action" id="@cdktn/provider-google.cesApp.CesAppLanguageSettings.property.fallbackAction"></a>

```python
fallback_action: str
```

- *Type:* str

The action to perform when an agent receives input in an unsupported language.

This can be a predefined action or a custom tool call.
Valid values are:

* A tool's full resource name, which triggers a specific tool execution.
* A predefined system action, such as "escalate" or "exit", which triggers
  an EndSession signal with corresponding metadata
  to terminate the conversation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#fallback_action CesApp#fallback_action}

---

##### `supported_language_codes`<sup>Optional</sup> <a name="supported_language_codes" id="@cdktn/provider-google.cesApp.CesAppLanguageSettings.property.supportedLanguageCodes"></a>

```python
supported_language_codes: typing.List[str]
```

- *Type:* typing.List[str]

List of languages codes supported by the app, in addition to the 'default_language_code'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#supported_language_codes CesApp#supported_language_codes}

---

### CesAppLoggingSettings <a name="CesAppLoggingSettings" id="@cdktn/provider-google.cesApp.CesAppLoggingSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesApp.CesAppLoggingSettings.Initializer"></a>

```python
from cdktn_provider_google import ces_app

cesApp.CesAppLoggingSettings(
  audio_recording_config: CesAppLoggingSettingsAudioRecordingConfig = None,
  bigquery_export_settings: CesAppLoggingSettingsBigqueryExportSettings = None,
  cloud_logging_settings: CesAppLoggingSettingsCloudLoggingSettings = None,
  conversation_logging_settings: CesAppLoggingSettingsConversationLoggingSettings = None,
  redaction_config: CesAppLoggingSettingsRedactionConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettings.property.audioRecordingConfig">audio_recording_config</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfig">CesAppLoggingSettingsAudioRecordingConfig</a></code> | audio_recording_config block. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettings.property.bigqueryExportSettings">bigquery_export_settings</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettings">CesAppLoggingSettingsBigqueryExportSettings</a></code> | bigquery_export_settings block. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettings.property.cloudLoggingSettings">cloud_logging_settings</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettings">CesAppLoggingSettingsCloudLoggingSettings</a></code> | cloud_logging_settings block. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettings.property.conversationLoggingSettings">conversation_logging_settings</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettings">CesAppLoggingSettingsConversationLoggingSettings</a></code> | conversation_logging_settings block. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettings.property.redactionConfig">redaction_config</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfig">CesAppLoggingSettingsRedactionConfig</a></code> | redaction_config block. |

---

##### `audio_recording_config`<sup>Optional</sup> <a name="audio_recording_config" id="@cdktn/provider-google.cesApp.CesAppLoggingSettings.property.audioRecordingConfig"></a>

```python
audio_recording_config: CesAppLoggingSettingsAudioRecordingConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfig">CesAppLoggingSettingsAudioRecordingConfig</a>

audio_recording_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#audio_recording_config CesApp#audio_recording_config}

---

##### `bigquery_export_settings`<sup>Optional</sup> <a name="bigquery_export_settings" id="@cdktn/provider-google.cesApp.CesAppLoggingSettings.property.bigqueryExportSettings"></a>

```python
bigquery_export_settings: CesAppLoggingSettingsBigqueryExportSettings
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettings">CesAppLoggingSettingsBigqueryExportSettings</a>

bigquery_export_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#bigquery_export_settings CesApp#bigquery_export_settings}

---

##### `cloud_logging_settings`<sup>Optional</sup> <a name="cloud_logging_settings" id="@cdktn/provider-google.cesApp.CesAppLoggingSettings.property.cloudLoggingSettings"></a>

```python
cloud_logging_settings: CesAppLoggingSettingsCloudLoggingSettings
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettings">CesAppLoggingSettingsCloudLoggingSettings</a>

cloud_logging_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#cloud_logging_settings CesApp#cloud_logging_settings}

---

##### `conversation_logging_settings`<sup>Optional</sup> <a name="conversation_logging_settings" id="@cdktn/provider-google.cesApp.CesAppLoggingSettings.property.conversationLoggingSettings"></a>

```python
conversation_logging_settings: CesAppLoggingSettingsConversationLoggingSettings
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettings">CesAppLoggingSettingsConversationLoggingSettings</a>

conversation_logging_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#conversation_logging_settings CesApp#conversation_logging_settings}

---

##### `redaction_config`<sup>Optional</sup> <a name="redaction_config" id="@cdktn/provider-google.cesApp.CesAppLoggingSettings.property.redactionConfig"></a>

```python
redaction_config: CesAppLoggingSettingsRedactionConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfig">CesAppLoggingSettingsRedactionConfig</a>

redaction_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#redaction_config CesApp#redaction_config}

---

### CesAppLoggingSettingsAudioRecordingConfig <a name="CesAppLoggingSettingsAudioRecordingConfig" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfig.Initializer"></a>

```python
from cdktn_provider_google import ces_app

cesApp.CesAppLoggingSettingsAudioRecordingConfig(
  gcs_bucket: str = None,
  gcs_path_prefix: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfig.property.gcsBucket">gcs_bucket</a></code> | <code>str</code> | The [Cloud Storage](https://cloud.google.com/storage) bucket to store the session audio recordings. The URI must start with "gs://". Note: If the Cloud Storage bucket is in a different project from the app, you should grant 'storage.objects.create' permission to the CES service agent 'service-@gcp-sa-ces.iam.gserviceaccount.com'. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfig.property.gcsPathPrefix">gcs_path_prefix</a></code> | <code>str</code> | The Cloud Storage path prefix for audio recordings. |

---

##### `gcs_bucket`<sup>Optional</sup> <a name="gcs_bucket" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfig.property.gcsBucket"></a>

```python
gcs_bucket: str
```

- *Type:* str

The [Cloud Storage](https://cloud.google.com/storage) bucket to store the session audio recordings. The URI must start with "gs://". Note: If the Cloud Storage bucket is in a different project from the app, you should grant 'storage.objects.create' permission to the CES service agent 'service-@gcp-sa-ces.iam.gserviceaccount.com'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#gcs_bucket CesApp#gcs_bucket}

---

##### `gcs_path_prefix`<sup>Optional</sup> <a name="gcs_path_prefix" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfig.property.gcsPathPrefix"></a>

```python
gcs_path_prefix: str
```

- *Type:* str

The Cloud Storage path prefix for audio recordings.

This prefix can include the following placeholders, which will be
dynamically substituted at serving time:

* $project:   project ID
* $location:  app location
* $app:       app ID
* $date:      session date in YYYY-MM-DD format
* $session:   session ID
  If the path prefix is not specified, the default prefix
  '$project/$location/$app/$date/$session/' will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#gcs_path_prefix CesApp#gcs_path_prefix}

---

### CesAppLoggingSettingsBigqueryExportSettings <a name="CesAppLoggingSettingsBigqueryExportSettings" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettings.Initializer"></a>

```python
from cdktn_provider_google import ces_app

cesApp.CesAppLoggingSettingsBigqueryExportSettings(
  dataset: str = None,
  enabled: bool | IResolvable = None,
  project: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettings.property.dataset">dataset</a></code> | <code>str</code> | The BigQuery dataset to export the data to. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettings.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether the BigQuery export is enabled. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettings.property.project">project</a></code> | <code>str</code> | The project ID of the BigQuery dataset to export the data to. |

---

##### `dataset`<sup>Optional</sup> <a name="dataset" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettings.property.dataset"></a>

```python
dataset: str
```

- *Type:* str

The BigQuery dataset to export the data to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#dataset CesApp#dataset}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettings.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether the BigQuery export is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#enabled CesApp#enabled}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettings.property.project"></a>

```python
project: str
```

- *Type:* str

The project ID of the BigQuery dataset to export the data to.

Note: If the BigQuery dataset is in a different project from the app, you should grant
roles/bigquery.admin role to the CES service agent service-<PROJECT-
NUMBER>@gcp-sa-ces.iam.gserviceaccount.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#project CesApp#project}

---

### CesAppLoggingSettingsCloudLoggingSettings <a name="CesAppLoggingSettingsCloudLoggingSettings" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettings.Initializer"></a>

```python
from cdktn_provider_google import ces_app

cesApp.CesAppLoggingSettingsCloudLoggingSettings(
  enable_cloud_logging: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettings.property.enableCloudLogging">enable_cloud_logging</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to enable Cloud Logging for the sessions. |

---

##### `enable_cloud_logging`<sup>Optional</sup> <a name="enable_cloud_logging" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettings.property.enableCloudLogging"></a>

```python
enable_cloud_logging: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether to enable Cloud Logging for the sessions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#enable_cloud_logging CesApp#enable_cloud_logging}

---

### CesAppLoggingSettingsConversationLoggingSettings <a name="CesAppLoggingSettingsConversationLoggingSettings" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettings.Initializer"></a>

```python
from cdktn_provider_google import ces_app

cesApp.CesAppLoggingSettingsConversationLoggingSettings(
  disable_conversation_logging: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettings.property.disableConversationLogging">disable_conversation_logging</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to disable conversation logging for the sessions. |

---

##### `disable_conversation_logging`<sup>Optional</sup> <a name="disable_conversation_logging" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettings.property.disableConversationLogging"></a>

```python
disable_conversation_logging: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether to disable conversation logging for the sessions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#disable_conversation_logging CesApp#disable_conversation_logging}

---

### CesAppLoggingSettingsRedactionConfig <a name="CesAppLoggingSettingsRedactionConfig" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfig.Initializer"></a>

```python
from cdktn_provider_google import ces_app

cesApp.CesAppLoggingSettingsRedactionConfig(
  deidentify_template: str = None,
  enable_redaction: bool | IResolvable = None,
  inspect_template: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfig.property.deidentifyTemplate">deidentify_template</a></code> | <code>str</code> | [DLP](https://cloud.google.com/dlp/docs) deidentify template name to instruct on how to de-identify content. Format: 'projects/{project}/locations/{location}/deidentifyTemplates/{deidentify_template}'. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfig.property.enableRedaction">enable_redaction</a></code> | <code>bool \| cdktn.IResolvable</code> | If true, redaction will be applied in various logging scenarios, including conversation history, Cloud Logging and audio recording. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfig.property.inspectTemplate">inspect_template</a></code> | <code>str</code> | [DLP](https://cloud.google.com/dlp/docs) inspect template name to configure detection of sensitive data types. Format: 'projects/{project}/locations/{location}/inspectTemplates/{inspect_template}'. |

---

##### `deidentify_template`<sup>Optional</sup> <a name="deidentify_template" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfig.property.deidentifyTemplate"></a>

```python
deidentify_template: str
```

- *Type:* str

[DLP](https://cloud.google.com/dlp/docs) deidentify template name to instruct on how to de-identify content. Format: 'projects/{project}/locations/{location}/deidentifyTemplates/{deidentify_template}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#deidentify_template CesApp#deidentify_template}

---

##### `enable_redaction`<sup>Optional</sup> <a name="enable_redaction" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfig.property.enableRedaction"></a>

```python
enable_redaction: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If true, redaction will be applied in various logging scenarios, including conversation history, Cloud Logging and audio recording.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#enable_redaction CesApp#enable_redaction}

---

##### `inspect_template`<sup>Optional</sup> <a name="inspect_template" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfig.property.inspectTemplate"></a>

```python
inspect_template: str
```

- *Type:* str

[DLP](https://cloud.google.com/dlp/docs) inspect template name to configure detection of sensitive data types. Format: 'projects/{project}/locations/{location}/inspectTemplates/{inspect_template}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#inspect_template CesApp#inspect_template}

---

### CesAppModelSettings <a name="CesAppModelSettings" id="@cdktn/provider-google.cesApp.CesAppModelSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesApp.CesAppModelSettings.Initializer"></a>

```python
from cdktn_provider_google import ces_app

cesApp.CesAppModelSettings(
  model: str = None,
  temperature: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppModelSettings.property.model">model</a></code> | <code>str</code> | The LLM model that the agent should use. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppModelSettings.property.temperature">temperature</a></code> | <code>typing.Union[int, float]</code> | If set, this temperature will be used for the LLM model. |

---

##### `model`<sup>Optional</sup> <a name="model" id="@cdktn/provider-google.cesApp.CesAppModelSettings.property.model"></a>

```python
model: str
```

- *Type:* str

The LLM model that the agent should use.

If not set, the agent will inherit the model from its parent agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#model CesApp#model}

---

##### `temperature`<sup>Optional</sup> <a name="temperature" id="@cdktn/provider-google.cesApp.CesAppModelSettings.property.temperature"></a>

```python
temperature: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

If set, this temperature will be used for the LLM model.

Temperature
controls the randomness of the model's responses. Lower temperatures
produce responses that are more predictable. Higher temperatures produce
responses that are more creative.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#temperature CesApp#temperature}

---

### CesAppTimeouts <a name="CesAppTimeouts" id="@cdktn/provider-google.cesApp.CesAppTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesApp.CesAppTimeouts.Initializer"></a>

```python
from cdktn_provider_google import ces_app

cesApp.CesAppTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#create CesApp#create}. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#delete CesApp#delete}. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#update CesApp#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.cesApp.CesAppTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#create CesApp#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.cesApp.CesAppTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#delete CesApp#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.cesApp.CesAppTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#update CesApp#update}.

---

### CesAppTimeZoneSettings <a name="CesAppTimeZoneSettings" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettings.Initializer"></a>

```python
from cdktn_provider_google import ces_app

cesApp.CesAppTimeZoneSettings(
  time_zone: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeZoneSettings.property.timeZone">time_zone</a></code> | <code>str</code> | The time zone of the app from the time zone database, e.g., America/Los_Angeles, Europe/Paris. |

---

##### `time_zone`<sup>Optional</sup> <a name="time_zone" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettings.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

The time zone of the app from the time zone database, e.g., America/Los_Angeles, Europe/Paris.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#time_zone CesApp#time_zone}

---

### CesAppVariableDeclarations <a name="CesAppVariableDeclarations" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarations.Initializer"></a>

```python
from cdktn_provider_google import ces_app

cesApp.CesAppVariableDeclarations(
  description: str,
  name: str,
  schema: CesAppVariableDeclarationsSchema
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarations.property.description">description</a></code> | <code>str</code> | The description of the variable. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarations.property.name">name</a></code> | <code>str</code> | The name of the variable. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarations.property.schema">schema</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema">CesAppVariableDeclarationsSchema</a></code> | schema block. |

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarations.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#description CesApp#description}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarations.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the variable.

The name must start with a letter or underscore
and contain only letters, numbers, or underscores.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#name CesApp#name}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarations.property.schema"></a>

```python
schema: CesAppVariableDeclarationsSchema
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema">CesAppVariableDeclarationsSchema</a>

schema block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#schema CesApp#schema}

---

### CesAppVariableDeclarationsSchema <a name="CesAppVariableDeclarationsSchema" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema.Initializer"></a>

```python
from cdktn_provider_google import ces_app

cesApp.CesAppVariableDeclarationsSchema(
  type: str,
  additional_properties: str = None,
  any_of: str = None,
  default: str = None,
  defs: str = None,
  description: str = None,
  enum: typing.List[str] = None,
  items: str = None,
  nullable: bool | IResolvable = None,
  prefix_items: str = None,
  properties: str = None,
  ref: str = None,
  required: typing.List[str] = None,
  title: str = None,
  unique_items: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema.property.type">type</a></code> | <code>str</code> | The type of the data. Possible values: STRING INTEGER NUMBER BOOLEAN OBJECT ARRAY. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema.property.additionalProperties">additional_properties</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema.property.anyOf">any_of</a></code> | <code>str</code> | Optional. The instance value should be valid against at least one of the schemas in this list. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema.property.default">default</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema.property.defs">defs</a></code> | <code>str</code> | A map of definitions for use by ref. Only allowed at the root of the schema. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema.property.description">description</a></code> | <code>str</code> | The description of the data. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema.property.enum">enum</a></code> | <code>typing.List[str]</code> | Possible values of the element of primitive type with enum format. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema.property.items">items</a></code> | <code>str</code> | Schema of the elements of Type.ARRAY. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema.property.nullable">nullable</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates if the value may be null. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema.property.prefixItems">prefix_items</a></code> | <code>str</code> | Optional. Schemas of initial elements of Type.ARRAY. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema.property.properties">properties</a></code> | <code>str</code> | Properties of Type.OBJECT. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema.property.ref">ref</a></code> | <code>str</code> | Allows indirect references between schema nodes. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema.property.required">required</a></code> | <code>typing.List[str]</code> | Required properties of Type.OBJECT. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema.property.title">title</a></code> | <code>str</code> | The title of the schema. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema.property.uniqueItems">unique_items</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicate the items in the array must be unique. Only applies to TYPE.ARRAY. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema.property.type"></a>

```python
type: str
```

- *Type:* str

The type of the data. Possible values: STRING INTEGER NUMBER BOOLEAN OBJECT ARRAY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#type CesApp#type}

---

##### `additional_properties`<sup>Optional</sup> <a name="additional_properties" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema.property.additionalProperties"></a>

```python
additional_properties: str
```

- *Type:* str

Optional.

Defines the schema for additional properties allowed in an object.
The value must be a valid JSON string representing the Schema object.
(Note: OpenAPI also allows a boolean, this definition expects a Schema JSON).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#additional_properties CesApp#additional_properties}

---

##### `any_of`<sup>Optional</sup> <a name="any_of" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema.property.anyOf"></a>

```python
any_of: str
```

- *Type:* str

Optional. The instance value should be valid against at least one of the schemas in this list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#any_of CesApp#any_of}

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema.property.default"></a>

```python
default: str
```

- *Type:* str

Optional.

Default value of the data. Represents a dynamically typed value
which can be either null, a number, a string, a boolean, a struct,
or a list of values. The provided default value must be encoded as a JSON string.
Use 'jsonencode' in Terraform HCL to encode the default value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#default CesApp#default}

---

##### `defs`<sup>Optional</sup> <a name="defs" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema.property.defs"></a>

```python
defs: str
```

- *Type:* str

A map of definitions for use by ref. Only allowed at the root of the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#defs CesApp#defs}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#description CesApp#description}

---

##### `enum`<sup>Optional</sup> <a name="enum" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema.property.enum"></a>

```python
enum: typing.List[str]
```

- *Type:* typing.List[str]

Possible values of the element of primitive type with enum format.

Examples:

1. We can define direction as :
   {type:STRING, format:enum, enum:["EAST", NORTH", "SOUTH", "WEST"]}
2. We can define apartment number as :
   {type:INTEGER, format:enum, enum:["101", "201", "301"]}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#enum CesApp#enum}

---

##### `items`<sup>Optional</sup> <a name="items" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema.property.items"></a>

```python
items: str
```

- *Type:* str

Schema of the elements of Type.ARRAY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#items CesApp#items}

---

##### `nullable`<sup>Optional</sup> <a name="nullable" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema.property.nullable"></a>

```python
nullable: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates if the value may be null.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#nullable CesApp#nullable}

---

##### `prefix_items`<sup>Optional</sup> <a name="prefix_items" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema.property.prefixItems"></a>

```python
prefix_items: str
```

- *Type:* str

Optional. Schemas of initial elements of Type.ARRAY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#prefix_items CesApp#prefix_items}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema.property.properties"></a>

```python
properties: str
```

- *Type:* str

Properties of Type.OBJECT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#properties CesApp#properties}

---

##### `ref`<sup>Optional</sup> <a name="ref" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema.property.ref"></a>

```python
ref: str
```

- *Type:* str

Allows indirect references between schema nodes.

The value should be a
valid reference to a child of the root 'defs'.
For example, the following schema defines a reference to a schema node
named "Pet":
type: object
properties:
pet:
ref: #/defs/Pet
defs:
Pet:
type: object
properties:
name:
type: string
The value of the "pet" property is a reference to the schema node
named "Pet".
See details in
https://json-schema.org/understanding-json-schema/structuring.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#ref CesApp#ref}

---

##### `required`<sup>Optional</sup> <a name="required" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema.property.required"></a>

```python
required: typing.List[str]
```

- *Type:* typing.List[str]

Required properties of Type.OBJECT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#required CesApp#required}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema.property.title"></a>

```python
title: str
```

- *Type:* str

The title of the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#title CesApp#title}

---

##### `unique_items`<sup>Optional</sup> <a name="unique_items" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema.property.uniqueItems"></a>

```python
unique_items: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicate the items in the array must be unique. Only applies to TYPE.ARRAY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#unique_items CesApp#unique_items}

---

## Classes <a name="Classes" id="Classes"></a>

### CesAppAudioProcessingConfigAmbientSoundConfigOutputReference <a name="CesAppAudioProcessingConfigAmbientSoundConfigOutputReference" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_app

cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.resetGcsUri">reset_gcs_uri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.resetPrebuiltAmbientSound">reset_prebuilt_ambient_sound</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.resetVolumeGainDb">reset_volume_gain_db</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_gcs_uri` <a name="reset_gcs_uri" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.resetGcsUri"></a>

```python
def reset_gcs_uri() -> None
```

##### `reset_prebuilt_ambient_sound` <a name="reset_prebuilt_ambient_sound" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.resetPrebuiltAmbientSound"></a>

```python
def reset_prebuilt_ambient_sound() -> None
```

##### `reset_volume_gain_db` <a name="reset_volume_gain_db" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.resetVolumeGainDb"></a>

```python
def reset_volume_gain_db() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.property.gcsUriInput">gcs_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.property.prebuiltAmbientSoundInput">prebuilt_ambient_sound_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.property.volumeGainDbInput">volume_gain_db_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.property.gcsUri">gcs_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.property.prebuiltAmbientSound">prebuilt_ambient_sound</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.property.volumeGainDb">volume_gain_db</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfig">CesAppAudioProcessingConfigAmbientSoundConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `gcs_uri_input`<sup>Optional</sup> <a name="gcs_uri_input" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.property.gcsUriInput"></a>

```python
gcs_uri_input: str
```

- *Type:* str

---

##### `prebuilt_ambient_sound_input`<sup>Optional</sup> <a name="prebuilt_ambient_sound_input" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.property.prebuiltAmbientSoundInput"></a>

```python
prebuilt_ambient_sound_input: str
```

- *Type:* str

---

##### `volume_gain_db_input`<sup>Optional</sup> <a name="volume_gain_db_input" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.property.volumeGainDbInput"></a>

```python
volume_gain_db_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `gcs_uri`<sup>Required</sup> <a name="gcs_uri" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.property.gcsUri"></a>

```python
gcs_uri: str
```

- *Type:* str

---

##### `prebuilt_ambient_sound`<sup>Required</sup> <a name="prebuilt_ambient_sound" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.property.prebuiltAmbientSound"></a>

```python
prebuilt_ambient_sound: str
```

- *Type:* str

---

##### `volume_gain_db`<sup>Required</sup> <a name="volume_gain_db" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.property.volumeGainDb"></a>

```python
volume_gain_db: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.property.internalValue"></a>

```python
internal_value: CesAppAudioProcessingConfigAmbientSoundConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfig">CesAppAudioProcessingConfigAmbientSoundConfig</a>

---


### CesAppAudioProcessingConfigBargeInConfigOutputReference <a name="CesAppAudioProcessingConfigBargeInConfigOutputReference" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_app

cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.resetBargeInAwareness">reset_barge_in_awareness</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_barge_in_awareness` <a name="reset_barge_in_awareness" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.resetBargeInAwareness"></a>

```python
def reset_barge_in_awareness() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.property.bargeInAwarenessInput">barge_in_awareness_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.property.bargeInAwareness">barge_in_awareness</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfig">CesAppAudioProcessingConfigBargeInConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `barge_in_awareness_input`<sup>Optional</sup> <a name="barge_in_awareness_input" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.property.bargeInAwarenessInput"></a>

```python
barge_in_awareness_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `barge_in_awareness`<sup>Required</sup> <a name="barge_in_awareness" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.property.bargeInAwareness"></a>

```python
barge_in_awareness: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.property.internalValue"></a>

```python
internal_value: CesAppAudioProcessingConfigBargeInConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfig">CesAppAudioProcessingConfigBargeInConfig</a>

---


### CesAppAudioProcessingConfigOutputReference <a name="CesAppAudioProcessingConfigOutputReference" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_app

cesApp.CesAppAudioProcessingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.putAmbientSoundConfig">put_ambient_sound_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.putBargeInConfig">put_barge_in_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.putSynthesizeSpeechConfigs">put_synthesize_speech_configs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.resetAmbientSoundConfig">reset_ambient_sound_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.resetBargeInConfig">reset_barge_in_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.resetInactivityTimeout">reset_inactivity_timeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.resetSynthesizeSpeechConfigs">reset_synthesize_speech_configs</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_ambient_sound_config` <a name="put_ambient_sound_config" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.putAmbientSoundConfig"></a>

```python
def put_ambient_sound_config(
  gcs_uri: str = None,
  prebuilt_ambient_sound: str = None,
  volume_gain_db: typing.Union[int, float] = None
) -> None
```

###### `gcs_uri`<sup>Optional</sup> <a name="gcs_uri" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.putAmbientSoundConfig.parameter.gcsUri"></a>

- *Type:* str

Ambient noise as a mono-channel, 16kHz WAV file stored in [Cloud Storage](https://cloud.google.com/storage). Note: Please make sure the CES service agent 'service-@gcp-sa-ces.iam.gserviceaccount.com' has 'storage.objects.get' permission to the Cloud Storage object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#gcs_uri CesApp#gcs_uri}

---

###### `prebuilt_ambient_sound`<sup>Optional</sup> <a name="prebuilt_ambient_sound" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.putAmbientSoundConfig.parameter.prebuiltAmbientSound"></a>

- *Type:* str

Name of the prebuilt ambient sound.

Valid values are: - "coffee_shop" - "keyboard" - "keypad" - "hum"
-"office_1" - "office_2" - "office_3"
-"room_1" - "room_2" - "room_3"
-"room_4" - "room_5" - "air_conditioner"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#prebuilt_ambient_sound CesApp#prebuilt_ambient_sound}

---

###### `volume_gain_db`<sup>Optional</sup> <a name="volume_gain_db" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.putAmbientSoundConfig.parameter.volumeGainDb"></a>

- *Type:* typing.Union[int, float]

Volume gain (in dB) of the normal native volume supported by ambient noise, in the range [-96.0, 16.0]. If unset, or set to a value of 0.0 (dB), will play at normal native signal amplitude. A value of -6.0 (dB) will play at approximately half the amplitude of the normal native signal amplitude. A value of +6.0 (dB) will play at approximately twice the amplitude of the normal native signal amplitude. We strongly recommend not to exceed +10 (dB) as there's usually no effective increase in loudness for any value greater than that.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#volume_gain_db CesApp#volume_gain_db}

---

##### `put_barge_in_config` <a name="put_barge_in_config" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.putBargeInConfig"></a>

```python
def put_barge_in_config(
  barge_in_awareness: bool | IResolvable = None
) -> None
```

###### `barge_in_awareness`<sup>Optional</sup> <a name="barge_in_awareness" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.putBargeInConfig.parameter.bargeInAwareness"></a>

- *Type:* bool | cdktn.IResolvable

If enabled, the agent will adapt its next response based on the assumption that the user hasn't heard the full preceding agent message.

This should not be used in scenarios where agent responses are displayed
visually.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#barge_in_awareness CesApp#barge_in_awareness}

---

##### `put_synthesize_speech_configs` <a name="put_synthesize_speech_configs" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.putSynthesizeSpeechConfigs"></a>

```python
def put_synthesize_speech_configs(
  value: IResolvable | typing.List[CesAppAudioProcessingConfigSynthesizeSpeechConfigs]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.putSynthesizeSpeechConfigs.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigs">CesAppAudioProcessingConfigSynthesizeSpeechConfigs</a>]

---

##### `reset_ambient_sound_config` <a name="reset_ambient_sound_config" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.resetAmbientSoundConfig"></a>

```python
def reset_ambient_sound_config() -> None
```

##### `reset_barge_in_config` <a name="reset_barge_in_config" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.resetBargeInConfig"></a>

```python
def reset_barge_in_config() -> None
```

##### `reset_inactivity_timeout` <a name="reset_inactivity_timeout" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.resetInactivityTimeout"></a>

```python
def reset_inactivity_timeout() -> None
```

##### `reset_synthesize_speech_configs` <a name="reset_synthesize_speech_configs" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.resetSynthesizeSpeechConfigs"></a>

```python
def reset_synthesize_speech_configs() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.property.ambientSoundConfig">ambient_sound_config</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference">CesAppAudioProcessingConfigAmbientSoundConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.property.bargeInConfig">barge_in_config</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference">CesAppAudioProcessingConfigBargeInConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.property.synthesizeSpeechConfigs">synthesize_speech_configs</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsList">CesAppAudioProcessingConfigSynthesizeSpeechConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.property.ambientSoundConfigInput">ambient_sound_config_input</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfig">CesAppAudioProcessingConfigAmbientSoundConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.property.bargeInConfigInput">barge_in_config_input</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfig">CesAppAudioProcessingConfigBargeInConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.property.inactivityTimeoutInput">inactivity_timeout_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.property.synthesizeSpeechConfigsInput">synthesize_speech_configs_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigs">CesAppAudioProcessingConfigSynthesizeSpeechConfigs</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.property.inactivityTimeout">inactivity_timeout</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfig">CesAppAudioProcessingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ambient_sound_config`<sup>Required</sup> <a name="ambient_sound_config" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.property.ambientSoundConfig"></a>

```python
ambient_sound_config: CesAppAudioProcessingConfigAmbientSoundConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference">CesAppAudioProcessingConfigAmbientSoundConfigOutputReference</a>

---

##### `barge_in_config`<sup>Required</sup> <a name="barge_in_config" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.property.bargeInConfig"></a>

```python
barge_in_config: CesAppAudioProcessingConfigBargeInConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference">CesAppAudioProcessingConfigBargeInConfigOutputReference</a>

---

##### `synthesize_speech_configs`<sup>Required</sup> <a name="synthesize_speech_configs" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.property.synthesizeSpeechConfigs"></a>

```python
synthesize_speech_configs: CesAppAudioProcessingConfigSynthesizeSpeechConfigsList
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsList">CesAppAudioProcessingConfigSynthesizeSpeechConfigsList</a>

---

##### `ambient_sound_config_input`<sup>Optional</sup> <a name="ambient_sound_config_input" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.property.ambientSoundConfigInput"></a>

```python
ambient_sound_config_input: CesAppAudioProcessingConfigAmbientSoundConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfig">CesAppAudioProcessingConfigAmbientSoundConfig</a>

---

##### `barge_in_config_input`<sup>Optional</sup> <a name="barge_in_config_input" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.property.bargeInConfigInput"></a>

```python
barge_in_config_input: CesAppAudioProcessingConfigBargeInConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfig">CesAppAudioProcessingConfigBargeInConfig</a>

---

##### `inactivity_timeout_input`<sup>Optional</sup> <a name="inactivity_timeout_input" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.property.inactivityTimeoutInput"></a>

```python
inactivity_timeout_input: str
```

- *Type:* str

---

##### `synthesize_speech_configs_input`<sup>Optional</sup> <a name="synthesize_speech_configs_input" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.property.synthesizeSpeechConfigsInput"></a>

```python
synthesize_speech_configs_input: IResolvable | typing.List[CesAppAudioProcessingConfigSynthesizeSpeechConfigs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigs">CesAppAudioProcessingConfigSynthesizeSpeechConfigs</a>]

---

##### `inactivity_timeout`<sup>Required</sup> <a name="inactivity_timeout" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.property.inactivityTimeout"></a>

```python
inactivity_timeout: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.property.internalValue"></a>

```python
internal_value: CesAppAudioProcessingConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfig">CesAppAudioProcessingConfig</a>

---


### CesAppAudioProcessingConfigSynthesizeSpeechConfigsList <a name="CesAppAudioProcessingConfigSynthesizeSpeechConfigsList" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsList.Initializer"></a>

```python
from cdktn_provider_google import ces_app

cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigs">CesAppAudioProcessingConfigSynthesizeSpeechConfigs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CesAppAudioProcessingConfigSynthesizeSpeechConfigs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigs">CesAppAudioProcessingConfigSynthesizeSpeechConfigs</a>]

---


### CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference <a name="CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_app

cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.resetSpeakingRate">reset_speaking_rate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.resetVoice">reset_voice</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_speaking_rate` <a name="reset_speaking_rate" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.resetSpeakingRate"></a>

```python
def reset_speaking_rate() -> None
```

##### `reset_voice` <a name="reset_voice" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.resetVoice"></a>

```python
def reset_voice() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.languageCodeInput">language_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.speakingRateInput">speaking_rate_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.voiceInput">voice_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.languageCode">language_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.speakingRate">speaking_rate</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.voice">voice</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigs">CesAppAudioProcessingConfigSynthesizeSpeechConfigs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `language_code_input`<sup>Optional</sup> <a name="language_code_input" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.languageCodeInput"></a>

```python
language_code_input: str
```

- *Type:* str

---

##### `speaking_rate_input`<sup>Optional</sup> <a name="speaking_rate_input" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.speakingRateInput"></a>

```python
speaking_rate_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `voice_input`<sup>Optional</sup> <a name="voice_input" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.voiceInput"></a>

```python
voice_input: str
```

- *Type:* str

---

##### `language_code`<sup>Required</sup> <a name="language_code" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.languageCode"></a>

```python
language_code: str
```

- *Type:* str

---

##### `speaking_rate`<sup>Required</sup> <a name="speaking_rate" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.speakingRate"></a>

```python
speaking_rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `voice`<sup>Required</sup> <a name="voice" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.voice"></a>

```python
voice: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CesAppAudioProcessingConfigSynthesizeSpeechConfigs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigs">CesAppAudioProcessingConfigSynthesizeSpeechConfigs</a>

---


### CesAppClientCertificateSettingsOutputReference <a name="CesAppClientCertificateSettingsOutputReference" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_app

cesApp.CesAppClientCertificateSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.resetPassphrase">reset_passphrase</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_passphrase` <a name="reset_passphrase" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.resetPassphrase"></a>

```python
def reset_passphrase() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.property.passphraseInput">passphrase_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.property.privateKeyInput">private_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.property.tlsCertificateInput">tls_certificate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.property.passphrase">passphrase</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.property.privateKey">private_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.property.tlsCertificate">tls_certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettings">CesAppClientCertificateSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `passphrase_input`<sup>Optional</sup> <a name="passphrase_input" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.property.passphraseInput"></a>

```python
passphrase_input: str
```

- *Type:* str

---

##### `private_key_input`<sup>Optional</sup> <a name="private_key_input" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.property.privateKeyInput"></a>

```python
private_key_input: str
```

- *Type:* str

---

##### `tls_certificate_input`<sup>Optional</sup> <a name="tls_certificate_input" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.property.tlsCertificateInput"></a>

```python
tls_certificate_input: str
```

- *Type:* str

---

##### `passphrase`<sup>Required</sup> <a name="passphrase" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.property.passphrase"></a>

```python
passphrase: str
```

- *Type:* str

---

##### `private_key`<sup>Required</sup> <a name="private_key" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.property.privateKey"></a>

```python
private_key: str
```

- *Type:* str

---

##### `tls_certificate`<sup>Required</sup> <a name="tls_certificate" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.property.tlsCertificate"></a>

```python
tls_certificate: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.property.internalValue"></a>

```python
internal_value: CesAppClientCertificateSettings
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettings">CesAppClientCertificateSettings</a>

---


### CesAppDataStoreSettingsEnginesList <a name="CesAppDataStoreSettingsEnginesList" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesList.Initializer"></a>

```python
from cdktn_provider_google import ces_app

cesApp.CesAppDataStoreSettingsEnginesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CesAppDataStoreSettingsEnginesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### CesAppDataStoreSettingsEnginesOutputReference <a name="CesAppDataStoreSettingsEnginesOutputReference" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_app

cesApp.CesAppDataStoreSettingsEnginesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEngines">CesAppDataStoreSettingsEngines</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.property.internalValue"></a>

```python
internal_value: CesAppDataStoreSettingsEngines
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEngines">CesAppDataStoreSettingsEngines</a>

---


### CesAppDataStoreSettingsOutputReference <a name="CesAppDataStoreSettingsOutputReference" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_app

cesApp.CesAppDataStoreSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.property.engines">engines</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesList">CesAppDataStoreSettingsEnginesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettings">CesAppDataStoreSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `engines`<sup>Required</sup> <a name="engines" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.property.engines"></a>

```python
engines: CesAppDataStoreSettingsEnginesList
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesList">CesAppDataStoreSettingsEnginesList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.property.internalValue"></a>

```python
internal_value: CesAppDataStoreSettings
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettings">CesAppDataStoreSettings</a>

---


### CesAppDefaultChannelProfileOutputReference <a name="CesAppDefaultChannelProfileOutputReference" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_app

cesApp.CesAppDefaultChannelProfileOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.putPersonaProperty">put_persona_property</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.putWebWidgetConfig">put_web_widget_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.resetChannelType">reset_channel_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.resetDisableBargeInControl">reset_disable_barge_in_control</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.resetDisableDtmf">reset_disable_dtmf</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.resetPersonaProperty">reset_persona_property</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.resetProfileId">reset_profile_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.resetWebWidgetConfig">reset_web_widget_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_persona_property` <a name="put_persona_property" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.putPersonaProperty"></a>

```python
def put_persona_property(
  persona: str = None
) -> None
```

###### `persona`<sup>Optional</sup> <a name="persona" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.putPersonaProperty.parameter.persona"></a>

- *Type:* str

The persona of the channel. Possible values: UNKNOWN CONCISE CHATTY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#persona CesApp#persona}

---

##### `put_web_widget_config` <a name="put_web_widget_config" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.putWebWidgetConfig"></a>

```python
def put_web_widget_config(
  modality: str = None,
  theme: str = None,
  web_widget_title: str = None
) -> None
```

###### `modality`<sup>Optional</sup> <a name="modality" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.putWebWidgetConfig.parameter.modality"></a>

- *Type:* str

The modality of the web widget. Possible values: UNKNOWN_MODALITY CHAT_AND_VOICE VOICE_ONLY CHAT_ONLY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#modality CesApp#modality}

---

###### `theme`<sup>Optional</sup> <a name="theme" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.putWebWidgetConfig.parameter.theme"></a>

- *Type:* str

The theme of the web widget. Possible values: UNKNOWN_THEME LIGHT DARK.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#theme CesApp#theme}

---

###### `web_widget_title`<sup>Optional</sup> <a name="web_widget_title" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.putWebWidgetConfig.parameter.webWidgetTitle"></a>

- *Type:* str

The title of the web widget.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#web_widget_title CesApp#web_widget_title}

---

##### `reset_channel_type` <a name="reset_channel_type" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.resetChannelType"></a>

```python
def reset_channel_type() -> None
```

##### `reset_disable_barge_in_control` <a name="reset_disable_barge_in_control" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.resetDisableBargeInControl"></a>

```python
def reset_disable_barge_in_control() -> None
```

##### `reset_disable_dtmf` <a name="reset_disable_dtmf" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.resetDisableDtmf"></a>

```python
def reset_disable_dtmf() -> None
```

##### `reset_persona_property` <a name="reset_persona_property" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.resetPersonaProperty"></a>

```python
def reset_persona_property() -> None
```

##### `reset_profile_id` <a name="reset_profile_id" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.resetProfileId"></a>

```python
def reset_profile_id() -> None
```

##### `reset_web_widget_config` <a name="reset_web_widget_config" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.resetWebWidgetConfig"></a>

```python
def reset_web_widget_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.property.personaProperty">persona_property</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference">CesAppDefaultChannelProfilePersonaPropertyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.property.webWidgetConfig">web_widget_config</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference">CesAppDefaultChannelProfileWebWidgetConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.property.channelTypeInput">channel_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.property.disableBargeInControlInput">disable_barge_in_control_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.property.disableDtmfInput">disable_dtmf_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.property.personaPropertyInput">persona_property_input</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaProperty">CesAppDefaultChannelProfilePersonaProperty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.property.profileIdInput">profile_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.property.webWidgetConfigInput">web_widget_config_input</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfig">CesAppDefaultChannelProfileWebWidgetConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.property.channelType">channel_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.property.disableBargeInControl">disable_barge_in_control</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.property.disableDtmf">disable_dtmf</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.property.profileId">profile_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfile">CesAppDefaultChannelProfile</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `persona_property`<sup>Required</sup> <a name="persona_property" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.property.personaProperty"></a>

```python
persona_property: CesAppDefaultChannelProfilePersonaPropertyOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference">CesAppDefaultChannelProfilePersonaPropertyOutputReference</a>

---

##### `web_widget_config`<sup>Required</sup> <a name="web_widget_config" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.property.webWidgetConfig"></a>

```python
web_widget_config: CesAppDefaultChannelProfileWebWidgetConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference">CesAppDefaultChannelProfileWebWidgetConfigOutputReference</a>

---

##### `channel_type_input`<sup>Optional</sup> <a name="channel_type_input" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.property.channelTypeInput"></a>

```python
channel_type_input: str
```

- *Type:* str

---

##### `disable_barge_in_control_input`<sup>Optional</sup> <a name="disable_barge_in_control_input" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.property.disableBargeInControlInput"></a>

```python
disable_barge_in_control_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `disable_dtmf_input`<sup>Optional</sup> <a name="disable_dtmf_input" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.property.disableDtmfInput"></a>

```python
disable_dtmf_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `persona_property_input`<sup>Optional</sup> <a name="persona_property_input" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.property.personaPropertyInput"></a>

```python
persona_property_input: CesAppDefaultChannelProfilePersonaProperty
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaProperty">CesAppDefaultChannelProfilePersonaProperty</a>

---

##### `profile_id_input`<sup>Optional</sup> <a name="profile_id_input" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.property.profileIdInput"></a>

```python
profile_id_input: str
```

- *Type:* str

---

##### `web_widget_config_input`<sup>Optional</sup> <a name="web_widget_config_input" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.property.webWidgetConfigInput"></a>

```python
web_widget_config_input: CesAppDefaultChannelProfileWebWidgetConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfig">CesAppDefaultChannelProfileWebWidgetConfig</a>

---

##### `channel_type`<sup>Required</sup> <a name="channel_type" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.property.channelType"></a>

```python
channel_type: str
```

- *Type:* str

---

##### `disable_barge_in_control`<sup>Required</sup> <a name="disable_barge_in_control" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.property.disableBargeInControl"></a>

```python
disable_barge_in_control: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `disable_dtmf`<sup>Required</sup> <a name="disable_dtmf" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.property.disableDtmf"></a>

```python
disable_dtmf: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `profile_id`<sup>Required</sup> <a name="profile_id" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.property.profileId"></a>

```python
profile_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.property.internalValue"></a>

```python
internal_value: CesAppDefaultChannelProfile
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfile">CesAppDefaultChannelProfile</a>

---


### CesAppDefaultChannelProfilePersonaPropertyOutputReference <a name="CesAppDefaultChannelProfilePersonaPropertyOutputReference" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_app

cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.resetPersona">reset_persona</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_persona` <a name="reset_persona" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.resetPersona"></a>

```python
def reset_persona() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.property.personaInput">persona_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.property.persona">persona</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaProperty">CesAppDefaultChannelProfilePersonaProperty</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `persona_input`<sup>Optional</sup> <a name="persona_input" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.property.personaInput"></a>

```python
persona_input: str
```

- *Type:* str

---

##### `persona`<sup>Required</sup> <a name="persona" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.property.persona"></a>

```python
persona: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.property.internalValue"></a>

```python
internal_value: CesAppDefaultChannelProfilePersonaProperty
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaProperty">CesAppDefaultChannelProfilePersonaProperty</a>

---


### CesAppDefaultChannelProfileWebWidgetConfigOutputReference <a name="CesAppDefaultChannelProfileWebWidgetConfigOutputReference" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_app

cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.resetModality">reset_modality</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.resetTheme">reset_theme</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.resetWebWidgetTitle">reset_web_widget_title</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_modality` <a name="reset_modality" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.resetModality"></a>

```python
def reset_modality() -> None
```

##### `reset_theme` <a name="reset_theme" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.resetTheme"></a>

```python
def reset_theme() -> None
```

##### `reset_web_widget_title` <a name="reset_web_widget_title" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.resetWebWidgetTitle"></a>

```python
def reset_web_widget_title() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.property.modalityInput">modality_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.property.themeInput">theme_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.property.webWidgetTitleInput">web_widget_title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.property.modality">modality</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.property.theme">theme</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.property.webWidgetTitle">web_widget_title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfig">CesAppDefaultChannelProfileWebWidgetConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `modality_input`<sup>Optional</sup> <a name="modality_input" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.property.modalityInput"></a>

```python
modality_input: str
```

- *Type:* str

---

##### `theme_input`<sup>Optional</sup> <a name="theme_input" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.property.themeInput"></a>

```python
theme_input: str
```

- *Type:* str

---

##### `web_widget_title_input`<sup>Optional</sup> <a name="web_widget_title_input" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.property.webWidgetTitleInput"></a>

```python
web_widget_title_input: str
```

- *Type:* str

---

##### `modality`<sup>Required</sup> <a name="modality" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.property.modality"></a>

```python
modality: str
```

- *Type:* str

---

##### `theme`<sup>Required</sup> <a name="theme" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.property.theme"></a>

```python
theme: str
```

- *Type:* str

---

##### `web_widget_title`<sup>Required</sup> <a name="web_widget_title" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.property.webWidgetTitle"></a>

```python
web_widget_title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.property.internalValue"></a>

```python
internal_value: CesAppDefaultChannelProfileWebWidgetConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfig">CesAppDefaultChannelProfileWebWidgetConfig</a>

---


### CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference <a name="CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_app

cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.resetToolInvocationParameterCorrectnessThreshold">reset_tool_invocation_parameter_correctness_threshold</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_tool_invocation_parameter_correctness_threshold` <a name="reset_tool_invocation_parameter_correctness_threshold" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.resetToolInvocationParameterCorrectnessThreshold"></a>

```python
def reset_tool_invocation_parameter_correctness_threshold() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.property.toolInvocationParameterCorrectnessThresholdInput">tool_invocation_parameter_correctness_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.property.toolInvocationParameterCorrectnessThreshold">tool_invocation_parameter_correctness_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds">CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `tool_invocation_parameter_correctness_threshold_input`<sup>Optional</sup> <a name="tool_invocation_parameter_correctness_threshold_input" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.property.toolInvocationParameterCorrectnessThresholdInput"></a>

```python
tool_invocation_parameter_correctness_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tool_invocation_parameter_correctness_threshold`<sup>Required</sup> <a name="tool_invocation_parameter_correctness_threshold" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.property.toolInvocationParameterCorrectnessThreshold"></a>

```python
tool_invocation_parameter_correctness_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.property.internalValue"></a>

```python
internal_value: CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds">CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds</a>

---


### CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference <a name="CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_app

cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.putExpectationLevelMetricsThresholds">put_expectation_level_metrics_thresholds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.putTurnLevelMetricsThresholds">put_turn_level_metrics_thresholds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.resetExpectationLevelMetricsThresholds">reset_expectation_level_metrics_thresholds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.resetTurnLevelMetricsThresholds">reset_turn_level_metrics_thresholds</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_expectation_level_metrics_thresholds` <a name="put_expectation_level_metrics_thresholds" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.putExpectationLevelMetricsThresholds"></a>

```python
def put_expectation_level_metrics_thresholds(
  tool_invocation_parameter_correctness_threshold: typing.Union[int, float] = None
) -> None
```

###### `tool_invocation_parameter_correctness_threshold`<sup>Optional</sup> <a name="tool_invocation_parameter_correctness_threshold" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.putExpectationLevelMetricsThresholds.parameter.toolInvocationParameterCorrectnessThreshold"></a>

- *Type:* typing.Union[int, float]

The success threshold for individual tool invocation parameter correctness. Must be a float between 0 and 1. Default is 1.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#tool_invocation_parameter_correctness_threshold CesApp#tool_invocation_parameter_correctness_threshold}

---

##### `put_turn_level_metrics_thresholds` <a name="put_turn_level_metrics_thresholds" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.putTurnLevelMetricsThresholds"></a>

```python
def put_turn_level_metrics_thresholds(
  overall_tool_invocation_correctness_threshold: typing.Union[int, float] = None,
  semantic_similarity_success_threshold: typing.Union[int, float] = None
) -> None
```

###### `overall_tool_invocation_correctness_threshold`<sup>Optional</sup> <a name="overall_tool_invocation_correctness_threshold" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.putTurnLevelMetricsThresholds.parameter.overallToolInvocationCorrectnessThreshold"></a>

- *Type:* typing.Union[int, float]

The success threshold for overall tool invocation correctness. Must be a float between 0 and 1. Default is 1.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#overall_tool_invocation_correctness_threshold CesApp#overall_tool_invocation_correctness_threshold}

---

###### `semantic_similarity_success_threshold`<sup>Optional</sup> <a name="semantic_similarity_success_threshold" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.putTurnLevelMetricsThresholds.parameter.semanticSimilaritySuccessThreshold"></a>

- *Type:* typing.Union[int, float]

The success threshold for semantic similarity. Must be an integer between 0 and 4. Default is >= 3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#semantic_similarity_success_threshold CesApp#semantic_similarity_success_threshold}

---

##### `reset_expectation_level_metrics_thresholds` <a name="reset_expectation_level_metrics_thresholds" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.resetExpectationLevelMetricsThresholds"></a>

```python
def reset_expectation_level_metrics_thresholds() -> None
```

##### `reset_turn_level_metrics_thresholds` <a name="reset_turn_level_metrics_thresholds" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.resetTurnLevelMetricsThresholds"></a>

```python
def reset_turn_level_metrics_thresholds() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.property.expectationLevelMetricsThresholds">expectation_level_metrics_thresholds</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference">CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.property.turnLevelMetricsThresholds">turn_level_metrics_thresholds</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference">CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.property.expectationLevelMetricsThresholdsInput">expectation_level_metrics_thresholds_input</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds">CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.property.turnLevelMetricsThresholdsInput">turn_level_metrics_thresholds_input</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds">CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds">CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `expectation_level_metrics_thresholds`<sup>Required</sup> <a name="expectation_level_metrics_thresholds" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.property.expectationLevelMetricsThresholds"></a>

```python
expectation_level_metrics_thresholds: CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference">CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference</a>

---

##### `turn_level_metrics_thresholds`<sup>Required</sup> <a name="turn_level_metrics_thresholds" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.property.turnLevelMetricsThresholds"></a>

```python
turn_level_metrics_thresholds: CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference">CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference</a>

---

##### `expectation_level_metrics_thresholds_input`<sup>Optional</sup> <a name="expectation_level_metrics_thresholds_input" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.property.expectationLevelMetricsThresholdsInput"></a>

```python
expectation_level_metrics_thresholds_input: CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds">CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds</a>

---

##### `turn_level_metrics_thresholds_input`<sup>Optional</sup> <a name="turn_level_metrics_thresholds_input" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.property.turnLevelMetricsThresholdsInput"></a>

```python
turn_level_metrics_thresholds_input: CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds">CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.property.internalValue"></a>

```python
internal_value: CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds">CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds</a>

---


### CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference <a name="CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_app

cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.resetOverallToolInvocationCorrectnessThreshold">reset_overall_tool_invocation_correctness_threshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.resetSemanticSimilaritySuccessThreshold">reset_semantic_similarity_success_threshold</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_overall_tool_invocation_correctness_threshold` <a name="reset_overall_tool_invocation_correctness_threshold" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.resetOverallToolInvocationCorrectnessThreshold"></a>

```python
def reset_overall_tool_invocation_correctness_threshold() -> None
```

##### `reset_semantic_similarity_success_threshold` <a name="reset_semantic_similarity_success_threshold" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.resetSemanticSimilaritySuccessThreshold"></a>

```python
def reset_semantic_similarity_success_threshold() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.property.overallToolInvocationCorrectnessThresholdInput">overall_tool_invocation_correctness_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.property.semanticSimilaritySuccessThresholdInput">semantic_similarity_success_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.property.overallToolInvocationCorrectnessThreshold">overall_tool_invocation_correctness_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.property.semanticSimilaritySuccessThreshold">semantic_similarity_success_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds">CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `overall_tool_invocation_correctness_threshold_input`<sup>Optional</sup> <a name="overall_tool_invocation_correctness_threshold_input" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.property.overallToolInvocationCorrectnessThresholdInput"></a>

```python
overall_tool_invocation_correctness_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `semantic_similarity_success_threshold_input`<sup>Optional</sup> <a name="semantic_similarity_success_threshold_input" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.property.semanticSimilaritySuccessThresholdInput"></a>

```python
semantic_similarity_success_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `overall_tool_invocation_correctness_threshold`<sup>Required</sup> <a name="overall_tool_invocation_correctness_threshold" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.property.overallToolInvocationCorrectnessThreshold"></a>

```python
overall_tool_invocation_correctness_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `semantic_similarity_success_threshold`<sup>Required</sup> <a name="semantic_similarity_success_threshold" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.property.semanticSimilaritySuccessThreshold"></a>

```python
semantic_similarity_success_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.property.internalValue"></a>

```python
internal_value: CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds">CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds</a>

---


### CesAppEvaluationMetricsThresholdsOutputReference <a name="CesAppEvaluationMetricsThresholdsOutputReference" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_app

cesApp.CesAppEvaluationMetricsThresholdsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.putGoldenEvaluationMetricsThresholds">put_golden_evaluation_metrics_thresholds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.resetGoldenEvaluationMetricsThresholds">reset_golden_evaluation_metrics_thresholds</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_golden_evaluation_metrics_thresholds` <a name="put_golden_evaluation_metrics_thresholds" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.putGoldenEvaluationMetricsThresholds"></a>

```python
def put_golden_evaluation_metrics_thresholds(
  expectation_level_metrics_thresholds: CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds = None,
  turn_level_metrics_thresholds: CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds = None
) -> None
```

###### `expectation_level_metrics_thresholds`<sup>Optional</sup> <a name="expectation_level_metrics_thresholds" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.putGoldenEvaluationMetricsThresholds.parameter.expectationLevelMetricsThresholds"></a>

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds">CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds</a>

expectation_level_metrics_thresholds block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#expectation_level_metrics_thresholds CesApp#expectation_level_metrics_thresholds}

---

###### `turn_level_metrics_thresholds`<sup>Optional</sup> <a name="turn_level_metrics_thresholds" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.putGoldenEvaluationMetricsThresholds.parameter.turnLevelMetricsThresholds"></a>

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds">CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds</a>

turn_level_metrics_thresholds block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#turn_level_metrics_thresholds CesApp#turn_level_metrics_thresholds}

---

##### `reset_golden_evaluation_metrics_thresholds` <a name="reset_golden_evaluation_metrics_thresholds" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.resetGoldenEvaluationMetricsThresholds"></a>

```python
def reset_golden_evaluation_metrics_thresholds() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.property.goldenEvaluationMetricsThresholds">golden_evaluation_metrics_thresholds</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference">CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.property.goldenEvaluationMetricsThresholdsInput">golden_evaluation_metrics_thresholds_input</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds">CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholds">CesAppEvaluationMetricsThresholds</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `golden_evaluation_metrics_thresholds`<sup>Required</sup> <a name="golden_evaluation_metrics_thresholds" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.property.goldenEvaluationMetricsThresholds"></a>

```python
golden_evaluation_metrics_thresholds: CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference">CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference</a>

---

##### `golden_evaluation_metrics_thresholds_input`<sup>Optional</sup> <a name="golden_evaluation_metrics_thresholds_input" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.property.goldenEvaluationMetricsThresholdsInput"></a>

```python
golden_evaluation_metrics_thresholds_input: CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds">CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.property.internalValue"></a>

```python
internal_value: CesAppEvaluationMetricsThresholds
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholds">CesAppEvaluationMetricsThresholds</a>

---


### CesAppLanguageSettingsOutputReference <a name="CesAppLanguageSettingsOutputReference" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_app

cesApp.CesAppLanguageSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.resetDefaultLanguageCode">reset_default_language_code</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.resetEnableMultilingualSupport">reset_enable_multilingual_support</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.resetFallbackAction">reset_fallback_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.resetSupportedLanguageCodes">reset_supported_language_codes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_default_language_code` <a name="reset_default_language_code" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.resetDefaultLanguageCode"></a>

```python
def reset_default_language_code() -> None
```

##### `reset_enable_multilingual_support` <a name="reset_enable_multilingual_support" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.resetEnableMultilingualSupport"></a>

```python
def reset_enable_multilingual_support() -> None
```

##### `reset_fallback_action` <a name="reset_fallback_action" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.resetFallbackAction"></a>

```python
def reset_fallback_action() -> None
```

##### `reset_supported_language_codes` <a name="reset_supported_language_codes" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.resetSupportedLanguageCodes"></a>

```python
def reset_supported_language_codes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.property.defaultLanguageCodeInput">default_language_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.property.enableMultilingualSupportInput">enable_multilingual_support_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.property.fallbackActionInput">fallback_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.property.supportedLanguageCodesInput">supported_language_codes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.property.defaultLanguageCode">default_language_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.property.enableMultilingualSupport">enable_multilingual_support</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.property.fallbackAction">fallback_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.property.supportedLanguageCodes">supported_language_codes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettings">CesAppLanguageSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default_language_code_input`<sup>Optional</sup> <a name="default_language_code_input" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.property.defaultLanguageCodeInput"></a>

```python
default_language_code_input: str
```

- *Type:* str

---

##### `enable_multilingual_support_input`<sup>Optional</sup> <a name="enable_multilingual_support_input" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.property.enableMultilingualSupportInput"></a>

```python
enable_multilingual_support_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `fallback_action_input`<sup>Optional</sup> <a name="fallback_action_input" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.property.fallbackActionInput"></a>

```python
fallback_action_input: str
```

- *Type:* str

---

##### `supported_language_codes_input`<sup>Optional</sup> <a name="supported_language_codes_input" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.property.supportedLanguageCodesInput"></a>

```python
supported_language_codes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_language_code`<sup>Required</sup> <a name="default_language_code" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.property.defaultLanguageCode"></a>

```python
default_language_code: str
```

- *Type:* str

---

##### `enable_multilingual_support`<sup>Required</sup> <a name="enable_multilingual_support" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.property.enableMultilingualSupport"></a>

```python
enable_multilingual_support: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `fallback_action`<sup>Required</sup> <a name="fallback_action" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.property.fallbackAction"></a>

```python
fallback_action: str
```

- *Type:* str

---

##### `supported_language_codes`<sup>Required</sup> <a name="supported_language_codes" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.property.supportedLanguageCodes"></a>

```python
supported_language_codes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.property.internalValue"></a>

```python
internal_value: CesAppLanguageSettings
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettings">CesAppLanguageSettings</a>

---


### CesAppLoggingSettingsAudioRecordingConfigOutputReference <a name="CesAppLoggingSettingsAudioRecordingConfigOutputReference" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_app

cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.resetGcsBucket">reset_gcs_bucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.resetGcsPathPrefix">reset_gcs_path_prefix</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_gcs_bucket` <a name="reset_gcs_bucket" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.resetGcsBucket"></a>

```python
def reset_gcs_bucket() -> None
```

##### `reset_gcs_path_prefix` <a name="reset_gcs_path_prefix" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.resetGcsPathPrefix"></a>

```python
def reset_gcs_path_prefix() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.property.gcsBucketInput">gcs_bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.property.gcsPathPrefixInput">gcs_path_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.property.gcsBucket">gcs_bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.property.gcsPathPrefix">gcs_path_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfig">CesAppLoggingSettingsAudioRecordingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `gcs_bucket_input`<sup>Optional</sup> <a name="gcs_bucket_input" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.property.gcsBucketInput"></a>

```python
gcs_bucket_input: str
```

- *Type:* str

---

##### `gcs_path_prefix_input`<sup>Optional</sup> <a name="gcs_path_prefix_input" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.property.gcsPathPrefixInput"></a>

```python
gcs_path_prefix_input: str
```

- *Type:* str

---

##### `gcs_bucket`<sup>Required</sup> <a name="gcs_bucket" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.property.gcsBucket"></a>

```python
gcs_bucket: str
```

- *Type:* str

---

##### `gcs_path_prefix`<sup>Required</sup> <a name="gcs_path_prefix" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.property.gcsPathPrefix"></a>

```python
gcs_path_prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.property.internalValue"></a>

```python
internal_value: CesAppLoggingSettingsAudioRecordingConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfig">CesAppLoggingSettingsAudioRecordingConfig</a>

---


### CesAppLoggingSettingsBigqueryExportSettingsOutputReference <a name="CesAppLoggingSettingsBigqueryExportSettingsOutputReference" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_app

cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.resetDataset">reset_dataset</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.resetProject">reset_project</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_dataset` <a name="reset_dataset" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.resetDataset"></a>

```python
def reset_dataset() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.resetProject"></a>

```python
def reset_project() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.property.datasetInput">dataset_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.property.dataset">dataset</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettings">CesAppLoggingSettingsBigqueryExportSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dataset_input`<sup>Optional</sup> <a name="dataset_input" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.property.datasetInput"></a>

```python
dataset_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.property.dataset"></a>

```python
dataset: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.property.internalValue"></a>

```python
internal_value: CesAppLoggingSettingsBigqueryExportSettings
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettings">CesAppLoggingSettingsBigqueryExportSettings</a>

---


### CesAppLoggingSettingsCloudLoggingSettingsOutputReference <a name="CesAppLoggingSettingsCloudLoggingSettingsOutputReference" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_app

cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.resetEnableCloudLogging">reset_enable_cloud_logging</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enable_cloud_logging` <a name="reset_enable_cloud_logging" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.resetEnableCloudLogging"></a>

```python
def reset_enable_cloud_logging() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.property.enableCloudLoggingInput">enable_cloud_logging_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.property.enableCloudLogging">enable_cloud_logging</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettings">CesAppLoggingSettingsCloudLoggingSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_cloud_logging_input`<sup>Optional</sup> <a name="enable_cloud_logging_input" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.property.enableCloudLoggingInput"></a>

```python
enable_cloud_logging_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_cloud_logging`<sup>Required</sup> <a name="enable_cloud_logging" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.property.enableCloudLogging"></a>

```python
enable_cloud_logging: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.property.internalValue"></a>

```python
internal_value: CesAppLoggingSettingsCloudLoggingSettings
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettings">CesAppLoggingSettingsCloudLoggingSettings</a>

---


### CesAppLoggingSettingsConversationLoggingSettingsOutputReference <a name="CesAppLoggingSettingsConversationLoggingSettingsOutputReference" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_app

cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.resetDisableConversationLogging">reset_disable_conversation_logging</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_disable_conversation_logging` <a name="reset_disable_conversation_logging" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.resetDisableConversationLogging"></a>

```python
def reset_disable_conversation_logging() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.property.disableConversationLoggingInput">disable_conversation_logging_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.property.disableConversationLogging">disable_conversation_logging</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettings">CesAppLoggingSettingsConversationLoggingSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `disable_conversation_logging_input`<sup>Optional</sup> <a name="disable_conversation_logging_input" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.property.disableConversationLoggingInput"></a>

```python
disable_conversation_logging_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `disable_conversation_logging`<sup>Required</sup> <a name="disable_conversation_logging" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.property.disableConversationLogging"></a>

```python
disable_conversation_logging: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.property.internalValue"></a>

```python
internal_value: CesAppLoggingSettingsConversationLoggingSettings
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettings">CesAppLoggingSettingsConversationLoggingSettings</a>

---


### CesAppLoggingSettingsOutputReference <a name="CesAppLoggingSettingsOutputReference" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_app

cesApp.CesAppLoggingSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.putAudioRecordingConfig">put_audio_recording_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.putBigqueryExportSettings">put_bigquery_export_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.putCloudLoggingSettings">put_cloud_logging_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.putConversationLoggingSettings">put_conversation_logging_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.putRedactionConfig">put_redaction_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.resetAudioRecordingConfig">reset_audio_recording_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.resetBigqueryExportSettings">reset_bigquery_export_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.resetCloudLoggingSettings">reset_cloud_logging_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.resetConversationLoggingSettings">reset_conversation_logging_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.resetRedactionConfig">reset_redaction_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_audio_recording_config` <a name="put_audio_recording_config" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.putAudioRecordingConfig"></a>

```python
def put_audio_recording_config(
  gcs_bucket: str = None,
  gcs_path_prefix: str = None
) -> None
```

###### `gcs_bucket`<sup>Optional</sup> <a name="gcs_bucket" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.putAudioRecordingConfig.parameter.gcsBucket"></a>

- *Type:* str

The [Cloud Storage](https://cloud.google.com/storage) bucket to store the session audio recordings. The URI must start with "gs://". Note: If the Cloud Storage bucket is in a different project from the app, you should grant 'storage.objects.create' permission to the CES service agent 'service-@gcp-sa-ces.iam.gserviceaccount.com'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#gcs_bucket CesApp#gcs_bucket}

---

###### `gcs_path_prefix`<sup>Optional</sup> <a name="gcs_path_prefix" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.putAudioRecordingConfig.parameter.gcsPathPrefix"></a>

- *Type:* str

The Cloud Storage path prefix for audio recordings.

This prefix can include the following placeholders, which will be
dynamically substituted at serving time:

* $project:   project ID
* $location:  app location
* $app:       app ID
* $date:      session date in YYYY-MM-DD format
* $session:   session ID
  If the path prefix is not specified, the default prefix
  '$project/$location/$app/$date/$session/' will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#gcs_path_prefix CesApp#gcs_path_prefix}

---

##### `put_bigquery_export_settings` <a name="put_bigquery_export_settings" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.putBigqueryExportSettings"></a>

```python
def put_bigquery_export_settings(
  dataset: str = None,
  enabled: bool | IResolvable = None,
  project: str = None
) -> None
```

###### `dataset`<sup>Optional</sup> <a name="dataset" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.putBigqueryExportSettings.parameter.dataset"></a>

- *Type:* str

The BigQuery dataset to export the data to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#dataset CesApp#dataset}

---

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.putBigqueryExportSettings.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Indicates whether the BigQuery export is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#enabled CesApp#enabled}

---

###### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.putBigqueryExportSettings.parameter.project"></a>

- *Type:* str

The project ID of the BigQuery dataset to export the data to.

Note: If the BigQuery dataset is in a different project from the app, you should grant
roles/bigquery.admin role to the CES service agent service-<PROJECT-
NUMBER>@gcp-sa-ces.iam.gserviceaccount.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#project CesApp#project}

---

##### `put_cloud_logging_settings` <a name="put_cloud_logging_settings" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.putCloudLoggingSettings"></a>

```python
def put_cloud_logging_settings(
  enable_cloud_logging: bool | IResolvable = None
) -> None
```

###### `enable_cloud_logging`<sup>Optional</sup> <a name="enable_cloud_logging" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.putCloudLoggingSettings.parameter.enableCloudLogging"></a>

- *Type:* bool | cdktn.IResolvable

Whether to enable Cloud Logging for the sessions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#enable_cloud_logging CesApp#enable_cloud_logging}

---

##### `put_conversation_logging_settings` <a name="put_conversation_logging_settings" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.putConversationLoggingSettings"></a>

```python
def put_conversation_logging_settings(
  disable_conversation_logging: bool | IResolvable = None
) -> None
```

###### `disable_conversation_logging`<sup>Optional</sup> <a name="disable_conversation_logging" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.putConversationLoggingSettings.parameter.disableConversationLogging"></a>

- *Type:* bool | cdktn.IResolvable

Whether to disable conversation logging for the sessions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#disable_conversation_logging CesApp#disable_conversation_logging}

---

##### `put_redaction_config` <a name="put_redaction_config" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.putRedactionConfig"></a>

```python
def put_redaction_config(
  deidentify_template: str = None,
  enable_redaction: bool | IResolvable = None,
  inspect_template: str = None
) -> None
```

###### `deidentify_template`<sup>Optional</sup> <a name="deidentify_template" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.putRedactionConfig.parameter.deidentifyTemplate"></a>

- *Type:* str

[DLP](https://cloud.google.com/dlp/docs) deidentify template name to instruct on how to de-identify content. Format: 'projects/{project}/locations/{location}/deidentifyTemplates/{deidentify_template}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#deidentify_template CesApp#deidentify_template}

---

###### `enable_redaction`<sup>Optional</sup> <a name="enable_redaction" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.putRedactionConfig.parameter.enableRedaction"></a>

- *Type:* bool | cdktn.IResolvable

If true, redaction will be applied in various logging scenarios, including conversation history, Cloud Logging and audio recording.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#enable_redaction CesApp#enable_redaction}

---

###### `inspect_template`<sup>Optional</sup> <a name="inspect_template" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.putRedactionConfig.parameter.inspectTemplate"></a>

- *Type:* str

[DLP](https://cloud.google.com/dlp/docs) inspect template name to configure detection of sensitive data types. Format: 'projects/{project}/locations/{location}/inspectTemplates/{inspect_template}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#inspect_template CesApp#inspect_template}

---

##### `reset_audio_recording_config` <a name="reset_audio_recording_config" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.resetAudioRecordingConfig"></a>

```python
def reset_audio_recording_config() -> None
```

##### `reset_bigquery_export_settings` <a name="reset_bigquery_export_settings" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.resetBigqueryExportSettings"></a>

```python
def reset_bigquery_export_settings() -> None
```

##### `reset_cloud_logging_settings` <a name="reset_cloud_logging_settings" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.resetCloudLoggingSettings"></a>

```python
def reset_cloud_logging_settings() -> None
```

##### `reset_conversation_logging_settings` <a name="reset_conversation_logging_settings" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.resetConversationLoggingSettings"></a>

```python
def reset_conversation_logging_settings() -> None
```

##### `reset_redaction_config` <a name="reset_redaction_config" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.resetRedactionConfig"></a>

```python
def reset_redaction_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.property.audioRecordingConfig">audio_recording_config</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference">CesAppLoggingSettingsAudioRecordingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.property.bigqueryExportSettings">bigquery_export_settings</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference">CesAppLoggingSettingsBigqueryExportSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.property.cloudLoggingSettings">cloud_logging_settings</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference">CesAppLoggingSettingsCloudLoggingSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.property.conversationLoggingSettings">conversation_logging_settings</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference">CesAppLoggingSettingsConversationLoggingSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.property.redactionConfig">redaction_config</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference">CesAppLoggingSettingsRedactionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.property.audioRecordingConfigInput">audio_recording_config_input</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfig">CesAppLoggingSettingsAudioRecordingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.property.bigqueryExportSettingsInput">bigquery_export_settings_input</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettings">CesAppLoggingSettingsBigqueryExportSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.property.cloudLoggingSettingsInput">cloud_logging_settings_input</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettings">CesAppLoggingSettingsCloudLoggingSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.property.conversationLoggingSettingsInput">conversation_logging_settings_input</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettings">CesAppLoggingSettingsConversationLoggingSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.property.redactionConfigInput">redaction_config_input</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfig">CesAppLoggingSettingsRedactionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettings">CesAppLoggingSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `audio_recording_config`<sup>Required</sup> <a name="audio_recording_config" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.property.audioRecordingConfig"></a>

```python
audio_recording_config: CesAppLoggingSettingsAudioRecordingConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference">CesAppLoggingSettingsAudioRecordingConfigOutputReference</a>

---

##### `bigquery_export_settings`<sup>Required</sup> <a name="bigquery_export_settings" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.property.bigqueryExportSettings"></a>

```python
bigquery_export_settings: CesAppLoggingSettingsBigqueryExportSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference">CesAppLoggingSettingsBigqueryExportSettingsOutputReference</a>

---

##### `cloud_logging_settings`<sup>Required</sup> <a name="cloud_logging_settings" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.property.cloudLoggingSettings"></a>

```python
cloud_logging_settings: CesAppLoggingSettingsCloudLoggingSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference">CesAppLoggingSettingsCloudLoggingSettingsOutputReference</a>

---

##### `conversation_logging_settings`<sup>Required</sup> <a name="conversation_logging_settings" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.property.conversationLoggingSettings"></a>

```python
conversation_logging_settings: CesAppLoggingSettingsConversationLoggingSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference">CesAppLoggingSettingsConversationLoggingSettingsOutputReference</a>

---

##### `redaction_config`<sup>Required</sup> <a name="redaction_config" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.property.redactionConfig"></a>

```python
redaction_config: CesAppLoggingSettingsRedactionConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference">CesAppLoggingSettingsRedactionConfigOutputReference</a>

---

##### `audio_recording_config_input`<sup>Optional</sup> <a name="audio_recording_config_input" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.property.audioRecordingConfigInput"></a>

```python
audio_recording_config_input: CesAppLoggingSettingsAudioRecordingConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfig">CesAppLoggingSettingsAudioRecordingConfig</a>

---

##### `bigquery_export_settings_input`<sup>Optional</sup> <a name="bigquery_export_settings_input" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.property.bigqueryExportSettingsInput"></a>

```python
bigquery_export_settings_input: CesAppLoggingSettingsBigqueryExportSettings
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettings">CesAppLoggingSettingsBigqueryExportSettings</a>

---

##### `cloud_logging_settings_input`<sup>Optional</sup> <a name="cloud_logging_settings_input" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.property.cloudLoggingSettingsInput"></a>

```python
cloud_logging_settings_input: CesAppLoggingSettingsCloudLoggingSettings
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettings">CesAppLoggingSettingsCloudLoggingSettings</a>

---

##### `conversation_logging_settings_input`<sup>Optional</sup> <a name="conversation_logging_settings_input" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.property.conversationLoggingSettingsInput"></a>

```python
conversation_logging_settings_input: CesAppLoggingSettingsConversationLoggingSettings
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettings">CesAppLoggingSettingsConversationLoggingSettings</a>

---

##### `redaction_config_input`<sup>Optional</sup> <a name="redaction_config_input" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.property.redactionConfigInput"></a>

```python
redaction_config_input: CesAppLoggingSettingsRedactionConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfig">CesAppLoggingSettingsRedactionConfig</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.property.internalValue"></a>

```python
internal_value: CesAppLoggingSettings
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettings">CesAppLoggingSettings</a>

---


### CesAppLoggingSettingsRedactionConfigOutputReference <a name="CesAppLoggingSettingsRedactionConfigOutputReference" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_app

cesApp.CesAppLoggingSettingsRedactionConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.resetDeidentifyTemplate">reset_deidentify_template</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.resetEnableRedaction">reset_enable_redaction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.resetInspectTemplate">reset_inspect_template</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_deidentify_template` <a name="reset_deidentify_template" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.resetDeidentifyTemplate"></a>

```python
def reset_deidentify_template() -> None
```

##### `reset_enable_redaction` <a name="reset_enable_redaction" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.resetEnableRedaction"></a>

```python
def reset_enable_redaction() -> None
```

##### `reset_inspect_template` <a name="reset_inspect_template" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.resetInspectTemplate"></a>

```python
def reset_inspect_template() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.property.deidentifyTemplateInput">deidentify_template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.property.enableRedactionInput">enable_redaction_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.property.inspectTemplateInput">inspect_template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.property.deidentifyTemplate">deidentify_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.property.enableRedaction">enable_redaction</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.property.inspectTemplate">inspect_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfig">CesAppLoggingSettingsRedactionConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `deidentify_template_input`<sup>Optional</sup> <a name="deidentify_template_input" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.property.deidentifyTemplateInput"></a>

```python
deidentify_template_input: str
```

- *Type:* str

---

##### `enable_redaction_input`<sup>Optional</sup> <a name="enable_redaction_input" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.property.enableRedactionInput"></a>

```python
enable_redaction_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `inspect_template_input`<sup>Optional</sup> <a name="inspect_template_input" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.property.inspectTemplateInput"></a>

```python
inspect_template_input: str
```

- *Type:* str

---

##### `deidentify_template`<sup>Required</sup> <a name="deidentify_template" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.property.deidentifyTemplate"></a>

```python
deidentify_template: str
```

- *Type:* str

---

##### `enable_redaction`<sup>Required</sup> <a name="enable_redaction" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.property.enableRedaction"></a>

```python
enable_redaction: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `inspect_template`<sup>Required</sup> <a name="inspect_template" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.property.inspectTemplate"></a>

```python
inspect_template: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.property.internalValue"></a>

```python
internal_value: CesAppLoggingSettingsRedactionConfig
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfig">CesAppLoggingSettingsRedactionConfig</a>

---


### CesAppModelSettingsOutputReference <a name="CesAppModelSettingsOutputReference" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_app

cesApp.CesAppModelSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.resetModel">reset_model</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.resetTemperature">reset_temperature</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_model` <a name="reset_model" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.resetModel"></a>

```python
def reset_model() -> None
```

##### `reset_temperature` <a name="reset_temperature" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.resetTemperature"></a>

```python
def reset_temperature() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.property.modelInput">model_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.property.temperatureInput">temperature_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.property.model">model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.property.temperature">temperature</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppModelSettings">CesAppModelSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `model_input`<sup>Optional</sup> <a name="model_input" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.property.modelInput"></a>

```python
model_input: str
```

- *Type:* str

---

##### `temperature_input`<sup>Optional</sup> <a name="temperature_input" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.property.temperatureInput"></a>

```python
temperature_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `model`<sup>Required</sup> <a name="model" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.property.model"></a>

```python
model: str
```

- *Type:* str

---

##### `temperature`<sup>Required</sup> <a name="temperature" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.property.temperature"></a>

```python
temperature: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.property.internalValue"></a>

```python
internal_value: CesAppModelSettings
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppModelSettings">CesAppModelSettings</a>

---


### CesAppTimeoutsOutputReference <a name="CesAppTimeoutsOutputReference" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_app

cesApp.CesAppTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cesApp.CesAppTimeouts">CesAppTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CesAppTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesApp.CesAppTimeouts">CesAppTimeouts</a>

---


### CesAppTimeZoneSettingsOutputReference <a name="CesAppTimeZoneSettingsOutputReference" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_app

cesApp.CesAppTimeZoneSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.resetTimeZone">reset_time_zone</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_time_zone` <a name="reset_time_zone" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.resetTimeZone"></a>

```python
def reset_time_zone() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.property.timeZoneInput">time_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.property.timeZone">time_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeZoneSettings">CesAppTimeZoneSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `time_zone_input`<sup>Optional</sup> <a name="time_zone_input" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.property.timeZoneInput"></a>

```python
time_zone_input: str
```

- *Type:* str

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.property.internalValue"></a>

```python
internal_value: CesAppTimeZoneSettings
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppTimeZoneSettings">CesAppTimeZoneSettings</a>

---


### CesAppVariableDeclarationsList <a name="CesAppVariableDeclarationsList" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsList.Initializer"></a>

```python
from cdktn_provider_google import ces_app

cesApp.CesAppVariableDeclarationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CesAppVariableDeclarationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarations">CesAppVariableDeclarations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CesAppVariableDeclarations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarations">CesAppVariableDeclarations</a>]

---


### CesAppVariableDeclarationsOutputReference <a name="CesAppVariableDeclarationsOutputReference" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_app

cesApp.CesAppVariableDeclarationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.putSchema">put_schema</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_schema` <a name="put_schema" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.putSchema"></a>

```python
def put_schema(
  type: str,
  additional_properties: str = None,
  any_of: str = None,
  default: str = None,
  defs: str = None,
  description: str = None,
  enum: typing.List[str] = None,
  items: str = None,
  nullable: bool | IResolvable = None,
  prefix_items: str = None,
  properties: str = None,
  ref: str = None,
  required: typing.List[str] = None,
  title: str = None,
  unique_items: bool | IResolvable = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.putSchema.parameter.type"></a>

- *Type:* str

The type of the data. Possible values: STRING INTEGER NUMBER BOOLEAN OBJECT ARRAY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#type CesApp#type}

---

###### `additional_properties`<sup>Optional</sup> <a name="additional_properties" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.putSchema.parameter.additionalProperties"></a>

- *Type:* str

Optional.

Defines the schema for additional properties allowed in an object.
The value must be a valid JSON string representing the Schema object.
(Note: OpenAPI also allows a boolean, this definition expects a Schema JSON).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#additional_properties CesApp#additional_properties}

---

###### `any_of`<sup>Optional</sup> <a name="any_of" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.putSchema.parameter.anyOf"></a>

- *Type:* str

Optional. The instance value should be valid against at least one of the schemas in this list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#any_of CesApp#any_of}

---

###### `default`<sup>Optional</sup> <a name="default" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.putSchema.parameter.default"></a>

- *Type:* str

Optional.

Default value of the data. Represents a dynamically typed value
which can be either null, a number, a string, a boolean, a struct,
or a list of values. The provided default value must be encoded as a JSON string.
Use 'jsonencode' in Terraform HCL to encode the default value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#default CesApp#default}

---

###### `defs`<sup>Optional</sup> <a name="defs" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.putSchema.parameter.defs"></a>

- *Type:* str

A map of definitions for use by ref. Only allowed at the root of the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#defs CesApp#defs}

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.putSchema.parameter.description"></a>

- *Type:* str

The description of the data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#description CesApp#description}

---

###### `enum`<sup>Optional</sup> <a name="enum" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.putSchema.parameter.enum"></a>

- *Type:* typing.List[str]

Possible values of the element of primitive type with enum format.

Examples:

1. We can define direction as :
   {type:STRING, format:enum, enum:["EAST", NORTH", "SOUTH", "WEST"]}
2. We can define apartment number as :
   {type:INTEGER, format:enum, enum:["101", "201", "301"]}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#enum CesApp#enum}

---

###### `items`<sup>Optional</sup> <a name="items" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.putSchema.parameter.items"></a>

- *Type:* str

Schema of the elements of Type.ARRAY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#items CesApp#items}

---

###### `nullable`<sup>Optional</sup> <a name="nullable" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.putSchema.parameter.nullable"></a>

- *Type:* bool | cdktn.IResolvable

Indicates if the value may be null.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#nullable CesApp#nullable}

---

###### `prefix_items`<sup>Optional</sup> <a name="prefix_items" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.putSchema.parameter.prefixItems"></a>

- *Type:* str

Optional. Schemas of initial elements of Type.ARRAY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#prefix_items CesApp#prefix_items}

---

###### `properties`<sup>Optional</sup> <a name="properties" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.putSchema.parameter.properties"></a>

- *Type:* str

Properties of Type.OBJECT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#properties CesApp#properties}

---

###### `ref`<sup>Optional</sup> <a name="ref" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.putSchema.parameter.ref"></a>

- *Type:* str

Allows indirect references between schema nodes.

The value should be a
valid reference to a child of the root 'defs'.
For example, the following schema defines a reference to a schema node
named "Pet":
type: object
properties:
pet:
ref: #/defs/Pet
defs:
Pet:
type: object
properties:
name:
type: string
The value of the "pet" property is a reference to the schema node
named "Pet".
See details in
https://json-schema.org/understanding-json-schema/structuring.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#ref CesApp#ref}

---

###### `required`<sup>Optional</sup> <a name="required" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.putSchema.parameter.required"></a>

- *Type:* typing.List[str]

Required properties of Type.OBJECT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#required CesApp#required}

---

###### `title`<sup>Optional</sup> <a name="title" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.putSchema.parameter.title"></a>

- *Type:* str

The title of the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#title CesApp#title}

---

###### `unique_items`<sup>Optional</sup> <a name="unique_items" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.putSchema.parameter.uniqueItems"></a>

- *Type:* bool | cdktn.IResolvable

Indicate the items in the array must be unique. Only applies to TYPE.ARRAY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/ces_app#unique_items CesApp#unique_items}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.property.schema">schema</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference">CesAppVariableDeclarationsSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.property.schemaInput">schema_input</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema">CesAppVariableDeclarationsSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarations">CesAppVariableDeclarations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.property.schema"></a>

```python
schema: CesAppVariableDeclarationsSchemaOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference">CesAppVariableDeclarationsSchemaOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `schema_input`<sup>Optional</sup> <a name="schema_input" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.property.schemaInput"></a>

```python
schema_input: CesAppVariableDeclarationsSchema
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema">CesAppVariableDeclarationsSchema</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CesAppVariableDeclarations
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarations">CesAppVariableDeclarations</a>

---


### CesAppVariableDeclarationsSchemaOutputReference <a name="CesAppVariableDeclarationsSchemaOutputReference" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_app

cesApp.CesAppVariableDeclarationsSchemaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.resetAdditionalProperties">reset_additional_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.resetAnyOf">reset_any_of</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.resetDefault">reset_default</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.resetDefs">reset_defs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.resetEnum">reset_enum</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.resetItems">reset_items</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.resetNullable">reset_nullable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.resetPrefixItems">reset_prefix_items</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.resetProperties">reset_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.resetRef">reset_ref</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.resetRequired">reset_required</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.resetTitle">reset_title</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.resetUniqueItems">reset_unique_items</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_additional_properties` <a name="reset_additional_properties" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.resetAdditionalProperties"></a>

```python
def reset_additional_properties() -> None
```

##### `reset_any_of` <a name="reset_any_of" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.resetAnyOf"></a>

```python
def reset_any_of() -> None
```

##### `reset_default` <a name="reset_default" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.resetDefault"></a>

```python
def reset_default() -> None
```

##### `reset_defs` <a name="reset_defs" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.resetDefs"></a>

```python
def reset_defs() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_enum` <a name="reset_enum" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.resetEnum"></a>

```python
def reset_enum() -> None
```

##### `reset_items` <a name="reset_items" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.resetItems"></a>

```python
def reset_items() -> None
```

##### `reset_nullable` <a name="reset_nullable" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.resetNullable"></a>

```python
def reset_nullable() -> None
```

##### `reset_prefix_items` <a name="reset_prefix_items" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.resetPrefixItems"></a>

```python
def reset_prefix_items() -> None
```

##### `reset_properties` <a name="reset_properties" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.resetProperties"></a>

```python
def reset_properties() -> None
```

##### `reset_ref` <a name="reset_ref" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.resetRef"></a>

```python
def reset_ref() -> None
```

##### `reset_required` <a name="reset_required" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.resetRequired"></a>

```python
def reset_required() -> None
```

##### `reset_title` <a name="reset_title" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.resetTitle"></a>

```python
def reset_title() -> None
```

##### `reset_unique_items` <a name="reset_unique_items" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.resetUniqueItems"></a>

```python
def reset_unique_items() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.additionalPropertiesInput">additional_properties_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.anyOfInput">any_of_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.defaultInput">default_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.defsInput">defs_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.enumInput">enum_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.itemsInput">items_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.nullableInput">nullable_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.prefixItemsInput">prefix_items_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.propertiesInput">properties_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.refInput">ref_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.requiredInput">required_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.uniqueItemsInput">unique_items_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.additionalProperties">additional_properties</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.anyOf">any_of</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.defs">defs</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.enum">enum</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.items">items</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.nullable">nullable</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.prefixItems">prefix_items</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.properties">properties</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.required">required</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.uniqueItems">unique_items</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema">CesAppVariableDeclarationsSchema</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `additional_properties_input`<sup>Optional</sup> <a name="additional_properties_input" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.additionalPropertiesInput"></a>

```python
additional_properties_input: str
```

- *Type:* str

---

##### `any_of_input`<sup>Optional</sup> <a name="any_of_input" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.anyOfInput"></a>

```python
any_of_input: str
```

- *Type:* str

---

##### `default_input`<sup>Optional</sup> <a name="default_input" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.defaultInput"></a>

```python
default_input: str
```

- *Type:* str

---

##### `defs_input`<sup>Optional</sup> <a name="defs_input" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.defsInput"></a>

```python
defs_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `enum_input`<sup>Optional</sup> <a name="enum_input" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.enumInput"></a>

```python
enum_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `items_input`<sup>Optional</sup> <a name="items_input" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.itemsInput"></a>

```python
items_input: str
```

- *Type:* str

---

##### `nullable_input`<sup>Optional</sup> <a name="nullable_input" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.nullableInput"></a>

```python
nullable_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `prefix_items_input`<sup>Optional</sup> <a name="prefix_items_input" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.prefixItemsInput"></a>

```python
prefix_items_input: str
```

- *Type:* str

---

##### `properties_input`<sup>Optional</sup> <a name="properties_input" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.propertiesInput"></a>

```python
properties_input: str
```

- *Type:* str

---

##### `ref_input`<sup>Optional</sup> <a name="ref_input" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.refInput"></a>

```python
ref_input: str
```

- *Type:* str

---

##### `required_input`<sup>Optional</sup> <a name="required_input" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.requiredInput"></a>

```python
required_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `unique_items_input`<sup>Optional</sup> <a name="unique_items_input" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.uniqueItemsInput"></a>

```python
unique_items_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `additional_properties`<sup>Required</sup> <a name="additional_properties" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.additionalProperties"></a>

```python
additional_properties: str
```

- *Type:* str

---

##### `any_of`<sup>Required</sup> <a name="any_of" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.anyOf"></a>

```python
any_of: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `defs`<sup>Required</sup> <a name="defs" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.defs"></a>

```python
defs: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `enum`<sup>Required</sup> <a name="enum" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.enum"></a>

```python
enum: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `items`<sup>Required</sup> <a name="items" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.items"></a>

```python
items: str
```

- *Type:* str

---

##### `nullable`<sup>Required</sup> <a name="nullable" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.nullable"></a>

```python
nullable: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `prefix_items`<sup>Required</sup> <a name="prefix_items" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.prefixItems"></a>

```python
prefix_items: str
```

- *Type:* str

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.properties"></a>

```python
properties: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.required"></a>

```python
required: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `unique_items`<sup>Required</sup> <a name="unique_items" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.uniqueItems"></a>

```python
unique_items: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.internalValue"></a>

```python
internal_value: CesAppVariableDeclarationsSchema
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema">CesAppVariableDeclarationsSchema</a>

---



