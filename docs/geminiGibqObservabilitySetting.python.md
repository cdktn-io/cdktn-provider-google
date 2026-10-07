# `geminiGibqObservabilitySetting` Submodule <a name="`geminiGibqObservabilitySetting` Submodule" id="@cdktn/provider-google.geminiGibqObservabilitySetting"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GeminiGibqObservabilitySetting <a name="GeminiGibqObservabilitySetting" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting google_gemini_gibq_observability_setting}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.Initializer"></a>

```python
from cdktn_provider_google import gemini_gibq_observability_setting

geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  gibq_observability_setting_id: str,
  conversational_analytics_setting: GeminiGibqObservabilitySettingConversationalAnalyticsSetting = None,
  deletion_policy: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  location: str = None,
  project: str = None,
  timeouts: GeminiGibqObservabilitySettingTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.Initializer.parameter.gibqObservabilitySettingId">gibq_observability_setting_id</a></code> | <code>str</code> | Id of the requesting object. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.Initializer.parameter.conversationalAnalyticsSetting">conversational_analytics_setting</a></code> | <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSetting">GeminiGibqObservabilitySettingConversationalAnalyticsSetting</a></code> | conversational_analytics_setting block. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting#id GeminiGibqObservabilitySetting#id}. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels as key value pairs. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.Initializer.parameter.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting#project GeminiGibqObservabilitySetting#project}. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeouts">GeminiGibqObservabilitySettingTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `gibq_observability_setting_id`<sup>Required</sup> <a name="gibq_observability_setting_id" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.Initializer.parameter.gibqObservabilitySettingId"></a>

- *Type:* str

Id of the requesting object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting#gibq_observability_setting_id GeminiGibqObservabilitySetting#gibq_observability_setting_id}

---

##### `conversational_analytics_setting`<sup>Optional</sup> <a name="conversational_analytics_setting" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.Initializer.parameter.conversationalAnalyticsSetting"></a>

- *Type:* <a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSetting">GeminiGibqObservabilitySettingConversationalAnalyticsSetting</a>

conversational_analytics_setting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting#conversational_analytics_setting GeminiGibqObservabilitySetting#conversational_analytics_setting}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting#deletion_policy GeminiGibqObservabilitySetting#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting#id GeminiGibqObservabilitySetting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting#labels GeminiGibqObservabilitySetting#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.Initializer.parameter.location"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting#location GeminiGibqObservabilitySetting#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting#project GeminiGibqObservabilitySetting#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeouts">GeminiGibqObservabilitySettingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting#timeouts GeminiGibqObservabilitySetting#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.putConversationalAnalyticsSetting">put_conversational_analytics_setting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.resetConversationalAnalyticsSetting">reset_conversational_analytics_setting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_conversational_analytics_setting` <a name="put_conversational_analytics_setting" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.putConversationalAnalyticsSetting"></a>

```python
def put_conversational_analytics_setting(
  feedback_enabled: bool | IResolvable = None,
  logging_enabled: bool | IResolvable = None,
  metrics_enabled: bool | IResolvable = None,
  traces_enabled: bool | IResolvable = None
) -> None
```

###### `feedback_enabled`<sup>Optional</sup> <a name="feedback_enabled" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.putConversationalAnalyticsSetting.parameter.feedbackEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether to enable feedback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting#feedback_enabled GeminiGibqObservabilitySetting#feedback_enabled}

---

###### `logging_enabled`<sup>Optional</sup> <a name="logging_enabled" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.putConversationalAnalyticsSetting.parameter.loggingEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether to enable logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting#logging_enabled GeminiGibqObservabilitySetting#logging_enabled}

---

###### `metrics_enabled`<sup>Optional</sup> <a name="metrics_enabled" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.putConversationalAnalyticsSetting.parameter.metricsEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether to enable metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting#metrics_enabled GeminiGibqObservabilitySetting#metrics_enabled}

---

###### `traces_enabled`<sup>Optional</sup> <a name="traces_enabled" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.putConversationalAnalyticsSetting.parameter.tracesEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether to enable traces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting#traces_enabled GeminiGibqObservabilitySetting#traces_enabled}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting#create GeminiGibqObservabilitySetting#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting#delete GeminiGibqObservabilitySetting#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting#update GeminiGibqObservabilitySetting#update}.

---

##### `reset_conversational_analytics_setting` <a name="reset_conversational_analytics_setting" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.resetConversationalAnalyticsSetting"></a>

```python
def reset_conversational_analytics_setting() -> None
```

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GeminiGibqObservabilitySetting resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.isConstruct"></a>

```python
from cdktn_provider_google import gemini_gibq_observability_setting

geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.isTerraformElement"></a>

```python
from cdktn_provider_google import gemini_gibq_observability_setting

geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.isTerraformResource"></a>

```python
from cdktn_provider_google import gemini_gibq_observability_setting

geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.generateConfigForImport"></a>

```python
from cdktn_provider_google import gemini_gibq_observability_setting

geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GeminiGibqObservabilitySetting resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GeminiGibqObservabilitySetting to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GeminiGibqObservabilitySetting that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GeminiGibqObservabilitySetting to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.conversationalAnalyticsSetting">conversational_analytics_setting</a></code> | <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference">GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.effectiveLabels">effective_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.terraformLabels">terraform_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference">GeminiGibqObservabilitySettingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.conversationalAnalyticsSettingInput">conversational_analytics_setting_input</a></code> | <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSetting">GeminiGibqObservabilitySettingConversationalAnalyticsSetting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.gibqObservabilitySettingIdInput">gibq_observability_setting_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeouts">GeminiGibqObservabilitySettingTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.gibqObservabilitySettingId">gibq_observability_setting_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `conversational_analytics_setting`<sup>Required</sup> <a name="conversational_analytics_setting" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.conversationalAnalyticsSetting"></a>

```python
conversational_analytics_setting: GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference">GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.timeouts"></a>

```python
timeouts: GeminiGibqObservabilitySettingTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference">GeminiGibqObservabilitySettingTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `conversational_analytics_setting_input`<sup>Optional</sup> <a name="conversational_analytics_setting_input" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.conversationalAnalyticsSettingInput"></a>

```python
conversational_analytics_setting_input: GeminiGibqObservabilitySettingConversationalAnalyticsSetting
```

- *Type:* <a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSetting">GeminiGibqObservabilitySettingConversationalAnalyticsSetting</a>

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `gibq_observability_setting_id_input`<sup>Optional</sup> <a name="gibq_observability_setting_id_input" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.gibqObservabilitySettingIdInput"></a>

```python
gibq_observability_setting_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GeminiGibqObservabilitySettingTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeouts">GeminiGibqObservabilitySettingTimeouts</a>

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `gibq_observability_setting_id`<sup>Required</sup> <a name="gibq_observability_setting_id" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.gibqObservabilitySettingId"></a>

```python
gibq_observability_setting_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySetting.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GeminiGibqObservabilitySettingConfig <a name="GeminiGibqObservabilitySettingConfig" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig.Initializer"></a>

```python
from cdktn_provider_google import gemini_gibq_observability_setting

geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  gibq_observability_setting_id: str,
  conversational_analytics_setting: GeminiGibqObservabilitySettingConversationalAnalyticsSetting = None,
  deletion_policy: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  location: str = None,
  project: str = None,
  timeouts: GeminiGibqObservabilitySettingTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig.property.gibqObservabilitySettingId">gibq_observability_setting_id</a></code> | <code>str</code> | Id of the requesting object. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig.property.conversationalAnalyticsSetting">conversational_analytics_setting</a></code> | <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSetting">GeminiGibqObservabilitySettingConversationalAnalyticsSetting</a></code> | conversational_analytics_setting block. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting#id GeminiGibqObservabilitySetting#id}. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels as key value pairs. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig.property.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting#project GeminiGibqObservabilitySetting#project}. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeouts">GeminiGibqObservabilitySettingTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `gibq_observability_setting_id`<sup>Required</sup> <a name="gibq_observability_setting_id" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig.property.gibqObservabilitySettingId"></a>

```python
gibq_observability_setting_id: str
```

- *Type:* str

Id of the requesting object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting#gibq_observability_setting_id GeminiGibqObservabilitySetting#gibq_observability_setting_id}

---

##### `conversational_analytics_setting`<sup>Optional</sup> <a name="conversational_analytics_setting" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig.property.conversationalAnalyticsSetting"></a>

```python
conversational_analytics_setting: GeminiGibqObservabilitySettingConversationalAnalyticsSetting
```

- *Type:* <a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSetting">GeminiGibqObservabilitySettingConversationalAnalyticsSetting</a>

conversational_analytics_setting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting#conversational_analytics_setting GeminiGibqObservabilitySetting#conversational_analytics_setting}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting#deletion_policy GeminiGibqObservabilitySetting#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting#id GeminiGibqObservabilitySetting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting#labels GeminiGibqObservabilitySetting#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting#location GeminiGibqObservabilitySetting#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting#project GeminiGibqObservabilitySetting#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConfig.property.timeouts"></a>

```python
timeouts: GeminiGibqObservabilitySettingTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeouts">GeminiGibqObservabilitySettingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting#timeouts GeminiGibqObservabilitySetting#timeouts}

---

### GeminiGibqObservabilitySettingConversationalAnalyticsSetting <a name="GeminiGibqObservabilitySettingConversationalAnalyticsSetting" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSetting"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSetting.Initializer"></a>

```python
from cdktn_provider_google import gemini_gibq_observability_setting

geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSetting(
  feedback_enabled: bool | IResolvable = None,
  logging_enabled: bool | IResolvable = None,
  metrics_enabled: bool | IResolvable = None,
  traces_enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSetting.property.feedbackEnabled">feedback_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to enable feedback. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSetting.property.loggingEnabled">logging_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to enable logging. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSetting.property.metricsEnabled">metrics_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to enable metrics. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSetting.property.tracesEnabled">traces_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to enable traces. |

---

##### `feedback_enabled`<sup>Optional</sup> <a name="feedback_enabled" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSetting.property.feedbackEnabled"></a>

```python
feedback_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether to enable feedback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting#feedback_enabled GeminiGibqObservabilitySetting#feedback_enabled}

---

##### `logging_enabled`<sup>Optional</sup> <a name="logging_enabled" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSetting.property.loggingEnabled"></a>

```python
logging_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether to enable logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting#logging_enabled GeminiGibqObservabilitySetting#logging_enabled}

---

##### `metrics_enabled`<sup>Optional</sup> <a name="metrics_enabled" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSetting.property.metricsEnabled"></a>

```python
metrics_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether to enable metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting#metrics_enabled GeminiGibqObservabilitySetting#metrics_enabled}

---

##### `traces_enabled`<sup>Optional</sup> <a name="traces_enabled" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSetting.property.tracesEnabled"></a>

```python
traces_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether to enable traces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting#traces_enabled GeminiGibqObservabilitySetting#traces_enabled}

---

### GeminiGibqObservabilitySettingTimeouts <a name="GeminiGibqObservabilitySettingTimeouts" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeouts.Initializer"></a>

```python
from cdktn_provider_google import gemini_gibq_observability_setting

geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting#create GeminiGibqObservabilitySetting#create}. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting#delete GeminiGibqObservabilitySetting#delete}. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting#update GeminiGibqObservabilitySetting#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting#create GeminiGibqObservabilitySetting#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting#delete GeminiGibqObservabilitySetting#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gibq_observability_setting#update GeminiGibqObservabilitySetting#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference <a name="GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.Initializer"></a>

```python
from cdktn_provider_google import gemini_gibq_observability_setting

geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.resetFeedbackEnabled">reset_feedback_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.resetLoggingEnabled">reset_logging_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.resetMetricsEnabled">reset_metrics_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.resetTracesEnabled">reset_traces_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_feedback_enabled` <a name="reset_feedback_enabled" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.resetFeedbackEnabled"></a>

```python
def reset_feedback_enabled() -> None
```

##### `reset_logging_enabled` <a name="reset_logging_enabled" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.resetLoggingEnabled"></a>

```python
def reset_logging_enabled() -> None
```

##### `reset_metrics_enabled` <a name="reset_metrics_enabled" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.resetMetricsEnabled"></a>

```python
def reset_metrics_enabled() -> None
```

##### `reset_traces_enabled` <a name="reset_traces_enabled" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.resetTracesEnabled"></a>

```python
def reset_traces_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.feedbackEnabledInput">feedback_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.loggingEnabledInput">logging_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.metricsEnabledInput">metrics_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.tracesEnabledInput">traces_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.feedbackEnabled">feedback_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.loggingEnabled">logging_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.metricsEnabled">metrics_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.tracesEnabled">traces_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSetting">GeminiGibqObservabilitySettingConversationalAnalyticsSetting</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `feedback_enabled_input`<sup>Optional</sup> <a name="feedback_enabled_input" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.feedbackEnabledInput"></a>

```python
feedback_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `logging_enabled_input`<sup>Optional</sup> <a name="logging_enabled_input" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.loggingEnabledInput"></a>

```python
logging_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `metrics_enabled_input`<sup>Optional</sup> <a name="metrics_enabled_input" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.metricsEnabledInput"></a>

```python
metrics_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `traces_enabled_input`<sup>Optional</sup> <a name="traces_enabled_input" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.tracesEnabledInput"></a>

```python
traces_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `feedback_enabled`<sup>Required</sup> <a name="feedback_enabled" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.feedbackEnabled"></a>

```python
feedback_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `logging_enabled`<sup>Required</sup> <a name="logging_enabled" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.loggingEnabled"></a>

```python
logging_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `metrics_enabled`<sup>Required</sup> <a name="metrics_enabled" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.metricsEnabled"></a>

```python
metrics_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `traces_enabled`<sup>Required</sup> <a name="traces_enabled" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.tracesEnabled"></a>

```python
traces_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSettingOutputReference.property.internalValue"></a>

```python
internal_value: GeminiGibqObservabilitySettingConversationalAnalyticsSetting
```

- *Type:* <a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingConversationalAnalyticsSetting">GeminiGibqObservabilitySettingConversationalAnalyticsSetting</a>

---


### GeminiGibqObservabilitySettingTimeoutsOutputReference <a name="GeminiGibqObservabilitySettingTimeoutsOutputReference" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import gemini_gibq_observability_setting

geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeouts">GeminiGibqObservabilitySettingTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GeminiGibqObservabilitySettingTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.geminiGibqObservabilitySetting.GeminiGibqObservabilitySettingTimeouts">GeminiGibqObservabilitySettingTimeouts</a>

---



