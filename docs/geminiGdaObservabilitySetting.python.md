# `geminiGdaObservabilitySetting` Submodule <a name="`geminiGdaObservabilitySetting` Submodule" id="@cdktn/provider-google.geminiGdaObservabilitySetting"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GeminiGdaObservabilitySetting <a name="GeminiGdaObservabilitySetting" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gda_observability_setting google_gemini_gda_observability_setting}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.Initializer"></a>

```python
from cdktn_provider_google import gemini_gda_observability_setting

geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  gda_observability_setting_id: str,
  location: str,
  conversational_analytics_setting: GeminiGdaObservabilitySettingConversationalAnalyticsSetting = None,
  deletion_policy: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: GeminiGdaObservabilitySettingTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.Initializer.parameter.gdaObservabilitySettingId">gda_observability_setting_id</a></code> | <code>str</code> | Id of the Gda Observability Setting. |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.Initializer.parameter.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.Initializer.parameter.conversationalAnalyticsSetting">conversational_analytics_setting</a></code> | <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingConversationalAnalyticsSetting">GeminiGdaObservabilitySettingConversationalAnalyticsSetting</a></code> | conversational_analytics_setting block. |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gda_observability_setting#id GeminiGdaObservabilitySetting#id}. |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels as key value pairs. |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gda_observability_setting#project GeminiGdaObservabilitySetting#project}. |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingTimeouts">GeminiGdaObservabilitySettingTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `gda_observability_setting_id`<sup>Required</sup> <a name="gda_observability_setting_id" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.Initializer.parameter.gdaObservabilitySettingId"></a>

- *Type:* str

Id of the Gda Observability Setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gda_observability_setting#gda_observability_setting_id GeminiGdaObservabilitySetting#gda_observability_setting_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.Initializer.parameter.location"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gda_observability_setting#location GeminiGdaObservabilitySetting#location}

---

##### `conversational_analytics_setting`<sup>Optional</sup> <a name="conversational_analytics_setting" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.Initializer.parameter.conversationalAnalyticsSetting"></a>

- *Type:* <a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingConversationalAnalyticsSetting">GeminiGdaObservabilitySettingConversationalAnalyticsSetting</a>

conversational_analytics_setting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gda_observability_setting#conversational_analytics_setting GeminiGdaObservabilitySetting#conversational_analytics_setting}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gda_observability_setting#deletion_policy GeminiGdaObservabilitySetting#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gda_observability_setting#id GeminiGdaObservabilitySetting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gda_observability_setting#labels GeminiGdaObservabilitySetting#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gda_observability_setting#project GeminiGdaObservabilitySetting#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingTimeouts">GeminiGdaObservabilitySettingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gda_observability_setting#timeouts GeminiGdaObservabilitySetting#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.putConversationalAnalyticsSetting">put_conversational_analytics_setting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.resetConversationalAnalyticsSetting">reset_conversational_analytics_setting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_conversational_analytics_setting` <a name="put_conversational_analytics_setting" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.putConversationalAnalyticsSetting"></a>

```python
def put_conversational_analytics_setting(
  feedback_enabled: bool | IResolvable = None,
  logging_enabled: bool | IResolvable = None,
  metrics_enabled: bool | IResolvable = None,
  traces_enabled: bool | IResolvable = None
) -> None
```

###### `feedback_enabled`<sup>Optional</sup> <a name="feedback_enabled" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.putConversationalAnalyticsSetting.parameter.feedbackEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether to enable feedback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gda_observability_setting#feedback_enabled GeminiGdaObservabilitySetting#feedback_enabled}

---

###### `logging_enabled`<sup>Optional</sup> <a name="logging_enabled" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.putConversationalAnalyticsSetting.parameter.loggingEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether to enable logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gda_observability_setting#logging_enabled GeminiGdaObservabilitySetting#logging_enabled}

---

###### `metrics_enabled`<sup>Optional</sup> <a name="metrics_enabled" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.putConversationalAnalyticsSetting.parameter.metricsEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether to enable metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gda_observability_setting#metrics_enabled GeminiGdaObservabilitySetting#metrics_enabled}

---

###### `traces_enabled`<sup>Optional</sup> <a name="traces_enabled" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.putConversationalAnalyticsSetting.parameter.tracesEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether to enable traces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gda_observability_setting#traces_enabled GeminiGdaObservabilitySetting#traces_enabled}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gda_observability_setting#create GeminiGdaObservabilitySetting#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gda_observability_setting#delete GeminiGdaObservabilitySetting#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gda_observability_setting#update GeminiGdaObservabilitySetting#update}.

---

##### `reset_conversational_analytics_setting` <a name="reset_conversational_analytics_setting" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.resetConversationalAnalyticsSetting"></a>

```python
def reset_conversational_analytics_setting() -> None
```

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GeminiGdaObservabilitySetting resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.isConstruct"></a>

```python
from cdktn_provider_google import gemini_gda_observability_setting

geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.isTerraformElement"></a>

```python
from cdktn_provider_google import gemini_gda_observability_setting

geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.isTerraformResource"></a>

```python
from cdktn_provider_google import gemini_gda_observability_setting

geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.generateConfigForImport"></a>

```python
from cdktn_provider_google import gemini_gda_observability_setting

geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GeminiGdaObservabilitySetting resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GeminiGdaObservabilitySetting to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GeminiGdaObservabilitySetting that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gda_observability_setting#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GeminiGdaObservabilitySetting to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.property.conversationalAnalyticsSetting">conversational_analytics_setting</a></code> | <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference">GeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.property.effectiveLabels">effective_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.property.terraformLabels">terraform_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingTimeoutsOutputReference">GeminiGdaObservabilitySettingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.property.conversationalAnalyticsSettingInput">conversational_analytics_setting_input</a></code> | <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingConversationalAnalyticsSetting">GeminiGdaObservabilitySettingConversationalAnalyticsSetting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.property.gdaObservabilitySettingIdInput">gda_observability_setting_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingTimeouts">GeminiGdaObservabilitySettingTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.property.gdaObservabilitySettingId">gda_observability_setting_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `conversational_analytics_setting`<sup>Required</sup> <a name="conversational_analytics_setting" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.property.conversationalAnalyticsSetting"></a>

```python
conversational_analytics_setting: GeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference">GeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.property.timeouts"></a>

```python
timeouts: GeminiGdaObservabilitySettingTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingTimeoutsOutputReference">GeminiGdaObservabilitySettingTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `conversational_analytics_setting_input`<sup>Optional</sup> <a name="conversational_analytics_setting_input" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.property.conversationalAnalyticsSettingInput"></a>

```python
conversational_analytics_setting_input: GeminiGdaObservabilitySettingConversationalAnalyticsSetting
```

- *Type:* <a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingConversationalAnalyticsSetting">GeminiGdaObservabilitySettingConversationalAnalyticsSetting</a>

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `gda_observability_setting_id_input`<sup>Optional</sup> <a name="gda_observability_setting_id_input" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.property.gdaObservabilitySettingIdInput"></a>

```python
gda_observability_setting_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GeminiGdaObservabilitySettingTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingTimeouts">GeminiGdaObservabilitySettingTimeouts</a>

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `gda_observability_setting_id`<sup>Required</sup> <a name="gda_observability_setting_id" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.property.gdaObservabilitySettingId"></a>

```python
gda_observability_setting_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySetting.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GeminiGdaObservabilitySettingConfig <a name="GeminiGdaObservabilitySettingConfig" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingConfig.Initializer"></a>

```python
from cdktn_provider_google import gemini_gda_observability_setting

geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  gda_observability_setting_id: str,
  location: str,
  conversational_analytics_setting: GeminiGdaObservabilitySettingConversationalAnalyticsSetting = None,
  deletion_policy: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: GeminiGdaObservabilitySettingTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingConfig.property.gdaObservabilitySettingId">gda_observability_setting_id</a></code> | <code>str</code> | Id of the Gda Observability Setting. |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingConfig.property.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingConfig.property.conversationalAnalyticsSetting">conversational_analytics_setting</a></code> | <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingConversationalAnalyticsSetting">GeminiGdaObservabilitySettingConversationalAnalyticsSetting</a></code> | conversational_analytics_setting block. |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gda_observability_setting#id GeminiGdaObservabilitySetting#id}. |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels as key value pairs. |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gda_observability_setting#project GeminiGdaObservabilitySetting#project}. |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingTimeouts">GeminiGdaObservabilitySettingTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `gda_observability_setting_id`<sup>Required</sup> <a name="gda_observability_setting_id" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingConfig.property.gdaObservabilitySettingId"></a>

```python
gda_observability_setting_id: str
```

- *Type:* str

Id of the Gda Observability Setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gda_observability_setting#gda_observability_setting_id GeminiGdaObservabilitySetting#gda_observability_setting_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gda_observability_setting#location GeminiGdaObservabilitySetting#location}

---

##### `conversational_analytics_setting`<sup>Optional</sup> <a name="conversational_analytics_setting" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingConfig.property.conversationalAnalyticsSetting"></a>

```python
conversational_analytics_setting: GeminiGdaObservabilitySettingConversationalAnalyticsSetting
```

- *Type:* <a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingConversationalAnalyticsSetting">GeminiGdaObservabilitySettingConversationalAnalyticsSetting</a>

conversational_analytics_setting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gda_observability_setting#conversational_analytics_setting GeminiGdaObservabilitySetting#conversational_analytics_setting}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gda_observability_setting#deletion_policy GeminiGdaObservabilitySetting#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gda_observability_setting#id GeminiGdaObservabilitySetting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gda_observability_setting#labels GeminiGdaObservabilitySetting#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gda_observability_setting#project GeminiGdaObservabilitySetting#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingConfig.property.timeouts"></a>

```python
timeouts: GeminiGdaObservabilitySettingTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingTimeouts">GeminiGdaObservabilitySettingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gda_observability_setting#timeouts GeminiGdaObservabilitySetting#timeouts}

---

### GeminiGdaObservabilitySettingConversationalAnalyticsSetting <a name="GeminiGdaObservabilitySettingConversationalAnalyticsSetting" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingConversationalAnalyticsSetting"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingConversationalAnalyticsSetting.Initializer"></a>

```python
from cdktn_provider_google import gemini_gda_observability_setting

geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingConversationalAnalyticsSetting(
  feedback_enabled: bool | IResolvable = None,
  logging_enabled: bool | IResolvable = None,
  metrics_enabled: bool | IResolvable = None,
  traces_enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingConversationalAnalyticsSetting.property.feedbackEnabled">feedback_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to enable feedback. |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingConversationalAnalyticsSetting.property.loggingEnabled">logging_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to enable logging. |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingConversationalAnalyticsSetting.property.metricsEnabled">metrics_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to enable metrics. |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingConversationalAnalyticsSetting.property.tracesEnabled">traces_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to enable traces. |

---

##### `feedback_enabled`<sup>Optional</sup> <a name="feedback_enabled" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingConversationalAnalyticsSetting.property.feedbackEnabled"></a>

```python
feedback_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether to enable feedback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gda_observability_setting#feedback_enabled GeminiGdaObservabilitySetting#feedback_enabled}

---

##### `logging_enabled`<sup>Optional</sup> <a name="logging_enabled" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingConversationalAnalyticsSetting.property.loggingEnabled"></a>

```python
logging_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether to enable logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gda_observability_setting#logging_enabled GeminiGdaObservabilitySetting#logging_enabled}

---

##### `metrics_enabled`<sup>Optional</sup> <a name="metrics_enabled" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingConversationalAnalyticsSetting.property.metricsEnabled"></a>

```python
metrics_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether to enable metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gda_observability_setting#metrics_enabled GeminiGdaObservabilitySetting#metrics_enabled}

---

##### `traces_enabled`<sup>Optional</sup> <a name="traces_enabled" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingConversationalAnalyticsSetting.property.tracesEnabled"></a>

```python
traces_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether to enable traces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gda_observability_setting#traces_enabled GeminiGdaObservabilitySetting#traces_enabled}

---

### GeminiGdaObservabilitySettingTimeouts <a name="GeminiGdaObservabilitySettingTimeouts" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingTimeouts.Initializer"></a>

```python
from cdktn_provider_google import gemini_gda_observability_setting

geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gda_observability_setting#create GeminiGdaObservabilitySetting#create}. |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gda_observability_setting#delete GeminiGdaObservabilitySetting#delete}. |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gda_observability_setting#update GeminiGdaObservabilitySetting#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gda_observability_setting#create GeminiGdaObservabilitySetting#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gda_observability_setting#delete GeminiGdaObservabilitySetting#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gda_observability_setting#update GeminiGdaObservabilitySetting#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference <a name="GeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.Initializer"></a>

```python
from cdktn_provider_google import gemini_gda_observability_setting

geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.resetFeedbackEnabled">reset_feedback_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.resetLoggingEnabled">reset_logging_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.resetMetricsEnabled">reset_metrics_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.resetTracesEnabled">reset_traces_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_feedback_enabled` <a name="reset_feedback_enabled" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.resetFeedbackEnabled"></a>

```python
def reset_feedback_enabled() -> None
```

##### `reset_logging_enabled` <a name="reset_logging_enabled" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.resetLoggingEnabled"></a>

```python
def reset_logging_enabled() -> None
```

##### `reset_metrics_enabled` <a name="reset_metrics_enabled" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.resetMetricsEnabled"></a>

```python
def reset_metrics_enabled() -> None
```

##### `reset_traces_enabled` <a name="reset_traces_enabled" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.resetTracesEnabled"></a>

```python
def reset_traces_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.property.feedbackEnabledInput">feedback_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.property.loggingEnabledInput">logging_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.property.metricsEnabledInput">metrics_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.property.tracesEnabledInput">traces_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.property.feedbackEnabled">feedback_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.property.loggingEnabled">logging_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.property.metricsEnabled">metrics_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.property.tracesEnabled">traces_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingConversationalAnalyticsSetting">GeminiGdaObservabilitySettingConversationalAnalyticsSetting</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `feedback_enabled_input`<sup>Optional</sup> <a name="feedback_enabled_input" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.property.feedbackEnabledInput"></a>

```python
feedback_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `logging_enabled_input`<sup>Optional</sup> <a name="logging_enabled_input" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.property.loggingEnabledInput"></a>

```python
logging_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `metrics_enabled_input`<sup>Optional</sup> <a name="metrics_enabled_input" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.property.metricsEnabledInput"></a>

```python
metrics_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `traces_enabled_input`<sup>Optional</sup> <a name="traces_enabled_input" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.property.tracesEnabledInput"></a>

```python
traces_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `feedback_enabled`<sup>Required</sup> <a name="feedback_enabled" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.property.feedbackEnabled"></a>

```python
feedback_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `logging_enabled`<sup>Required</sup> <a name="logging_enabled" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.property.loggingEnabled"></a>

```python
logging_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `metrics_enabled`<sup>Required</sup> <a name="metrics_enabled" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.property.metricsEnabled"></a>

```python
metrics_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `traces_enabled`<sup>Required</sup> <a name="traces_enabled" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.property.tracesEnabled"></a>

```python
traces_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingConversationalAnalyticsSettingOutputReference.property.internalValue"></a>

```python
internal_value: GeminiGdaObservabilitySettingConversationalAnalyticsSetting
```

- *Type:* <a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingConversationalAnalyticsSetting">GeminiGdaObservabilitySettingConversationalAnalyticsSetting</a>

---


### GeminiGdaObservabilitySettingTimeoutsOutputReference <a name="GeminiGdaObservabilitySettingTimeoutsOutputReference" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import gemini_gda_observability_setting

geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingTimeouts">GeminiGdaObservabilitySettingTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GeminiGdaObservabilitySettingTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.geminiGdaObservabilitySetting.GeminiGdaObservabilitySettingTimeouts">GeminiGdaObservabilitySettingTimeouts</a>

---



