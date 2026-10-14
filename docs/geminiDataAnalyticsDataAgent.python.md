# `geminiDataAnalyticsDataAgent` Submodule <a name="`geminiDataAnalyticsDataAgent` Submodule" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GeminiDataAnalyticsDataAgent <a name="GeminiDataAnalyticsDataAgent" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent google_gemini_data_analytics_data_agent}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.Initializer"></a>

```python
from cdktn_provider_google import gemini_data_analytics_data_agent

geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  data_agent_id: str,
  location: str,
  data_analytics_agent: GeminiDataAnalyticsDataAgentDataAnalyticsAgent = None,
  deletion_policy: str = None,
  description: str = None,
  display_name: str = None,
  id: str = None,
  kms_key: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: GeminiDataAnalyticsDataAgentTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.Initializer.parameter.dataAgentId">data_agent_id</a></code> | <code>str</code> | Required. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of the DataAgent. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.Initializer.parameter.dataAnalyticsAgent">data_analytics_agent</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgent">GeminiDataAnalyticsDataAgentDataAnalyticsAgent</a></code> | data_analytics_agent block. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.Initializer.parameter.description">description</a></code> | <code>str</code> | Optional. Description of the agent. Must be between 1 and 1024 characters. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Optional. User friendly display name. Must be between 1 and 256 characters. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#id GeminiDataAnalyticsDataAgent#id}. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.Initializer.parameter.kmsKey">kms_key</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Optional. Labels to help users filter related agents. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#project GeminiDataAnalyticsDataAgent#project}. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeouts">GeminiDataAnalyticsDataAgentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `data_agent_id`<sup>Required</sup> <a name="data_agent_id" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.Initializer.parameter.dataAgentId"></a>

- *Type:* str

Required.

The ID to use for the DataAgent, which becomes the final component
of the resource name. The ID must start with a lowercase letter and may
contain lowercase letters, digits, underscores, and hyphens, up to 63
characters in total.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#data_agent_id GeminiDataAnalyticsDataAgent#data_agent_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.Initializer.parameter.location"></a>

- *Type:* str

The location of the DataAgent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#location GeminiDataAnalyticsDataAgent#location}

---

##### `data_analytics_agent`<sup>Optional</sup> <a name="data_analytics_agent" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.Initializer.parameter.dataAnalyticsAgent"></a>

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgent">GeminiDataAnalyticsDataAgentDataAnalyticsAgent</a>

data_analytics_agent block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#data_analytics_agent GeminiDataAnalyticsDataAgent#data_analytics_agent}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#deletion_policy GeminiDataAnalyticsDataAgent#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.Initializer.parameter.description"></a>

- *Type:* str

Optional. Description of the agent. Must be between 1 and 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#description GeminiDataAnalyticsDataAgent#description}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.Initializer.parameter.displayName"></a>

- *Type:* str

Optional. User friendly display name. Must be between 1 and 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#display_name GeminiDataAnalyticsDataAgent#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#id GeminiDataAnalyticsDataAgent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kms_key`<sup>Optional</sup> <a name="kms_key" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.Initializer.parameter.kmsKey"></a>

- *Type:* str

Optional.

Customer managed encryption key (CMEK) to use for encrypting the
DataAgent resources. Cloud KMS CryptoKeys must reside in the same location
as the DataAgent. The expected format is
projects/* /locations/* /keyRings/* /cryptoKeys/*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#kms_key GeminiDataAnalyticsDataAgent#kms_key}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Optional. Labels to help users filter related agents.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#labels GeminiDataAnalyticsDataAgent#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#project GeminiDataAnalyticsDataAgent#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeouts">GeminiDataAnalyticsDataAgentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#timeouts GeminiDataAnalyticsDataAgent#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.putDataAnalyticsAgent">put_data_analytics_agent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.resetDataAnalyticsAgent">reset_data_analytics_agent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.resetKmsKey">reset_kms_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_data_analytics_agent` <a name="put_data_analytics_agent" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.putDataAnalyticsAgent"></a>

```python
def put_data_analytics_agent(
  published_context: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext = None,
  staging_context: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext = None
) -> None
```

###### `published_context`<sup>Optional</sup> <a name="published_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.putDataAnalyticsAgent.parameter.publishedContext"></a>

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext</a>

published_context block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#published_context GeminiDataAnalyticsDataAgent#published_context}

---

###### `staging_context`<sup>Optional</sup> <a name="staging_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.putDataAnalyticsAgent.parameter.stagingContext"></a>

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext</a>

staging_context block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#staging_context GeminiDataAnalyticsDataAgent#staging_context}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#create GeminiDataAnalyticsDataAgent#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#delete GeminiDataAnalyticsDataAgent#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#update GeminiDataAnalyticsDataAgent#update}.

---

##### `reset_data_analytics_agent` <a name="reset_data_analytics_agent" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.resetDataAnalyticsAgent"></a>

```python
def reset_data_analytics_agent() -> None
```

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_kms_key` <a name="reset_kms_key" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.resetKmsKey"></a>

```python
def reset_kms_key() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GeminiDataAnalyticsDataAgent resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.isConstruct"></a>

```python
from cdktn_provider_google import gemini_data_analytics_data_agent

geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.isTerraformElement"></a>

```python
from cdktn_provider_google import gemini_data_analytics_data_agent

geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.isTerraformResource"></a>

```python
from cdktn_provider_google import gemini_data_analytics_data_agent

geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.generateConfigForImport"></a>

```python
from cdktn_provider_google import gemini_data_analytics_data_agent

geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GeminiDataAnalyticsDataAgent resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GeminiDataAnalyticsDataAgent to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GeminiDataAnalyticsDataAgent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GeminiDataAnalyticsDataAgent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.dataAnalyticsAgent">data_analytics_agent</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.deleteTime">delete_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.effectiveLabels">effective_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.purgeTime">purge_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.terraformLabels">terraform_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference">GeminiDataAnalyticsDataAgentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.dataAgentIdInput">data_agent_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.dataAnalyticsAgentInput">data_analytics_agent_input</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgent">GeminiDataAnalyticsDataAgentDataAnalyticsAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.kmsKeyInput">kms_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeouts">GeminiDataAnalyticsDataAgentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.dataAgentId">data_agent_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.kmsKey">kms_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `data_analytics_agent`<sup>Required</sup> <a name="data_analytics_agent" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.dataAnalyticsAgent"></a>

```python
data_analytics_agent: GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference</a>

---

##### `delete_time`<sup>Required</sup> <a name="delete_time" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.deleteTime"></a>

```python
delete_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `purge_time`<sup>Required</sup> <a name="purge_time" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.purgeTime"></a>

```python
purge_time: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.timeouts"></a>

```python
timeouts: GeminiDataAnalyticsDataAgentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference">GeminiDataAnalyticsDataAgentTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `data_agent_id_input`<sup>Optional</sup> <a name="data_agent_id_input" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.dataAgentIdInput"></a>

```python
data_agent_id_input: str
```

- *Type:* str

---

##### `data_analytics_agent_input`<sup>Optional</sup> <a name="data_analytics_agent_input" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.dataAnalyticsAgentInput"></a>

```python
data_analytics_agent_input: GeminiDataAnalyticsDataAgentDataAnalyticsAgent
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgent">GeminiDataAnalyticsDataAgentDataAnalyticsAgent</a>

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `kms_key_input`<sup>Optional</sup> <a name="kms_key_input" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.kmsKeyInput"></a>

```python
kms_key_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GeminiDataAnalyticsDataAgentTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeouts">GeminiDataAnalyticsDataAgentTimeouts</a>

---

##### `data_agent_id`<sup>Required</sup> <a name="data_agent_id" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.dataAgentId"></a>

```python
data_agent_id: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `kms_key`<sup>Required</sup> <a name="kms_key" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgent.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GeminiDataAnalyticsDataAgentConfig <a name="GeminiDataAnalyticsDataAgentConfig" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.Initializer"></a>

```python
from cdktn_provider_google import gemini_data_analytics_data_agent

geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  data_agent_id: str,
  location: str,
  data_analytics_agent: GeminiDataAnalyticsDataAgentDataAnalyticsAgent = None,
  deletion_policy: str = None,
  description: str = None,
  display_name: str = None,
  id: str = None,
  kms_key: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: GeminiDataAnalyticsDataAgentTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.dataAgentId">data_agent_id</a></code> | <code>str</code> | Required. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.location">location</a></code> | <code>str</code> | The location of the DataAgent. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.dataAnalyticsAgent">data_analytics_agent</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgent">GeminiDataAnalyticsDataAgentDataAnalyticsAgent</a></code> | data_analytics_agent block. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.description">description</a></code> | <code>str</code> | Optional. Description of the agent. Must be between 1 and 1024 characters. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.displayName">display_name</a></code> | <code>str</code> | Optional. User friendly display name. Must be between 1 and 256 characters. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#id GeminiDataAnalyticsDataAgent#id}. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.kmsKey">kms_key</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Optional. Labels to help users filter related agents. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#project GeminiDataAnalyticsDataAgent#project}. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeouts">GeminiDataAnalyticsDataAgentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `data_agent_id`<sup>Required</sup> <a name="data_agent_id" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.dataAgentId"></a>

```python
data_agent_id: str
```

- *Type:* str

Required.

The ID to use for the DataAgent, which becomes the final component
of the resource name. The ID must start with a lowercase letter and may
contain lowercase letters, digits, underscores, and hyphens, up to 63
characters in total.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#data_agent_id GeminiDataAnalyticsDataAgent#data_agent_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of the DataAgent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#location GeminiDataAnalyticsDataAgent#location}

---

##### `data_analytics_agent`<sup>Optional</sup> <a name="data_analytics_agent" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.dataAnalyticsAgent"></a>

```python
data_analytics_agent: GeminiDataAnalyticsDataAgentDataAnalyticsAgent
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgent">GeminiDataAnalyticsDataAgentDataAnalyticsAgent</a>

data_analytics_agent block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#data_analytics_agent GeminiDataAnalyticsDataAgent#data_analytics_agent}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#deletion_policy GeminiDataAnalyticsDataAgent#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Optional. Description of the agent. Must be between 1 and 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#description GeminiDataAnalyticsDataAgent#description}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Optional. User friendly display name. Must be between 1 and 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#display_name GeminiDataAnalyticsDataAgent#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#id GeminiDataAnalyticsDataAgent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kms_key`<sup>Optional</sup> <a name="kms_key" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

Optional.

Customer managed encryption key (CMEK) to use for encrypting the
DataAgent resources. Cloud KMS CryptoKeys must reside in the same location
as the DataAgent. The expected format is
projects/* /locations/* /keyRings/* /cryptoKeys/*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#kms_key GeminiDataAnalyticsDataAgent#kms_key}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Optional. Labels to help users filter related agents.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#labels GeminiDataAnalyticsDataAgent#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#project GeminiDataAnalyticsDataAgent#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentConfig.property.timeouts"></a>

```python
timeouts: GeminiDataAnalyticsDataAgentTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeouts">GeminiDataAnalyticsDataAgentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#timeouts GeminiDataAnalyticsDataAgent#timeouts}

---

### GeminiDataAnalyticsDataAgentDataAnalyticsAgent <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgent" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgent.Initializer"></a>

```python
from cdktn_provider_google import gemini_data_analytics_data_agent

geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgent(
  published_context: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext = None,
  staging_context: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgent.property.publishedContext">published_context</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext</a></code> | published_context block. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgent.property.stagingContext">staging_context</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext</a></code> | staging_context block. |

---

##### `published_context`<sup>Optional</sup> <a name="published_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgent.property.publishedContext"></a>

```python
published_context: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext</a>

published_context block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#published_context GeminiDataAnalyticsDataAgent#published_context}

---

##### `staging_context`<sup>Optional</sup> <a name="staging_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgent.property.stagingContext"></a>

```python
staging_context: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext</a>

staging_context block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#staging_context GeminiDataAnalyticsDataAgent#staging_context}

---

### GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContext <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContext" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContext"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContext.Initializer"></a>

```python
from cdktn_provider_google import gemini_data_analytics_data_agent

geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContext()
```


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferences <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferences" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferences"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferences.Initializer"></a>

```python
from cdktn_provider_google import gemini_data_analytics_data_agent

geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferences()
```


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBq <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBq" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBq"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBq.Initializer"></a>

```python
from cdktn_provider_google import gemini_data_analytics_data_agent

geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBq()
```


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferences <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferences" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferences"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferences.Initializer"></a>

```python
from cdktn_provider_google import gemini_data_analytics_data_agent

geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferences()
```


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext.Initializer"></a>

```python
from cdktn_provider_google import gemini_data_analytics_data_agent

geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext(
  datasource_references: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferences,
  example_queries: IResolvable | typing.List[GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries] = None,
  glossary_terms: IResolvable | typing.List[GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms] = None,
  options: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptions = None,
  schema_relationships: IResolvable | typing.List[GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships] = None,
  system_instruction: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext.property.datasourceReferences">datasource_references</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferences">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferences</a></code> | datasource_references block. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext.property.exampleQueries">example_queries</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries</a>]</code> | example_queries block. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext.property.glossaryTerms">glossary_terms</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms</a>]</code> | glossary_terms block. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext.property.options">options</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptions">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptions</a></code> | options block. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext.property.schemaRelationships">schema_relationships</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships</a>]</code> | schema_relationships block. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext.property.systemInstruction">system_instruction</a></code> | <code>str</code> | Optional. The basic entry point for data owners creating domain knowledge for the agent. |

---

##### `datasource_references`<sup>Required</sup> <a name="datasource_references" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext.property.datasourceReferences"></a>

```python
datasource_references: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferences
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferences">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferences</a>

datasource_references block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#datasource_references GeminiDataAnalyticsDataAgent#datasource_references}

---

##### `example_queries`<sup>Optional</sup> <a name="example_queries" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext.property.exampleQueries"></a>

```python
example_queries: IResolvable | typing.List[GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries</a>]

example_queries block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#example_queries GeminiDataAnalyticsDataAgent#example_queries}

---

##### `glossary_terms`<sup>Optional</sup> <a name="glossary_terms" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext.property.glossaryTerms"></a>

```python
glossary_terms: IResolvable | typing.List[GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms</a>]

glossary_terms block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#glossary_terms GeminiDataAnalyticsDataAgent#glossary_terms}

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext.property.options"></a>

```python
options: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptions
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptions">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptions</a>

options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#options GeminiDataAnalyticsDataAgent#options}

---

##### `schema_relationships`<sup>Optional</sup> <a name="schema_relationships" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext.property.schemaRelationships"></a>

```python
schema_relationships: IResolvable | typing.List[GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships</a>]

schema_relationships block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#schema_relationships GeminiDataAnalyticsDataAgent#schema_relationships}

---

##### `system_instruction`<sup>Optional</sup> <a name="system_instruction" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext.property.systemInstruction"></a>

```python
system_instruction: str
```

- *Type:* str

Optional. The basic entry point for data owners creating domain knowledge for the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#system_instruction GeminiDataAnalyticsDataAgent#system_instruction}

---

### GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferences <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferences" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferences"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferences.Initializer"></a>

```python
from cdktn_provider_google import gemini_data_analytics_data_agent

geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferences(
  bq: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBq
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferences.property.bq">bq</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBq">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBq</a></code> | bq block. |

---

##### `bq`<sup>Required</sup> <a name="bq" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferences.property.bq"></a>

```python
bq: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBq
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBq">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBq</a>

bq block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#bq GeminiDataAnalyticsDataAgent#bq}

---

### GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBq <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBq" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBq"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBq.Initializer"></a>

```python
from cdktn_provider_google import gemini_data_analytics_data_agent

geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBq(
  table_references: IResolvable | typing.List[GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBq.property.tableReferences">table_references</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences</a>]</code> | table_references block. |

---

##### `table_references`<sup>Optional</sup> <a name="table_references" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBq.property.tableReferences"></a>

```python
table_references: IResolvable | typing.List[GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences</a>]

table_references block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#table_references GeminiDataAnalyticsDataAgent#table_references}

---

### GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences.Initializer"></a>

```python
from cdktn_provider_google import gemini_data_analytics_data_agent

geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences(
  dataset_id: str,
  project_id: str,
  table_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences.property.datasetId">dataset_id</a></code> | <code>str</code> | Required. The dataset that the table belongs to. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences.property.projectId">project_id</a></code> | <code>str</code> | Required. The project that the table belongs to. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences.property.tableId">table_id</a></code> | <code>str</code> | Required. The table ID. |

---

##### `dataset_id`<sup>Required</sup> <a name="dataset_id" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences.property.datasetId"></a>

```python
dataset_id: str
```

- *Type:* str

Required. The dataset that the table belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#dataset_id GeminiDataAnalyticsDataAgent#dataset_id}

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

Required. The project that the table belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#project_id GeminiDataAnalyticsDataAgent#project_id}

---

##### `table_id`<sup>Required</sup> <a name="table_id" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences.property.tableId"></a>

```python
table_id: str
```

- *Type:* str

Required. The table ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#table_id GeminiDataAnalyticsDataAgent#table_id}

---

### GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries.Initializer"></a>

```python
from cdktn_provider_google import gemini_data_analytics_data_agent

geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries(
  natural_language_question: str = None,
  sql_query: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries.property.naturalLanguageQuestion">natural_language_question</a></code> | <code>str</code> | Optional. A natural language question that a user might ask. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries.property.sqlQuery">sql_query</a></code> | <code>str</code> | Optional. The SQL query that should be generated to answer the natural language question. |

---

##### `natural_language_question`<sup>Optional</sup> <a name="natural_language_question" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries.property.naturalLanguageQuestion"></a>

```python
natural_language_question: str
```

- *Type:* str

Optional. A natural language question that a user might ask.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#natural_language_question GeminiDataAnalyticsDataAgent#natural_language_question}

---

##### `sql_query`<sup>Optional</sup> <a name="sql_query" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries.property.sqlQuery"></a>

```python
sql_query: str
```

- *Type:* str

Optional. The SQL query that should be generated to answer the natural language question.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#sql_query GeminiDataAnalyticsDataAgent#sql_query}

---

### GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms.Initializer"></a>

```python
from cdktn_provider_google import gemini_data_analytics_data_agent

geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms(
  description: str,
  display_name: str,
  labels: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms.property.description">description</a></code> | <code>str</code> | Required. The description or meaning of the term. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms.property.displayName">display_name</a></code> | <code>str</code> | Required. User friendly display name of the glossary term. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms.property.labels">labels</a></code> | <code>typing.List[str]</code> | Optional. A list of general purpose labels associated with this term. |

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms.property.description"></a>

```python
description: str
```

- *Type:* str

Required. The description or meaning of the term.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#description GeminiDataAnalyticsDataAgent#description}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Required. User friendly display name of the glossary term.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#display_name GeminiDataAnalyticsDataAgent#display_name}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms.property.labels"></a>

```python
labels: typing.List[str]
```

- *Type:* typing.List[str]

Optional. A list of general purpose labels associated with this term.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#labels GeminiDataAnalyticsDataAgent#labels}

---

### GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptions <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptions" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptions.Initializer"></a>

```python
from cdktn_provider_google import gemini_data_analytics_data_agent

geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptions(
  analysis: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysis = None,
  datasource: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasource = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptions.property.analysis">analysis</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysis">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysis</a></code> | analysis block. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptions.property.datasource">datasource</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasource">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasource</a></code> | datasource block. |

---

##### `analysis`<sup>Optional</sup> <a name="analysis" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptions.property.analysis"></a>

```python
analysis: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysis
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysis">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysis</a>

analysis block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#analysis GeminiDataAnalyticsDataAgent#analysis}

---

##### `datasource`<sup>Optional</sup> <a name="datasource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptions.property.datasource"></a>

```python
datasource: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasource
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasource">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasource</a>

datasource block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#datasource GeminiDataAnalyticsDataAgent#datasource}

---

### GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysis <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysis" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysis"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysis.Initializer"></a>

```python
from cdktn_provider_google import gemini_data_analytics_data_agent

geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysis(
  python: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPython = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysis.property.python">python</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPython">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPython</a></code> | python block. |

---

##### `python`<sup>Optional</sup> <a name="python" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysis.property.python"></a>

```python
python: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPython
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPython">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPython</a>

python block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#python GeminiDataAnalyticsDataAgent#python}

---

### GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPython <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPython" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPython"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPython.Initializer"></a>

```python
from cdktn_provider_google import gemini_data_analytics_data_agent

geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPython(
  enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPython.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Optional. Whether to enable Python analysis. Defaults to false. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPython.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Optional. Whether to enable Python analysis. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#enabled GeminiDataAnalyticsDataAgent#enabled}

---

### GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasource <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasource.Initializer"></a>

```python
from cdktn_provider_google import gemini_data_analytics_data_agent

geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasource(
  big_query_max_billed_bytes: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasource.property.bigQueryMaxBilledBytes">big_query_max_billed_bytes</a></code> | <code>typing.Union[int, float]</code> | Optional. Limits the bytes billed for each BigQuery query job. |

---

##### `big_query_max_billed_bytes`<sup>Optional</sup> <a name="big_query_max_billed_bytes" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasource.property.bigQueryMaxBilledBytes"></a>

```python
big_query_max_billed_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Optional. Limits the bytes billed for each BigQuery query job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#big_query_max_billed_bytes GeminiDataAnalyticsDataAgent#big_query_max_billed_bytes}

---

### GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships.Initializer"></a>

```python
from cdktn_provider_google import gemini_data_analytics_data_agent

geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships(
  left_schema_paths: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPaths,
  right_schema_paths: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPaths,
  confidence_score: typing.Union[int, float] = None,
  sources: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships.property.leftSchemaPaths">left_schema_paths</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPaths">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPaths</a></code> | left_schema_paths block. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships.property.rightSchemaPaths">right_schema_paths</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPaths">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPaths</a></code> | right_schema_paths block. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships.property.confidenceScore">confidence_score</a></code> | <code>typing.Union[int, float]</code> | Optional. A confidence score for the suggested relationship. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships.property.sources">sources</a></code> | <code>typing.List[str]</code> | Optional. Sources which generated the schema relation edge. Possible values: BIGQUERY_JOB_HISTORY, LLM_SUGGESTED, BIGQUERY_TABLE_CONSTRAINTS. |

---

##### `left_schema_paths`<sup>Required</sup> <a name="left_schema_paths" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships.property.leftSchemaPaths"></a>

```python
left_schema_paths: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPaths
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPaths">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPaths</a>

left_schema_paths block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#left_schema_paths GeminiDataAnalyticsDataAgent#left_schema_paths}

---

##### `right_schema_paths`<sup>Required</sup> <a name="right_schema_paths" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships.property.rightSchemaPaths"></a>

```python
right_schema_paths: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPaths
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPaths">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPaths</a>

right_schema_paths block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#right_schema_paths GeminiDataAnalyticsDataAgent#right_schema_paths}

---

##### `confidence_score`<sup>Optional</sup> <a name="confidence_score" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships.property.confidenceScore"></a>

```python
confidence_score: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Optional. A confidence score for the suggested relationship.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#confidence_score GeminiDataAnalyticsDataAgent#confidence_score}

---

##### `sources`<sup>Optional</sup> <a name="sources" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships.property.sources"></a>

```python
sources: typing.List[str]
```

- *Type:* typing.List[str]

Optional. Sources which generated the schema relation edge. Possible values: BIGQUERY_JOB_HISTORY, LLM_SUGGESTED, BIGQUERY_TABLE_CONSTRAINTS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#sources GeminiDataAnalyticsDataAgent#sources}

---

### GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPaths <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPaths" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPaths"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPaths.Initializer"></a>

```python
from cdktn_provider_google import gemini_data_analytics_data_agent

geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPaths(
  paths: typing.List[str],
  table_fqn: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPaths.property.paths">paths</a></code> | <code>typing.List[str]</code> | Required. The ordered list of paths within the table schema. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPaths.property.tableFqn">table_fqn</a></code> | <code>str</code> | Required. The service-qualified full resource name of the table. |

---

##### `paths`<sup>Required</sup> <a name="paths" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPaths.property.paths"></a>

```python
paths: typing.List[str]
```

- *Type:* typing.List[str]

Required. The ordered list of paths within the table schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#paths GeminiDataAnalyticsDataAgent#paths}

---

##### `table_fqn`<sup>Required</sup> <a name="table_fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPaths.property.tableFqn"></a>

```python
table_fqn: str
```

- *Type:* str

Required. The service-qualified full resource name of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#table_fqn GeminiDataAnalyticsDataAgent#table_fqn}

---

### GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPaths <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPaths" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPaths"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPaths.Initializer"></a>

```python
from cdktn_provider_google import gemini_data_analytics_data_agent

geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPaths(
  paths: typing.List[str],
  table_fqn: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPaths.property.paths">paths</a></code> | <code>typing.List[str]</code> | Required. The ordered list of paths within the table schema. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPaths.property.tableFqn">table_fqn</a></code> | <code>str</code> | Required. The service-qualified full resource name of the table. |

---

##### `paths`<sup>Required</sup> <a name="paths" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPaths.property.paths"></a>

```python
paths: typing.List[str]
```

- *Type:* typing.List[str]

Required. The ordered list of paths within the table schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#paths GeminiDataAnalyticsDataAgent#paths}

---

##### `table_fqn`<sup>Required</sup> <a name="table_fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPaths.property.tableFqn"></a>

```python
table_fqn: str
```

- *Type:* str

Required. The service-qualified full resource name of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#table_fqn GeminiDataAnalyticsDataAgent#table_fqn}

---

### GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext.Initializer"></a>

```python
from cdktn_provider_google import gemini_data_analytics_data_agent

geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext(
  datasource_references: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferences,
  example_queries: IResolvable | typing.List[GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries] = None,
  glossary_terms: IResolvable | typing.List[GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms] = None,
  options: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptions = None,
  schema_relationships: IResolvable | typing.List[GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships] = None,
  system_instruction: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext.property.datasourceReferences">datasource_references</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferences">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferences</a></code> | datasource_references block. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext.property.exampleQueries">example_queries</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries</a>]</code> | example_queries block. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext.property.glossaryTerms">glossary_terms</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms</a>]</code> | glossary_terms block. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext.property.options">options</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptions">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptions</a></code> | options block. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext.property.schemaRelationships">schema_relationships</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships</a>]</code> | schema_relationships block. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext.property.systemInstruction">system_instruction</a></code> | <code>str</code> | Optional. The basic entry point for data owners creating domain knowledge for the agent. |

---

##### `datasource_references`<sup>Required</sup> <a name="datasource_references" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext.property.datasourceReferences"></a>

```python
datasource_references: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferences
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferences">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferences</a>

datasource_references block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#datasource_references GeminiDataAnalyticsDataAgent#datasource_references}

---

##### `example_queries`<sup>Optional</sup> <a name="example_queries" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext.property.exampleQueries"></a>

```python
example_queries: IResolvable | typing.List[GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries</a>]

example_queries block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#example_queries GeminiDataAnalyticsDataAgent#example_queries}

---

##### `glossary_terms`<sup>Optional</sup> <a name="glossary_terms" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext.property.glossaryTerms"></a>

```python
glossary_terms: IResolvable | typing.List[GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms</a>]

glossary_terms block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#glossary_terms GeminiDataAnalyticsDataAgent#glossary_terms}

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext.property.options"></a>

```python
options: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptions
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptions">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptions</a>

options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#options GeminiDataAnalyticsDataAgent#options}

---

##### `schema_relationships`<sup>Optional</sup> <a name="schema_relationships" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext.property.schemaRelationships"></a>

```python
schema_relationships: IResolvable | typing.List[GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships</a>]

schema_relationships block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#schema_relationships GeminiDataAnalyticsDataAgent#schema_relationships}

---

##### `system_instruction`<sup>Optional</sup> <a name="system_instruction" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext.property.systemInstruction"></a>

```python
system_instruction: str
```

- *Type:* str

Optional. The basic entry point for data owners creating domain knowledge for the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#system_instruction GeminiDataAnalyticsDataAgent#system_instruction}

---

### GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferences <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferences" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferences"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferences.Initializer"></a>

```python
from cdktn_provider_google import gemini_data_analytics_data_agent

geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferences(
  bq: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBq
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferences.property.bq">bq</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBq">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBq</a></code> | bq block. |

---

##### `bq`<sup>Required</sup> <a name="bq" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferences.property.bq"></a>

```python
bq: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBq
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBq">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBq</a>

bq block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#bq GeminiDataAnalyticsDataAgent#bq}

---

### GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBq <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBq" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBq"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBq.Initializer"></a>

```python
from cdktn_provider_google import gemini_data_analytics_data_agent

geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBq(
  table_references: IResolvable | typing.List[GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBq.property.tableReferences">table_references</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences</a>]</code> | table_references block. |

---

##### `table_references`<sup>Optional</sup> <a name="table_references" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBq.property.tableReferences"></a>

```python
table_references: IResolvable | typing.List[GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences</a>]

table_references block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#table_references GeminiDataAnalyticsDataAgent#table_references}

---

### GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences.Initializer"></a>

```python
from cdktn_provider_google import gemini_data_analytics_data_agent

geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences(
  dataset_id: str,
  project_id: str,
  table_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences.property.datasetId">dataset_id</a></code> | <code>str</code> | Required. The dataset that the table belongs to. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences.property.projectId">project_id</a></code> | <code>str</code> | Required. The project that the table belongs to. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences.property.tableId">table_id</a></code> | <code>str</code> | Required. The table ID. |

---

##### `dataset_id`<sup>Required</sup> <a name="dataset_id" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences.property.datasetId"></a>

```python
dataset_id: str
```

- *Type:* str

Required. The dataset that the table belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#dataset_id GeminiDataAnalyticsDataAgent#dataset_id}

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

Required. The project that the table belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#project_id GeminiDataAnalyticsDataAgent#project_id}

---

##### `table_id`<sup>Required</sup> <a name="table_id" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences.property.tableId"></a>

```python
table_id: str
```

- *Type:* str

Required. The table ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#table_id GeminiDataAnalyticsDataAgent#table_id}

---

### GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries.Initializer"></a>

```python
from cdktn_provider_google import gemini_data_analytics_data_agent

geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries(
  natural_language_question: str = None,
  sql_query: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries.property.naturalLanguageQuestion">natural_language_question</a></code> | <code>str</code> | Optional. A natural language question that a user might ask. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries.property.sqlQuery">sql_query</a></code> | <code>str</code> | Optional. The SQL query that should be generated to answer the natural language question. |

---

##### `natural_language_question`<sup>Optional</sup> <a name="natural_language_question" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries.property.naturalLanguageQuestion"></a>

```python
natural_language_question: str
```

- *Type:* str

Optional. A natural language question that a user might ask.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#natural_language_question GeminiDataAnalyticsDataAgent#natural_language_question}

---

##### `sql_query`<sup>Optional</sup> <a name="sql_query" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries.property.sqlQuery"></a>

```python
sql_query: str
```

- *Type:* str

Optional. The SQL query that should be generated to answer the natural language question.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#sql_query GeminiDataAnalyticsDataAgent#sql_query}

---

### GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms.Initializer"></a>

```python
from cdktn_provider_google import gemini_data_analytics_data_agent

geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms(
  description: str,
  display_name: str,
  labels: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms.property.description">description</a></code> | <code>str</code> | Required. The description or meaning of the term. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms.property.displayName">display_name</a></code> | <code>str</code> | Required. User friendly display name of the glossary term. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms.property.labels">labels</a></code> | <code>typing.List[str]</code> | Optional. A list of general purpose labels associated with this term. |

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms.property.description"></a>

```python
description: str
```

- *Type:* str

Required. The description or meaning of the term.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#description GeminiDataAnalyticsDataAgent#description}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Required. User friendly display name of the glossary term.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#display_name GeminiDataAnalyticsDataAgent#display_name}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms.property.labels"></a>

```python
labels: typing.List[str]
```

- *Type:* typing.List[str]

Optional. A list of general purpose labels associated with this term.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#labels GeminiDataAnalyticsDataAgent#labels}

---

### GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptions <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptions" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptions.Initializer"></a>

```python
from cdktn_provider_google import gemini_data_analytics_data_agent

geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptions(
  analysis: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysis = None,
  datasource: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasource = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptions.property.analysis">analysis</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysis">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysis</a></code> | analysis block. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptions.property.datasource">datasource</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasource">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasource</a></code> | datasource block. |

---

##### `analysis`<sup>Optional</sup> <a name="analysis" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptions.property.analysis"></a>

```python
analysis: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysis
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysis">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysis</a>

analysis block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#analysis GeminiDataAnalyticsDataAgent#analysis}

---

##### `datasource`<sup>Optional</sup> <a name="datasource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptions.property.datasource"></a>

```python
datasource: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasource
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasource">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasource</a>

datasource block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#datasource GeminiDataAnalyticsDataAgent#datasource}

---

### GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysis <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysis" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysis"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysis.Initializer"></a>

```python
from cdktn_provider_google import gemini_data_analytics_data_agent

geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysis(
  python: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPython = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysis.property.python">python</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPython">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPython</a></code> | python block. |

---

##### `python`<sup>Optional</sup> <a name="python" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysis.property.python"></a>

```python
python: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPython
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPython">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPython</a>

python block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#python GeminiDataAnalyticsDataAgent#python}

---

### GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPython <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPython" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPython"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPython.Initializer"></a>

```python
from cdktn_provider_google import gemini_data_analytics_data_agent

geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPython(
  enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPython.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Optional. Whether to enable Python analysis. Defaults to false. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPython.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Optional. Whether to enable Python analysis. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#enabled GeminiDataAnalyticsDataAgent#enabled}

---

### GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasource <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasource.Initializer"></a>

```python
from cdktn_provider_google import gemini_data_analytics_data_agent

geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasource(
  big_query_max_billed_bytes: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasource.property.bigQueryMaxBilledBytes">big_query_max_billed_bytes</a></code> | <code>typing.Union[int, float]</code> | Optional. Limits the bytes billed for each BigQuery query job. |

---

##### `big_query_max_billed_bytes`<sup>Optional</sup> <a name="big_query_max_billed_bytes" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasource.property.bigQueryMaxBilledBytes"></a>

```python
big_query_max_billed_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Optional. Limits the bytes billed for each BigQuery query job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#big_query_max_billed_bytes GeminiDataAnalyticsDataAgent#big_query_max_billed_bytes}

---

### GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships.Initializer"></a>

```python
from cdktn_provider_google import gemini_data_analytics_data_agent

geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships(
  left_schema_paths: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPaths,
  right_schema_paths: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPaths,
  confidence_score: typing.Union[int, float] = None,
  sources: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships.property.leftSchemaPaths">left_schema_paths</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPaths">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPaths</a></code> | left_schema_paths block. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships.property.rightSchemaPaths">right_schema_paths</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPaths">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPaths</a></code> | right_schema_paths block. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships.property.confidenceScore">confidence_score</a></code> | <code>typing.Union[int, float]</code> | Optional. A confidence score for the suggested relationship. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships.property.sources">sources</a></code> | <code>typing.List[str]</code> | Optional. Sources which generated the schema relation edge. Possible values: BIGQUERY_JOB_HISTORY, LLM_SUGGESTED, BIGQUERY_TABLE_CONSTRAINTS. |

---

##### `left_schema_paths`<sup>Required</sup> <a name="left_schema_paths" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships.property.leftSchemaPaths"></a>

```python
left_schema_paths: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPaths
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPaths">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPaths</a>

left_schema_paths block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#left_schema_paths GeminiDataAnalyticsDataAgent#left_schema_paths}

---

##### `right_schema_paths`<sup>Required</sup> <a name="right_schema_paths" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships.property.rightSchemaPaths"></a>

```python
right_schema_paths: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPaths
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPaths">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPaths</a>

right_schema_paths block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#right_schema_paths GeminiDataAnalyticsDataAgent#right_schema_paths}

---

##### `confidence_score`<sup>Optional</sup> <a name="confidence_score" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships.property.confidenceScore"></a>

```python
confidence_score: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Optional. A confidence score for the suggested relationship.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#confidence_score GeminiDataAnalyticsDataAgent#confidence_score}

---

##### `sources`<sup>Optional</sup> <a name="sources" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships.property.sources"></a>

```python
sources: typing.List[str]
```

- *Type:* typing.List[str]

Optional. Sources which generated the schema relation edge. Possible values: BIGQUERY_JOB_HISTORY, LLM_SUGGESTED, BIGQUERY_TABLE_CONSTRAINTS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#sources GeminiDataAnalyticsDataAgent#sources}

---

### GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPaths <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPaths" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPaths"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPaths.Initializer"></a>

```python
from cdktn_provider_google import gemini_data_analytics_data_agent

geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPaths(
  paths: typing.List[str],
  table_fqn: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPaths.property.paths">paths</a></code> | <code>typing.List[str]</code> | Required. The ordered list of paths within the table schema. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPaths.property.tableFqn">table_fqn</a></code> | <code>str</code> | Required. The service-qualified full resource name of the table. |

---

##### `paths`<sup>Required</sup> <a name="paths" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPaths.property.paths"></a>

```python
paths: typing.List[str]
```

- *Type:* typing.List[str]

Required. The ordered list of paths within the table schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#paths GeminiDataAnalyticsDataAgent#paths}

---

##### `table_fqn`<sup>Required</sup> <a name="table_fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPaths.property.tableFqn"></a>

```python
table_fqn: str
```

- *Type:* str

Required. The service-qualified full resource name of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#table_fqn GeminiDataAnalyticsDataAgent#table_fqn}

---

### GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPaths <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPaths" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPaths"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPaths.Initializer"></a>

```python
from cdktn_provider_google import gemini_data_analytics_data_agent

geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPaths(
  paths: typing.List[str],
  table_fqn: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPaths.property.paths">paths</a></code> | <code>typing.List[str]</code> | Required. The ordered list of paths within the table schema. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPaths.property.tableFqn">table_fqn</a></code> | <code>str</code> | Required. The service-qualified full resource name of the table. |

---

##### `paths`<sup>Required</sup> <a name="paths" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPaths.property.paths"></a>

```python
paths: typing.List[str]
```

- *Type:* typing.List[str]

Required. The ordered list of paths within the table schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#paths GeminiDataAnalyticsDataAgent#paths}

---

##### `table_fqn`<sup>Required</sup> <a name="table_fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPaths.property.tableFqn"></a>

```python
table_fqn: str
```

- *Type:* str

Required. The service-qualified full resource name of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#table_fqn GeminiDataAnalyticsDataAgent#table_fqn}

---

### GeminiDataAnalyticsDataAgentTimeouts <a name="GeminiDataAnalyticsDataAgentTimeouts" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeouts.Initializer"></a>

```python
from cdktn_provider_google import gemini_data_analytics_data_agent

geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#create GeminiDataAnalyticsDataAgent#create}. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#delete GeminiDataAnalyticsDataAgent#delete}. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#update GeminiDataAnalyticsDataAgent#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#create GeminiDataAnalyticsDataAgent#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#delete GeminiDataAnalyticsDataAgent#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#update GeminiDataAnalyticsDataAgent#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList.Initializer"></a>

```python
from cdktn_provider_google import gemini_data_analytics_data_agent

geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.Initializer"></a>

```python
from cdktn_provider_google import gemini_data_analytics_data_agent

geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.property.tableReferences">table_references</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList">GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBq">GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBq</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `table_references`<sup>Required</sup> <a name="table_references" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.property.tableReferences"></a>

```python
table_references: GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList">GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqOutputReference.property.internalValue"></a>

```python
internal_value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBq
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBq">GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBq</a>

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList.Initializer"></a>

```python
from cdktn_provider_google import gemini_data_analytics_data_agent

geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.Initializer"></a>

```python
from cdktn_provider_google import gemini_data_analytics_data_agent

geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.property.datasetId">dataset_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.property.tableId">table_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferences">GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferences</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dataset_id`<sup>Required</sup> <a name="dataset_id" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.property.datasetId"></a>

```python
dataset_id: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `table_id`<sup>Required</sup> <a name="table_id" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.property.tableId"></a>

```python
table_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferencesOutputReference.property.internalValue"></a>

```python
internal_value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferences
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferences">GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqTableReferences</a>

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList.Initializer"></a>

```python
from cdktn_provider_google import gemini_data_analytics_data_agent

geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.Initializer"></a>

```python
from cdktn_provider_google import gemini_data_analytics_data_agent

geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.property.bq">bq</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList">GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferences">GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferences</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bq`<sup>Required</sup> <a name="bq" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.property.bq"></a>

```python
bq: GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList">GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesBqList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesOutputReference.property.internalValue"></a>

```python
internal_value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferences
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferences">GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferences</a>

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList.Initializer"></a>

```python
from cdktn_provider_google import gemini_data_analytics_data_agent

geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.Initializer"></a>

```python
from cdktn_provider_google import gemini_data_analytics_data_agent

geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.property.datasourceReferences">datasource_references</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList">GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.property.systemInstruction">system_instruction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContext">GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContext</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `datasource_references`<sup>Required</sup> <a name="datasource_references" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.property.datasourceReferences"></a>

```python
datasource_references: GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList">GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextDatasourceReferencesList</a>

---

##### `system_instruction`<sup>Required</sup> <a name="system_instruction" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.property.systemInstruction"></a>

```python
system_instruction: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextOutputReference.property.internalValue"></a>

```python
internal_value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContext
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContext">GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContext</a>

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.Initializer"></a>

```python
from cdktn_provider_google import gemini_data_analytics_data_agent

geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.putPublishedContext">put_published_context</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.putStagingContext">put_staging_context</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.resetPublishedContext">reset_published_context</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.resetStagingContext">reset_staging_context</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_published_context` <a name="put_published_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.putPublishedContext"></a>

```python
def put_published_context(
  datasource_references: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferences,
  example_queries: IResolvable | typing.List[GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries] = None,
  glossary_terms: IResolvable | typing.List[GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms] = None,
  options: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptions = None,
  schema_relationships: IResolvable | typing.List[GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships] = None,
  system_instruction: str = None
) -> None
```

###### `datasource_references`<sup>Required</sup> <a name="datasource_references" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.putPublishedContext.parameter.datasourceReferences"></a>

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferences">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferences</a>

datasource_references block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#datasource_references GeminiDataAnalyticsDataAgent#datasource_references}

---

###### `example_queries`<sup>Optional</sup> <a name="example_queries" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.putPublishedContext.parameter.exampleQueries"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries</a>]

example_queries block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#example_queries GeminiDataAnalyticsDataAgent#example_queries}

---

###### `glossary_terms`<sup>Optional</sup> <a name="glossary_terms" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.putPublishedContext.parameter.glossaryTerms"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms</a>]

glossary_terms block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#glossary_terms GeminiDataAnalyticsDataAgent#glossary_terms}

---

###### `options`<sup>Optional</sup> <a name="options" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.putPublishedContext.parameter.options"></a>

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptions">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptions</a>

options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#options GeminiDataAnalyticsDataAgent#options}

---

###### `schema_relationships`<sup>Optional</sup> <a name="schema_relationships" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.putPublishedContext.parameter.schemaRelationships"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships</a>]

schema_relationships block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#schema_relationships GeminiDataAnalyticsDataAgent#schema_relationships}

---

###### `system_instruction`<sup>Optional</sup> <a name="system_instruction" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.putPublishedContext.parameter.systemInstruction"></a>

- *Type:* str

Optional. The basic entry point for data owners creating domain knowledge for the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#system_instruction GeminiDataAnalyticsDataAgent#system_instruction}

---

##### `put_staging_context` <a name="put_staging_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.putStagingContext"></a>

```python
def put_staging_context(
  datasource_references: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferences,
  example_queries: IResolvable | typing.List[GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries] = None,
  glossary_terms: IResolvable | typing.List[GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms] = None,
  options: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptions = None,
  schema_relationships: IResolvable | typing.List[GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships] = None,
  system_instruction: str = None
) -> None
```

###### `datasource_references`<sup>Required</sup> <a name="datasource_references" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.putStagingContext.parameter.datasourceReferences"></a>

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferences">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferences</a>

datasource_references block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#datasource_references GeminiDataAnalyticsDataAgent#datasource_references}

---

###### `example_queries`<sup>Optional</sup> <a name="example_queries" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.putStagingContext.parameter.exampleQueries"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries</a>]

example_queries block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#example_queries GeminiDataAnalyticsDataAgent#example_queries}

---

###### `glossary_terms`<sup>Optional</sup> <a name="glossary_terms" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.putStagingContext.parameter.glossaryTerms"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms</a>]

glossary_terms block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#glossary_terms GeminiDataAnalyticsDataAgent#glossary_terms}

---

###### `options`<sup>Optional</sup> <a name="options" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.putStagingContext.parameter.options"></a>

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptions">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptions</a>

options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#options GeminiDataAnalyticsDataAgent#options}

---

###### `schema_relationships`<sup>Optional</sup> <a name="schema_relationships" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.putStagingContext.parameter.schemaRelationships"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships</a>]

schema_relationships block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#schema_relationships GeminiDataAnalyticsDataAgent#schema_relationships}

---

###### `system_instruction`<sup>Optional</sup> <a name="system_instruction" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.putStagingContext.parameter.systemInstruction"></a>

- *Type:* str

Optional. The basic entry point for data owners creating domain knowledge for the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#system_instruction GeminiDataAnalyticsDataAgent#system_instruction}

---

##### `reset_published_context` <a name="reset_published_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.resetPublishedContext"></a>

```python
def reset_published_context() -> None
```

##### `reset_staging_context` <a name="reset_staging_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.resetStagingContext"></a>

```python
def reset_staging_context() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.property.lastPublishedContext">last_published_context</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList">GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.property.publishedContext">published_context</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.property.stagingContext">staging_context</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.property.publishedContextInput">published_context_input</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.property.stagingContextInput">staging_context_input</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgent">GeminiDataAnalyticsDataAgentDataAnalyticsAgent</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `last_published_context`<sup>Required</sup> <a name="last_published_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.property.lastPublishedContext"></a>

```python
last_published_context: GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList">GeminiDataAnalyticsDataAgentDataAnalyticsAgentLastPublishedContextList</a>

---

##### `published_context`<sup>Required</sup> <a name="published_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.property.publishedContext"></a>

```python
published_context: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference</a>

---

##### `staging_context`<sup>Required</sup> <a name="staging_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.property.stagingContext"></a>

```python
staging_context: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference</a>

---

##### `published_context_input`<sup>Optional</sup> <a name="published_context_input" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.property.publishedContextInput"></a>

```python
published_context_input: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext</a>

---

##### `staging_context_input`<sup>Optional</sup> <a name="staging_context_input" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.property.stagingContextInput"></a>

```python
staging_context_input: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentOutputReference.property.internalValue"></a>

```python
internal_value: GeminiDataAnalyticsDataAgentDataAnalyticsAgent
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgent">GeminiDataAnalyticsDataAgentDataAnalyticsAgent</a>

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.Initializer"></a>

```python
from cdktn_provider_google import gemini_data_analytics_data_agent

geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.putTableReferences">put_table_references</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.resetTableReferences">reset_table_references</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_table_references` <a name="put_table_references" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.putTableReferences"></a>

```python
def put_table_references(
  value: IResolvable | typing.List[GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.putTableReferences.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences</a>]

---

##### `reset_table_references` <a name="reset_table_references" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.resetTableReferences"></a>

```python
def reset_table_references() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.property.tableReferences">table_references</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.property.tableReferencesInput">table_references_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBq">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBq</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `table_references`<sup>Required</sup> <a name="table_references" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.property.tableReferences"></a>

```python
table_references: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList</a>

---

##### `table_references_input`<sup>Optional</sup> <a name="table_references_input" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.property.tableReferencesInput"></a>

```python
table_references_input: IResolvable | typing.List[GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference.property.internalValue"></a>

```python
internal_value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBq
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBq">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBq</a>

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList.Initializer"></a>

```python
from cdktn_provider_google import gemini_data_analytics_data_agent

geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences</a>]

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.Initializer"></a>

```python
from cdktn_provider_google import gemini_data_analytics_data_agent

geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.property.datasetIdInput">dataset_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.property.tableIdInput">table_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.property.datasetId">dataset_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.property.tableId">table_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dataset_id_input`<sup>Optional</sup> <a name="dataset_id_input" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.property.datasetIdInput"></a>

```python
dataset_id_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `table_id_input`<sup>Optional</sup> <a name="table_id_input" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.property.tableIdInput"></a>

```python
table_id_input: str
```

- *Type:* str

---

##### `dataset_id`<sup>Required</sup> <a name="dataset_id" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.property.datasetId"></a>

```python
dataset_id: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `table_id`<sup>Required</sup> <a name="table_id" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.property.tableId"></a>

```python
table_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferencesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences</a>

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.Initializer"></a>

```python
from cdktn_provider_google import gemini_data_analytics_data_agent

geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.putBq">put_bq</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_bq` <a name="put_bq" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.putBq"></a>

```python
def put_bq(
  table_references: IResolvable | typing.List[GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences] = None
) -> None
```

###### `table_references`<sup>Optional</sup> <a name="table_references" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.putBq.parameter.tableReferences"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqTableReferences</a>]

table_references block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#table_references GeminiDataAnalyticsDataAgent#table_references}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.property.bq">bq</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.property.bqInput">bq_input</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBq">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBq</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferences">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferences</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bq`<sup>Required</sup> <a name="bq" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.property.bq"></a>

```python
bq: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBqOutputReference</a>

---

##### `bq_input`<sup>Optional</sup> <a name="bq_input" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.property.bqInput"></a>

```python
bq_input: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBq
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBq">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBq</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference.property.internalValue"></a>

```python
internal_value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferences
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferences">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferences</a>

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList.Initializer"></a>

```python
from cdktn_provider_google import gemini_data_analytics_data_agent

geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries</a>]

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.Initializer"></a>

```python
from cdktn_provider_google import gemini_data_analytics_data_agent

geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.resetNaturalLanguageQuestion">reset_natural_language_question</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.resetSqlQuery">reset_sql_query</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_natural_language_question` <a name="reset_natural_language_question" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.resetNaturalLanguageQuestion"></a>

```python
def reset_natural_language_question() -> None
```

##### `reset_sql_query` <a name="reset_sql_query" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.resetSqlQuery"></a>

```python
def reset_sql_query() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.property.naturalLanguageQuestionInput">natural_language_question_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.property.sqlQueryInput">sql_query_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.property.naturalLanguageQuestion">natural_language_question</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.property.sqlQuery">sql_query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `natural_language_question_input`<sup>Optional</sup> <a name="natural_language_question_input" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.property.naturalLanguageQuestionInput"></a>

```python
natural_language_question_input: str
```

- *Type:* str

---

##### `sql_query_input`<sup>Optional</sup> <a name="sql_query_input" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.property.sqlQueryInput"></a>

```python
sql_query_input: str
```

- *Type:* str

---

##### `natural_language_question`<sup>Required</sup> <a name="natural_language_question" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.property.naturalLanguageQuestion"></a>

```python
natural_language_question: str
```

- *Type:* str

---

##### `sql_query`<sup>Required</sup> <a name="sql_query" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.property.sqlQuery"></a>

```python
sql_query: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries</a>

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList.Initializer"></a>

```python
from cdktn_provider_google import gemini_data_analytics_data_agent

geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms</a>]

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import gemini_data_analytics_data_agent

geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.resetLabels">reset_labels</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_labels` <a name="reset_labels" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.resetLabels"></a>

```python
def reset_labels() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.property.labelsInput">labels_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.property.labels">labels</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.property.labelsInput"></a>

```python
labels_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.property.labels"></a>

```python
labels: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms</a>

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.Initializer"></a>

```python
from cdktn_provider_google import gemini_data_analytics_data_agent

geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.putPython">put_python</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.resetPython">reset_python</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_python` <a name="put_python" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.putPython"></a>

```python
def put_python(
  enabled: bool | IResolvable = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.putPython.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Optional. Whether to enable Python analysis. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#enabled GeminiDataAnalyticsDataAgent#enabled}

---

##### `reset_python` <a name="reset_python" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.resetPython"></a>

```python
def reset_python() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.property.python">python</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.property.pythonInput">python_input</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPython">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPython</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysis">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysis</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `python`<sup>Required</sup> <a name="python" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.property.python"></a>

```python
python: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference</a>

---

##### `python_input`<sup>Optional</sup> <a name="python_input" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.property.pythonInput"></a>

```python
python_input: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPython
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPython">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPython</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference.property.internalValue"></a>

```python
internal_value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysis
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysis">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysis</a>

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.Initializer"></a>

```python
from cdktn_provider_google import gemini_data_analytics_data_agent

geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPython">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPython</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPythonOutputReference.property.internalValue"></a>

```python
internal_value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPython
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPython">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPython</a>

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.Initializer"></a>

```python
from cdktn_provider_google import gemini_data_analytics_data_agent

geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.resetBigQueryMaxBilledBytes">reset_big_query_max_billed_bytes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_big_query_max_billed_bytes` <a name="reset_big_query_max_billed_bytes" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.resetBigQueryMaxBilledBytes"></a>

```python
def reset_big_query_max_billed_bytes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.property.bigQueryMaxBilledBytesInput">big_query_max_billed_bytes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.property.bigQueryMaxBilledBytes">big_query_max_billed_bytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasource">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `big_query_max_billed_bytes_input`<sup>Optional</sup> <a name="big_query_max_billed_bytes_input" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.property.bigQueryMaxBilledBytesInput"></a>

```python
big_query_max_billed_bytes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `big_query_max_billed_bytes`<sup>Required</sup> <a name="big_query_max_billed_bytes" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.property.bigQueryMaxBilledBytes"></a>

```python
big_query_max_billed_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference.property.internalValue"></a>

```python
internal_value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasource
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasource">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasource</a>

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import gemini_data_analytics_data_agent

geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.putAnalysis">put_analysis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.putDatasource">put_datasource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.resetAnalysis">reset_analysis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.resetDatasource">reset_datasource</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_analysis` <a name="put_analysis" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.putAnalysis"></a>

```python
def put_analysis(
  python: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPython = None
) -> None
```

###### `python`<sup>Optional</sup> <a name="python" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.putAnalysis.parameter.python"></a>

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPython">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisPython</a>

python block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#python GeminiDataAnalyticsDataAgent#python}

---

##### `put_datasource` <a name="put_datasource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.putDatasource"></a>

```python
def put_datasource(
  big_query_max_billed_bytes: typing.Union[int, float] = None
) -> None
```

###### `big_query_max_billed_bytes`<sup>Optional</sup> <a name="big_query_max_billed_bytes" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.putDatasource.parameter.bigQueryMaxBilledBytes"></a>

- *Type:* typing.Union[int, float]

Optional. Limits the bytes billed for each BigQuery query job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#big_query_max_billed_bytes GeminiDataAnalyticsDataAgent#big_query_max_billed_bytes}

---

##### `reset_analysis` <a name="reset_analysis" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.resetAnalysis"></a>

```python
def reset_analysis() -> None
```

##### `reset_datasource` <a name="reset_datasource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.resetDatasource"></a>

```python
def reset_datasource() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.property.analysis">analysis</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.property.datasource">datasource</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.property.analysisInput">analysis_input</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysis">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.property.datasourceInput">datasource_input</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasource">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptions">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `analysis`<sup>Required</sup> <a name="analysis" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.property.analysis"></a>

```python
analysis: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysisOutputReference</a>

---

##### `datasource`<sup>Required</sup> <a name="datasource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.property.datasource"></a>

```python
datasource: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasourceOutputReference</a>

---

##### `analysis_input`<sup>Optional</sup> <a name="analysis_input" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.property.analysisInput"></a>

```python
analysis_input: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysis
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysis">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysis</a>

---

##### `datasource_input`<sup>Optional</sup> <a name="datasource_input" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.property.datasourceInput"></a>

```python
datasource_input: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasource
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasource">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasource</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference.property.internalValue"></a>

```python
internal_value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptions
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptions">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptions</a>

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.Initializer"></a>

```python
from cdktn_provider_google import gemini_data_analytics_data_agent

geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.putDatasourceReferences">put_datasource_references</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.putExampleQueries">put_example_queries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.putGlossaryTerms">put_glossary_terms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.putOptions">put_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.putSchemaRelationships">put_schema_relationships</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.resetExampleQueries">reset_example_queries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.resetGlossaryTerms">reset_glossary_terms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.resetOptions">reset_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.resetSchemaRelationships">reset_schema_relationships</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.resetSystemInstruction">reset_system_instruction</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_datasource_references` <a name="put_datasource_references" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.putDatasourceReferences"></a>

```python
def put_datasource_references(
  bq: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBq
) -> None
```

###### `bq`<sup>Required</sup> <a name="bq" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.putDatasourceReferences.parameter.bq"></a>

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBq">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesBq</a>

bq block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#bq GeminiDataAnalyticsDataAgent#bq}

---

##### `put_example_queries` <a name="put_example_queries" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.putExampleQueries"></a>

```python
def put_example_queries(
  value: IResolvable | typing.List[GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.putExampleQueries.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries</a>]

---

##### `put_glossary_terms` <a name="put_glossary_terms" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.putGlossaryTerms"></a>

```python
def put_glossary_terms(
  value: IResolvable | typing.List[GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.putGlossaryTerms.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms</a>]

---

##### `put_options` <a name="put_options" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.putOptions"></a>

```python
def put_options(
  analysis: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysis = None,
  datasource: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasource = None
) -> None
```

###### `analysis`<sup>Optional</sup> <a name="analysis" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.putOptions.parameter.analysis"></a>

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysis">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsAnalysis</a>

analysis block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#analysis GeminiDataAnalyticsDataAgent#analysis}

---

###### `datasource`<sup>Optional</sup> <a name="datasource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.putOptions.parameter.datasource"></a>

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasource">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsDatasource</a>

datasource block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#datasource GeminiDataAnalyticsDataAgent#datasource}

---

##### `put_schema_relationships` <a name="put_schema_relationships" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.putSchemaRelationships"></a>

```python
def put_schema_relationships(
  value: IResolvable | typing.List[GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.putSchemaRelationships.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships</a>]

---

##### `reset_example_queries` <a name="reset_example_queries" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.resetExampleQueries"></a>

```python
def reset_example_queries() -> None
```

##### `reset_glossary_terms` <a name="reset_glossary_terms" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.resetGlossaryTerms"></a>

```python
def reset_glossary_terms() -> None
```

##### `reset_options` <a name="reset_options" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.resetOptions"></a>

```python
def reset_options() -> None
```

##### `reset_schema_relationships` <a name="reset_schema_relationships" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.resetSchemaRelationships"></a>

```python
def reset_schema_relationships() -> None
```

##### `reset_system_instruction` <a name="reset_system_instruction" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.resetSystemInstruction"></a>

```python
def reset_system_instruction() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.property.datasourceReferences">datasource_references</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.property.exampleQueries">example_queries</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.property.glossaryTerms">glossary_terms</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.property.options">options</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.property.schemaRelationships">schema_relationships</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.property.datasourceReferencesInput">datasource_references_input</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferences">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferences</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.property.exampleQueriesInput">example_queries_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.property.glossaryTermsInput">glossary_terms_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.property.optionsInput">options_input</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptions">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.property.schemaRelationshipsInput">schema_relationships_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.property.systemInstructionInput">system_instruction_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.property.systemInstruction">system_instruction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `datasource_references`<sup>Required</sup> <a name="datasource_references" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.property.datasourceReferences"></a>

```python
datasource_references: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferencesOutputReference</a>

---

##### `example_queries`<sup>Required</sup> <a name="example_queries" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.property.exampleQueries"></a>

```python
example_queries: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueriesList</a>

---

##### `glossary_terms`<sup>Required</sup> <a name="glossary_terms" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.property.glossaryTerms"></a>

```python
glossary_terms: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTermsList</a>

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.property.options"></a>

```python
options: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptionsOutputReference</a>

---

##### `schema_relationships`<sup>Required</sup> <a name="schema_relationships" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.property.schemaRelationships"></a>

```python
schema_relationships: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList</a>

---

##### `datasource_references_input`<sup>Optional</sup> <a name="datasource_references_input" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.property.datasourceReferencesInput"></a>

```python
datasource_references_input: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferences
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferences">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextDatasourceReferences</a>

---

##### `example_queries_input`<sup>Optional</sup> <a name="example_queries_input" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.property.exampleQueriesInput"></a>

```python
example_queries_input: IResolvable | typing.List[GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextExampleQueries</a>]

---

##### `glossary_terms_input`<sup>Optional</sup> <a name="glossary_terms_input" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.property.glossaryTermsInput"></a>

```python
glossary_terms_input: IResolvable | typing.List[GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextGlossaryTerms</a>]

---

##### `options_input`<sup>Optional</sup> <a name="options_input" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.property.optionsInput"></a>

```python
options_input: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptions
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptions">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOptions</a>

---

##### `schema_relationships_input`<sup>Optional</sup> <a name="schema_relationships_input" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.property.schemaRelationshipsInput"></a>

```python
schema_relationships_input: IResolvable | typing.List[GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships</a>]

---

##### `system_instruction_input`<sup>Optional</sup> <a name="system_instruction_input" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.property.systemInstructionInput"></a>

```python
system_instruction_input: str
```

- *Type:* str

---

##### `system_instruction`<sup>Required</sup> <a name="system_instruction" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.property.systemInstruction"></a>

```python
system_instruction: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextOutputReference.property.internalValue"></a>

```python
internal_value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContext</a>

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import gemini_data_analytics_data_agent

geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.property.pathsInput">paths_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.property.tableFqnInput">table_fqn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.property.paths">paths</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.property.tableFqn">table_fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPaths">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPaths</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `paths_input`<sup>Optional</sup> <a name="paths_input" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.property.pathsInput"></a>

```python
paths_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `table_fqn_input`<sup>Optional</sup> <a name="table_fqn_input" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.property.tableFqnInput"></a>

```python
table_fqn_input: str
```

- *Type:* str

---

##### `paths`<sup>Required</sup> <a name="paths" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.property.paths"></a>

```python
paths: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `table_fqn`<sup>Required</sup> <a name="table_fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.property.tableFqn"></a>

```python
table_fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference.property.internalValue"></a>

```python
internal_value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPaths
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPaths">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPaths</a>

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList.Initializer"></a>

```python
from cdktn_provider_google import gemini_data_analytics_data_agent

geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships</a>]

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import gemini_data_analytics_data_agent

geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.putLeftSchemaPaths">put_left_schema_paths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.putRightSchemaPaths">put_right_schema_paths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.resetConfidenceScore">reset_confidence_score</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.resetSources">reset_sources</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_left_schema_paths` <a name="put_left_schema_paths" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.putLeftSchemaPaths"></a>

```python
def put_left_schema_paths(
  paths: typing.List[str],
  table_fqn: str
) -> None
```

###### `paths`<sup>Required</sup> <a name="paths" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.putLeftSchemaPaths.parameter.paths"></a>

- *Type:* typing.List[str]

Required. The ordered list of paths within the table schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#paths GeminiDataAnalyticsDataAgent#paths}

---

###### `table_fqn`<sup>Required</sup> <a name="table_fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.putLeftSchemaPaths.parameter.tableFqn"></a>

- *Type:* str

Required. The service-qualified full resource name of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#table_fqn GeminiDataAnalyticsDataAgent#table_fqn}

---

##### `put_right_schema_paths` <a name="put_right_schema_paths" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.putRightSchemaPaths"></a>

```python
def put_right_schema_paths(
  paths: typing.List[str],
  table_fqn: str
) -> None
```

###### `paths`<sup>Required</sup> <a name="paths" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.putRightSchemaPaths.parameter.paths"></a>

- *Type:* typing.List[str]

Required. The ordered list of paths within the table schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#paths GeminiDataAnalyticsDataAgent#paths}

---

###### `table_fqn`<sup>Required</sup> <a name="table_fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.putRightSchemaPaths.parameter.tableFqn"></a>

- *Type:* str

Required. The service-qualified full resource name of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#table_fqn GeminiDataAnalyticsDataAgent#table_fqn}

---

##### `reset_confidence_score` <a name="reset_confidence_score" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.resetConfidenceScore"></a>

```python
def reset_confidence_score() -> None
```

##### `reset_sources` <a name="reset_sources" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.resetSources"></a>

```python
def reset_sources() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.property.leftSchemaPaths">left_schema_paths</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.property.rightSchemaPaths">right_schema_paths</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.property.confidenceScoreInput">confidence_score_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.property.leftSchemaPathsInput">left_schema_paths_input</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPaths">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPaths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.property.rightSchemaPathsInput">right_schema_paths_input</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPaths">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPaths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.property.sourcesInput">sources_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.property.confidenceScore">confidence_score</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.property.sources">sources</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `left_schema_paths`<sup>Required</sup> <a name="left_schema_paths" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.property.leftSchemaPaths"></a>

```python
left_schema_paths: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPathsOutputReference</a>

---

##### `right_schema_paths`<sup>Required</sup> <a name="right_schema_paths" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.property.rightSchemaPaths"></a>

```python
right_schema_paths: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference</a>

---

##### `confidence_score_input`<sup>Optional</sup> <a name="confidence_score_input" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.property.confidenceScoreInput"></a>

```python
confidence_score_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `left_schema_paths_input`<sup>Optional</sup> <a name="left_schema_paths_input" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.property.leftSchemaPathsInput"></a>

```python
left_schema_paths_input: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPaths
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPaths">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsLeftSchemaPaths</a>

---

##### `right_schema_paths_input`<sup>Optional</sup> <a name="right_schema_paths_input" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.property.rightSchemaPathsInput"></a>

```python
right_schema_paths_input: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPaths
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPaths">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPaths</a>

---

##### `sources_input`<sup>Optional</sup> <a name="sources_input" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.property.sourcesInput"></a>

```python
sources_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `confidence_score`<sup>Required</sup> <a name="confidence_score" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.property.confidenceScore"></a>

```python
confidence_score: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sources`<sup>Required</sup> <a name="sources" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.property.sources"></a>

```python
sources: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationships</a>

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import gemini_data_analytics_data_agent

geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.property.pathsInput">paths_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.property.tableFqnInput">table_fqn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.property.paths">paths</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.property.tableFqn">table_fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPaths">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPaths</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `paths_input`<sup>Optional</sup> <a name="paths_input" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.property.pathsInput"></a>

```python
paths_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `table_fqn_input`<sup>Optional</sup> <a name="table_fqn_input" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.property.tableFqnInput"></a>

```python
table_fqn_input: str
```

- *Type:* str

---

##### `paths`<sup>Required</sup> <a name="paths" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.property.paths"></a>

```python
paths: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `table_fqn`<sup>Required</sup> <a name="table_fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.property.tableFqn"></a>

```python
table_fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPathsOutputReference.property.internalValue"></a>

```python
internal_value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPaths
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPaths">GeminiDataAnalyticsDataAgentDataAnalyticsAgentPublishedContextSchemaRelationshipsRightSchemaPaths</a>

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.Initializer"></a>

```python
from cdktn_provider_google import gemini_data_analytics_data_agent

geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.putTableReferences">put_table_references</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.resetTableReferences">reset_table_references</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_table_references` <a name="put_table_references" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.putTableReferences"></a>

```python
def put_table_references(
  value: IResolvable | typing.List[GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.putTableReferences.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences</a>]

---

##### `reset_table_references` <a name="reset_table_references" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.resetTableReferences"></a>

```python
def reset_table_references() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.property.tableReferences">table_references</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.property.tableReferencesInput">table_references_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBq">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBq</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `table_references`<sup>Required</sup> <a name="table_references" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.property.tableReferences"></a>

```python
table_references: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList</a>

---

##### `table_references_input`<sup>Optional</sup> <a name="table_references_input" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.property.tableReferencesInput"></a>

```python
table_references_input: IResolvable | typing.List[GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference.property.internalValue"></a>

```python
internal_value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBq
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBq">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBq</a>

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList.Initializer"></a>

```python
from cdktn_provider_google import gemini_data_analytics_data_agent

geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences</a>]

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.Initializer"></a>

```python
from cdktn_provider_google import gemini_data_analytics_data_agent

geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.property.datasetIdInput">dataset_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.property.tableIdInput">table_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.property.datasetId">dataset_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.property.tableId">table_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dataset_id_input`<sup>Optional</sup> <a name="dataset_id_input" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.property.datasetIdInput"></a>

```python
dataset_id_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `table_id_input`<sup>Optional</sup> <a name="table_id_input" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.property.tableIdInput"></a>

```python
table_id_input: str
```

- *Type:* str

---

##### `dataset_id`<sup>Required</sup> <a name="dataset_id" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.property.datasetId"></a>

```python
dataset_id: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `table_id`<sup>Required</sup> <a name="table_id" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.property.tableId"></a>

```python
table_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferencesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences</a>

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.Initializer"></a>

```python
from cdktn_provider_google import gemini_data_analytics_data_agent

geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.putBq">put_bq</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_bq` <a name="put_bq" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.putBq"></a>

```python
def put_bq(
  table_references: IResolvable | typing.List[GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences] = None
) -> None
```

###### `table_references`<sup>Optional</sup> <a name="table_references" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.putBq.parameter.tableReferences"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqTableReferences</a>]

table_references block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#table_references GeminiDataAnalyticsDataAgent#table_references}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.property.bq">bq</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.property.bqInput">bq_input</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBq">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBq</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferences">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferences</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bq`<sup>Required</sup> <a name="bq" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.property.bq"></a>

```python
bq: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBqOutputReference</a>

---

##### `bq_input`<sup>Optional</sup> <a name="bq_input" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.property.bqInput"></a>

```python
bq_input: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBq
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBq">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBq</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference.property.internalValue"></a>

```python
internal_value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferences
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferences">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferences</a>

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList.Initializer"></a>

```python
from cdktn_provider_google import gemini_data_analytics_data_agent

geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries</a>]

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.Initializer"></a>

```python
from cdktn_provider_google import gemini_data_analytics_data_agent

geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.resetNaturalLanguageQuestion">reset_natural_language_question</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.resetSqlQuery">reset_sql_query</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_natural_language_question` <a name="reset_natural_language_question" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.resetNaturalLanguageQuestion"></a>

```python
def reset_natural_language_question() -> None
```

##### `reset_sql_query` <a name="reset_sql_query" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.resetSqlQuery"></a>

```python
def reset_sql_query() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.property.naturalLanguageQuestionInput">natural_language_question_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.property.sqlQueryInput">sql_query_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.property.naturalLanguageQuestion">natural_language_question</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.property.sqlQuery">sql_query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `natural_language_question_input`<sup>Optional</sup> <a name="natural_language_question_input" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.property.naturalLanguageQuestionInput"></a>

```python
natural_language_question_input: str
```

- *Type:* str

---

##### `sql_query_input`<sup>Optional</sup> <a name="sql_query_input" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.property.sqlQueryInput"></a>

```python
sql_query_input: str
```

- *Type:* str

---

##### `natural_language_question`<sup>Required</sup> <a name="natural_language_question" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.property.naturalLanguageQuestion"></a>

```python
natural_language_question: str
```

- *Type:* str

---

##### `sql_query`<sup>Required</sup> <a name="sql_query" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.property.sqlQuery"></a>

```python
sql_query: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries</a>

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList.Initializer"></a>

```python
from cdktn_provider_google import gemini_data_analytics_data_agent

geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms</a>]

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import gemini_data_analytics_data_agent

geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.resetLabels">reset_labels</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_labels` <a name="reset_labels" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.resetLabels"></a>

```python
def reset_labels() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.property.labelsInput">labels_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.property.labels">labels</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.property.labelsInput"></a>

```python
labels_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.property.labels"></a>

```python
labels: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms</a>

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.Initializer"></a>

```python
from cdktn_provider_google import gemini_data_analytics_data_agent

geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.putPython">put_python</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.resetPython">reset_python</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_python` <a name="put_python" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.putPython"></a>

```python
def put_python(
  enabled: bool | IResolvable = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.putPython.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Optional. Whether to enable Python analysis. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#enabled GeminiDataAnalyticsDataAgent#enabled}

---

##### `reset_python` <a name="reset_python" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.resetPython"></a>

```python
def reset_python() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.property.python">python</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.property.pythonInput">python_input</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPython">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPython</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysis">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysis</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `python`<sup>Required</sup> <a name="python" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.property.python"></a>

```python
python: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference</a>

---

##### `python_input`<sup>Optional</sup> <a name="python_input" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.property.pythonInput"></a>

```python
python_input: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPython
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPython">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPython</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference.property.internalValue"></a>

```python
internal_value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysis
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysis">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysis</a>

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.Initializer"></a>

```python
from cdktn_provider_google import gemini_data_analytics_data_agent

geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPython">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPython</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPythonOutputReference.property.internalValue"></a>

```python
internal_value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPython
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPython">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPython</a>

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.Initializer"></a>

```python
from cdktn_provider_google import gemini_data_analytics_data_agent

geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.resetBigQueryMaxBilledBytes">reset_big_query_max_billed_bytes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_big_query_max_billed_bytes` <a name="reset_big_query_max_billed_bytes" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.resetBigQueryMaxBilledBytes"></a>

```python
def reset_big_query_max_billed_bytes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.property.bigQueryMaxBilledBytesInput">big_query_max_billed_bytes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.property.bigQueryMaxBilledBytes">big_query_max_billed_bytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasource">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `big_query_max_billed_bytes_input`<sup>Optional</sup> <a name="big_query_max_billed_bytes_input" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.property.bigQueryMaxBilledBytesInput"></a>

```python
big_query_max_billed_bytes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `big_query_max_billed_bytes`<sup>Required</sup> <a name="big_query_max_billed_bytes" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.property.bigQueryMaxBilledBytes"></a>

```python
big_query_max_billed_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference.property.internalValue"></a>

```python
internal_value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasource
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasource">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasource</a>

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import gemini_data_analytics_data_agent

geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.putAnalysis">put_analysis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.putDatasource">put_datasource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.resetAnalysis">reset_analysis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.resetDatasource">reset_datasource</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_analysis` <a name="put_analysis" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.putAnalysis"></a>

```python
def put_analysis(
  python: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPython = None
) -> None
```

###### `python`<sup>Optional</sup> <a name="python" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.putAnalysis.parameter.python"></a>

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPython">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisPython</a>

python block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#python GeminiDataAnalyticsDataAgent#python}

---

##### `put_datasource` <a name="put_datasource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.putDatasource"></a>

```python
def put_datasource(
  big_query_max_billed_bytes: typing.Union[int, float] = None
) -> None
```

###### `big_query_max_billed_bytes`<sup>Optional</sup> <a name="big_query_max_billed_bytes" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.putDatasource.parameter.bigQueryMaxBilledBytes"></a>

- *Type:* typing.Union[int, float]

Optional. Limits the bytes billed for each BigQuery query job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#big_query_max_billed_bytes GeminiDataAnalyticsDataAgent#big_query_max_billed_bytes}

---

##### `reset_analysis` <a name="reset_analysis" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.resetAnalysis"></a>

```python
def reset_analysis() -> None
```

##### `reset_datasource` <a name="reset_datasource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.resetDatasource"></a>

```python
def reset_datasource() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.property.analysis">analysis</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.property.datasource">datasource</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.property.analysisInput">analysis_input</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysis">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.property.datasourceInput">datasource_input</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasource">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptions">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `analysis`<sup>Required</sup> <a name="analysis" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.property.analysis"></a>

```python
analysis: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysisOutputReference</a>

---

##### `datasource`<sup>Required</sup> <a name="datasource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.property.datasource"></a>

```python
datasource: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasourceOutputReference</a>

---

##### `analysis_input`<sup>Optional</sup> <a name="analysis_input" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.property.analysisInput"></a>

```python
analysis_input: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysis
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysis">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysis</a>

---

##### `datasource_input`<sup>Optional</sup> <a name="datasource_input" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.property.datasourceInput"></a>

```python
datasource_input: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasource
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasource">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasource</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference.property.internalValue"></a>

```python
internal_value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptions
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptions">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptions</a>

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.Initializer"></a>

```python
from cdktn_provider_google import gemini_data_analytics_data_agent

geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.putDatasourceReferences">put_datasource_references</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.putExampleQueries">put_example_queries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.putGlossaryTerms">put_glossary_terms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.putOptions">put_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.putSchemaRelationships">put_schema_relationships</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.resetExampleQueries">reset_example_queries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.resetGlossaryTerms">reset_glossary_terms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.resetOptions">reset_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.resetSchemaRelationships">reset_schema_relationships</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.resetSystemInstruction">reset_system_instruction</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_datasource_references` <a name="put_datasource_references" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.putDatasourceReferences"></a>

```python
def put_datasource_references(
  bq: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBq
) -> None
```

###### `bq`<sup>Required</sup> <a name="bq" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.putDatasourceReferences.parameter.bq"></a>

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBq">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesBq</a>

bq block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#bq GeminiDataAnalyticsDataAgent#bq}

---

##### `put_example_queries` <a name="put_example_queries" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.putExampleQueries"></a>

```python
def put_example_queries(
  value: IResolvable | typing.List[GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.putExampleQueries.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries</a>]

---

##### `put_glossary_terms` <a name="put_glossary_terms" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.putGlossaryTerms"></a>

```python
def put_glossary_terms(
  value: IResolvable | typing.List[GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.putGlossaryTerms.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms</a>]

---

##### `put_options` <a name="put_options" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.putOptions"></a>

```python
def put_options(
  analysis: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysis = None,
  datasource: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasource = None
) -> None
```

###### `analysis`<sup>Optional</sup> <a name="analysis" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.putOptions.parameter.analysis"></a>

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysis">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsAnalysis</a>

analysis block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#analysis GeminiDataAnalyticsDataAgent#analysis}

---

###### `datasource`<sup>Optional</sup> <a name="datasource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.putOptions.parameter.datasource"></a>

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasource">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsDatasource</a>

datasource block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#datasource GeminiDataAnalyticsDataAgent#datasource}

---

##### `put_schema_relationships` <a name="put_schema_relationships" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.putSchemaRelationships"></a>

```python
def put_schema_relationships(
  value: IResolvable | typing.List[GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.putSchemaRelationships.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships</a>]

---

##### `reset_example_queries` <a name="reset_example_queries" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.resetExampleQueries"></a>

```python
def reset_example_queries() -> None
```

##### `reset_glossary_terms` <a name="reset_glossary_terms" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.resetGlossaryTerms"></a>

```python
def reset_glossary_terms() -> None
```

##### `reset_options` <a name="reset_options" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.resetOptions"></a>

```python
def reset_options() -> None
```

##### `reset_schema_relationships` <a name="reset_schema_relationships" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.resetSchemaRelationships"></a>

```python
def reset_schema_relationships() -> None
```

##### `reset_system_instruction` <a name="reset_system_instruction" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.resetSystemInstruction"></a>

```python
def reset_system_instruction() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.property.datasourceReferences">datasource_references</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.property.exampleQueries">example_queries</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.property.glossaryTerms">glossary_terms</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.property.options">options</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.property.schemaRelationships">schema_relationships</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.property.datasourceReferencesInput">datasource_references_input</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferences">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferences</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.property.exampleQueriesInput">example_queries_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.property.glossaryTermsInput">glossary_terms_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.property.optionsInput">options_input</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptions">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.property.schemaRelationshipsInput">schema_relationships_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.property.systemInstructionInput">system_instruction_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.property.systemInstruction">system_instruction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `datasource_references`<sup>Required</sup> <a name="datasource_references" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.property.datasourceReferences"></a>

```python
datasource_references: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferencesOutputReference</a>

---

##### `example_queries`<sup>Required</sup> <a name="example_queries" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.property.exampleQueries"></a>

```python
example_queries: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueriesList</a>

---

##### `glossary_terms`<sup>Required</sup> <a name="glossary_terms" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.property.glossaryTerms"></a>

```python
glossary_terms: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTermsList</a>

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.property.options"></a>

```python
options: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptionsOutputReference</a>

---

##### `schema_relationships`<sup>Required</sup> <a name="schema_relationships" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.property.schemaRelationships"></a>

```python
schema_relationships: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList</a>

---

##### `datasource_references_input`<sup>Optional</sup> <a name="datasource_references_input" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.property.datasourceReferencesInput"></a>

```python
datasource_references_input: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferences
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferences">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextDatasourceReferences</a>

---

##### `example_queries_input`<sup>Optional</sup> <a name="example_queries_input" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.property.exampleQueriesInput"></a>

```python
example_queries_input: IResolvable | typing.List[GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextExampleQueries</a>]

---

##### `glossary_terms_input`<sup>Optional</sup> <a name="glossary_terms_input" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.property.glossaryTermsInput"></a>

```python
glossary_terms_input: IResolvable | typing.List[GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextGlossaryTerms</a>]

---

##### `options_input`<sup>Optional</sup> <a name="options_input" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.property.optionsInput"></a>

```python
options_input: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptions
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptions">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOptions</a>

---

##### `schema_relationships_input`<sup>Optional</sup> <a name="schema_relationships_input" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.property.schemaRelationshipsInput"></a>

```python
schema_relationships_input: IResolvable | typing.List[GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships</a>]

---

##### `system_instruction_input`<sup>Optional</sup> <a name="system_instruction_input" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.property.systemInstructionInput"></a>

```python
system_instruction_input: str
```

- *Type:* str

---

##### `system_instruction`<sup>Required</sup> <a name="system_instruction" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.property.systemInstruction"></a>

```python
system_instruction: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextOutputReference.property.internalValue"></a>

```python
internal_value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContext</a>

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import gemini_data_analytics_data_agent

geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.property.pathsInput">paths_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.property.tableFqnInput">table_fqn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.property.paths">paths</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.property.tableFqn">table_fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPaths">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPaths</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `paths_input`<sup>Optional</sup> <a name="paths_input" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.property.pathsInput"></a>

```python
paths_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `table_fqn_input`<sup>Optional</sup> <a name="table_fqn_input" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.property.tableFqnInput"></a>

```python
table_fqn_input: str
```

- *Type:* str

---

##### `paths`<sup>Required</sup> <a name="paths" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.property.paths"></a>

```python
paths: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `table_fqn`<sup>Required</sup> <a name="table_fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.property.tableFqn"></a>

```python
table_fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference.property.internalValue"></a>

```python
internal_value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPaths
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPaths">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPaths</a>

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList.Initializer"></a>

```python
from cdktn_provider_google import gemini_data_analytics_data_agent

geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships</a>]

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import gemini_data_analytics_data_agent

geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.putLeftSchemaPaths">put_left_schema_paths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.putRightSchemaPaths">put_right_schema_paths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.resetConfidenceScore">reset_confidence_score</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.resetSources">reset_sources</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_left_schema_paths` <a name="put_left_schema_paths" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.putLeftSchemaPaths"></a>

```python
def put_left_schema_paths(
  paths: typing.List[str],
  table_fqn: str
) -> None
```

###### `paths`<sup>Required</sup> <a name="paths" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.putLeftSchemaPaths.parameter.paths"></a>

- *Type:* typing.List[str]

Required. The ordered list of paths within the table schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#paths GeminiDataAnalyticsDataAgent#paths}

---

###### `table_fqn`<sup>Required</sup> <a name="table_fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.putLeftSchemaPaths.parameter.tableFqn"></a>

- *Type:* str

Required. The service-qualified full resource name of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#table_fqn GeminiDataAnalyticsDataAgent#table_fqn}

---

##### `put_right_schema_paths` <a name="put_right_schema_paths" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.putRightSchemaPaths"></a>

```python
def put_right_schema_paths(
  paths: typing.List[str],
  table_fqn: str
) -> None
```

###### `paths`<sup>Required</sup> <a name="paths" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.putRightSchemaPaths.parameter.paths"></a>

- *Type:* typing.List[str]

Required. The ordered list of paths within the table schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#paths GeminiDataAnalyticsDataAgent#paths}

---

###### `table_fqn`<sup>Required</sup> <a name="table_fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.putRightSchemaPaths.parameter.tableFqn"></a>

- *Type:* str

Required. The service-qualified full resource name of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent#table_fqn GeminiDataAnalyticsDataAgent#table_fqn}

---

##### `reset_confidence_score` <a name="reset_confidence_score" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.resetConfidenceScore"></a>

```python
def reset_confidence_score() -> None
```

##### `reset_sources` <a name="reset_sources" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.resetSources"></a>

```python
def reset_sources() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.property.leftSchemaPaths">left_schema_paths</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.property.rightSchemaPaths">right_schema_paths</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.property.confidenceScoreInput">confidence_score_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.property.leftSchemaPathsInput">left_schema_paths_input</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPaths">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPaths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.property.rightSchemaPathsInput">right_schema_paths_input</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPaths">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPaths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.property.sourcesInput">sources_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.property.confidenceScore">confidence_score</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.property.sources">sources</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `left_schema_paths`<sup>Required</sup> <a name="left_schema_paths" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.property.leftSchemaPaths"></a>

```python
left_schema_paths: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPathsOutputReference</a>

---

##### `right_schema_paths`<sup>Required</sup> <a name="right_schema_paths" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.property.rightSchemaPaths"></a>

```python
right_schema_paths: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference</a>

---

##### `confidence_score_input`<sup>Optional</sup> <a name="confidence_score_input" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.property.confidenceScoreInput"></a>

```python
confidence_score_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `left_schema_paths_input`<sup>Optional</sup> <a name="left_schema_paths_input" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.property.leftSchemaPathsInput"></a>

```python
left_schema_paths_input: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPaths
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPaths">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsLeftSchemaPaths</a>

---

##### `right_schema_paths_input`<sup>Optional</sup> <a name="right_schema_paths_input" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.property.rightSchemaPathsInput"></a>

```python
right_schema_paths_input: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPaths
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPaths">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPaths</a>

---

##### `sources_input`<sup>Optional</sup> <a name="sources_input" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.property.sourcesInput"></a>

```python
sources_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `confidence_score`<sup>Required</sup> <a name="confidence_score" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.property.confidenceScore"></a>

```python
confidence_score: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sources`<sup>Required</sup> <a name="sources" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.property.sources"></a>

```python
sources: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationships</a>

---


### GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference <a name="GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import gemini_data_analytics_data_agent

geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.property.pathsInput">paths_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.property.tableFqnInput">table_fqn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.property.paths">paths</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.property.tableFqn">table_fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPaths">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPaths</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `paths_input`<sup>Optional</sup> <a name="paths_input" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.property.pathsInput"></a>

```python
paths_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `table_fqn_input`<sup>Optional</sup> <a name="table_fqn_input" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.property.tableFqnInput"></a>

```python
table_fqn_input: str
```

- *Type:* str

---

##### `paths`<sup>Required</sup> <a name="paths" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.property.paths"></a>

```python
paths: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `table_fqn`<sup>Required</sup> <a name="table_fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.property.tableFqn"></a>

```python
table_fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPathsOutputReference.property.internalValue"></a>

```python
internal_value: GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPaths
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPaths">GeminiDataAnalyticsDataAgentDataAnalyticsAgentStagingContextSchemaRelationshipsRightSchemaPaths</a>

---


### GeminiDataAnalyticsDataAgentTimeoutsOutputReference <a name="GeminiDataAnalyticsDataAgentTimeoutsOutputReference" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import gemini_data_analytics_data_agent

geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeouts">GeminiDataAnalyticsDataAgentTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GeminiDataAnalyticsDataAgentTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgent.GeminiDataAnalyticsDataAgentTimeouts">GeminiDataAnalyticsDataAgentTimeouts</a>

---



