# `cesApp` Submodule <a name="`cesApp` Submodule" id="@cdktn/provider-google.cesApp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CesApp <a name="CesApp" id="@cdktn/provider-google.cesApp.CesApp"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app google_ces_app}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesApp.CesApp.Initializer"></a>

```java
import io.cdktn.providers.google.ces_app.CesApp;

CesApp.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .appId(java.lang.String)
    .displayName(java.lang.String)
    .location(java.lang.String)
//  .audioProcessingConfig(CesAppAudioProcessingConfig)
//  .clientCertificateSettings(CesAppClientCertificateSettings)
//  .dataStoreSettings(CesAppDataStoreSettings)
//  .defaultChannelProfile(CesAppDefaultChannelProfile)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .evaluationMetricsThresholds(CesAppEvaluationMetricsThresholds)
//  .globalInstruction(java.lang.String)
//  .guardrails(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .languageSettings(CesAppLanguageSettings)
//  .loggingSettings(CesAppLoggingSettings)
//  .metadata(java.util.Map<java.lang.String, java.lang.String>)
//  .modelSettings(CesAppModelSettings)
//  .pinned(java.lang.Boolean|IResolvable)
//  .project(java.lang.String)
//  .rootAgent(java.lang.String)
//  .timeouts(CesAppTimeouts)
//  .timeZoneSettings(CesAppTimeZoneSettings)
//  .toolExecutionMode(java.lang.String)
//  .variableDeclarations(IResolvable|java.util.List<CesAppVariableDeclarations>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.appId">appId</a></code> | <code>java.lang.String</code> | The ID to use for the app, which will become the final component of the app's resource name. |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Display name of the app. |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.audioProcessingConfig">audioProcessingConfig</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfig">CesAppAudioProcessingConfig</a></code> | audio_processing_config block. |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.clientCertificateSettings">clientCertificateSettings</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettings">CesAppClientCertificateSettings</a></code> | client_certificate_settings block. |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.dataStoreSettings">dataStoreSettings</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettings">CesAppDataStoreSettings</a></code> | data_store_settings block. |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.defaultChannelProfile">defaultChannelProfile</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfile">CesAppDefaultChannelProfile</a></code> | default_channel_profile block. |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Human-readable description of the app. |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.evaluationMetricsThresholds">evaluationMetricsThresholds</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholds">CesAppEvaluationMetricsThresholds</a></code> | evaluation_metrics_thresholds block. |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.globalInstruction">globalInstruction</a></code> | <code>java.lang.String</code> | Instructions for all the agents in the app. |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.guardrails">guardrails</a></code> | <code>java.util.List<java.lang.String></code> | List of guardrails for the app. Format: 'projects/{project}/locations/{location}/apps/{app}/guardrails/{guardrail}'. |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app#id CesApp#id}. |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.languageSettings">languageSettings</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettings">CesAppLanguageSettings</a></code> | language_settings block. |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.loggingSettings">loggingSettings</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettings">CesAppLoggingSettings</a></code> | logging_settings block. |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.metadata">metadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Metadata about the app. |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.modelSettings">modelSettings</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppModelSettings">CesAppModelSettings</a></code> | model_settings block. |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.pinned">pinned</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the app is pinned in the app list. |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app#project CesApp#project}. |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.rootAgent">rootAgent</a></code> | <code>java.lang.String</code> | The root agent is the entry point of the app. Format: 'projects/{project}/locations/{location}/apps/{app}/agents/{agent}'. |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeouts">CesAppTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.timeZoneSettings">timeZoneSettings</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeZoneSettings">CesAppTimeZoneSettings</a></code> | time_zone_settings block. |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.toolExecutionMode">toolExecutionMode</a></code> | <code>java.lang.String</code> | The tool execution mode for the app. See the [API reference](https://docs.cloud.google.com/customer-engagement-ai/conversational-agents/ps/reference/rpc/google.cloud.ces.v1#google.cloud.ces.v1.App.ToolExecutionMode) for more details. |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.variableDeclarations">variableDeclarations</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarations">CesAppVariableDeclarations</a>></code> | variable_declarations block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.appId"></a>

- *Type:* java.lang.String

The ID to use for the app, which will become the final component of the app's resource name.

If not provided, a unique ID will be
automatically assigned for the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app#app_id CesApp#app_id}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Display name of the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app#display_name CesApp#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app#location CesApp#location}

---

##### `audioProcessingConfig`<sup>Optional</sup> <a name="audioProcessingConfig" id="@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.audioProcessingConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfig">CesAppAudioProcessingConfig</a>

audio_processing_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app#audio_processing_config CesApp#audio_processing_config}

---

##### `clientCertificateSettings`<sup>Optional</sup> <a name="clientCertificateSettings" id="@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.clientCertificateSettings"></a>

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettings">CesAppClientCertificateSettings</a>

client_certificate_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app#client_certificate_settings CesApp#client_certificate_settings}

---

##### `dataStoreSettings`<sup>Optional</sup> <a name="dataStoreSettings" id="@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.dataStoreSettings"></a>

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettings">CesAppDataStoreSettings</a>

data_store_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app#data_store_settings CesApp#data_store_settings}

---

##### `defaultChannelProfile`<sup>Optional</sup> <a name="defaultChannelProfile" id="@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.defaultChannelProfile"></a>

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfile">CesAppDefaultChannelProfile</a>

default_channel_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app#default_channel_profile CesApp#default_channel_profile}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app#deletion_policy CesApp#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Human-readable description of the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app#description CesApp#description}

---

##### `evaluationMetricsThresholds`<sup>Optional</sup> <a name="evaluationMetricsThresholds" id="@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.evaluationMetricsThresholds"></a>

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholds">CesAppEvaluationMetricsThresholds</a>

evaluation_metrics_thresholds block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app#evaluation_metrics_thresholds CesApp#evaluation_metrics_thresholds}

---

##### `globalInstruction`<sup>Optional</sup> <a name="globalInstruction" id="@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.globalInstruction"></a>

- *Type:* java.lang.String

Instructions for all the agents in the app.

You can use this instruction to set up a stable identity or personality
across all the agents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app#global_instruction CesApp#global_instruction}

---

##### `guardrails`<sup>Optional</sup> <a name="guardrails" id="@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.guardrails"></a>

- *Type:* java.util.List<java.lang.String>

List of guardrails for the app. Format: 'projects/{project}/locations/{location}/apps/{app}/guardrails/{guardrail}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app#guardrails CesApp#guardrails}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app#id CesApp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `languageSettings`<sup>Optional</sup> <a name="languageSettings" id="@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.languageSettings"></a>

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettings">CesAppLanguageSettings</a>

language_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app#language_settings CesApp#language_settings}

---

##### `loggingSettings`<sup>Optional</sup> <a name="loggingSettings" id="@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.loggingSettings"></a>

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettings">CesAppLoggingSettings</a>

logging_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app#logging_settings CesApp#logging_settings}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.metadata"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Metadata about the app.

This field can be used to store additional
information relevant to the app's details or intended usages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app#metadata CesApp#metadata}

---

##### `modelSettings`<sup>Optional</sup> <a name="modelSettings" id="@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.modelSettings"></a>

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppModelSettings">CesAppModelSettings</a>

model_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app#model_settings CesApp#model_settings}

---

##### `pinned`<sup>Optional</sup> <a name="pinned" id="@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.pinned"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the app is pinned in the app list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app#pinned CesApp#pinned}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app#project CesApp#project}.

---

##### `rootAgent`<sup>Optional</sup> <a name="rootAgent" id="@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.rootAgent"></a>

- *Type:* java.lang.String

The root agent is the entry point of the app. Format: 'projects/{project}/locations/{location}/apps/{app}/agents/{agent}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app#root_agent CesApp#root_agent}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppTimeouts">CesAppTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app#timeouts CesApp#timeouts}

---

##### `timeZoneSettings`<sup>Optional</sup> <a name="timeZoneSettings" id="@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.timeZoneSettings"></a>

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppTimeZoneSettings">CesAppTimeZoneSettings</a>

time_zone_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app#time_zone_settings CesApp#time_zone_settings}

---

##### `toolExecutionMode`<sup>Optional</sup> <a name="toolExecutionMode" id="@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.toolExecutionMode"></a>

- *Type:* java.lang.String

The tool execution mode for the app. See the [API reference](https://docs.cloud.google.com/customer-engagement-ai/conversational-agents/ps/reference/rpc/google.cloud.ces.v1#google.cloud.ces.v1.App.ToolExecutionMode) for more details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app#tool_execution_mode CesApp#tool_execution_mode}

---

##### `variableDeclarations`<sup>Optional</sup> <a name="variableDeclarations" id="@cdktn/provider-google.cesApp.CesApp.Initializer.parameter.variableDeclarations"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarations">CesAppVariableDeclarations</a>>

variable_declarations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app#variable_declarations CesApp#variable_declarations}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.putAudioProcessingConfig">putAudioProcessingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.putClientCertificateSettings">putClientCertificateSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.putDataStoreSettings">putDataStoreSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.putDefaultChannelProfile">putDefaultChannelProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.putEvaluationMetricsThresholds">putEvaluationMetricsThresholds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.putLanguageSettings">putLanguageSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.putLoggingSettings">putLoggingSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.putModelSettings">putModelSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.putTimeZoneSettings">putTimeZoneSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.putVariableDeclarations">putVariableDeclarations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.resetAudioProcessingConfig">resetAudioProcessingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.resetClientCertificateSettings">resetClientCertificateSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.resetDataStoreSettings">resetDataStoreSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.resetDefaultChannelProfile">resetDefaultChannelProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.resetEvaluationMetricsThresholds">resetEvaluationMetricsThresholds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.resetGlobalInstruction">resetGlobalInstruction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.resetGuardrails">resetGuardrails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.resetLanguageSettings">resetLanguageSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.resetLoggingSettings">resetLoggingSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.resetModelSettings">resetModelSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.resetPinned">resetPinned</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.resetRootAgent">resetRootAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.resetTimeZoneSettings">resetTimeZoneSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.resetToolExecutionMode">resetToolExecutionMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.resetVariableDeclarations">resetVariableDeclarations</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesApp.CesApp.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.cesApp.CesApp.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.cesApp.CesApp.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.cesApp.CesApp.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.cesApp.CesApp.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesApp.CesApp.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.cesApp.CesApp.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.cesApp.CesApp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.cesApp.CesApp.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.cesApp.CesApp.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.cesApp.CesApp.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.cesApp.CesApp.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.cesApp.CesApp.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.cesApp.CesApp.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesApp.CesApp.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesApp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesApp.CesApp.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesApp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesApp.CesApp.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesApp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesApp.CesApp.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesApp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesApp.CesApp.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesApp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesApp.CesApp.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesApp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesApp.CesApp.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesApp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesApp.CesApp.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesApp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesApp.CesApp.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesApp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.cesApp.CesApp.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.cesApp.CesApp.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cesApp.CesApp.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cesApp.CesApp.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesApp.CesApp.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesApp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.cesApp.CesApp.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cesApp.CesApp.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.cesApp.CesApp.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.cesApp.CesApp.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.cesApp.CesApp.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.cesApp.CesApp.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cesApp.CesApp.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAudioProcessingConfig` <a name="putAudioProcessingConfig" id="@cdktn/provider-google.cesApp.CesApp.putAudioProcessingConfig"></a>

```java
public void putAudioProcessingConfig(CesAppAudioProcessingConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesApp.CesApp.putAudioProcessingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfig">CesAppAudioProcessingConfig</a>

---

##### `putClientCertificateSettings` <a name="putClientCertificateSettings" id="@cdktn/provider-google.cesApp.CesApp.putClientCertificateSettings"></a>

```java
public void putClientCertificateSettings(CesAppClientCertificateSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesApp.CesApp.putClientCertificateSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettings">CesAppClientCertificateSettings</a>

---

##### `putDataStoreSettings` <a name="putDataStoreSettings" id="@cdktn/provider-google.cesApp.CesApp.putDataStoreSettings"></a>

```java
public void putDataStoreSettings(CesAppDataStoreSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesApp.CesApp.putDataStoreSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettings">CesAppDataStoreSettings</a>

---

##### `putDefaultChannelProfile` <a name="putDefaultChannelProfile" id="@cdktn/provider-google.cesApp.CesApp.putDefaultChannelProfile"></a>

```java
public void putDefaultChannelProfile(CesAppDefaultChannelProfile value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesApp.CesApp.putDefaultChannelProfile.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfile">CesAppDefaultChannelProfile</a>

---

##### `putEvaluationMetricsThresholds` <a name="putEvaluationMetricsThresholds" id="@cdktn/provider-google.cesApp.CesApp.putEvaluationMetricsThresholds"></a>

```java
public void putEvaluationMetricsThresholds(CesAppEvaluationMetricsThresholds value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesApp.CesApp.putEvaluationMetricsThresholds.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholds">CesAppEvaluationMetricsThresholds</a>

---

##### `putLanguageSettings` <a name="putLanguageSettings" id="@cdktn/provider-google.cesApp.CesApp.putLanguageSettings"></a>

```java
public void putLanguageSettings(CesAppLanguageSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesApp.CesApp.putLanguageSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettings">CesAppLanguageSettings</a>

---

##### `putLoggingSettings` <a name="putLoggingSettings" id="@cdktn/provider-google.cesApp.CesApp.putLoggingSettings"></a>

```java
public void putLoggingSettings(CesAppLoggingSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesApp.CesApp.putLoggingSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettings">CesAppLoggingSettings</a>

---

##### `putModelSettings` <a name="putModelSettings" id="@cdktn/provider-google.cesApp.CesApp.putModelSettings"></a>

```java
public void putModelSettings(CesAppModelSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesApp.CesApp.putModelSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppModelSettings">CesAppModelSettings</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.cesApp.CesApp.putTimeouts"></a>

```java
public void putTimeouts(CesAppTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesApp.CesApp.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppTimeouts">CesAppTimeouts</a>

---

##### `putTimeZoneSettings` <a name="putTimeZoneSettings" id="@cdktn/provider-google.cesApp.CesApp.putTimeZoneSettings"></a>

```java
public void putTimeZoneSettings(CesAppTimeZoneSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesApp.CesApp.putTimeZoneSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppTimeZoneSettings">CesAppTimeZoneSettings</a>

---

##### `putVariableDeclarations` <a name="putVariableDeclarations" id="@cdktn/provider-google.cesApp.CesApp.putVariableDeclarations"></a>

```java
public void putVariableDeclarations(IResolvable|java.util.List<CesAppVariableDeclarations> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesApp.CesApp.putVariableDeclarations.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarations">CesAppVariableDeclarations</a>>

---

##### `resetAudioProcessingConfig` <a name="resetAudioProcessingConfig" id="@cdktn/provider-google.cesApp.CesApp.resetAudioProcessingConfig"></a>

```java
public void resetAudioProcessingConfig()
```

##### `resetClientCertificateSettings` <a name="resetClientCertificateSettings" id="@cdktn/provider-google.cesApp.CesApp.resetClientCertificateSettings"></a>

```java
public void resetClientCertificateSettings()
```

##### `resetDataStoreSettings` <a name="resetDataStoreSettings" id="@cdktn/provider-google.cesApp.CesApp.resetDataStoreSettings"></a>

```java
public void resetDataStoreSettings()
```

##### `resetDefaultChannelProfile` <a name="resetDefaultChannelProfile" id="@cdktn/provider-google.cesApp.CesApp.resetDefaultChannelProfile"></a>

```java
public void resetDefaultChannelProfile()
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.cesApp.CesApp.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.cesApp.CesApp.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEvaluationMetricsThresholds` <a name="resetEvaluationMetricsThresholds" id="@cdktn/provider-google.cesApp.CesApp.resetEvaluationMetricsThresholds"></a>

```java
public void resetEvaluationMetricsThresholds()
```

##### `resetGlobalInstruction` <a name="resetGlobalInstruction" id="@cdktn/provider-google.cesApp.CesApp.resetGlobalInstruction"></a>

```java
public void resetGlobalInstruction()
```

##### `resetGuardrails` <a name="resetGuardrails" id="@cdktn/provider-google.cesApp.CesApp.resetGuardrails"></a>

```java
public void resetGuardrails()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.cesApp.CesApp.resetId"></a>

```java
public void resetId()
```

##### `resetLanguageSettings` <a name="resetLanguageSettings" id="@cdktn/provider-google.cesApp.CesApp.resetLanguageSettings"></a>

```java
public void resetLanguageSettings()
```

##### `resetLoggingSettings` <a name="resetLoggingSettings" id="@cdktn/provider-google.cesApp.CesApp.resetLoggingSettings"></a>

```java
public void resetLoggingSettings()
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktn/provider-google.cesApp.CesApp.resetMetadata"></a>

```java
public void resetMetadata()
```

##### `resetModelSettings` <a name="resetModelSettings" id="@cdktn/provider-google.cesApp.CesApp.resetModelSettings"></a>

```java
public void resetModelSettings()
```

##### `resetPinned` <a name="resetPinned" id="@cdktn/provider-google.cesApp.CesApp.resetPinned"></a>

```java
public void resetPinned()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.cesApp.CesApp.resetProject"></a>

```java
public void resetProject()
```

##### `resetRootAgent` <a name="resetRootAgent" id="@cdktn/provider-google.cesApp.CesApp.resetRootAgent"></a>

```java
public void resetRootAgent()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.cesApp.CesApp.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTimeZoneSettings` <a name="resetTimeZoneSettings" id="@cdktn/provider-google.cesApp.CesApp.resetTimeZoneSettings"></a>

```java
public void resetTimeZoneSettings()
```

##### `resetToolExecutionMode` <a name="resetToolExecutionMode" id="@cdktn/provider-google.cesApp.CesApp.resetToolExecutionMode"></a>

```java
public void resetToolExecutionMode()
```

##### `resetVariableDeclarations` <a name="resetVariableDeclarations" id="@cdktn/provider-google.cesApp.CesApp.resetVariableDeclarations"></a>

```java
public void resetVariableDeclarations()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CesApp resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.cesApp.CesApp.isConstruct"></a>

```java
import io.cdktn.providers.google.ces_app.CesApp;

CesApp.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.cesApp.CesApp.isTerraformElement"></a>

```java
import io.cdktn.providers.google.ces_app.CesApp;

CesApp.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.cesApp.CesApp.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.cesApp.CesApp.isTerraformResource"></a>

```java
import io.cdktn.providers.google.ces_app.CesApp;

CesApp.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.cesApp.CesApp.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.cesApp.CesApp.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.ces_app.CesApp;

CesApp.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CesApp.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a CesApp resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.cesApp.CesApp.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.cesApp.CesApp.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CesApp to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.cesApp.CesApp.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CesApp that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cesApp.CesApp.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the CesApp to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.audioProcessingConfig">audioProcessingConfig</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference">CesAppAudioProcessingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.clientCertificateSettings">clientCertificateSettings</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference">CesAppClientCertificateSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.dataStoreSettings">dataStoreSettings</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference">CesAppDataStoreSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.defaultChannelProfile">defaultChannelProfile</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference">CesAppDefaultChannelProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.deploymentCount">deploymentCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.evaluationMetricsThresholds">evaluationMetricsThresholds</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference">CesAppEvaluationMetricsThresholdsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.languageSettings">languageSettings</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference">CesAppLanguageSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.loggingSettings">loggingSettings</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference">CesAppLoggingSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.modelSettings">modelSettings</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference">CesAppModelSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference">CesAppTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.timeZoneSettings">timeZoneSettings</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference">CesAppTimeZoneSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.variableDeclarations">variableDeclarations</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsList">CesAppVariableDeclarationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.appIdInput">appIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.audioProcessingConfigInput">audioProcessingConfigInput</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfig">CesAppAudioProcessingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.clientCertificateSettingsInput">clientCertificateSettingsInput</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettings">CesAppClientCertificateSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.dataStoreSettingsInput">dataStoreSettingsInput</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettings">CesAppDataStoreSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.defaultChannelProfileInput">defaultChannelProfileInput</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfile">CesAppDefaultChannelProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.evaluationMetricsThresholdsInput">evaluationMetricsThresholdsInput</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholds">CesAppEvaluationMetricsThresholds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.globalInstructionInput">globalInstructionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.guardrailsInput">guardrailsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.languageSettingsInput">languageSettingsInput</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettings">CesAppLanguageSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.loggingSettingsInput">loggingSettingsInput</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettings">CesAppLoggingSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.metadataInput">metadataInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.modelSettingsInput">modelSettingsInput</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppModelSettings">CesAppModelSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.pinnedInput">pinnedInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.rootAgentInput">rootAgentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.cesApp.CesAppTimeouts">CesAppTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.timeZoneSettingsInput">timeZoneSettingsInput</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeZoneSettings">CesAppTimeZoneSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.toolExecutionModeInput">toolExecutionModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.variableDeclarationsInput">variableDeclarationsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarations">CesAppVariableDeclarations</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.appId">appId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.globalInstruction">globalInstruction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.guardrails">guardrails</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.metadata">metadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.pinned">pinned</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.rootAgent">rootAgent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.toolExecutionMode">toolExecutionMode</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.cesApp.CesApp.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.cesApp.CesApp.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesApp.CesApp.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.cesApp.CesApp.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.cesApp.CesApp.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.cesApp.CesApp.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.cesApp.CesApp.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.cesApp.CesApp.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.cesApp.CesApp.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.cesApp.CesApp.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.cesApp.CesApp.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.cesApp.CesApp.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cesApp.CesApp.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.cesApp.CesApp.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `audioProcessingConfig`<sup>Required</sup> <a name="audioProcessingConfig" id="@cdktn/provider-google.cesApp.CesApp.property.audioProcessingConfig"></a>

```java
public CesAppAudioProcessingConfigOutputReference getAudioProcessingConfig();
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference">CesAppAudioProcessingConfigOutputReference</a>

---

##### `clientCertificateSettings`<sup>Required</sup> <a name="clientCertificateSettings" id="@cdktn/provider-google.cesApp.CesApp.property.clientCertificateSettings"></a>

```java
public CesAppClientCertificateSettingsOutputReference getClientCertificateSettings();
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference">CesAppClientCertificateSettingsOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.cesApp.CesApp.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `dataStoreSettings`<sup>Required</sup> <a name="dataStoreSettings" id="@cdktn/provider-google.cesApp.CesApp.property.dataStoreSettings"></a>

```java
public CesAppDataStoreSettingsOutputReference getDataStoreSettings();
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference">CesAppDataStoreSettingsOutputReference</a>

---

##### `defaultChannelProfile`<sup>Required</sup> <a name="defaultChannelProfile" id="@cdktn/provider-google.cesApp.CesApp.property.defaultChannelProfile"></a>

```java
public CesAppDefaultChannelProfileOutputReference getDefaultChannelProfile();
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference">CesAppDefaultChannelProfileOutputReference</a>

---

##### `deploymentCount`<sup>Required</sup> <a name="deploymentCount" id="@cdktn/provider-google.cesApp.CesApp.property.deploymentCount"></a>

```java
public java.lang.Number getDeploymentCount();
```

- *Type:* java.lang.Number

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.cesApp.CesApp.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `evaluationMetricsThresholds`<sup>Required</sup> <a name="evaluationMetricsThresholds" id="@cdktn/provider-google.cesApp.CesApp.property.evaluationMetricsThresholds"></a>

```java
public CesAppEvaluationMetricsThresholdsOutputReference getEvaluationMetricsThresholds();
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference">CesAppEvaluationMetricsThresholdsOutputReference</a>

---

##### `languageSettings`<sup>Required</sup> <a name="languageSettings" id="@cdktn/provider-google.cesApp.CesApp.property.languageSettings"></a>

```java
public CesAppLanguageSettingsOutputReference getLanguageSettings();
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference">CesAppLanguageSettingsOutputReference</a>

---

##### `loggingSettings`<sup>Required</sup> <a name="loggingSettings" id="@cdktn/provider-google.cesApp.CesApp.property.loggingSettings"></a>

```java
public CesAppLoggingSettingsOutputReference getLoggingSettings();
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference">CesAppLoggingSettingsOutputReference</a>

---

##### `modelSettings`<sup>Required</sup> <a name="modelSettings" id="@cdktn/provider-google.cesApp.CesApp.property.modelSettings"></a>

```java
public CesAppModelSettingsOutputReference getModelSettings();
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference">CesAppModelSettingsOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.cesApp.CesApp.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.cesApp.CesApp.property.timeouts"></a>

```java
public CesAppTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference">CesAppTimeoutsOutputReference</a>

---

##### `timeZoneSettings`<sup>Required</sup> <a name="timeZoneSettings" id="@cdktn/provider-google.cesApp.CesApp.property.timeZoneSettings"></a>

```java
public CesAppTimeZoneSettingsOutputReference getTimeZoneSettings();
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference">CesAppTimeZoneSettingsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.cesApp.CesApp.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `variableDeclarations`<sup>Required</sup> <a name="variableDeclarations" id="@cdktn/provider-google.cesApp.CesApp.property.variableDeclarations"></a>

```java
public CesAppVariableDeclarationsList getVariableDeclarations();
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsList">CesAppVariableDeclarationsList</a>

---

##### `appIdInput`<sup>Optional</sup> <a name="appIdInput" id="@cdktn/provider-google.cesApp.CesApp.property.appIdInput"></a>

```java
public java.lang.String getAppIdInput();
```

- *Type:* java.lang.String

---

##### `audioProcessingConfigInput`<sup>Optional</sup> <a name="audioProcessingConfigInput" id="@cdktn/provider-google.cesApp.CesApp.property.audioProcessingConfigInput"></a>

```java
public CesAppAudioProcessingConfig getAudioProcessingConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfig">CesAppAudioProcessingConfig</a>

---

##### `clientCertificateSettingsInput`<sup>Optional</sup> <a name="clientCertificateSettingsInput" id="@cdktn/provider-google.cesApp.CesApp.property.clientCertificateSettingsInput"></a>

```java
public CesAppClientCertificateSettings getClientCertificateSettingsInput();
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettings">CesAppClientCertificateSettings</a>

---

##### `dataStoreSettingsInput`<sup>Optional</sup> <a name="dataStoreSettingsInput" id="@cdktn/provider-google.cesApp.CesApp.property.dataStoreSettingsInput"></a>

```java
public CesAppDataStoreSettings getDataStoreSettingsInput();
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettings">CesAppDataStoreSettings</a>

---

##### `defaultChannelProfileInput`<sup>Optional</sup> <a name="defaultChannelProfileInput" id="@cdktn/provider-google.cesApp.CesApp.property.defaultChannelProfileInput"></a>

```java
public CesAppDefaultChannelProfile getDefaultChannelProfileInput();
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfile">CesAppDefaultChannelProfile</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.cesApp.CesApp.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.cesApp.CesApp.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.cesApp.CesApp.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `evaluationMetricsThresholdsInput`<sup>Optional</sup> <a name="evaluationMetricsThresholdsInput" id="@cdktn/provider-google.cesApp.CesApp.property.evaluationMetricsThresholdsInput"></a>

```java
public CesAppEvaluationMetricsThresholds getEvaluationMetricsThresholdsInput();
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholds">CesAppEvaluationMetricsThresholds</a>

---

##### `globalInstructionInput`<sup>Optional</sup> <a name="globalInstructionInput" id="@cdktn/provider-google.cesApp.CesApp.property.globalInstructionInput"></a>

```java
public java.lang.String getGlobalInstructionInput();
```

- *Type:* java.lang.String

---

##### `guardrailsInput`<sup>Optional</sup> <a name="guardrailsInput" id="@cdktn/provider-google.cesApp.CesApp.property.guardrailsInput"></a>

```java
public java.util.List<java.lang.String> getGuardrailsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.cesApp.CesApp.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `languageSettingsInput`<sup>Optional</sup> <a name="languageSettingsInput" id="@cdktn/provider-google.cesApp.CesApp.property.languageSettingsInput"></a>

```java
public CesAppLanguageSettings getLanguageSettingsInput();
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettings">CesAppLanguageSettings</a>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.cesApp.CesApp.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `loggingSettingsInput`<sup>Optional</sup> <a name="loggingSettingsInput" id="@cdktn/provider-google.cesApp.CesApp.property.loggingSettingsInput"></a>

```java
public CesAppLoggingSettings getLoggingSettingsInput();
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettings">CesAppLoggingSettings</a>

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktn/provider-google.cesApp.CesApp.property.metadataInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadataInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `modelSettingsInput`<sup>Optional</sup> <a name="modelSettingsInput" id="@cdktn/provider-google.cesApp.CesApp.property.modelSettingsInput"></a>

```java
public CesAppModelSettings getModelSettingsInput();
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppModelSettings">CesAppModelSettings</a>

---

##### `pinnedInput`<sup>Optional</sup> <a name="pinnedInput" id="@cdktn/provider-google.cesApp.CesApp.property.pinnedInput"></a>

```java
public java.lang.Boolean|IResolvable getPinnedInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.cesApp.CesApp.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `rootAgentInput`<sup>Optional</sup> <a name="rootAgentInput" id="@cdktn/provider-google.cesApp.CesApp.property.rootAgentInput"></a>

```java
public java.lang.String getRootAgentInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.cesApp.CesApp.property.timeoutsInput"></a>

```java
public IResolvable|CesAppTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.cesApp.CesAppTimeouts">CesAppTimeouts</a>

---

##### `timeZoneSettingsInput`<sup>Optional</sup> <a name="timeZoneSettingsInput" id="@cdktn/provider-google.cesApp.CesApp.property.timeZoneSettingsInput"></a>

```java
public CesAppTimeZoneSettings getTimeZoneSettingsInput();
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppTimeZoneSettings">CesAppTimeZoneSettings</a>

---

##### `toolExecutionModeInput`<sup>Optional</sup> <a name="toolExecutionModeInput" id="@cdktn/provider-google.cesApp.CesApp.property.toolExecutionModeInput"></a>

```java
public java.lang.String getToolExecutionModeInput();
```

- *Type:* java.lang.String

---

##### `variableDeclarationsInput`<sup>Optional</sup> <a name="variableDeclarationsInput" id="@cdktn/provider-google.cesApp.CesApp.property.variableDeclarationsInput"></a>

```java
public IResolvable|java.util.List<CesAppVariableDeclarations> getVariableDeclarationsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarations">CesAppVariableDeclarations</a>>

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktn/provider-google.cesApp.CesApp.property.appId"></a>

```java
public java.lang.String getAppId();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.cesApp.CesApp.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.cesApp.CesApp.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.cesApp.CesApp.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `globalInstruction`<sup>Required</sup> <a name="globalInstruction" id="@cdktn/provider-google.cesApp.CesApp.property.globalInstruction"></a>

```java
public java.lang.String getGlobalInstruction();
```

- *Type:* java.lang.String

---

##### `guardrails`<sup>Required</sup> <a name="guardrails" id="@cdktn/provider-google.cesApp.CesApp.property.guardrails"></a>

```java
public java.util.List<java.lang.String> getGuardrails();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cesApp.CesApp.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.cesApp.CesApp.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-google.cesApp.CesApp.property.metadata"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadata();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `pinned`<sup>Required</sup> <a name="pinned" id="@cdktn/provider-google.cesApp.CesApp.property.pinned"></a>

```java
public java.lang.Boolean|IResolvable getPinned();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.cesApp.CesApp.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `rootAgent`<sup>Required</sup> <a name="rootAgent" id="@cdktn/provider-google.cesApp.CesApp.property.rootAgent"></a>

```java
public java.lang.String getRootAgent();
```

- *Type:* java.lang.String

---

##### `toolExecutionMode`<sup>Required</sup> <a name="toolExecutionMode" id="@cdktn/provider-google.cesApp.CesApp.property.toolExecutionMode"></a>

```java
public java.lang.String getToolExecutionMode();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesApp.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.cesApp.CesApp.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CesAppAudioProcessingConfig <a name="CesAppAudioProcessingConfig" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfig.Initializer"></a>

```java
import io.cdktn.providers.google.ces_app.CesAppAudioProcessingConfig;

CesAppAudioProcessingConfig.builder()
//  .ambientSoundConfig(CesAppAudioProcessingConfigAmbientSoundConfig)
//  .bargeInConfig(CesAppAudioProcessingConfigBargeInConfig)
//  .inactivityTimeout(java.lang.String)
//  .synthesizeSpeechConfigs(IResolvable|java.util.List<CesAppAudioProcessingConfigSynthesizeSpeechConfigs>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfig.property.ambientSoundConfig">ambientSoundConfig</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfig">CesAppAudioProcessingConfigAmbientSoundConfig</a></code> | ambient_sound_config block. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfig.property.bargeInConfig">bargeInConfig</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfig">CesAppAudioProcessingConfigBargeInConfig</a></code> | barge_in_config block. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfig.property.inactivityTimeout">inactivityTimeout</a></code> | <code>java.lang.String</code> | The duration of user inactivity (no speech or interaction) before the agent prompts the user for reengagement. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfig.property.synthesizeSpeechConfigs">synthesizeSpeechConfigs</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigs">CesAppAudioProcessingConfigSynthesizeSpeechConfigs</a>></code> | synthesize_speech_configs block. |

---

##### `ambientSoundConfig`<sup>Optional</sup> <a name="ambientSoundConfig" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfig.property.ambientSoundConfig"></a>

```java
public CesAppAudioProcessingConfigAmbientSoundConfig getAmbientSoundConfig();
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfig">CesAppAudioProcessingConfigAmbientSoundConfig</a>

ambient_sound_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app#ambient_sound_config CesApp#ambient_sound_config}

---

##### `bargeInConfig`<sup>Optional</sup> <a name="bargeInConfig" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfig.property.bargeInConfig"></a>

```java
public CesAppAudioProcessingConfigBargeInConfig getBargeInConfig();
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfig">CesAppAudioProcessingConfigBargeInConfig</a>

barge_in_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app#barge_in_config CesApp#barge_in_config}

---

##### `inactivityTimeout`<sup>Optional</sup> <a name="inactivityTimeout" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfig.property.inactivityTimeout"></a>

```java
public java.lang.String getInactivityTimeout();
```

- *Type:* java.lang.String

The duration of user inactivity (no speech or interaction) before the agent prompts the user for reengagement.

If not set, the agent will not prompt
the user for reengagement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app#inactivity_timeout CesApp#inactivity_timeout}

---

##### `synthesizeSpeechConfigs`<sup>Optional</sup> <a name="synthesizeSpeechConfigs" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfig.property.synthesizeSpeechConfigs"></a>

```java
public IResolvable|java.util.List<CesAppAudioProcessingConfigSynthesizeSpeechConfigs> getSynthesizeSpeechConfigs();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigs">CesAppAudioProcessingConfigSynthesizeSpeechConfigs</a>>

synthesize_speech_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app#synthesize_speech_configs CesApp#synthesize_speech_configs}

---

### CesAppAudioProcessingConfigAmbientSoundConfig <a name="CesAppAudioProcessingConfigAmbientSoundConfig" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfig.Initializer"></a>

```java
import io.cdktn.providers.google.ces_app.CesAppAudioProcessingConfigAmbientSoundConfig;

CesAppAudioProcessingConfigAmbientSoundConfig.builder()
//  .gcsUri(java.lang.String)
//  .prebuiltAmbientSound(java.lang.String)
//  .volumeGainDb(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfig.property.gcsUri">gcsUri</a></code> | <code>java.lang.String</code> | Ambient noise as a mono-channel, 16kHz WAV file stored in [Cloud Storage](https://cloud.google.com/storage). Note: Please make sure the CES service agent 'service-@gcp-sa-ces.iam.gserviceaccount.com' has 'storage.objects.get' permission to the Cloud Storage object. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfig.property.prebuiltAmbientSound">prebuiltAmbientSound</a></code> | <code>java.lang.String</code> | Name of the prebuilt ambient sound. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfig.property.volumeGainDb">volumeGainDb</a></code> | <code>java.lang.Number</code> | Volume gain (in dB) of the normal native volume supported by ambient noise, in the range [-96.0, 16.0]. If unset, or set to a value of 0.0 (dB), will play at normal native signal amplitude. A value of -6.0 (dB) will play at approximately half the amplitude of the normal native signal amplitude. A value of +6.0 (dB) will play at approximately twice the amplitude of the normal native signal amplitude. We strongly recommend not to exceed +10 (dB) as there's usually no effective increase in loudness for any value greater than that. |

---

##### `gcsUri`<sup>Optional</sup> <a name="gcsUri" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfig.property.gcsUri"></a>

```java
public java.lang.String getGcsUri();
```

- *Type:* java.lang.String

Ambient noise as a mono-channel, 16kHz WAV file stored in [Cloud Storage](https://cloud.google.com/storage). Note: Please make sure the CES service agent 'service-@gcp-sa-ces.iam.gserviceaccount.com' has 'storage.objects.get' permission to the Cloud Storage object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app#gcs_uri CesApp#gcs_uri}

---

##### `prebuiltAmbientSound`<sup>Optional</sup> <a name="prebuiltAmbientSound" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfig.property.prebuiltAmbientSound"></a>

```java
public java.lang.String getPrebuiltAmbientSound();
```

- *Type:* java.lang.String

Name of the prebuilt ambient sound.

Valid values are: - "coffee_shop" - "keyboard" - "keypad" - "hum"
-"office_1" - "office_2" - "office_3"
-"room_1" - "room_2" - "room_3"
-"room_4" - "room_5" - "air_conditioner"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app#prebuilt_ambient_sound CesApp#prebuilt_ambient_sound}

---

##### `volumeGainDb`<sup>Optional</sup> <a name="volumeGainDb" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfig.property.volumeGainDb"></a>

```java
public java.lang.Number getVolumeGainDb();
```

- *Type:* java.lang.Number

Volume gain (in dB) of the normal native volume supported by ambient noise, in the range [-96.0, 16.0]. If unset, or set to a value of 0.0 (dB), will play at normal native signal amplitude. A value of -6.0 (dB) will play at approximately half the amplitude of the normal native signal amplitude. A value of +6.0 (dB) will play at approximately twice the amplitude of the normal native signal amplitude. We strongly recommend not to exceed +10 (dB) as there's usually no effective increase in loudness for any value greater than that.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app#volume_gain_db CesApp#volume_gain_db}

---

### CesAppAudioProcessingConfigBargeInConfig <a name="CesAppAudioProcessingConfigBargeInConfig" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfig.Initializer"></a>

```java
import io.cdktn.providers.google.ces_app.CesAppAudioProcessingConfigBargeInConfig;

CesAppAudioProcessingConfigBargeInConfig.builder()
//  .bargeInAwareness(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfig.property.bargeInAwareness">bargeInAwareness</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If enabled, the agent will adapt its next response based on the assumption that the user hasn't heard the full preceding agent message. |

---

##### `bargeInAwareness`<sup>Optional</sup> <a name="bargeInAwareness" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfig.property.bargeInAwareness"></a>

```java
public java.lang.Boolean|IResolvable getBargeInAwareness();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If enabled, the agent will adapt its next response based on the assumption that the user hasn't heard the full preceding agent message.

This should not be used in scenarios where agent responses are displayed
visually.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app#barge_in_awareness CesApp#barge_in_awareness}

---

### CesAppAudioProcessingConfigSynthesizeSpeechConfigs <a name="CesAppAudioProcessingConfigSynthesizeSpeechConfigs" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigs.Initializer"></a>

```java
import io.cdktn.providers.google.ces_app.CesAppAudioProcessingConfigSynthesizeSpeechConfigs;

CesAppAudioProcessingConfigSynthesizeSpeechConfigs.builder()
    .languageCode(java.lang.String)
//  .speakingRate(java.lang.Number)
//  .voice(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigs.property.languageCode">languageCode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app#language_code CesApp#language_code}. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigs.property.speakingRate">speakingRate</a></code> | <code>java.lang.Number</code> | The speaking rate/speed in the range [0.25, 2.0]. 1.0 is the normal native speed supported by the specific voice. 2.0 is twice as fast, and 0.5 is half as fast. Values outside of the range [0.25, 2.0] will return an error. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigs.property.voice">voice</a></code> | <code>java.lang.String</code> | The name of the voice. |

---

##### `languageCode`<sup>Required</sup> <a name="languageCode" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigs.property.languageCode"></a>

```java
public java.lang.String getLanguageCode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app#language_code CesApp#language_code}.

---

##### `speakingRate`<sup>Optional</sup> <a name="speakingRate" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigs.property.speakingRate"></a>

```java
public java.lang.Number getSpeakingRate();
```

- *Type:* java.lang.Number

The speaking rate/speed in the range [0.25, 2.0]. 1.0 is the normal native speed supported by the specific voice. 2.0 is twice as fast, and 0.5 is half as fast. Values outside of the range [0.25, 2.0] will return an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app#speaking_rate CesApp#speaking_rate}

---

##### `voice`<sup>Optional</sup> <a name="voice" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigs.property.voice"></a>

```java
public java.lang.String getVoice();
```

- *Type:* java.lang.String

The name of the voice.

If not set, the service will choose a
voice based on the other parameters such as language_code.
For the list of available voices, please refer to Supported voices and
languages from Cloud Text-to-Speech.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app#voice CesApp#voice}

---

### CesAppClientCertificateSettings <a name="CesAppClientCertificateSettings" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettings.Initializer"></a>

```java
import io.cdktn.providers.google.ces_app.CesAppClientCertificateSettings;

CesAppClientCertificateSettings.builder()
    .privateKey(java.lang.String)
    .tlsCertificate(java.lang.String)
//  .passphrase(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettings.property.privateKey">privateKey</a></code> | <code>java.lang.String</code> | The name of the SecretManager secret version resource storing the private key encoded in PEM format. Format: projects/{project}/secrets/{secret}/versions/{version}. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettings.property.tlsCertificate">tlsCertificate</a></code> | <code>java.lang.String</code> | The TLS certificate encoded in PEM format. This string must include the begin header and end footer lines. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettings.property.passphrase">passphrase</a></code> | <code>java.lang.String</code> | The passphrase to decrypt the private key. Should be left unset if the private key is not encrypted. |

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettings.property.privateKey"></a>

```java
public java.lang.String getPrivateKey();
```

- *Type:* java.lang.String

The name of the SecretManager secret version resource storing the private key encoded in PEM format. Format: projects/{project}/secrets/{secret}/versions/{version}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app#private_key CesApp#private_key}

---

##### `tlsCertificate`<sup>Required</sup> <a name="tlsCertificate" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettings.property.tlsCertificate"></a>

```java
public java.lang.String getTlsCertificate();
```

- *Type:* java.lang.String

The TLS certificate encoded in PEM format. This string must include the begin header and end footer lines.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app#tls_certificate CesApp#tls_certificate}

---

##### `passphrase`<sup>Optional</sup> <a name="passphrase" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettings.property.passphrase"></a>

```java
public java.lang.String getPassphrase();
```

- *Type:* java.lang.String

The passphrase to decrypt the private key. Should be left unset if the private key is not encrypted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app#passphrase CesApp#passphrase}

---

### CesAppConfig <a name="CesAppConfig" id="@cdktn/provider-google.cesApp.CesAppConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesApp.CesAppConfig.Initializer"></a>

```java
import io.cdktn.providers.google.ces_app.CesAppConfig;

CesAppConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .appId(java.lang.String)
    .displayName(java.lang.String)
    .location(java.lang.String)
//  .audioProcessingConfig(CesAppAudioProcessingConfig)
//  .clientCertificateSettings(CesAppClientCertificateSettings)
//  .dataStoreSettings(CesAppDataStoreSettings)
//  .defaultChannelProfile(CesAppDefaultChannelProfile)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .evaluationMetricsThresholds(CesAppEvaluationMetricsThresholds)
//  .globalInstruction(java.lang.String)
//  .guardrails(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .languageSettings(CesAppLanguageSettings)
//  .loggingSettings(CesAppLoggingSettings)
//  .metadata(java.util.Map<java.lang.String, java.lang.String>)
//  .modelSettings(CesAppModelSettings)
//  .pinned(java.lang.Boolean|IResolvable)
//  .project(java.lang.String)
//  .rootAgent(java.lang.String)
//  .timeouts(CesAppTimeouts)
//  .timeZoneSettings(CesAppTimeZoneSettings)
//  .toolExecutionMode(java.lang.String)
//  .variableDeclarations(IResolvable|java.util.List<CesAppVariableDeclarations>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppConfig.property.appId">appId</a></code> | <code>java.lang.String</code> | The ID to use for the app, which will become the final component of the app's resource name. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Display name of the app. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppConfig.property.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppConfig.property.audioProcessingConfig">audioProcessingConfig</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfig">CesAppAudioProcessingConfig</a></code> | audio_processing_config block. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppConfig.property.clientCertificateSettings">clientCertificateSettings</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettings">CesAppClientCertificateSettings</a></code> | client_certificate_settings block. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppConfig.property.dataStoreSettings">dataStoreSettings</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettings">CesAppDataStoreSettings</a></code> | data_store_settings block. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppConfig.property.defaultChannelProfile">defaultChannelProfile</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfile">CesAppDefaultChannelProfile</a></code> | default_channel_profile block. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppConfig.property.description">description</a></code> | <code>java.lang.String</code> | Human-readable description of the app. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppConfig.property.evaluationMetricsThresholds">evaluationMetricsThresholds</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholds">CesAppEvaluationMetricsThresholds</a></code> | evaluation_metrics_thresholds block. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppConfig.property.globalInstruction">globalInstruction</a></code> | <code>java.lang.String</code> | Instructions for all the agents in the app. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppConfig.property.guardrails">guardrails</a></code> | <code>java.util.List<java.lang.String></code> | List of guardrails for the app. Format: 'projects/{project}/locations/{location}/apps/{app}/guardrails/{guardrail}'. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app#id CesApp#id}. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppConfig.property.languageSettings">languageSettings</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettings">CesAppLanguageSettings</a></code> | language_settings block. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppConfig.property.loggingSettings">loggingSettings</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettings">CesAppLoggingSettings</a></code> | logging_settings block. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppConfig.property.metadata">metadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Metadata about the app. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppConfig.property.modelSettings">modelSettings</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppModelSettings">CesAppModelSettings</a></code> | model_settings block. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppConfig.property.pinned">pinned</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the app is pinned in the app list. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app#project CesApp#project}. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppConfig.property.rootAgent">rootAgent</a></code> | <code>java.lang.String</code> | The root agent is the entry point of the app. Format: 'projects/{project}/locations/{location}/apps/{app}/agents/{agent}'. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeouts">CesAppTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppConfig.property.timeZoneSettings">timeZoneSettings</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeZoneSettings">CesAppTimeZoneSettings</a></code> | time_zone_settings block. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppConfig.property.toolExecutionMode">toolExecutionMode</a></code> | <code>java.lang.String</code> | The tool execution mode for the app. See the [API reference](https://docs.cloud.google.com/customer-engagement-ai/conversational-agents/ps/reference/rpc/google.cloud.ces.v1#google.cloud.ces.v1.App.ToolExecutionMode) for more details. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppConfig.property.variableDeclarations">variableDeclarations</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarations">CesAppVariableDeclarations</a>></code> | variable_declarations block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.cesApp.CesAppConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.cesApp.CesAppConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.cesApp.CesAppConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.cesApp.CesAppConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.cesApp.CesAppConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cesApp.CesAppConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.cesApp.CesAppConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktn/provider-google.cesApp.CesAppConfig.property.appId"></a>

```java
public java.lang.String getAppId();
```

- *Type:* java.lang.String

The ID to use for the app, which will become the final component of the app's resource name.

If not provided, a unique ID will be
automatically assigned for the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app#app_id CesApp#app_id}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.cesApp.CesAppConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Display name of the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app#display_name CesApp#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.cesApp.CesAppConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app#location CesApp#location}

---

##### `audioProcessingConfig`<sup>Optional</sup> <a name="audioProcessingConfig" id="@cdktn/provider-google.cesApp.CesAppConfig.property.audioProcessingConfig"></a>

```java
public CesAppAudioProcessingConfig getAudioProcessingConfig();
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfig">CesAppAudioProcessingConfig</a>

audio_processing_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app#audio_processing_config CesApp#audio_processing_config}

---

##### `clientCertificateSettings`<sup>Optional</sup> <a name="clientCertificateSettings" id="@cdktn/provider-google.cesApp.CesAppConfig.property.clientCertificateSettings"></a>

```java
public CesAppClientCertificateSettings getClientCertificateSettings();
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettings">CesAppClientCertificateSettings</a>

client_certificate_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app#client_certificate_settings CesApp#client_certificate_settings}

---

##### `dataStoreSettings`<sup>Optional</sup> <a name="dataStoreSettings" id="@cdktn/provider-google.cesApp.CesAppConfig.property.dataStoreSettings"></a>

```java
public CesAppDataStoreSettings getDataStoreSettings();
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettings">CesAppDataStoreSettings</a>

data_store_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app#data_store_settings CesApp#data_store_settings}

---

##### `defaultChannelProfile`<sup>Optional</sup> <a name="defaultChannelProfile" id="@cdktn/provider-google.cesApp.CesAppConfig.property.defaultChannelProfile"></a>

```java
public CesAppDefaultChannelProfile getDefaultChannelProfile();
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfile">CesAppDefaultChannelProfile</a>

default_channel_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app#default_channel_profile CesApp#default_channel_profile}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.cesApp.CesAppConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app#deletion_policy CesApp#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.cesApp.CesAppConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Human-readable description of the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app#description CesApp#description}

---

##### `evaluationMetricsThresholds`<sup>Optional</sup> <a name="evaluationMetricsThresholds" id="@cdktn/provider-google.cesApp.CesAppConfig.property.evaluationMetricsThresholds"></a>

```java
public CesAppEvaluationMetricsThresholds getEvaluationMetricsThresholds();
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholds">CesAppEvaluationMetricsThresholds</a>

evaluation_metrics_thresholds block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app#evaluation_metrics_thresholds CesApp#evaluation_metrics_thresholds}

---

##### `globalInstruction`<sup>Optional</sup> <a name="globalInstruction" id="@cdktn/provider-google.cesApp.CesAppConfig.property.globalInstruction"></a>

```java
public java.lang.String getGlobalInstruction();
```

- *Type:* java.lang.String

Instructions for all the agents in the app.

You can use this instruction to set up a stable identity or personality
across all the agents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app#global_instruction CesApp#global_instruction}

---

##### `guardrails`<sup>Optional</sup> <a name="guardrails" id="@cdktn/provider-google.cesApp.CesAppConfig.property.guardrails"></a>

```java
public java.util.List<java.lang.String> getGuardrails();
```

- *Type:* java.util.List<java.lang.String>

List of guardrails for the app. Format: 'projects/{project}/locations/{location}/apps/{app}/guardrails/{guardrail}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app#guardrails CesApp#guardrails}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.cesApp.CesAppConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app#id CesApp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `languageSettings`<sup>Optional</sup> <a name="languageSettings" id="@cdktn/provider-google.cesApp.CesAppConfig.property.languageSettings"></a>

```java
public CesAppLanguageSettings getLanguageSettings();
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettings">CesAppLanguageSettings</a>

language_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app#language_settings CesApp#language_settings}

---

##### `loggingSettings`<sup>Optional</sup> <a name="loggingSettings" id="@cdktn/provider-google.cesApp.CesAppConfig.property.loggingSettings"></a>

```java
public CesAppLoggingSettings getLoggingSettings();
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettings">CesAppLoggingSettings</a>

logging_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app#logging_settings CesApp#logging_settings}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktn/provider-google.cesApp.CesAppConfig.property.metadata"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadata();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Metadata about the app.

This field can be used to store additional
information relevant to the app's details or intended usages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app#metadata CesApp#metadata}

---

##### `modelSettings`<sup>Optional</sup> <a name="modelSettings" id="@cdktn/provider-google.cesApp.CesAppConfig.property.modelSettings"></a>

```java
public CesAppModelSettings getModelSettings();
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppModelSettings">CesAppModelSettings</a>

model_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app#model_settings CesApp#model_settings}

---

##### `pinned`<sup>Optional</sup> <a name="pinned" id="@cdktn/provider-google.cesApp.CesAppConfig.property.pinned"></a>

```java
public java.lang.Boolean|IResolvable getPinned();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the app is pinned in the app list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app#pinned CesApp#pinned}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.cesApp.CesAppConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app#project CesApp#project}.

---

##### `rootAgent`<sup>Optional</sup> <a name="rootAgent" id="@cdktn/provider-google.cesApp.CesAppConfig.property.rootAgent"></a>

```java
public java.lang.String getRootAgent();
```

- *Type:* java.lang.String

The root agent is the entry point of the app. Format: 'projects/{project}/locations/{location}/apps/{app}/agents/{agent}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app#root_agent CesApp#root_agent}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.cesApp.CesAppConfig.property.timeouts"></a>

```java
public CesAppTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppTimeouts">CesAppTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app#timeouts CesApp#timeouts}

---

##### `timeZoneSettings`<sup>Optional</sup> <a name="timeZoneSettings" id="@cdktn/provider-google.cesApp.CesAppConfig.property.timeZoneSettings"></a>

```java
public CesAppTimeZoneSettings getTimeZoneSettings();
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppTimeZoneSettings">CesAppTimeZoneSettings</a>

time_zone_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app#time_zone_settings CesApp#time_zone_settings}

---

##### `toolExecutionMode`<sup>Optional</sup> <a name="toolExecutionMode" id="@cdktn/provider-google.cesApp.CesAppConfig.property.toolExecutionMode"></a>

```java
public java.lang.String getToolExecutionMode();
```

- *Type:* java.lang.String

The tool execution mode for the app. See the [API reference](https://docs.cloud.google.com/customer-engagement-ai/conversational-agents/ps/reference/rpc/google.cloud.ces.v1#google.cloud.ces.v1.App.ToolExecutionMode) for more details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app#tool_execution_mode CesApp#tool_execution_mode}

---

##### `variableDeclarations`<sup>Optional</sup> <a name="variableDeclarations" id="@cdktn/provider-google.cesApp.CesAppConfig.property.variableDeclarations"></a>

```java
public IResolvable|java.util.List<CesAppVariableDeclarations> getVariableDeclarations();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarations">CesAppVariableDeclarations</a>>

variable_declarations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app#variable_declarations CesApp#variable_declarations}

---

### CesAppDataStoreSettings <a name="CesAppDataStoreSettings" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettings.Initializer"></a>

```java
import io.cdktn.providers.google.ces_app.CesAppDataStoreSettings;

CesAppDataStoreSettings.builder()
    .build();
```


### CesAppDataStoreSettingsEngines <a name="CesAppDataStoreSettingsEngines" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEngines"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEngines.Initializer"></a>

```java
import io.cdktn.providers.google.ces_app.CesAppDataStoreSettingsEngines;

CesAppDataStoreSettingsEngines.builder()
    .build();
```


### CesAppDefaultChannelProfile <a name="CesAppDefaultChannelProfile" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfile.Initializer"></a>

```java
import io.cdktn.providers.google.ces_app.CesAppDefaultChannelProfile;

CesAppDefaultChannelProfile.builder()
//  .channelType(java.lang.String)
//  .disableBargeInControl(java.lang.Boolean|IResolvable)
//  .disableDtmf(java.lang.Boolean|IResolvable)
//  .personaProperty(CesAppDefaultChannelProfilePersonaProperty)
//  .profileId(java.lang.String)
//  .webWidgetConfig(CesAppDefaultChannelProfileWebWidgetConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfile.property.channelType">channelType</a></code> | <code>java.lang.String</code> | The type of the channel profile. Possible values: UNKNOWN WEB_UI API TWILIO GOOGLE_TELEPHONY_PLATFORM CONTACT_CENTER_AS_A_SERVICE. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfile.property.disableBargeInControl">disableBargeInControl</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to disable user barge-in in the conversation. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfile.property.disableDtmf">disableDtmf</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to disable DTMF (dual-tone multi-frequency). |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfile.property.personaProperty">personaProperty</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaProperty">CesAppDefaultChannelProfilePersonaProperty</a></code> | persona_property block. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfile.property.profileId">profileId</a></code> | <code>java.lang.String</code> | The unique identifier of the channel profile. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfile.property.webWidgetConfig">webWidgetConfig</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfig">CesAppDefaultChannelProfileWebWidgetConfig</a></code> | web_widget_config block. |

---

##### `channelType`<sup>Optional</sup> <a name="channelType" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfile.property.channelType"></a>

```java
public java.lang.String getChannelType();
```

- *Type:* java.lang.String

The type of the channel profile. Possible values: UNKNOWN WEB_UI API TWILIO GOOGLE_TELEPHONY_PLATFORM CONTACT_CENTER_AS_A_SERVICE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app#channel_type CesApp#channel_type}

---

##### `disableBargeInControl`<sup>Optional</sup> <a name="disableBargeInControl" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfile.property.disableBargeInControl"></a>

```java
public java.lang.Boolean|IResolvable getDisableBargeInControl();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to disable user barge-in in the conversation.

* true: User interruptions are disabled while the agent is speaking.
* false: The agent retains automatic control over when the user can interrupt.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app#disable_barge_in_control CesApp#disable_barge_in_control}

---

##### `disableDtmf`<sup>Optional</sup> <a name="disableDtmf" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfile.property.disableDtmf"></a>

```java
public java.lang.Boolean|IResolvable getDisableDtmf();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to disable DTMF (dual-tone multi-frequency).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app#disable_dtmf CesApp#disable_dtmf}

---

##### `personaProperty`<sup>Optional</sup> <a name="personaProperty" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfile.property.personaProperty"></a>

```java
public CesAppDefaultChannelProfilePersonaProperty getPersonaProperty();
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaProperty">CesAppDefaultChannelProfilePersonaProperty</a>

persona_property block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app#persona_property CesApp#persona_property}

---

##### `profileId`<sup>Optional</sup> <a name="profileId" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfile.property.profileId"></a>

```java
public java.lang.String getProfileId();
```

- *Type:* java.lang.String

The unique identifier of the channel profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app#profile_id CesApp#profile_id}

---

##### `webWidgetConfig`<sup>Optional</sup> <a name="webWidgetConfig" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfile.property.webWidgetConfig"></a>

```java
public CesAppDefaultChannelProfileWebWidgetConfig getWebWidgetConfig();
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfig">CesAppDefaultChannelProfileWebWidgetConfig</a>

web_widget_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app#web_widget_config CesApp#web_widget_config}

---

### CesAppDefaultChannelProfilePersonaProperty <a name="CesAppDefaultChannelProfilePersonaProperty" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaProperty"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaProperty.Initializer"></a>

```java
import io.cdktn.providers.google.ces_app.CesAppDefaultChannelProfilePersonaProperty;

CesAppDefaultChannelProfilePersonaProperty.builder()
//  .persona(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaProperty.property.persona">persona</a></code> | <code>java.lang.String</code> | The persona of the channel. Possible values: UNKNOWN CONCISE CHATTY. |

---

##### `persona`<sup>Optional</sup> <a name="persona" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaProperty.property.persona"></a>

```java
public java.lang.String getPersona();
```

- *Type:* java.lang.String

The persona of the channel. Possible values: UNKNOWN CONCISE CHATTY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app#persona CesApp#persona}

---

### CesAppDefaultChannelProfileWebWidgetConfig <a name="CesAppDefaultChannelProfileWebWidgetConfig" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfig.Initializer"></a>

```java
import io.cdktn.providers.google.ces_app.CesAppDefaultChannelProfileWebWidgetConfig;

CesAppDefaultChannelProfileWebWidgetConfig.builder()
//  .modality(java.lang.String)
//  .theme(java.lang.String)
//  .webWidgetTitle(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfig.property.modality">modality</a></code> | <code>java.lang.String</code> | The modality of the web widget. Possible values: UNKNOWN_MODALITY CHAT_AND_VOICE VOICE_ONLY CHAT_ONLY. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfig.property.theme">theme</a></code> | <code>java.lang.String</code> | The theme of the web widget. Possible values: UNKNOWN_THEME LIGHT DARK. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfig.property.webWidgetTitle">webWidgetTitle</a></code> | <code>java.lang.String</code> | The title of the web widget. |

---

##### `modality`<sup>Optional</sup> <a name="modality" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfig.property.modality"></a>

```java
public java.lang.String getModality();
```

- *Type:* java.lang.String

The modality of the web widget. Possible values: UNKNOWN_MODALITY CHAT_AND_VOICE VOICE_ONLY CHAT_ONLY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app#modality CesApp#modality}

---

##### `theme`<sup>Optional</sup> <a name="theme" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfig.property.theme"></a>

```java
public java.lang.String getTheme();
```

- *Type:* java.lang.String

The theme of the web widget. Possible values: UNKNOWN_THEME LIGHT DARK.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app#theme CesApp#theme}

---

##### `webWidgetTitle`<sup>Optional</sup> <a name="webWidgetTitle" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfig.property.webWidgetTitle"></a>

```java
public java.lang.String getWebWidgetTitle();
```

- *Type:* java.lang.String

The title of the web widget.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app#web_widget_title CesApp#web_widget_title}

---

### CesAppEvaluationMetricsThresholds <a name="CesAppEvaluationMetricsThresholds" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholds"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholds.Initializer"></a>

```java
import io.cdktn.providers.google.ces_app.CesAppEvaluationMetricsThresholds;

CesAppEvaluationMetricsThresholds.builder()
//  .goldenEvaluationMetricsThresholds(CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholds.property.goldenEvaluationMetricsThresholds">goldenEvaluationMetricsThresholds</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds">CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds</a></code> | golden_evaluation_metrics_thresholds block. |

---

##### `goldenEvaluationMetricsThresholds`<sup>Optional</sup> <a name="goldenEvaluationMetricsThresholds" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholds.property.goldenEvaluationMetricsThresholds"></a>

```java
public CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds getGoldenEvaluationMetricsThresholds();
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds">CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds</a>

golden_evaluation_metrics_thresholds block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app#golden_evaluation_metrics_thresholds CesApp#golden_evaluation_metrics_thresholds}

---

### CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds <a name="CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds.Initializer"></a>

```java
import io.cdktn.providers.google.ces_app.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds;

CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds.builder()
//  .expectationLevelMetricsThresholds(CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds)
//  .turnLevelMetricsThresholds(CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds.property.expectationLevelMetricsThresholds">expectationLevelMetricsThresholds</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds">CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds</a></code> | expectation_level_metrics_thresholds block. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds.property.turnLevelMetricsThresholds">turnLevelMetricsThresholds</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds">CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds</a></code> | turn_level_metrics_thresholds block. |

---

##### `expectationLevelMetricsThresholds`<sup>Optional</sup> <a name="expectationLevelMetricsThresholds" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds.property.expectationLevelMetricsThresholds"></a>

```java
public CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds getExpectationLevelMetricsThresholds();
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds">CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds</a>

expectation_level_metrics_thresholds block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app#expectation_level_metrics_thresholds CesApp#expectation_level_metrics_thresholds}

---

##### `turnLevelMetricsThresholds`<sup>Optional</sup> <a name="turnLevelMetricsThresholds" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds.property.turnLevelMetricsThresholds"></a>

```java
public CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds getTurnLevelMetricsThresholds();
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds">CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds</a>

turn_level_metrics_thresholds block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app#turn_level_metrics_thresholds CesApp#turn_level_metrics_thresholds}

---

### CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds <a name="CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds.Initializer"></a>

```java
import io.cdktn.providers.google.ces_app.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds;

CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds.builder()
//  .toolInvocationParameterCorrectnessThreshold(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds.property.toolInvocationParameterCorrectnessThreshold">toolInvocationParameterCorrectnessThreshold</a></code> | <code>java.lang.Number</code> | The success threshold for individual tool invocation parameter correctness. Must be a float between 0 and 1. Default is 1.0. |

---

##### `toolInvocationParameterCorrectnessThreshold`<sup>Optional</sup> <a name="toolInvocationParameterCorrectnessThreshold" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds.property.toolInvocationParameterCorrectnessThreshold"></a>

```java
public java.lang.Number getToolInvocationParameterCorrectnessThreshold();
```

- *Type:* java.lang.Number

The success threshold for individual tool invocation parameter correctness. Must be a float between 0 and 1. Default is 1.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app#tool_invocation_parameter_correctness_threshold CesApp#tool_invocation_parameter_correctness_threshold}

---

### CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds <a name="CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds.Initializer"></a>

```java
import io.cdktn.providers.google.ces_app.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds;

CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds.builder()
//  .overallToolInvocationCorrectnessThreshold(java.lang.Number)
//  .semanticSimilaritySuccessThreshold(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds.property.overallToolInvocationCorrectnessThreshold">overallToolInvocationCorrectnessThreshold</a></code> | <code>java.lang.Number</code> | The success threshold for overall tool invocation correctness. Must be a float between 0 and 1. Default is 1.0. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds.property.semanticSimilaritySuccessThreshold">semanticSimilaritySuccessThreshold</a></code> | <code>java.lang.Number</code> | The success threshold for semantic similarity. Must be an integer between 0 and 4. Default is >= 3. |

---

##### `overallToolInvocationCorrectnessThreshold`<sup>Optional</sup> <a name="overallToolInvocationCorrectnessThreshold" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds.property.overallToolInvocationCorrectnessThreshold"></a>

```java
public java.lang.Number getOverallToolInvocationCorrectnessThreshold();
```

- *Type:* java.lang.Number

The success threshold for overall tool invocation correctness. Must be a float between 0 and 1. Default is 1.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app#overall_tool_invocation_correctness_threshold CesApp#overall_tool_invocation_correctness_threshold}

---

##### `semanticSimilaritySuccessThreshold`<sup>Optional</sup> <a name="semanticSimilaritySuccessThreshold" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds.property.semanticSimilaritySuccessThreshold"></a>

```java
public java.lang.Number getSemanticSimilaritySuccessThreshold();
```

- *Type:* java.lang.Number

The success threshold for semantic similarity. Must be an integer between 0 and 4. Default is >= 3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app#semantic_similarity_success_threshold CesApp#semantic_similarity_success_threshold}

---

### CesAppLanguageSettings <a name="CesAppLanguageSettings" id="@cdktn/provider-google.cesApp.CesAppLanguageSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesApp.CesAppLanguageSettings.Initializer"></a>

```java
import io.cdktn.providers.google.ces_app.CesAppLanguageSettings;

CesAppLanguageSettings.builder()
//  .defaultLanguageCode(java.lang.String)
//  .enableMultilingualSupport(java.lang.Boolean|IResolvable)
//  .fallbackAction(java.lang.String)
//  .supportedLanguageCodes(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettings.property.defaultLanguageCode">defaultLanguageCode</a></code> | <code>java.lang.String</code> | The default language code of the app. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettings.property.enableMultilingualSupport">enableMultilingualSupport</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Enables multilingual support. If true, agents in the app will use pre-built instructions to improve handling of multilingual input. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettings.property.fallbackAction">fallbackAction</a></code> | <code>java.lang.String</code> | The action to perform when an agent receives input in an unsupported language. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettings.property.supportedLanguageCodes">supportedLanguageCodes</a></code> | <code>java.util.List<java.lang.String></code> | List of languages codes supported by the app, in addition to the 'default_language_code'. |

---

##### `defaultLanguageCode`<sup>Optional</sup> <a name="defaultLanguageCode" id="@cdktn/provider-google.cesApp.CesAppLanguageSettings.property.defaultLanguageCode"></a>

```java
public java.lang.String getDefaultLanguageCode();
```

- *Type:* java.lang.String

The default language code of the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app#default_language_code CesApp#default_language_code}

---

##### `enableMultilingualSupport`<sup>Optional</sup> <a name="enableMultilingualSupport" id="@cdktn/provider-google.cesApp.CesAppLanguageSettings.property.enableMultilingualSupport"></a>

```java
public java.lang.Boolean|IResolvable getEnableMultilingualSupport();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Enables multilingual support. If true, agents in the app will use pre-built instructions to improve handling of multilingual input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app#enable_multilingual_support CesApp#enable_multilingual_support}

---

##### `fallbackAction`<sup>Optional</sup> <a name="fallbackAction" id="@cdktn/provider-google.cesApp.CesAppLanguageSettings.property.fallbackAction"></a>

```java
public java.lang.String getFallbackAction();
```

- *Type:* java.lang.String

The action to perform when an agent receives input in an unsupported language.

This can be a predefined action or a custom tool call.
Valid values are:

* A tool's full resource name, which triggers a specific tool execution.
* A predefined system action, such as "escalate" or "exit", which triggers
  an EndSession signal with corresponding metadata
  to terminate the conversation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app#fallback_action CesApp#fallback_action}

---

##### `supportedLanguageCodes`<sup>Optional</sup> <a name="supportedLanguageCodes" id="@cdktn/provider-google.cesApp.CesAppLanguageSettings.property.supportedLanguageCodes"></a>

```java
public java.util.List<java.lang.String> getSupportedLanguageCodes();
```

- *Type:* java.util.List<java.lang.String>

List of languages codes supported by the app, in addition to the 'default_language_code'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app#supported_language_codes CesApp#supported_language_codes}

---

### CesAppLoggingSettings <a name="CesAppLoggingSettings" id="@cdktn/provider-google.cesApp.CesAppLoggingSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesApp.CesAppLoggingSettings.Initializer"></a>

```java
import io.cdktn.providers.google.ces_app.CesAppLoggingSettings;

CesAppLoggingSettings.builder()
//  .audioRecordingConfig(CesAppLoggingSettingsAudioRecordingConfig)
//  .bigqueryExportSettings(CesAppLoggingSettingsBigqueryExportSettings)
//  .cloudLoggingSettings(CesAppLoggingSettingsCloudLoggingSettings)
//  .conversationLoggingSettings(CesAppLoggingSettingsConversationLoggingSettings)
//  .redactionConfig(CesAppLoggingSettingsRedactionConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettings.property.audioRecordingConfig">audioRecordingConfig</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfig">CesAppLoggingSettingsAudioRecordingConfig</a></code> | audio_recording_config block. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettings.property.bigqueryExportSettings">bigqueryExportSettings</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettings">CesAppLoggingSettingsBigqueryExportSettings</a></code> | bigquery_export_settings block. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettings.property.cloudLoggingSettings">cloudLoggingSettings</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettings">CesAppLoggingSettingsCloudLoggingSettings</a></code> | cloud_logging_settings block. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettings.property.conversationLoggingSettings">conversationLoggingSettings</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettings">CesAppLoggingSettingsConversationLoggingSettings</a></code> | conversation_logging_settings block. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettings.property.redactionConfig">redactionConfig</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfig">CesAppLoggingSettingsRedactionConfig</a></code> | redaction_config block. |

---

##### `audioRecordingConfig`<sup>Optional</sup> <a name="audioRecordingConfig" id="@cdktn/provider-google.cesApp.CesAppLoggingSettings.property.audioRecordingConfig"></a>

```java
public CesAppLoggingSettingsAudioRecordingConfig getAudioRecordingConfig();
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfig">CesAppLoggingSettingsAudioRecordingConfig</a>

audio_recording_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app#audio_recording_config CesApp#audio_recording_config}

---

##### `bigqueryExportSettings`<sup>Optional</sup> <a name="bigqueryExportSettings" id="@cdktn/provider-google.cesApp.CesAppLoggingSettings.property.bigqueryExportSettings"></a>

```java
public CesAppLoggingSettingsBigqueryExportSettings getBigqueryExportSettings();
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettings">CesAppLoggingSettingsBigqueryExportSettings</a>

bigquery_export_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app#bigquery_export_settings CesApp#bigquery_export_settings}

---

##### `cloudLoggingSettings`<sup>Optional</sup> <a name="cloudLoggingSettings" id="@cdktn/provider-google.cesApp.CesAppLoggingSettings.property.cloudLoggingSettings"></a>

```java
public CesAppLoggingSettingsCloudLoggingSettings getCloudLoggingSettings();
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettings">CesAppLoggingSettingsCloudLoggingSettings</a>

cloud_logging_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app#cloud_logging_settings CesApp#cloud_logging_settings}

---

##### `conversationLoggingSettings`<sup>Optional</sup> <a name="conversationLoggingSettings" id="@cdktn/provider-google.cesApp.CesAppLoggingSettings.property.conversationLoggingSettings"></a>

```java
public CesAppLoggingSettingsConversationLoggingSettings getConversationLoggingSettings();
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettings">CesAppLoggingSettingsConversationLoggingSettings</a>

conversation_logging_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app#conversation_logging_settings CesApp#conversation_logging_settings}

---

##### `redactionConfig`<sup>Optional</sup> <a name="redactionConfig" id="@cdktn/provider-google.cesApp.CesAppLoggingSettings.property.redactionConfig"></a>

```java
public CesAppLoggingSettingsRedactionConfig getRedactionConfig();
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfig">CesAppLoggingSettingsRedactionConfig</a>

redaction_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app#redaction_config CesApp#redaction_config}

---

### CesAppLoggingSettingsAudioRecordingConfig <a name="CesAppLoggingSettingsAudioRecordingConfig" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfig.Initializer"></a>

```java
import io.cdktn.providers.google.ces_app.CesAppLoggingSettingsAudioRecordingConfig;

CesAppLoggingSettingsAudioRecordingConfig.builder()
//  .gcsBucket(java.lang.String)
//  .gcsPathPrefix(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfig.property.gcsBucket">gcsBucket</a></code> | <code>java.lang.String</code> | The [Cloud Storage](https://cloud.google.com/storage) bucket to store the session audio recordings. The URI must start with "gs://". Note: If the Cloud Storage bucket is in a different project from the app, you should grant 'storage.objects.create' permission to the CES service agent 'service-@gcp-sa-ces.iam.gserviceaccount.com'. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfig.property.gcsPathPrefix">gcsPathPrefix</a></code> | <code>java.lang.String</code> | The Cloud Storage path prefix for audio recordings. |

---

##### `gcsBucket`<sup>Optional</sup> <a name="gcsBucket" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfig.property.gcsBucket"></a>

```java
public java.lang.String getGcsBucket();
```

- *Type:* java.lang.String

The [Cloud Storage](https://cloud.google.com/storage) bucket to store the session audio recordings. The URI must start with "gs://". Note: If the Cloud Storage bucket is in a different project from the app, you should grant 'storage.objects.create' permission to the CES service agent 'service-@gcp-sa-ces.iam.gserviceaccount.com'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app#gcs_bucket CesApp#gcs_bucket}

---

##### `gcsPathPrefix`<sup>Optional</sup> <a name="gcsPathPrefix" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfig.property.gcsPathPrefix"></a>

```java
public java.lang.String getGcsPathPrefix();
```

- *Type:* java.lang.String

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app#gcs_path_prefix CesApp#gcs_path_prefix}

---

### CesAppLoggingSettingsBigqueryExportSettings <a name="CesAppLoggingSettingsBigqueryExportSettings" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettings.Initializer"></a>

```java
import io.cdktn.providers.google.ces_app.CesAppLoggingSettingsBigqueryExportSettings;

CesAppLoggingSettingsBigqueryExportSettings.builder()
//  .dataset(java.lang.String)
//  .enabled(java.lang.Boolean|IResolvable)
//  .project(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettings.property.dataset">dataset</a></code> | <code>java.lang.String</code> | The BigQuery dataset to export the data to. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettings.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether the BigQuery export is enabled. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettings.property.project">project</a></code> | <code>java.lang.String</code> | The project ID of the BigQuery dataset to export the data to. |

---

##### `dataset`<sup>Optional</sup> <a name="dataset" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettings.property.dataset"></a>

```java
public java.lang.String getDataset();
```

- *Type:* java.lang.String

The BigQuery dataset to export the data to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app#dataset CesApp#dataset}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettings.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether the BigQuery export is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app#enabled CesApp#enabled}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettings.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

The project ID of the BigQuery dataset to export the data to.

Note: If the BigQuery dataset is in a different project from the app, you should grant
roles/bigquery.admin role to the CES service agent service-<PROJECT-
NUMBER>@gcp-sa-ces.iam.gserviceaccount.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app#project CesApp#project}

---

### CesAppLoggingSettingsCloudLoggingSettings <a name="CesAppLoggingSettingsCloudLoggingSettings" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettings.Initializer"></a>

```java
import io.cdktn.providers.google.ces_app.CesAppLoggingSettingsCloudLoggingSettings;

CesAppLoggingSettingsCloudLoggingSettings.builder()
//  .enableCloudLogging(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettings.property.enableCloudLogging">enableCloudLogging</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to enable Cloud Logging for the sessions. |

---

##### `enableCloudLogging`<sup>Optional</sup> <a name="enableCloudLogging" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettings.property.enableCloudLogging"></a>

```java
public java.lang.Boolean|IResolvable getEnableCloudLogging();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to enable Cloud Logging for the sessions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app#enable_cloud_logging CesApp#enable_cloud_logging}

---

### CesAppLoggingSettingsConversationLoggingSettings <a name="CesAppLoggingSettingsConversationLoggingSettings" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettings.Initializer"></a>

```java
import io.cdktn.providers.google.ces_app.CesAppLoggingSettingsConversationLoggingSettings;

CesAppLoggingSettingsConversationLoggingSettings.builder()
//  .disableConversationLogging(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettings.property.disableConversationLogging">disableConversationLogging</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to disable conversation logging for the sessions. |

---

##### `disableConversationLogging`<sup>Optional</sup> <a name="disableConversationLogging" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettings.property.disableConversationLogging"></a>

```java
public java.lang.Boolean|IResolvable getDisableConversationLogging();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to disable conversation logging for the sessions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app#disable_conversation_logging CesApp#disable_conversation_logging}

---

### CesAppLoggingSettingsRedactionConfig <a name="CesAppLoggingSettingsRedactionConfig" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfig.Initializer"></a>

```java
import io.cdktn.providers.google.ces_app.CesAppLoggingSettingsRedactionConfig;

CesAppLoggingSettingsRedactionConfig.builder()
//  .deidentifyTemplate(java.lang.String)
//  .enableRedaction(java.lang.Boolean|IResolvable)
//  .inspectTemplate(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfig.property.deidentifyTemplate">deidentifyTemplate</a></code> | <code>java.lang.String</code> | [DLP](https://cloud.google.com/dlp/docs) deidentify template name to instruct on how to de-identify content. Format: 'projects/{project}/locations/{location}/deidentifyTemplates/{deidentify_template}'. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfig.property.enableRedaction">enableRedaction</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If true, redaction will be applied in various logging scenarios, including conversation history, Cloud Logging and audio recording. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfig.property.inspectTemplate">inspectTemplate</a></code> | <code>java.lang.String</code> | [DLP](https://cloud.google.com/dlp/docs) inspect template name to configure detection of sensitive data types. Format: 'projects/{project}/locations/{location}/inspectTemplates/{inspect_template}'. |

---

##### `deidentifyTemplate`<sup>Optional</sup> <a name="deidentifyTemplate" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfig.property.deidentifyTemplate"></a>

```java
public java.lang.String getDeidentifyTemplate();
```

- *Type:* java.lang.String

[DLP](https://cloud.google.com/dlp/docs) deidentify template name to instruct on how to de-identify content. Format: 'projects/{project}/locations/{location}/deidentifyTemplates/{deidentify_template}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app#deidentify_template CesApp#deidentify_template}

---

##### `enableRedaction`<sup>Optional</sup> <a name="enableRedaction" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfig.property.enableRedaction"></a>

```java
public java.lang.Boolean|IResolvable getEnableRedaction();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If true, redaction will be applied in various logging scenarios, including conversation history, Cloud Logging and audio recording.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app#enable_redaction CesApp#enable_redaction}

---

##### `inspectTemplate`<sup>Optional</sup> <a name="inspectTemplate" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfig.property.inspectTemplate"></a>

```java
public java.lang.String getInspectTemplate();
```

- *Type:* java.lang.String

[DLP](https://cloud.google.com/dlp/docs) inspect template name to configure detection of sensitive data types. Format: 'projects/{project}/locations/{location}/inspectTemplates/{inspect_template}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app#inspect_template CesApp#inspect_template}

---

### CesAppModelSettings <a name="CesAppModelSettings" id="@cdktn/provider-google.cesApp.CesAppModelSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesApp.CesAppModelSettings.Initializer"></a>

```java
import io.cdktn.providers.google.ces_app.CesAppModelSettings;

CesAppModelSettings.builder()
//  .model(java.lang.String)
//  .temperature(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppModelSettings.property.model">model</a></code> | <code>java.lang.String</code> | The LLM model that the agent should use. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppModelSettings.property.temperature">temperature</a></code> | <code>java.lang.Number</code> | If set, this temperature will be used for the LLM model. |

---

##### `model`<sup>Optional</sup> <a name="model" id="@cdktn/provider-google.cesApp.CesAppModelSettings.property.model"></a>

```java
public java.lang.String getModel();
```

- *Type:* java.lang.String

The LLM model that the agent should use.

If not set, the agent will inherit the model from its parent agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app#model CesApp#model}

---

##### `temperature`<sup>Optional</sup> <a name="temperature" id="@cdktn/provider-google.cesApp.CesAppModelSettings.property.temperature"></a>

```java
public java.lang.Number getTemperature();
```

- *Type:* java.lang.Number

If set, this temperature will be used for the LLM model.

Temperature
controls the randomness of the model's responses. Lower temperatures
produce responses that are more predictable. Higher temperatures produce
responses that are more creative.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app#temperature CesApp#temperature}

---

### CesAppTimeouts <a name="CesAppTimeouts" id="@cdktn/provider-google.cesApp.CesAppTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesApp.CesAppTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.ces_app.CesAppTimeouts;

CesAppTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app#create CesApp#create}. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app#delete CesApp#delete}. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app#update CesApp#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.cesApp.CesAppTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app#create CesApp#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.cesApp.CesAppTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app#delete CesApp#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.cesApp.CesAppTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app#update CesApp#update}.

---

### CesAppTimeZoneSettings <a name="CesAppTimeZoneSettings" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettings.Initializer"></a>

```java
import io.cdktn.providers.google.ces_app.CesAppTimeZoneSettings;

CesAppTimeZoneSettings.builder()
//  .timeZone(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeZoneSettings.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | The time zone of the app from the time zone database, e.g., America/Los_Angeles, Europe/Paris. |

---

##### `timeZone`<sup>Optional</sup> <a name="timeZone" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettings.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

The time zone of the app from the time zone database, e.g., America/Los_Angeles, Europe/Paris.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app#time_zone CesApp#time_zone}

---

### CesAppVariableDeclarations <a name="CesAppVariableDeclarations" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarations.Initializer"></a>

```java
import io.cdktn.providers.google.ces_app.CesAppVariableDeclarations;

CesAppVariableDeclarations.builder()
    .description(java.lang.String)
    .name(java.lang.String)
    .schema(CesAppVariableDeclarationsSchema)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarations.property.description">description</a></code> | <code>java.lang.String</code> | The description of the variable. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarations.property.name">name</a></code> | <code>java.lang.String</code> | The name of the variable. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarations.property.schema">schema</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema">CesAppVariableDeclarationsSchema</a></code> | schema block. |

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarations.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of the variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app#description CesApp#description}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarations.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the variable.

The name must start with a letter or underscore
and contain only letters, numbers, or underscores.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app#name CesApp#name}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarations.property.schema"></a>

```java
public CesAppVariableDeclarationsSchema getSchema();
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema">CesAppVariableDeclarationsSchema</a>

schema block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app#schema CesApp#schema}

---

### CesAppVariableDeclarationsSchema <a name="CesAppVariableDeclarationsSchema" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema.Initializer"></a>

```java
import io.cdktn.providers.google.ces_app.CesAppVariableDeclarationsSchema;

CesAppVariableDeclarationsSchema.builder()
    .type(java.lang.String)
//  .additionalProperties(java.lang.String)
//  .anyOf(java.lang.String)
//  .default(java.lang.String)
//  .defs(java.lang.String)
//  .description(java.lang.String)
//  .enum(java.util.List<java.lang.String>)
//  .items(java.lang.String)
//  .nullable(java.lang.Boolean|IResolvable)
//  .prefixItems(java.lang.String)
//  .properties(java.lang.String)
//  .ref(java.lang.String)
//  .required(java.util.List<java.lang.String>)
//  .title(java.lang.String)
//  .uniqueItems(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema.property.type">type</a></code> | <code>java.lang.String</code> | The type of the data. Possible values: STRING INTEGER NUMBER BOOLEAN OBJECT ARRAY. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema.property.additionalProperties">additionalProperties</a></code> | <code>java.lang.String</code> | Optional. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema.property.anyOf">anyOf</a></code> | <code>java.lang.String</code> | Optional. The instance value should be valid against at least one of the schemas in this list. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema.property.default">default</a></code> | <code>java.lang.String</code> | Optional. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema.property.defs">defs</a></code> | <code>java.lang.String</code> | A map of definitions for use by ref. Only allowed at the root of the schema. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema.property.description">description</a></code> | <code>java.lang.String</code> | The description of the data. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema.property.enum">enum</a></code> | <code>java.util.List<java.lang.String></code> | Possible values of the element of primitive type with enum format. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema.property.items">items</a></code> | <code>java.lang.String</code> | Schema of the elements of Type.ARRAY. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema.property.nullable">nullable</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates if the value may be null. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema.property.prefixItems">prefixItems</a></code> | <code>java.lang.String</code> | Optional. Schemas of initial elements of Type.ARRAY. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema.property.properties">properties</a></code> | <code>java.lang.String</code> | Properties of Type.OBJECT. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema.property.ref">ref</a></code> | <code>java.lang.String</code> | Allows indirect references between schema nodes. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema.property.required">required</a></code> | <code>java.util.List<java.lang.String></code> | Required properties of Type.OBJECT. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema.property.title">title</a></code> | <code>java.lang.String</code> | The title of the schema. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema.property.uniqueItems">uniqueItems</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicate the items in the array must be unique. Only applies to TYPE.ARRAY. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of the data. Possible values: STRING INTEGER NUMBER BOOLEAN OBJECT ARRAY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app#type CesApp#type}

---

##### `additionalProperties`<sup>Optional</sup> <a name="additionalProperties" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema.property.additionalProperties"></a>

```java
public java.lang.String getAdditionalProperties();
```

- *Type:* java.lang.String

Optional.

Defines the schema for additional properties allowed in an object.
The value must be a valid JSON string representing the Schema object.
(Note: OpenAPI also allows a boolean, this definition expects a Schema JSON).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app#additional_properties CesApp#additional_properties}

---

##### `anyOf`<sup>Optional</sup> <a name="anyOf" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema.property.anyOf"></a>

```java
public java.lang.String getAnyOf();
```

- *Type:* java.lang.String

Optional. The instance value should be valid against at least one of the schemas in this list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app#any_of CesApp#any_of}

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

Optional.

Default value of the data. Represents a dynamically typed value
which can be either null, a number, a string, a boolean, a struct,
or a list of values. The provided default value must be encoded as a JSON string.
Use 'jsonencode' in Terraform HCL to encode the default value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app#default CesApp#default}

---

##### `defs`<sup>Optional</sup> <a name="defs" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema.property.defs"></a>

```java
public java.lang.String getDefs();
```

- *Type:* java.lang.String

A map of definitions for use by ref. Only allowed at the root of the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app#defs CesApp#defs}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of the data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app#description CesApp#description}

---

##### `enum`<sup>Optional</sup> <a name="enum" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema.property.enum"></a>

```java
public java.util.List<java.lang.String> getEnum();
```

- *Type:* java.util.List<java.lang.String>

Possible values of the element of primitive type with enum format.

Examples:

1. We can define direction as :
   {type:STRING, format:enum, enum:["EAST", NORTH", "SOUTH", "WEST"]}
2. We can define apartment number as :
   {type:INTEGER, format:enum, enum:["101", "201", "301"]}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app#enum CesApp#enum}

---

##### `items`<sup>Optional</sup> <a name="items" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema.property.items"></a>

```java
public java.lang.String getItems();
```

- *Type:* java.lang.String

Schema of the elements of Type.ARRAY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app#items CesApp#items}

---

##### `nullable`<sup>Optional</sup> <a name="nullable" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema.property.nullable"></a>

```java
public java.lang.Boolean|IResolvable getNullable();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates if the value may be null.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app#nullable CesApp#nullable}

---

##### `prefixItems`<sup>Optional</sup> <a name="prefixItems" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema.property.prefixItems"></a>

```java
public java.lang.String getPrefixItems();
```

- *Type:* java.lang.String

Optional. Schemas of initial elements of Type.ARRAY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app#prefix_items CesApp#prefix_items}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema.property.properties"></a>

```java
public java.lang.String getProperties();
```

- *Type:* java.lang.String

Properties of Type.OBJECT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app#properties CesApp#properties}

---

##### `ref`<sup>Optional</sup> <a name="ref" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema.property.ref"></a>

```java
public java.lang.String getRef();
```

- *Type:* java.lang.String

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app#ref CesApp#ref}

---

##### `required`<sup>Optional</sup> <a name="required" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema.property.required"></a>

```java
public java.util.List<java.lang.String> getRequired();
```

- *Type:* java.util.List<java.lang.String>

Required properties of Type.OBJECT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app#required CesApp#required}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

The title of the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app#title CesApp#title}

---

##### `uniqueItems`<sup>Optional</sup> <a name="uniqueItems" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema.property.uniqueItems"></a>

```java
public java.lang.Boolean|IResolvable getUniqueItems();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicate the items in the array must be unique. Only applies to TYPE.ARRAY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/ces_app#unique_items CesApp#unique_items}

---

## Classes <a name="Classes" id="Classes"></a>

### CesAppAudioProcessingConfigAmbientSoundConfigOutputReference <a name="CesAppAudioProcessingConfigAmbientSoundConfigOutputReference" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.ces_app.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference;

new CesAppAudioProcessingConfigAmbientSoundConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.resetGcsUri">resetGcsUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.resetPrebuiltAmbientSound">resetPrebuiltAmbientSound</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.resetVolumeGainDb">resetVolumeGainDb</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGcsUri` <a name="resetGcsUri" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.resetGcsUri"></a>

```java
public void resetGcsUri()
```

##### `resetPrebuiltAmbientSound` <a name="resetPrebuiltAmbientSound" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.resetPrebuiltAmbientSound"></a>

```java
public void resetPrebuiltAmbientSound()
```

##### `resetVolumeGainDb` <a name="resetVolumeGainDb" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.resetVolumeGainDb"></a>

```java
public void resetVolumeGainDb()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.property.gcsUriInput">gcsUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.property.prebuiltAmbientSoundInput">prebuiltAmbientSoundInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.property.volumeGainDbInput">volumeGainDbInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.property.gcsUri">gcsUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.property.prebuiltAmbientSound">prebuiltAmbientSound</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.property.volumeGainDb">volumeGainDb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfig">CesAppAudioProcessingConfigAmbientSoundConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `gcsUriInput`<sup>Optional</sup> <a name="gcsUriInput" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.property.gcsUriInput"></a>

```java
public java.lang.String getGcsUriInput();
```

- *Type:* java.lang.String

---

##### `prebuiltAmbientSoundInput`<sup>Optional</sup> <a name="prebuiltAmbientSoundInput" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.property.prebuiltAmbientSoundInput"></a>

```java
public java.lang.String getPrebuiltAmbientSoundInput();
```

- *Type:* java.lang.String

---

##### `volumeGainDbInput`<sup>Optional</sup> <a name="volumeGainDbInput" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.property.volumeGainDbInput"></a>

```java
public java.lang.Number getVolumeGainDbInput();
```

- *Type:* java.lang.Number

---

##### `gcsUri`<sup>Required</sup> <a name="gcsUri" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.property.gcsUri"></a>

```java
public java.lang.String getGcsUri();
```

- *Type:* java.lang.String

---

##### `prebuiltAmbientSound`<sup>Required</sup> <a name="prebuiltAmbientSound" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.property.prebuiltAmbientSound"></a>

```java
public java.lang.String getPrebuiltAmbientSound();
```

- *Type:* java.lang.String

---

##### `volumeGainDb`<sup>Required</sup> <a name="volumeGainDb" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.property.volumeGainDb"></a>

```java
public java.lang.Number getVolumeGainDb();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference.property.internalValue"></a>

```java
public CesAppAudioProcessingConfigAmbientSoundConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfig">CesAppAudioProcessingConfigAmbientSoundConfig</a>

---


### CesAppAudioProcessingConfigBargeInConfigOutputReference <a name="CesAppAudioProcessingConfigBargeInConfigOutputReference" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.ces_app.CesAppAudioProcessingConfigBargeInConfigOutputReference;

new CesAppAudioProcessingConfigBargeInConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.resetBargeInAwareness">resetBargeInAwareness</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBargeInAwareness` <a name="resetBargeInAwareness" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.resetBargeInAwareness"></a>

```java
public void resetBargeInAwareness()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.property.bargeInAwarenessInput">bargeInAwarenessInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.property.bargeInAwareness">bargeInAwareness</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfig">CesAppAudioProcessingConfigBargeInConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bargeInAwarenessInput`<sup>Optional</sup> <a name="bargeInAwarenessInput" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.property.bargeInAwarenessInput"></a>

```java
public java.lang.Boolean|IResolvable getBargeInAwarenessInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `bargeInAwareness`<sup>Required</sup> <a name="bargeInAwareness" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.property.bargeInAwareness"></a>

```java
public java.lang.Boolean|IResolvable getBargeInAwareness();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference.property.internalValue"></a>

```java
public CesAppAudioProcessingConfigBargeInConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfig">CesAppAudioProcessingConfigBargeInConfig</a>

---


### CesAppAudioProcessingConfigOutputReference <a name="CesAppAudioProcessingConfigOutputReference" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.ces_app.CesAppAudioProcessingConfigOutputReference;

new CesAppAudioProcessingConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.putAmbientSoundConfig">putAmbientSoundConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.putBargeInConfig">putBargeInConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.putSynthesizeSpeechConfigs">putSynthesizeSpeechConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.resetAmbientSoundConfig">resetAmbientSoundConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.resetBargeInConfig">resetBargeInConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.resetInactivityTimeout">resetInactivityTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.resetSynthesizeSpeechConfigs">resetSynthesizeSpeechConfigs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAmbientSoundConfig` <a name="putAmbientSoundConfig" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.putAmbientSoundConfig"></a>

```java
public void putAmbientSoundConfig(CesAppAudioProcessingConfigAmbientSoundConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.putAmbientSoundConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfig">CesAppAudioProcessingConfigAmbientSoundConfig</a>

---

##### `putBargeInConfig` <a name="putBargeInConfig" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.putBargeInConfig"></a>

```java
public void putBargeInConfig(CesAppAudioProcessingConfigBargeInConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.putBargeInConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfig">CesAppAudioProcessingConfigBargeInConfig</a>

---

##### `putSynthesizeSpeechConfigs` <a name="putSynthesizeSpeechConfigs" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.putSynthesizeSpeechConfigs"></a>

```java
public void putSynthesizeSpeechConfigs(IResolvable|java.util.List<CesAppAudioProcessingConfigSynthesizeSpeechConfigs> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.putSynthesizeSpeechConfigs.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigs">CesAppAudioProcessingConfigSynthesizeSpeechConfigs</a>>

---

##### `resetAmbientSoundConfig` <a name="resetAmbientSoundConfig" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.resetAmbientSoundConfig"></a>

```java
public void resetAmbientSoundConfig()
```

##### `resetBargeInConfig` <a name="resetBargeInConfig" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.resetBargeInConfig"></a>

```java
public void resetBargeInConfig()
```

##### `resetInactivityTimeout` <a name="resetInactivityTimeout" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.resetInactivityTimeout"></a>

```java
public void resetInactivityTimeout()
```

##### `resetSynthesizeSpeechConfigs` <a name="resetSynthesizeSpeechConfigs" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.resetSynthesizeSpeechConfigs"></a>

```java
public void resetSynthesizeSpeechConfigs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.property.ambientSoundConfig">ambientSoundConfig</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference">CesAppAudioProcessingConfigAmbientSoundConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.property.bargeInConfig">bargeInConfig</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference">CesAppAudioProcessingConfigBargeInConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.property.synthesizeSpeechConfigs">synthesizeSpeechConfigs</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsList">CesAppAudioProcessingConfigSynthesizeSpeechConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.property.ambientSoundConfigInput">ambientSoundConfigInput</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfig">CesAppAudioProcessingConfigAmbientSoundConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.property.bargeInConfigInput">bargeInConfigInput</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfig">CesAppAudioProcessingConfigBargeInConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.property.inactivityTimeoutInput">inactivityTimeoutInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.property.synthesizeSpeechConfigsInput">synthesizeSpeechConfigsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigs">CesAppAudioProcessingConfigSynthesizeSpeechConfigs</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.property.inactivityTimeout">inactivityTimeout</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfig">CesAppAudioProcessingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ambientSoundConfig`<sup>Required</sup> <a name="ambientSoundConfig" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.property.ambientSoundConfig"></a>

```java
public CesAppAudioProcessingConfigAmbientSoundConfigOutputReference getAmbientSoundConfig();
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfigOutputReference">CesAppAudioProcessingConfigAmbientSoundConfigOutputReference</a>

---

##### `bargeInConfig`<sup>Required</sup> <a name="bargeInConfig" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.property.bargeInConfig"></a>

```java
public CesAppAudioProcessingConfigBargeInConfigOutputReference getBargeInConfig();
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfigOutputReference">CesAppAudioProcessingConfigBargeInConfigOutputReference</a>

---

##### `synthesizeSpeechConfigs`<sup>Required</sup> <a name="synthesizeSpeechConfigs" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.property.synthesizeSpeechConfigs"></a>

```java
public CesAppAudioProcessingConfigSynthesizeSpeechConfigsList getSynthesizeSpeechConfigs();
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsList">CesAppAudioProcessingConfigSynthesizeSpeechConfigsList</a>

---

##### `ambientSoundConfigInput`<sup>Optional</sup> <a name="ambientSoundConfigInput" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.property.ambientSoundConfigInput"></a>

```java
public CesAppAudioProcessingConfigAmbientSoundConfig getAmbientSoundConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigAmbientSoundConfig">CesAppAudioProcessingConfigAmbientSoundConfig</a>

---

##### `bargeInConfigInput`<sup>Optional</sup> <a name="bargeInConfigInput" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.property.bargeInConfigInput"></a>

```java
public CesAppAudioProcessingConfigBargeInConfig getBargeInConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigBargeInConfig">CesAppAudioProcessingConfigBargeInConfig</a>

---

##### `inactivityTimeoutInput`<sup>Optional</sup> <a name="inactivityTimeoutInput" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.property.inactivityTimeoutInput"></a>

```java
public java.lang.String getInactivityTimeoutInput();
```

- *Type:* java.lang.String

---

##### `synthesizeSpeechConfigsInput`<sup>Optional</sup> <a name="synthesizeSpeechConfigsInput" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.property.synthesizeSpeechConfigsInput"></a>

```java
public IResolvable|java.util.List<CesAppAudioProcessingConfigSynthesizeSpeechConfigs> getSynthesizeSpeechConfigsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigs">CesAppAudioProcessingConfigSynthesizeSpeechConfigs</a>>

---

##### `inactivityTimeout`<sup>Required</sup> <a name="inactivityTimeout" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.property.inactivityTimeout"></a>

```java
public java.lang.String getInactivityTimeout();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigOutputReference.property.internalValue"></a>

```java
public CesAppAudioProcessingConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfig">CesAppAudioProcessingConfig</a>

---


### CesAppAudioProcessingConfigSynthesizeSpeechConfigsList <a name="CesAppAudioProcessingConfigSynthesizeSpeechConfigsList" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsList.Initializer"></a>

```java
import io.cdktn.providers.google.ces_app.CesAppAudioProcessingConfigSynthesizeSpeechConfigsList;

new CesAppAudioProcessingConfigSynthesizeSpeechConfigsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsList.get"></a>

```java
public CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigs">CesAppAudioProcessingConfigSynthesizeSpeechConfigs</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<CesAppAudioProcessingConfigSynthesizeSpeechConfigs> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigs">CesAppAudioProcessingConfigSynthesizeSpeechConfigs</a>>

---


### CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference <a name="CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.ces_app.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference;

new CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.resetSpeakingRate">resetSpeakingRate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.resetVoice">resetVoice</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSpeakingRate` <a name="resetSpeakingRate" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.resetSpeakingRate"></a>

```java
public void resetSpeakingRate()
```

##### `resetVoice` <a name="resetVoice" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.resetVoice"></a>

```java
public void resetVoice()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.languageCodeInput">languageCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.speakingRateInput">speakingRateInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.voiceInput">voiceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.languageCode">languageCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.speakingRate">speakingRate</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.voice">voice</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigs">CesAppAudioProcessingConfigSynthesizeSpeechConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `languageCodeInput`<sup>Optional</sup> <a name="languageCodeInput" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.languageCodeInput"></a>

```java
public java.lang.String getLanguageCodeInput();
```

- *Type:* java.lang.String

---

##### `speakingRateInput`<sup>Optional</sup> <a name="speakingRateInput" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.speakingRateInput"></a>

```java
public java.lang.Number getSpeakingRateInput();
```

- *Type:* java.lang.Number

---

##### `voiceInput`<sup>Optional</sup> <a name="voiceInput" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.voiceInput"></a>

```java
public java.lang.String getVoiceInput();
```

- *Type:* java.lang.String

---

##### `languageCode`<sup>Required</sup> <a name="languageCode" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.languageCode"></a>

```java
public java.lang.String getLanguageCode();
```

- *Type:* java.lang.String

---

##### `speakingRate`<sup>Required</sup> <a name="speakingRate" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.speakingRate"></a>

```java
public java.lang.Number getSpeakingRate();
```

- *Type:* java.lang.Number

---

##### `voice`<sup>Required</sup> <a name="voice" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.voice"></a>

```java
public java.lang.String getVoice();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.internalValue"></a>

```java
public IResolvable|CesAppAudioProcessingConfigSynthesizeSpeechConfigs getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.cesApp.CesAppAudioProcessingConfigSynthesizeSpeechConfigs">CesAppAudioProcessingConfigSynthesizeSpeechConfigs</a>

---


### CesAppClientCertificateSettingsOutputReference <a name="CesAppClientCertificateSettingsOutputReference" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.ces_app.CesAppClientCertificateSettingsOutputReference;

new CesAppClientCertificateSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.resetPassphrase">resetPassphrase</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPassphrase` <a name="resetPassphrase" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.resetPassphrase"></a>

```java
public void resetPassphrase()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.property.passphraseInput">passphraseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.property.privateKeyInput">privateKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.property.tlsCertificateInput">tlsCertificateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.property.passphrase">passphrase</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.property.privateKey">privateKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.property.tlsCertificate">tlsCertificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettings">CesAppClientCertificateSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `passphraseInput`<sup>Optional</sup> <a name="passphraseInput" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.property.passphraseInput"></a>

```java
public java.lang.String getPassphraseInput();
```

- *Type:* java.lang.String

---

##### `privateKeyInput`<sup>Optional</sup> <a name="privateKeyInput" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.property.privateKeyInput"></a>

```java
public java.lang.String getPrivateKeyInput();
```

- *Type:* java.lang.String

---

##### `tlsCertificateInput`<sup>Optional</sup> <a name="tlsCertificateInput" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.property.tlsCertificateInput"></a>

```java
public java.lang.String getTlsCertificateInput();
```

- *Type:* java.lang.String

---

##### `passphrase`<sup>Required</sup> <a name="passphrase" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.property.passphrase"></a>

```java
public java.lang.String getPassphrase();
```

- *Type:* java.lang.String

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.property.privateKey"></a>

```java
public java.lang.String getPrivateKey();
```

- *Type:* java.lang.String

---

##### `tlsCertificate`<sup>Required</sup> <a name="tlsCertificate" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.property.tlsCertificate"></a>

```java
public java.lang.String getTlsCertificate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesApp.CesAppClientCertificateSettingsOutputReference.property.internalValue"></a>

```java
public CesAppClientCertificateSettings getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppClientCertificateSettings">CesAppClientCertificateSettings</a>

---


### CesAppDataStoreSettingsEnginesList <a name="CesAppDataStoreSettingsEnginesList" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesList.Initializer"></a>

```java
import io.cdktn.providers.google.ces_app.CesAppDataStoreSettingsEnginesList;

new CesAppDataStoreSettingsEnginesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesList.get"></a>

```java
public CesAppDataStoreSettingsEnginesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### CesAppDataStoreSettingsEnginesOutputReference <a name="CesAppDataStoreSettingsEnginesOutputReference" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.ces_app.CesAppDataStoreSettingsEnginesOutputReference;

new CesAppDataStoreSettingsEnginesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEngines">CesAppDataStoreSettingsEngines</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesOutputReference.property.internalValue"></a>

```java
public CesAppDataStoreSettingsEngines getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEngines">CesAppDataStoreSettingsEngines</a>

---


### CesAppDataStoreSettingsOutputReference <a name="CesAppDataStoreSettingsOutputReference" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.ces_app.CesAppDataStoreSettingsOutputReference;

new CesAppDataStoreSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.property.engines">engines</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesList">CesAppDataStoreSettingsEnginesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettings">CesAppDataStoreSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `engines`<sup>Required</sup> <a name="engines" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.property.engines"></a>

```java
public CesAppDataStoreSettingsEnginesList getEngines();
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettingsEnginesList">CesAppDataStoreSettingsEnginesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesApp.CesAppDataStoreSettingsOutputReference.property.internalValue"></a>

```java
public CesAppDataStoreSettings getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppDataStoreSettings">CesAppDataStoreSettings</a>

---


### CesAppDefaultChannelProfileOutputReference <a name="CesAppDefaultChannelProfileOutputReference" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.ces_app.CesAppDefaultChannelProfileOutputReference;

new CesAppDefaultChannelProfileOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.putPersonaProperty">putPersonaProperty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.putWebWidgetConfig">putWebWidgetConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.resetChannelType">resetChannelType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.resetDisableBargeInControl">resetDisableBargeInControl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.resetDisableDtmf">resetDisableDtmf</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.resetPersonaProperty">resetPersonaProperty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.resetProfileId">resetProfileId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.resetWebWidgetConfig">resetWebWidgetConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPersonaProperty` <a name="putPersonaProperty" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.putPersonaProperty"></a>

```java
public void putPersonaProperty(CesAppDefaultChannelProfilePersonaProperty value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.putPersonaProperty.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaProperty">CesAppDefaultChannelProfilePersonaProperty</a>

---

##### `putWebWidgetConfig` <a name="putWebWidgetConfig" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.putWebWidgetConfig"></a>

```java
public void putWebWidgetConfig(CesAppDefaultChannelProfileWebWidgetConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.putWebWidgetConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfig">CesAppDefaultChannelProfileWebWidgetConfig</a>

---

##### `resetChannelType` <a name="resetChannelType" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.resetChannelType"></a>

```java
public void resetChannelType()
```

##### `resetDisableBargeInControl` <a name="resetDisableBargeInControl" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.resetDisableBargeInControl"></a>

```java
public void resetDisableBargeInControl()
```

##### `resetDisableDtmf` <a name="resetDisableDtmf" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.resetDisableDtmf"></a>

```java
public void resetDisableDtmf()
```

##### `resetPersonaProperty` <a name="resetPersonaProperty" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.resetPersonaProperty"></a>

```java
public void resetPersonaProperty()
```

##### `resetProfileId` <a name="resetProfileId" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.resetProfileId"></a>

```java
public void resetProfileId()
```

##### `resetWebWidgetConfig` <a name="resetWebWidgetConfig" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.resetWebWidgetConfig"></a>

```java
public void resetWebWidgetConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.property.personaProperty">personaProperty</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference">CesAppDefaultChannelProfilePersonaPropertyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.property.webWidgetConfig">webWidgetConfig</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference">CesAppDefaultChannelProfileWebWidgetConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.property.channelTypeInput">channelTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.property.disableBargeInControlInput">disableBargeInControlInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.property.disableDtmfInput">disableDtmfInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.property.personaPropertyInput">personaPropertyInput</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaProperty">CesAppDefaultChannelProfilePersonaProperty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.property.profileIdInput">profileIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.property.webWidgetConfigInput">webWidgetConfigInput</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfig">CesAppDefaultChannelProfileWebWidgetConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.property.channelType">channelType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.property.disableBargeInControl">disableBargeInControl</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.property.disableDtmf">disableDtmf</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.property.profileId">profileId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfile">CesAppDefaultChannelProfile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `personaProperty`<sup>Required</sup> <a name="personaProperty" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.property.personaProperty"></a>

```java
public CesAppDefaultChannelProfilePersonaPropertyOutputReference getPersonaProperty();
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference">CesAppDefaultChannelProfilePersonaPropertyOutputReference</a>

---

##### `webWidgetConfig`<sup>Required</sup> <a name="webWidgetConfig" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.property.webWidgetConfig"></a>

```java
public CesAppDefaultChannelProfileWebWidgetConfigOutputReference getWebWidgetConfig();
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference">CesAppDefaultChannelProfileWebWidgetConfigOutputReference</a>

---

##### `channelTypeInput`<sup>Optional</sup> <a name="channelTypeInput" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.property.channelTypeInput"></a>

```java
public java.lang.String getChannelTypeInput();
```

- *Type:* java.lang.String

---

##### `disableBargeInControlInput`<sup>Optional</sup> <a name="disableBargeInControlInput" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.property.disableBargeInControlInput"></a>

```java
public java.lang.Boolean|IResolvable getDisableBargeInControlInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `disableDtmfInput`<sup>Optional</sup> <a name="disableDtmfInput" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.property.disableDtmfInput"></a>

```java
public java.lang.Boolean|IResolvable getDisableDtmfInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `personaPropertyInput`<sup>Optional</sup> <a name="personaPropertyInput" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.property.personaPropertyInput"></a>

```java
public CesAppDefaultChannelProfilePersonaProperty getPersonaPropertyInput();
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaProperty">CesAppDefaultChannelProfilePersonaProperty</a>

---

##### `profileIdInput`<sup>Optional</sup> <a name="profileIdInput" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.property.profileIdInput"></a>

```java
public java.lang.String getProfileIdInput();
```

- *Type:* java.lang.String

---

##### `webWidgetConfigInput`<sup>Optional</sup> <a name="webWidgetConfigInput" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.property.webWidgetConfigInput"></a>

```java
public CesAppDefaultChannelProfileWebWidgetConfig getWebWidgetConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfig">CesAppDefaultChannelProfileWebWidgetConfig</a>

---

##### `channelType`<sup>Required</sup> <a name="channelType" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.property.channelType"></a>

```java
public java.lang.String getChannelType();
```

- *Type:* java.lang.String

---

##### `disableBargeInControl`<sup>Required</sup> <a name="disableBargeInControl" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.property.disableBargeInControl"></a>

```java
public java.lang.Boolean|IResolvable getDisableBargeInControl();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `disableDtmf`<sup>Required</sup> <a name="disableDtmf" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.property.disableDtmf"></a>

```java
public java.lang.Boolean|IResolvable getDisableDtmf();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `profileId`<sup>Required</sup> <a name="profileId" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.property.profileId"></a>

```java
public java.lang.String getProfileId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileOutputReference.property.internalValue"></a>

```java
public CesAppDefaultChannelProfile getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfile">CesAppDefaultChannelProfile</a>

---


### CesAppDefaultChannelProfilePersonaPropertyOutputReference <a name="CesAppDefaultChannelProfilePersonaPropertyOutputReference" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.ces_app.CesAppDefaultChannelProfilePersonaPropertyOutputReference;

new CesAppDefaultChannelProfilePersonaPropertyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.resetPersona">resetPersona</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPersona` <a name="resetPersona" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.resetPersona"></a>

```java
public void resetPersona()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.property.personaInput">personaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.property.persona">persona</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaProperty">CesAppDefaultChannelProfilePersonaProperty</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `personaInput`<sup>Optional</sup> <a name="personaInput" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.property.personaInput"></a>

```java
public java.lang.String getPersonaInput();
```

- *Type:* java.lang.String

---

##### `persona`<sup>Required</sup> <a name="persona" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.property.persona"></a>

```java
public java.lang.String getPersona();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaPropertyOutputReference.property.internalValue"></a>

```java
public CesAppDefaultChannelProfilePersonaProperty getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfilePersonaProperty">CesAppDefaultChannelProfilePersonaProperty</a>

---


### CesAppDefaultChannelProfileWebWidgetConfigOutputReference <a name="CesAppDefaultChannelProfileWebWidgetConfigOutputReference" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.ces_app.CesAppDefaultChannelProfileWebWidgetConfigOutputReference;

new CesAppDefaultChannelProfileWebWidgetConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.resetModality">resetModality</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.resetTheme">resetTheme</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.resetWebWidgetTitle">resetWebWidgetTitle</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetModality` <a name="resetModality" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.resetModality"></a>

```java
public void resetModality()
```

##### `resetTheme` <a name="resetTheme" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.resetTheme"></a>

```java
public void resetTheme()
```

##### `resetWebWidgetTitle` <a name="resetWebWidgetTitle" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.resetWebWidgetTitle"></a>

```java
public void resetWebWidgetTitle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.property.modalityInput">modalityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.property.themeInput">themeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.property.webWidgetTitleInput">webWidgetTitleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.property.modality">modality</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.property.theme">theme</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.property.webWidgetTitle">webWidgetTitle</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfig">CesAppDefaultChannelProfileWebWidgetConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `modalityInput`<sup>Optional</sup> <a name="modalityInput" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.property.modalityInput"></a>

```java
public java.lang.String getModalityInput();
```

- *Type:* java.lang.String

---

##### `themeInput`<sup>Optional</sup> <a name="themeInput" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.property.themeInput"></a>

```java
public java.lang.String getThemeInput();
```

- *Type:* java.lang.String

---

##### `webWidgetTitleInput`<sup>Optional</sup> <a name="webWidgetTitleInput" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.property.webWidgetTitleInput"></a>

```java
public java.lang.String getWebWidgetTitleInput();
```

- *Type:* java.lang.String

---

##### `modality`<sup>Required</sup> <a name="modality" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.property.modality"></a>

```java
public java.lang.String getModality();
```

- *Type:* java.lang.String

---

##### `theme`<sup>Required</sup> <a name="theme" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.property.theme"></a>

```java
public java.lang.String getTheme();
```

- *Type:* java.lang.String

---

##### `webWidgetTitle`<sup>Required</sup> <a name="webWidgetTitle" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.property.webWidgetTitle"></a>

```java
public java.lang.String getWebWidgetTitle();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfigOutputReference.property.internalValue"></a>

```java
public CesAppDefaultChannelProfileWebWidgetConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppDefaultChannelProfileWebWidgetConfig">CesAppDefaultChannelProfileWebWidgetConfig</a>

---


### CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference <a name="CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.ces_app.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference;

new CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.resetToolInvocationParameterCorrectnessThreshold">resetToolInvocationParameterCorrectnessThreshold</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetToolInvocationParameterCorrectnessThreshold` <a name="resetToolInvocationParameterCorrectnessThreshold" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.resetToolInvocationParameterCorrectnessThreshold"></a>

```java
public void resetToolInvocationParameterCorrectnessThreshold()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.property.toolInvocationParameterCorrectnessThresholdInput">toolInvocationParameterCorrectnessThresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.property.toolInvocationParameterCorrectnessThreshold">toolInvocationParameterCorrectnessThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds">CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `toolInvocationParameterCorrectnessThresholdInput`<sup>Optional</sup> <a name="toolInvocationParameterCorrectnessThresholdInput" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.property.toolInvocationParameterCorrectnessThresholdInput"></a>

```java
public java.lang.Number getToolInvocationParameterCorrectnessThresholdInput();
```

- *Type:* java.lang.Number

---

##### `toolInvocationParameterCorrectnessThreshold`<sup>Required</sup> <a name="toolInvocationParameterCorrectnessThreshold" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.property.toolInvocationParameterCorrectnessThreshold"></a>

```java
public java.lang.Number getToolInvocationParameterCorrectnessThreshold();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.property.internalValue"></a>

```java
public CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds">CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds</a>

---


### CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference <a name="CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.ces_app.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference;

new CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.putExpectationLevelMetricsThresholds">putExpectationLevelMetricsThresholds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.putTurnLevelMetricsThresholds">putTurnLevelMetricsThresholds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.resetExpectationLevelMetricsThresholds">resetExpectationLevelMetricsThresholds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.resetTurnLevelMetricsThresholds">resetTurnLevelMetricsThresholds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExpectationLevelMetricsThresholds` <a name="putExpectationLevelMetricsThresholds" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.putExpectationLevelMetricsThresholds"></a>

```java
public void putExpectationLevelMetricsThresholds(CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.putExpectationLevelMetricsThresholds.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds">CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds</a>

---

##### `putTurnLevelMetricsThresholds` <a name="putTurnLevelMetricsThresholds" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.putTurnLevelMetricsThresholds"></a>

```java
public void putTurnLevelMetricsThresholds(CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.putTurnLevelMetricsThresholds.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds">CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds</a>

---

##### `resetExpectationLevelMetricsThresholds` <a name="resetExpectationLevelMetricsThresholds" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.resetExpectationLevelMetricsThresholds"></a>

```java
public void resetExpectationLevelMetricsThresholds()
```

##### `resetTurnLevelMetricsThresholds` <a name="resetTurnLevelMetricsThresholds" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.resetTurnLevelMetricsThresholds"></a>

```java
public void resetTurnLevelMetricsThresholds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.property.expectationLevelMetricsThresholds">expectationLevelMetricsThresholds</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference">CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.property.turnLevelMetricsThresholds">turnLevelMetricsThresholds</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference">CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.property.expectationLevelMetricsThresholdsInput">expectationLevelMetricsThresholdsInput</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds">CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.property.turnLevelMetricsThresholdsInput">turnLevelMetricsThresholdsInput</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds">CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds">CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `expectationLevelMetricsThresholds`<sup>Required</sup> <a name="expectationLevelMetricsThresholds" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.property.expectationLevelMetricsThresholds"></a>

```java
public CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference getExpectationLevelMetricsThresholds();
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference">CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference</a>

---

##### `turnLevelMetricsThresholds`<sup>Required</sup> <a name="turnLevelMetricsThresholds" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.property.turnLevelMetricsThresholds"></a>

```java
public CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference getTurnLevelMetricsThresholds();
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference">CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference</a>

---

##### `expectationLevelMetricsThresholdsInput`<sup>Optional</sup> <a name="expectationLevelMetricsThresholdsInput" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.property.expectationLevelMetricsThresholdsInput"></a>

```java
public CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds getExpectationLevelMetricsThresholdsInput();
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds">CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds</a>

---

##### `turnLevelMetricsThresholdsInput`<sup>Optional</sup> <a name="turnLevelMetricsThresholdsInput" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.property.turnLevelMetricsThresholdsInput"></a>

```java
public CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds getTurnLevelMetricsThresholdsInput();
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds">CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.property.internalValue"></a>

```java
public CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds">CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds</a>

---


### CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference <a name="CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.ces_app.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference;

new CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.resetOverallToolInvocationCorrectnessThreshold">resetOverallToolInvocationCorrectnessThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.resetSemanticSimilaritySuccessThreshold">resetSemanticSimilaritySuccessThreshold</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOverallToolInvocationCorrectnessThreshold` <a name="resetOverallToolInvocationCorrectnessThreshold" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.resetOverallToolInvocationCorrectnessThreshold"></a>

```java
public void resetOverallToolInvocationCorrectnessThreshold()
```

##### `resetSemanticSimilaritySuccessThreshold` <a name="resetSemanticSimilaritySuccessThreshold" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.resetSemanticSimilaritySuccessThreshold"></a>

```java
public void resetSemanticSimilaritySuccessThreshold()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.property.overallToolInvocationCorrectnessThresholdInput">overallToolInvocationCorrectnessThresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.property.semanticSimilaritySuccessThresholdInput">semanticSimilaritySuccessThresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.property.overallToolInvocationCorrectnessThreshold">overallToolInvocationCorrectnessThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.property.semanticSimilaritySuccessThreshold">semanticSimilaritySuccessThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds">CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `overallToolInvocationCorrectnessThresholdInput`<sup>Optional</sup> <a name="overallToolInvocationCorrectnessThresholdInput" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.property.overallToolInvocationCorrectnessThresholdInput"></a>

```java
public java.lang.Number getOverallToolInvocationCorrectnessThresholdInput();
```

- *Type:* java.lang.Number

---

##### `semanticSimilaritySuccessThresholdInput`<sup>Optional</sup> <a name="semanticSimilaritySuccessThresholdInput" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.property.semanticSimilaritySuccessThresholdInput"></a>

```java
public java.lang.Number getSemanticSimilaritySuccessThresholdInput();
```

- *Type:* java.lang.Number

---

##### `overallToolInvocationCorrectnessThreshold`<sup>Required</sup> <a name="overallToolInvocationCorrectnessThreshold" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.property.overallToolInvocationCorrectnessThreshold"></a>

```java
public java.lang.Number getOverallToolInvocationCorrectnessThreshold();
```

- *Type:* java.lang.Number

---

##### `semanticSimilaritySuccessThreshold`<sup>Required</sup> <a name="semanticSimilaritySuccessThreshold" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.property.semanticSimilaritySuccessThreshold"></a>

```java
public java.lang.Number getSemanticSimilaritySuccessThreshold();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.property.internalValue"></a>

```java
public CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds">CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds</a>

---


### CesAppEvaluationMetricsThresholdsOutputReference <a name="CesAppEvaluationMetricsThresholdsOutputReference" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.ces_app.CesAppEvaluationMetricsThresholdsOutputReference;

new CesAppEvaluationMetricsThresholdsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.putGoldenEvaluationMetricsThresholds">putGoldenEvaluationMetricsThresholds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.resetGoldenEvaluationMetricsThresholds">resetGoldenEvaluationMetricsThresholds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGoldenEvaluationMetricsThresholds` <a name="putGoldenEvaluationMetricsThresholds" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.putGoldenEvaluationMetricsThresholds"></a>

```java
public void putGoldenEvaluationMetricsThresholds(CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.putGoldenEvaluationMetricsThresholds.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds">CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds</a>

---

##### `resetGoldenEvaluationMetricsThresholds` <a name="resetGoldenEvaluationMetricsThresholds" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.resetGoldenEvaluationMetricsThresholds"></a>

```java
public void resetGoldenEvaluationMetricsThresholds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.property.goldenEvaluationMetricsThresholds">goldenEvaluationMetricsThresholds</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference">CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.property.goldenEvaluationMetricsThresholdsInput">goldenEvaluationMetricsThresholdsInput</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds">CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholds">CesAppEvaluationMetricsThresholds</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `goldenEvaluationMetricsThresholds`<sup>Required</sup> <a name="goldenEvaluationMetricsThresholds" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.property.goldenEvaluationMetricsThresholds"></a>

```java
public CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference getGoldenEvaluationMetricsThresholds();
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference">CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference</a>

---

##### `goldenEvaluationMetricsThresholdsInput`<sup>Optional</sup> <a name="goldenEvaluationMetricsThresholdsInput" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.property.goldenEvaluationMetricsThresholdsInput"></a>

```java
public CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds getGoldenEvaluationMetricsThresholdsInput();
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds">CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholdsOutputReference.property.internalValue"></a>

```java
public CesAppEvaluationMetricsThresholds getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppEvaluationMetricsThresholds">CesAppEvaluationMetricsThresholds</a>

---


### CesAppLanguageSettingsOutputReference <a name="CesAppLanguageSettingsOutputReference" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.ces_app.CesAppLanguageSettingsOutputReference;

new CesAppLanguageSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.resetDefaultLanguageCode">resetDefaultLanguageCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.resetEnableMultilingualSupport">resetEnableMultilingualSupport</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.resetFallbackAction">resetFallbackAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.resetSupportedLanguageCodes">resetSupportedLanguageCodes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDefaultLanguageCode` <a name="resetDefaultLanguageCode" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.resetDefaultLanguageCode"></a>

```java
public void resetDefaultLanguageCode()
```

##### `resetEnableMultilingualSupport` <a name="resetEnableMultilingualSupport" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.resetEnableMultilingualSupport"></a>

```java
public void resetEnableMultilingualSupport()
```

##### `resetFallbackAction` <a name="resetFallbackAction" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.resetFallbackAction"></a>

```java
public void resetFallbackAction()
```

##### `resetSupportedLanguageCodes` <a name="resetSupportedLanguageCodes" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.resetSupportedLanguageCodes"></a>

```java
public void resetSupportedLanguageCodes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.property.defaultLanguageCodeInput">defaultLanguageCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.property.enableMultilingualSupportInput">enableMultilingualSupportInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.property.fallbackActionInput">fallbackActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.property.supportedLanguageCodesInput">supportedLanguageCodesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.property.defaultLanguageCode">defaultLanguageCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.property.enableMultilingualSupport">enableMultilingualSupport</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.property.fallbackAction">fallbackAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.property.supportedLanguageCodes">supportedLanguageCodes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettings">CesAppLanguageSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `defaultLanguageCodeInput`<sup>Optional</sup> <a name="defaultLanguageCodeInput" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.property.defaultLanguageCodeInput"></a>

```java
public java.lang.String getDefaultLanguageCodeInput();
```

- *Type:* java.lang.String

---

##### `enableMultilingualSupportInput`<sup>Optional</sup> <a name="enableMultilingualSupportInput" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.property.enableMultilingualSupportInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableMultilingualSupportInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `fallbackActionInput`<sup>Optional</sup> <a name="fallbackActionInput" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.property.fallbackActionInput"></a>

```java
public java.lang.String getFallbackActionInput();
```

- *Type:* java.lang.String

---

##### `supportedLanguageCodesInput`<sup>Optional</sup> <a name="supportedLanguageCodesInput" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.property.supportedLanguageCodesInput"></a>

```java
public java.util.List<java.lang.String> getSupportedLanguageCodesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `defaultLanguageCode`<sup>Required</sup> <a name="defaultLanguageCode" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.property.defaultLanguageCode"></a>

```java
public java.lang.String getDefaultLanguageCode();
```

- *Type:* java.lang.String

---

##### `enableMultilingualSupport`<sup>Required</sup> <a name="enableMultilingualSupport" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.property.enableMultilingualSupport"></a>

```java
public java.lang.Boolean|IResolvable getEnableMultilingualSupport();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `fallbackAction`<sup>Required</sup> <a name="fallbackAction" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.property.fallbackAction"></a>

```java
public java.lang.String getFallbackAction();
```

- *Type:* java.lang.String

---

##### `supportedLanguageCodes`<sup>Required</sup> <a name="supportedLanguageCodes" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.property.supportedLanguageCodes"></a>

```java
public java.util.List<java.lang.String> getSupportedLanguageCodes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesApp.CesAppLanguageSettingsOutputReference.property.internalValue"></a>

```java
public CesAppLanguageSettings getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLanguageSettings">CesAppLanguageSettings</a>

---


### CesAppLoggingSettingsAudioRecordingConfigOutputReference <a name="CesAppLoggingSettingsAudioRecordingConfigOutputReference" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.ces_app.CesAppLoggingSettingsAudioRecordingConfigOutputReference;

new CesAppLoggingSettingsAudioRecordingConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.resetGcsBucket">resetGcsBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.resetGcsPathPrefix">resetGcsPathPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGcsBucket` <a name="resetGcsBucket" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.resetGcsBucket"></a>

```java
public void resetGcsBucket()
```

##### `resetGcsPathPrefix` <a name="resetGcsPathPrefix" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.resetGcsPathPrefix"></a>

```java
public void resetGcsPathPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.property.gcsBucketInput">gcsBucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.property.gcsPathPrefixInput">gcsPathPrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.property.gcsBucket">gcsBucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.property.gcsPathPrefix">gcsPathPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfig">CesAppLoggingSettingsAudioRecordingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `gcsBucketInput`<sup>Optional</sup> <a name="gcsBucketInput" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.property.gcsBucketInput"></a>

```java
public java.lang.String getGcsBucketInput();
```

- *Type:* java.lang.String

---

##### `gcsPathPrefixInput`<sup>Optional</sup> <a name="gcsPathPrefixInput" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.property.gcsPathPrefixInput"></a>

```java
public java.lang.String getGcsPathPrefixInput();
```

- *Type:* java.lang.String

---

##### `gcsBucket`<sup>Required</sup> <a name="gcsBucket" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.property.gcsBucket"></a>

```java
public java.lang.String getGcsBucket();
```

- *Type:* java.lang.String

---

##### `gcsPathPrefix`<sup>Required</sup> <a name="gcsPathPrefix" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.property.gcsPathPrefix"></a>

```java
public java.lang.String getGcsPathPrefix();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference.property.internalValue"></a>

```java
public CesAppLoggingSettingsAudioRecordingConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfig">CesAppLoggingSettingsAudioRecordingConfig</a>

---


### CesAppLoggingSettingsBigqueryExportSettingsOutputReference <a name="CesAppLoggingSettingsBigqueryExportSettingsOutputReference" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.ces_app.CesAppLoggingSettingsBigqueryExportSettingsOutputReference;

new CesAppLoggingSettingsBigqueryExportSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.resetDataset">resetDataset</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.resetProject">resetProject</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDataset` <a name="resetDataset" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.resetDataset"></a>

```java
public void resetDataset()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.resetProject"></a>

```java
public void resetProject()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.property.datasetInput">datasetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.property.dataset">dataset</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettings">CesAppLoggingSettingsBigqueryExportSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `datasetInput`<sup>Optional</sup> <a name="datasetInput" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.property.datasetInput"></a>

```java
public java.lang.String getDatasetInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.property.dataset"></a>

```java
public java.lang.String getDataset();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference.property.internalValue"></a>

```java
public CesAppLoggingSettingsBigqueryExportSettings getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettings">CesAppLoggingSettingsBigqueryExportSettings</a>

---


### CesAppLoggingSettingsCloudLoggingSettingsOutputReference <a name="CesAppLoggingSettingsCloudLoggingSettingsOutputReference" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.ces_app.CesAppLoggingSettingsCloudLoggingSettingsOutputReference;

new CesAppLoggingSettingsCloudLoggingSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.resetEnableCloudLogging">resetEnableCloudLogging</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnableCloudLogging` <a name="resetEnableCloudLogging" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.resetEnableCloudLogging"></a>

```java
public void resetEnableCloudLogging()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.property.enableCloudLoggingInput">enableCloudLoggingInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.property.enableCloudLogging">enableCloudLogging</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettings">CesAppLoggingSettingsCloudLoggingSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enableCloudLoggingInput`<sup>Optional</sup> <a name="enableCloudLoggingInput" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.property.enableCloudLoggingInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableCloudLoggingInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enableCloudLogging`<sup>Required</sup> <a name="enableCloudLogging" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.property.enableCloudLogging"></a>

```java
public java.lang.Boolean|IResolvable getEnableCloudLogging();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference.property.internalValue"></a>

```java
public CesAppLoggingSettingsCloudLoggingSettings getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettings">CesAppLoggingSettingsCloudLoggingSettings</a>

---


### CesAppLoggingSettingsConversationLoggingSettingsOutputReference <a name="CesAppLoggingSettingsConversationLoggingSettingsOutputReference" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.ces_app.CesAppLoggingSettingsConversationLoggingSettingsOutputReference;

new CesAppLoggingSettingsConversationLoggingSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.resetDisableConversationLogging">resetDisableConversationLogging</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisableConversationLogging` <a name="resetDisableConversationLogging" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.resetDisableConversationLogging"></a>

```java
public void resetDisableConversationLogging()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.property.disableConversationLoggingInput">disableConversationLoggingInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.property.disableConversationLogging">disableConversationLogging</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettings">CesAppLoggingSettingsConversationLoggingSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `disableConversationLoggingInput`<sup>Optional</sup> <a name="disableConversationLoggingInput" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.property.disableConversationLoggingInput"></a>

```java
public java.lang.Boolean|IResolvable getDisableConversationLoggingInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `disableConversationLogging`<sup>Required</sup> <a name="disableConversationLogging" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.property.disableConversationLogging"></a>

```java
public java.lang.Boolean|IResolvable getDisableConversationLogging();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference.property.internalValue"></a>

```java
public CesAppLoggingSettingsConversationLoggingSettings getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettings">CesAppLoggingSettingsConversationLoggingSettings</a>

---


### CesAppLoggingSettingsOutputReference <a name="CesAppLoggingSettingsOutputReference" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.ces_app.CesAppLoggingSettingsOutputReference;

new CesAppLoggingSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.putAudioRecordingConfig">putAudioRecordingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.putBigqueryExportSettings">putBigqueryExportSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.putCloudLoggingSettings">putCloudLoggingSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.putConversationLoggingSettings">putConversationLoggingSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.putRedactionConfig">putRedactionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.resetAudioRecordingConfig">resetAudioRecordingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.resetBigqueryExportSettings">resetBigqueryExportSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.resetCloudLoggingSettings">resetCloudLoggingSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.resetConversationLoggingSettings">resetConversationLoggingSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.resetRedactionConfig">resetRedactionConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAudioRecordingConfig` <a name="putAudioRecordingConfig" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.putAudioRecordingConfig"></a>

```java
public void putAudioRecordingConfig(CesAppLoggingSettingsAudioRecordingConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.putAudioRecordingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfig">CesAppLoggingSettingsAudioRecordingConfig</a>

---

##### `putBigqueryExportSettings` <a name="putBigqueryExportSettings" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.putBigqueryExportSettings"></a>

```java
public void putBigqueryExportSettings(CesAppLoggingSettingsBigqueryExportSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.putBigqueryExportSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettings">CesAppLoggingSettingsBigqueryExportSettings</a>

---

##### `putCloudLoggingSettings` <a name="putCloudLoggingSettings" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.putCloudLoggingSettings"></a>

```java
public void putCloudLoggingSettings(CesAppLoggingSettingsCloudLoggingSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.putCloudLoggingSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettings">CesAppLoggingSettingsCloudLoggingSettings</a>

---

##### `putConversationLoggingSettings` <a name="putConversationLoggingSettings" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.putConversationLoggingSettings"></a>

```java
public void putConversationLoggingSettings(CesAppLoggingSettingsConversationLoggingSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.putConversationLoggingSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettings">CesAppLoggingSettingsConversationLoggingSettings</a>

---

##### `putRedactionConfig` <a name="putRedactionConfig" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.putRedactionConfig"></a>

```java
public void putRedactionConfig(CesAppLoggingSettingsRedactionConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.putRedactionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfig">CesAppLoggingSettingsRedactionConfig</a>

---

##### `resetAudioRecordingConfig` <a name="resetAudioRecordingConfig" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.resetAudioRecordingConfig"></a>

```java
public void resetAudioRecordingConfig()
```

##### `resetBigqueryExportSettings` <a name="resetBigqueryExportSettings" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.resetBigqueryExportSettings"></a>

```java
public void resetBigqueryExportSettings()
```

##### `resetCloudLoggingSettings` <a name="resetCloudLoggingSettings" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.resetCloudLoggingSettings"></a>

```java
public void resetCloudLoggingSettings()
```

##### `resetConversationLoggingSettings` <a name="resetConversationLoggingSettings" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.resetConversationLoggingSettings"></a>

```java
public void resetConversationLoggingSettings()
```

##### `resetRedactionConfig` <a name="resetRedactionConfig" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.resetRedactionConfig"></a>

```java
public void resetRedactionConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.property.audioRecordingConfig">audioRecordingConfig</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference">CesAppLoggingSettingsAudioRecordingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.property.bigqueryExportSettings">bigqueryExportSettings</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference">CesAppLoggingSettingsBigqueryExportSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.property.cloudLoggingSettings">cloudLoggingSettings</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference">CesAppLoggingSettingsCloudLoggingSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.property.conversationLoggingSettings">conversationLoggingSettings</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference">CesAppLoggingSettingsConversationLoggingSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.property.redactionConfig">redactionConfig</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference">CesAppLoggingSettingsRedactionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.property.audioRecordingConfigInput">audioRecordingConfigInput</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfig">CesAppLoggingSettingsAudioRecordingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.property.bigqueryExportSettingsInput">bigqueryExportSettingsInput</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettings">CesAppLoggingSettingsBigqueryExportSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.property.cloudLoggingSettingsInput">cloudLoggingSettingsInput</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettings">CesAppLoggingSettingsCloudLoggingSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.property.conversationLoggingSettingsInput">conversationLoggingSettingsInput</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettings">CesAppLoggingSettingsConversationLoggingSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.property.redactionConfigInput">redactionConfigInput</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfig">CesAppLoggingSettingsRedactionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettings">CesAppLoggingSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `audioRecordingConfig`<sup>Required</sup> <a name="audioRecordingConfig" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.property.audioRecordingConfig"></a>

```java
public CesAppLoggingSettingsAudioRecordingConfigOutputReference getAudioRecordingConfig();
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfigOutputReference">CesAppLoggingSettingsAudioRecordingConfigOutputReference</a>

---

##### `bigqueryExportSettings`<sup>Required</sup> <a name="bigqueryExportSettings" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.property.bigqueryExportSettings"></a>

```java
public CesAppLoggingSettingsBigqueryExportSettingsOutputReference getBigqueryExportSettings();
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettingsOutputReference">CesAppLoggingSettingsBigqueryExportSettingsOutputReference</a>

---

##### `cloudLoggingSettings`<sup>Required</sup> <a name="cloudLoggingSettings" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.property.cloudLoggingSettings"></a>

```java
public CesAppLoggingSettingsCloudLoggingSettingsOutputReference getCloudLoggingSettings();
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettingsOutputReference">CesAppLoggingSettingsCloudLoggingSettingsOutputReference</a>

---

##### `conversationLoggingSettings`<sup>Required</sup> <a name="conversationLoggingSettings" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.property.conversationLoggingSettings"></a>

```java
public CesAppLoggingSettingsConversationLoggingSettingsOutputReference getConversationLoggingSettings();
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettingsOutputReference">CesAppLoggingSettingsConversationLoggingSettingsOutputReference</a>

---

##### `redactionConfig`<sup>Required</sup> <a name="redactionConfig" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.property.redactionConfig"></a>

```java
public CesAppLoggingSettingsRedactionConfigOutputReference getRedactionConfig();
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference">CesAppLoggingSettingsRedactionConfigOutputReference</a>

---

##### `audioRecordingConfigInput`<sup>Optional</sup> <a name="audioRecordingConfigInput" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.property.audioRecordingConfigInput"></a>

```java
public CesAppLoggingSettingsAudioRecordingConfig getAudioRecordingConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsAudioRecordingConfig">CesAppLoggingSettingsAudioRecordingConfig</a>

---

##### `bigqueryExportSettingsInput`<sup>Optional</sup> <a name="bigqueryExportSettingsInput" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.property.bigqueryExportSettingsInput"></a>

```java
public CesAppLoggingSettingsBigqueryExportSettings getBigqueryExportSettingsInput();
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsBigqueryExportSettings">CesAppLoggingSettingsBigqueryExportSettings</a>

---

##### `cloudLoggingSettingsInput`<sup>Optional</sup> <a name="cloudLoggingSettingsInput" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.property.cloudLoggingSettingsInput"></a>

```java
public CesAppLoggingSettingsCloudLoggingSettings getCloudLoggingSettingsInput();
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsCloudLoggingSettings">CesAppLoggingSettingsCloudLoggingSettings</a>

---

##### `conversationLoggingSettingsInput`<sup>Optional</sup> <a name="conversationLoggingSettingsInput" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.property.conversationLoggingSettingsInput"></a>

```java
public CesAppLoggingSettingsConversationLoggingSettings getConversationLoggingSettingsInput();
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsConversationLoggingSettings">CesAppLoggingSettingsConversationLoggingSettings</a>

---

##### `redactionConfigInput`<sup>Optional</sup> <a name="redactionConfigInput" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.property.redactionConfigInput"></a>

```java
public CesAppLoggingSettingsRedactionConfig getRedactionConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfig">CesAppLoggingSettingsRedactionConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsOutputReference.property.internalValue"></a>

```java
public CesAppLoggingSettings getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettings">CesAppLoggingSettings</a>

---


### CesAppLoggingSettingsRedactionConfigOutputReference <a name="CesAppLoggingSettingsRedactionConfigOutputReference" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.ces_app.CesAppLoggingSettingsRedactionConfigOutputReference;

new CesAppLoggingSettingsRedactionConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.resetDeidentifyTemplate">resetDeidentifyTemplate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.resetEnableRedaction">resetEnableRedaction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.resetInspectTemplate">resetInspectTemplate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDeidentifyTemplate` <a name="resetDeidentifyTemplate" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.resetDeidentifyTemplate"></a>

```java
public void resetDeidentifyTemplate()
```

##### `resetEnableRedaction` <a name="resetEnableRedaction" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.resetEnableRedaction"></a>

```java
public void resetEnableRedaction()
```

##### `resetInspectTemplate` <a name="resetInspectTemplate" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.resetInspectTemplate"></a>

```java
public void resetInspectTemplate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.property.deidentifyTemplateInput">deidentifyTemplateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.property.enableRedactionInput">enableRedactionInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.property.inspectTemplateInput">inspectTemplateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.property.deidentifyTemplate">deidentifyTemplate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.property.enableRedaction">enableRedaction</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.property.inspectTemplate">inspectTemplate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfig">CesAppLoggingSettingsRedactionConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deidentifyTemplateInput`<sup>Optional</sup> <a name="deidentifyTemplateInput" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.property.deidentifyTemplateInput"></a>

```java
public java.lang.String getDeidentifyTemplateInput();
```

- *Type:* java.lang.String

---

##### `enableRedactionInput`<sup>Optional</sup> <a name="enableRedactionInput" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.property.enableRedactionInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableRedactionInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `inspectTemplateInput`<sup>Optional</sup> <a name="inspectTemplateInput" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.property.inspectTemplateInput"></a>

```java
public java.lang.String getInspectTemplateInput();
```

- *Type:* java.lang.String

---

##### `deidentifyTemplate`<sup>Required</sup> <a name="deidentifyTemplate" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.property.deidentifyTemplate"></a>

```java
public java.lang.String getDeidentifyTemplate();
```

- *Type:* java.lang.String

---

##### `enableRedaction`<sup>Required</sup> <a name="enableRedaction" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.property.enableRedaction"></a>

```java
public java.lang.Boolean|IResolvable getEnableRedaction();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `inspectTemplate`<sup>Required</sup> <a name="inspectTemplate" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.property.inspectTemplate"></a>

```java
public java.lang.String getInspectTemplate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfigOutputReference.property.internalValue"></a>

```java
public CesAppLoggingSettingsRedactionConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppLoggingSettingsRedactionConfig">CesAppLoggingSettingsRedactionConfig</a>

---


### CesAppModelSettingsOutputReference <a name="CesAppModelSettingsOutputReference" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.ces_app.CesAppModelSettingsOutputReference;

new CesAppModelSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.resetModel">resetModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.resetTemperature">resetTemperature</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetModel` <a name="resetModel" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.resetModel"></a>

```java
public void resetModel()
```

##### `resetTemperature` <a name="resetTemperature" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.resetTemperature"></a>

```java
public void resetTemperature()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.property.modelInput">modelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.property.temperatureInput">temperatureInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.property.model">model</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.property.temperature">temperature</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppModelSettings">CesAppModelSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `modelInput`<sup>Optional</sup> <a name="modelInput" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.property.modelInput"></a>

```java
public java.lang.String getModelInput();
```

- *Type:* java.lang.String

---

##### `temperatureInput`<sup>Optional</sup> <a name="temperatureInput" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.property.temperatureInput"></a>

```java
public java.lang.Number getTemperatureInput();
```

- *Type:* java.lang.Number

---

##### `model`<sup>Required</sup> <a name="model" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.property.model"></a>

```java
public java.lang.String getModel();
```

- *Type:* java.lang.String

---

##### `temperature`<sup>Required</sup> <a name="temperature" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.property.temperature"></a>

```java
public java.lang.Number getTemperature();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesApp.CesAppModelSettingsOutputReference.property.internalValue"></a>

```java
public CesAppModelSettings getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppModelSettings">CesAppModelSettings</a>

---


### CesAppTimeoutsOutputReference <a name="CesAppTimeoutsOutputReference" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.ces_app.CesAppTimeoutsOutputReference;

new CesAppTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.cesApp.CesAppTimeouts">CesAppTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesApp.CesAppTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|CesAppTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.cesApp.CesAppTimeouts">CesAppTimeouts</a>

---


### CesAppTimeZoneSettingsOutputReference <a name="CesAppTimeZoneSettingsOutputReference" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.ces_app.CesAppTimeZoneSettingsOutputReference;

new CesAppTimeZoneSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.resetTimeZone">resetTimeZone</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTimeZone` <a name="resetTimeZone" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.resetTimeZone"></a>

```java
public void resetTimeZone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.property.timeZoneInput">timeZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppTimeZoneSettings">CesAppTimeZoneSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.property.timeZoneInput"></a>

```java
public java.lang.String getTimeZoneInput();
```

- *Type:* java.lang.String

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesApp.CesAppTimeZoneSettingsOutputReference.property.internalValue"></a>

```java
public CesAppTimeZoneSettings getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppTimeZoneSettings">CesAppTimeZoneSettings</a>

---


### CesAppVariableDeclarationsList <a name="CesAppVariableDeclarationsList" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsList.Initializer"></a>

```java
import io.cdktn.providers.google.ces_app.CesAppVariableDeclarationsList;

new CesAppVariableDeclarationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsList.get"></a>

```java
public CesAppVariableDeclarationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarations">CesAppVariableDeclarations</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<CesAppVariableDeclarations> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarations">CesAppVariableDeclarations</a>>

---


### CesAppVariableDeclarationsOutputReference <a name="CesAppVariableDeclarationsOutputReference" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.ces_app.CesAppVariableDeclarationsOutputReference;

new CesAppVariableDeclarationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.putSchema">putSchema</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSchema` <a name="putSchema" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.putSchema"></a>

```java
public void putSchema(CesAppVariableDeclarationsSchema value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.putSchema.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema">CesAppVariableDeclarationsSchema</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.property.schema">schema</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference">CesAppVariableDeclarationsSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.property.schemaInput">schemaInput</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema">CesAppVariableDeclarationsSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarations">CesAppVariableDeclarations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.property.schema"></a>

```java
public CesAppVariableDeclarationsSchemaOutputReference getSchema();
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference">CesAppVariableDeclarationsSchemaOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.property.schemaInput"></a>

```java
public CesAppVariableDeclarationsSchema getSchemaInput();
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema">CesAppVariableDeclarationsSchema</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsOutputReference.property.internalValue"></a>

```java
public IResolvable|CesAppVariableDeclarations getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarations">CesAppVariableDeclarations</a>

---


### CesAppVariableDeclarationsSchemaOutputReference <a name="CesAppVariableDeclarationsSchemaOutputReference" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.ces_app.CesAppVariableDeclarationsSchemaOutputReference;

new CesAppVariableDeclarationsSchemaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.resetAdditionalProperties">resetAdditionalProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.resetAnyOf">resetAnyOf</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.resetDefault">resetDefault</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.resetDefs">resetDefs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.resetEnum">resetEnum</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.resetItems">resetItems</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.resetNullable">resetNullable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.resetPrefixItems">resetPrefixItems</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.resetProperties">resetProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.resetRef">resetRef</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.resetRequired">resetRequired</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.resetTitle">resetTitle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.resetUniqueItems">resetUniqueItems</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAdditionalProperties` <a name="resetAdditionalProperties" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.resetAdditionalProperties"></a>

```java
public void resetAdditionalProperties()
```

##### `resetAnyOf` <a name="resetAnyOf" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.resetAnyOf"></a>

```java
public void resetAnyOf()
```

##### `resetDefault` <a name="resetDefault" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.resetDefault"></a>

```java
public void resetDefault()
```

##### `resetDefs` <a name="resetDefs" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.resetDefs"></a>

```java
public void resetDefs()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEnum` <a name="resetEnum" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.resetEnum"></a>

```java
public void resetEnum()
```

##### `resetItems` <a name="resetItems" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.resetItems"></a>

```java
public void resetItems()
```

##### `resetNullable` <a name="resetNullable" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.resetNullable"></a>

```java
public void resetNullable()
```

##### `resetPrefixItems` <a name="resetPrefixItems" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.resetPrefixItems"></a>

```java
public void resetPrefixItems()
```

##### `resetProperties` <a name="resetProperties" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.resetProperties"></a>

```java
public void resetProperties()
```

##### `resetRef` <a name="resetRef" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.resetRef"></a>

```java
public void resetRef()
```

##### `resetRequired` <a name="resetRequired" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.resetRequired"></a>

```java
public void resetRequired()
```

##### `resetTitle` <a name="resetTitle" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.resetTitle"></a>

```java
public void resetTitle()
```

##### `resetUniqueItems` <a name="resetUniqueItems" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.resetUniqueItems"></a>

```java
public void resetUniqueItems()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.additionalPropertiesInput">additionalPropertiesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.anyOfInput">anyOfInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.defaultInput">defaultInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.defsInput">defsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.enumInput">enumInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.itemsInput">itemsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.nullableInput">nullableInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.prefixItemsInput">prefixItemsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.propertiesInput">propertiesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.refInput">refInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.requiredInput">requiredInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.titleInput">titleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.uniqueItemsInput">uniqueItemsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.additionalProperties">additionalProperties</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.anyOf">anyOf</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.defs">defs</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.enum">enum</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.items">items</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.nullable">nullable</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.prefixItems">prefixItems</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.properties">properties</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.ref">ref</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.required">required</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.uniqueItems">uniqueItems</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema">CesAppVariableDeclarationsSchema</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `additionalPropertiesInput`<sup>Optional</sup> <a name="additionalPropertiesInput" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.additionalPropertiesInput"></a>

```java
public java.lang.String getAdditionalPropertiesInput();
```

- *Type:* java.lang.String

---

##### `anyOfInput`<sup>Optional</sup> <a name="anyOfInput" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.anyOfInput"></a>

```java
public java.lang.String getAnyOfInput();
```

- *Type:* java.lang.String

---

##### `defaultInput`<sup>Optional</sup> <a name="defaultInput" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.defaultInput"></a>

```java
public java.lang.String getDefaultInput();
```

- *Type:* java.lang.String

---

##### `defsInput`<sup>Optional</sup> <a name="defsInput" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.defsInput"></a>

```java
public java.lang.String getDefsInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `enumInput`<sup>Optional</sup> <a name="enumInput" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.enumInput"></a>

```java
public java.util.List<java.lang.String> getEnumInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `itemsInput`<sup>Optional</sup> <a name="itemsInput" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.itemsInput"></a>

```java
public java.lang.String getItemsInput();
```

- *Type:* java.lang.String

---

##### `nullableInput`<sup>Optional</sup> <a name="nullableInput" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.nullableInput"></a>

```java
public java.lang.Boolean|IResolvable getNullableInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `prefixItemsInput`<sup>Optional</sup> <a name="prefixItemsInput" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.prefixItemsInput"></a>

```java
public java.lang.String getPrefixItemsInput();
```

- *Type:* java.lang.String

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.propertiesInput"></a>

```java
public java.lang.String getPropertiesInput();
```

- *Type:* java.lang.String

---

##### `refInput`<sup>Optional</sup> <a name="refInput" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.refInput"></a>

```java
public java.lang.String getRefInput();
```

- *Type:* java.lang.String

---

##### `requiredInput`<sup>Optional</sup> <a name="requiredInput" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.requiredInput"></a>

```java
public java.util.List<java.lang.String> getRequiredInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.titleInput"></a>

```java
public java.lang.String getTitleInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `uniqueItemsInput`<sup>Optional</sup> <a name="uniqueItemsInput" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.uniqueItemsInput"></a>

```java
public java.lang.Boolean|IResolvable getUniqueItemsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `additionalProperties`<sup>Required</sup> <a name="additionalProperties" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.additionalProperties"></a>

```java
public java.lang.String getAdditionalProperties();
```

- *Type:* java.lang.String

---

##### `anyOf`<sup>Required</sup> <a name="anyOf" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.anyOf"></a>

```java
public java.lang.String getAnyOf();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `defs`<sup>Required</sup> <a name="defs" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.defs"></a>

```java
public java.lang.String getDefs();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `enum`<sup>Required</sup> <a name="enum" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.enum"></a>

```java
public java.util.List<java.lang.String> getEnum();
```

- *Type:* java.util.List<java.lang.String>

---

##### `items`<sup>Required</sup> <a name="items" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.items"></a>

```java
public java.lang.String getItems();
```

- *Type:* java.lang.String

---

##### `nullable`<sup>Required</sup> <a name="nullable" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.nullable"></a>

```java
public java.lang.Boolean|IResolvable getNullable();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `prefixItems`<sup>Required</sup> <a name="prefixItems" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.prefixItems"></a>

```java
public java.lang.String getPrefixItems();
```

- *Type:* java.lang.String

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.properties"></a>

```java
public java.lang.String getProperties();
```

- *Type:* java.lang.String

---

##### `ref`<sup>Required</sup> <a name="ref" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.ref"></a>

```java
public java.lang.String getRef();
```

- *Type:* java.lang.String

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.required"></a>

```java
public java.util.List<java.lang.String> getRequired();
```

- *Type:* java.util.List<java.lang.String>

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `uniqueItems`<sup>Required</sup> <a name="uniqueItems" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.uniqueItems"></a>

```java
public java.lang.Boolean|IResolvable getUniqueItems();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchemaOutputReference.property.internalValue"></a>

```java
public CesAppVariableDeclarationsSchema getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.cesApp.CesAppVariableDeclarationsSchema">CesAppVariableDeclarationsSchema</a>

---



