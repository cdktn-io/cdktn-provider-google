# `geminiGdaObservabilitySettingBinding` Submodule <a name="`geminiGdaObservabilitySettingBinding` Submodule" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GeminiGdaObservabilitySettingBinding <a name="GeminiGdaObservabilitySettingBinding" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gda_observability_setting_binding google_gemini_gda_observability_setting_binding}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.Initializer"></a>

```python
from cdktn_provider_google import gemini_gda_observability_setting_binding

geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding(
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
  setting_binding_id: str,
  target: str,
  deletion_policy: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  location: str = None,
  product: str = None,
  project: str = None,
  timeouts: GeminiGdaObservabilitySettingBindingTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.Initializer.parameter.gdaObservabilitySettingId">gda_observability_setting_id</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.Initializer.parameter.settingBindingId">setting_binding_id</a></code> | <code>str</code> | Id of the setting binding. |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.Initializer.parameter.target">target</a></code> | <code>str</code> | Target of the binding. |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gda_observability_setting_binding#id GeminiGdaObservabilitySettingBinding#id}. |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels as key value pairs. |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.Initializer.parameter.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.Initializer.parameter.product">product</a></code> | <code>str</code> | Product type of the setting binding. Values include GEMINI_IN_LOOKER. See [product reference](https://cloud.google.com/gemini/docs/api/reference/rest/v1/projects.locations.gdaObservabilitySettings.settingBindings) for a complete list. |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gda_observability_setting_binding#project GeminiGdaObservabilitySettingBinding#project}. |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeouts">GeminiGdaObservabilitySettingBindingTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `gda_observability_setting_id`<sup>Required</sup> <a name="gda_observability_setting_id" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.Initializer.parameter.gdaObservabilitySettingId"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gda_observability_setting_binding#gda_observability_setting_id GeminiGdaObservabilitySettingBinding#gda_observability_setting_id}

---

##### `setting_binding_id`<sup>Required</sup> <a name="setting_binding_id" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.Initializer.parameter.settingBindingId"></a>

- *Type:* str

Id of the setting binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gda_observability_setting_binding#setting_binding_id GeminiGdaObservabilitySettingBinding#setting_binding_id}

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.Initializer.parameter.target"></a>

- *Type:* str

Target of the binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gda_observability_setting_binding#target GeminiGdaObservabilitySettingBinding#target}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gda_observability_setting_binding#deletion_policy GeminiGdaObservabilitySettingBinding#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gda_observability_setting_binding#id GeminiGdaObservabilitySettingBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gda_observability_setting_binding#labels GeminiGdaObservabilitySettingBinding#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.Initializer.parameter.location"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gda_observability_setting_binding#location GeminiGdaObservabilitySettingBinding#location}

---

##### `product`<sup>Optional</sup> <a name="product" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.Initializer.parameter.product"></a>

- *Type:* str

Product type of the setting binding. Values include GEMINI_IN_LOOKER. See [product reference](https://cloud.google.com/gemini/docs/api/reference/rest/v1/projects.locations.gdaObservabilitySettings.settingBindings) for a complete list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gda_observability_setting_binding#product GeminiGdaObservabilitySettingBinding#product}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gda_observability_setting_binding#project GeminiGdaObservabilitySettingBinding#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeouts">GeminiGdaObservabilitySettingBindingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gda_observability_setting_binding#timeouts GeminiGdaObservabilitySettingBinding#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.resetProduct">reset_product</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gda_observability_setting_binding#create GeminiGdaObservabilitySettingBinding#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gda_observability_setting_binding#delete GeminiGdaObservabilitySettingBinding#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gda_observability_setting_binding#update GeminiGdaObservabilitySettingBinding#update}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_product` <a name="reset_product" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.resetProduct"></a>

```python
def reset_product() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GeminiGdaObservabilitySettingBinding resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.isConstruct"></a>

```python
from cdktn_provider_google import gemini_gda_observability_setting_binding

geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.isTerraformElement"></a>

```python
from cdktn_provider_google import gemini_gda_observability_setting_binding

geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.isTerraformResource"></a>

```python
from cdktn_provider_google import gemini_gda_observability_setting_binding

geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.generateConfigForImport"></a>

```python
from cdktn_provider_google import gemini_gda_observability_setting_binding

geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GeminiGdaObservabilitySettingBinding resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GeminiGdaObservabilitySettingBinding to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GeminiGdaObservabilitySettingBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gda_observability_setting_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GeminiGdaObservabilitySettingBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.effectiveLabels">effective_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.terraformLabels">terraform_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference">GeminiGdaObservabilitySettingBindingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.gdaObservabilitySettingIdInput">gda_observability_setting_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.productInput">product_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.settingBindingIdInput">setting_binding_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.targetInput">target_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeouts">GeminiGdaObservabilitySettingBindingTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.gdaObservabilitySettingId">gda_observability_setting_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.product">product</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.settingBindingId">setting_binding_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.target">target</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.timeouts"></a>

```python
timeouts: GeminiGdaObservabilitySettingBindingTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference">GeminiGdaObservabilitySettingBindingTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `gda_observability_setting_id_input`<sup>Optional</sup> <a name="gda_observability_setting_id_input" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.gdaObservabilitySettingIdInput"></a>

```python
gda_observability_setting_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `product_input`<sup>Optional</sup> <a name="product_input" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.productInput"></a>

```python
product_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `setting_binding_id_input`<sup>Optional</sup> <a name="setting_binding_id_input" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.settingBindingIdInput"></a>

```python
setting_binding_id_input: str
```

- *Type:* str

---

##### `target_input`<sup>Optional</sup> <a name="target_input" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.targetInput"></a>

```python
target_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GeminiGdaObservabilitySettingBindingTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeouts">GeminiGdaObservabilitySettingBindingTimeouts</a>

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `gda_observability_setting_id`<sup>Required</sup> <a name="gda_observability_setting_id" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.gdaObservabilitySettingId"></a>

```python
gda_observability_setting_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `product`<sup>Required</sup> <a name="product" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.product"></a>

```python
product: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `setting_binding_id`<sup>Required</sup> <a name="setting_binding_id" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.settingBindingId"></a>

```python
setting_binding_id: str
```

- *Type:* str

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.target"></a>

```python
target: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBinding.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GeminiGdaObservabilitySettingBindingConfig <a name="GeminiGdaObservabilitySettingBindingConfig" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingConfig.Initializer"></a>

```python
from cdktn_provider_google import gemini_gda_observability_setting_binding

geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  gda_observability_setting_id: str,
  setting_binding_id: str,
  target: str,
  deletion_policy: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  location: str = None,
  product: str = None,
  project: str = None,
  timeouts: GeminiGdaObservabilitySettingBindingTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingConfig.property.gdaObservabilitySettingId">gda_observability_setting_id</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingConfig.property.settingBindingId">setting_binding_id</a></code> | <code>str</code> | Id of the setting binding. |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingConfig.property.target">target</a></code> | <code>str</code> | Target of the binding. |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gda_observability_setting_binding#id GeminiGdaObservabilitySettingBinding#id}. |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels as key value pairs. |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingConfig.property.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingConfig.property.product">product</a></code> | <code>str</code> | Product type of the setting binding. Values include GEMINI_IN_LOOKER. See [product reference](https://cloud.google.com/gemini/docs/api/reference/rest/v1/projects.locations.gdaObservabilitySettings.settingBindings) for a complete list. |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gda_observability_setting_binding#project GeminiGdaObservabilitySettingBinding#project}. |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeouts">GeminiGdaObservabilitySettingBindingTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `gda_observability_setting_id`<sup>Required</sup> <a name="gda_observability_setting_id" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingConfig.property.gdaObservabilitySettingId"></a>

```python
gda_observability_setting_id: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gda_observability_setting_binding#gda_observability_setting_id GeminiGdaObservabilitySettingBinding#gda_observability_setting_id}

---

##### `setting_binding_id`<sup>Required</sup> <a name="setting_binding_id" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingConfig.property.settingBindingId"></a>

```python
setting_binding_id: str
```

- *Type:* str

Id of the setting binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gda_observability_setting_binding#setting_binding_id GeminiGdaObservabilitySettingBinding#setting_binding_id}

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingConfig.property.target"></a>

```python
target: str
```

- *Type:* str

Target of the binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gda_observability_setting_binding#target GeminiGdaObservabilitySettingBinding#target}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gda_observability_setting_binding#deletion_policy GeminiGdaObservabilitySettingBinding#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gda_observability_setting_binding#id GeminiGdaObservabilitySettingBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gda_observability_setting_binding#labels GeminiGdaObservabilitySettingBinding#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gda_observability_setting_binding#location GeminiGdaObservabilitySettingBinding#location}

---

##### `product`<sup>Optional</sup> <a name="product" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingConfig.property.product"></a>

```python
product: str
```

- *Type:* str

Product type of the setting binding. Values include GEMINI_IN_LOOKER. See [product reference](https://cloud.google.com/gemini/docs/api/reference/rest/v1/projects.locations.gdaObservabilitySettings.settingBindings) for a complete list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gda_observability_setting_binding#product GeminiGdaObservabilitySettingBinding#product}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gda_observability_setting_binding#project GeminiGdaObservabilitySettingBinding#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingConfig.property.timeouts"></a>

```python
timeouts: GeminiGdaObservabilitySettingBindingTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeouts">GeminiGdaObservabilitySettingBindingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gda_observability_setting_binding#timeouts GeminiGdaObservabilitySettingBinding#timeouts}

---

### GeminiGdaObservabilitySettingBindingTimeouts <a name="GeminiGdaObservabilitySettingBindingTimeouts" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeouts.Initializer"></a>

```python
from cdktn_provider_google import gemini_gda_observability_setting_binding

geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gda_observability_setting_binding#create GeminiGdaObservabilitySettingBinding#create}. |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gda_observability_setting_binding#delete GeminiGdaObservabilitySettingBinding#delete}. |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gda_observability_setting_binding#update GeminiGdaObservabilitySettingBinding#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gda_observability_setting_binding#create GeminiGdaObservabilitySettingBinding#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gda_observability_setting_binding#delete GeminiGdaObservabilitySettingBinding#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/gemini_gda_observability_setting_binding#update GeminiGdaObservabilitySettingBinding#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GeminiGdaObservabilitySettingBindingTimeoutsOutputReference <a name="GeminiGdaObservabilitySettingBindingTimeoutsOutputReference" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import gemini_gda_observability_setting_binding

geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeouts">GeminiGdaObservabilitySettingBindingTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GeminiGdaObservabilitySettingBindingTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.geminiGdaObservabilitySettingBinding.GeminiGdaObservabilitySettingBindingTimeouts">GeminiGdaObservabilitySettingBindingTimeouts</a>

---



