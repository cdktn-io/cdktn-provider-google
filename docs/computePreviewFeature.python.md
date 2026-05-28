# `computePreviewFeature` Submodule <a name="`computePreviewFeature` Submodule" id="@cdktn/provider-google.computePreviewFeature"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputePreviewFeature <a name="ComputePreviewFeature" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_preview_feature google_compute_preview_feature}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.Initializer"></a>

```python
from cdktn_provider_google import compute_preview_feature

computePreviewFeature.ComputePreviewFeature(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  activation_status: str,
  name: str,
  id: str = None,
  project: str = None,
  rollout_operation: ComputePreviewFeatureRolloutOperation = None,
  timeouts: ComputePreviewFeatureTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.Initializer.parameter.activationStatus">activation_status</a></code> | <code>str</code> | The activation status of the preview feature. Possible values: ["ENABLED", "ACTIVATION_STATE_UNSPECIFIED"]. |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the preview feature. |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_preview_feature#id ComputePreviewFeature#id}. |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_preview_feature#project ComputePreviewFeature#project}. |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.Initializer.parameter.rolloutOperation">rollout_operation</a></code> | <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperation">ComputePreviewFeatureRolloutOperation</a></code> | rollout_operation block. |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeouts">ComputePreviewFeatureTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `activation_status`<sup>Required</sup> <a name="activation_status" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.Initializer.parameter.activationStatus"></a>

- *Type:* str

The activation status of the preview feature. Possible values: ["ENABLED", "ACTIVATION_STATE_UNSPECIFIED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_preview_feature#activation_status ComputePreviewFeature#activation_status}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.Initializer.parameter.name"></a>

- *Type:* str

The name of the preview feature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_preview_feature#name ComputePreviewFeature#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_preview_feature#id ComputePreviewFeature#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_preview_feature#project ComputePreviewFeature#project}.

---

##### `rollout_operation`<sup>Optional</sup> <a name="rollout_operation" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.Initializer.parameter.rolloutOperation"></a>

- *Type:* <a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperation">ComputePreviewFeatureRolloutOperation</a>

rollout_operation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_preview_feature#rollout_operation ComputePreviewFeature#rollout_operation}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeouts">ComputePreviewFeatureTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_preview_feature#timeouts ComputePreviewFeature#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.putRolloutOperation">put_rollout_operation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.resetRolloutOperation">reset_rollout_operation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_rollout_operation` <a name="put_rollout_operation" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.putRolloutOperation"></a>

```python
def put_rollout_operation(
  rollout_input: ComputePreviewFeatureRolloutOperationRolloutInput = None
) -> None
```

###### `rollout_input`<sup>Optional</sup> <a name="rollout_input" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.putRolloutOperation.parameter.rolloutInput"></a>

- *Type:* <a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInput">ComputePreviewFeatureRolloutOperationRolloutInput</a>

rollout_input block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_preview_feature#rollout_input ComputePreviewFeature#rollout_input}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_preview_feature#create ComputePreviewFeature#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_preview_feature#delete ComputePreviewFeature#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_preview_feature#update ComputePreviewFeature#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_rollout_operation` <a name="reset_rollout_operation" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.resetRolloutOperation"></a>

```python
def reset_rollout_operation() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ComputePreviewFeature resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.isConstruct"></a>

```python
from cdktn_provider_google import compute_preview_feature

computePreviewFeature.ComputePreviewFeature.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.isTerraformElement"></a>

```python
from cdktn_provider_google import compute_preview_feature

computePreviewFeature.ComputePreviewFeature.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.isTerraformResource"></a>

```python
from cdktn_provider_google import compute_preview_feature

computePreviewFeature.ComputePreviewFeature.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.generateConfigForImport"></a>

```python
from cdktn_provider_google import compute_preview_feature

computePreviewFeature.ComputePreviewFeature.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ComputePreviewFeature resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ComputePreviewFeature to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ComputePreviewFeature that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_preview_feature#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ComputePreviewFeature to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.property.rolloutOperation">rollout_operation</a></code> | <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationOutputReference">ComputePreviewFeatureRolloutOperationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference">ComputePreviewFeatureTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.property.activationStatusInput">activation_status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.property.rolloutOperationInput">rollout_operation_input</a></code> | <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperation">ComputePreviewFeatureRolloutOperation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeouts">ComputePreviewFeatureTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.property.activationStatus">activation_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `rollout_operation`<sup>Required</sup> <a name="rollout_operation" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.property.rolloutOperation"></a>

```python
rollout_operation: ComputePreviewFeatureRolloutOperationOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationOutputReference">ComputePreviewFeatureRolloutOperationOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.property.timeouts"></a>

```python
timeouts: ComputePreviewFeatureTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference">ComputePreviewFeatureTimeoutsOutputReference</a>

---

##### `activation_status_input`<sup>Optional</sup> <a name="activation_status_input" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.property.activationStatusInput"></a>

```python
activation_status_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `rollout_operation_input`<sup>Optional</sup> <a name="rollout_operation_input" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.property.rolloutOperationInput"></a>

```python
rollout_operation_input: ComputePreviewFeatureRolloutOperation
```

- *Type:* <a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperation">ComputePreviewFeatureRolloutOperation</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | ComputePreviewFeatureTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeouts">ComputePreviewFeatureTimeouts</a>

---

##### `activation_status`<sup>Required</sup> <a name="activation_status" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.property.activationStatus"></a>

```python
activation_status: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeature.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ComputePreviewFeatureConfig <a name="ComputePreviewFeatureConfig" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureConfig.Initializer"></a>

```python
from cdktn_provider_google import compute_preview_feature

computePreviewFeature.ComputePreviewFeatureConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  activation_status: str,
  name: str,
  id: str = None,
  project: str = None,
  rollout_operation: ComputePreviewFeatureRolloutOperation = None,
  timeouts: ComputePreviewFeatureTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureConfig.property.activationStatus">activation_status</a></code> | <code>str</code> | The activation status of the preview feature. Possible values: ["ENABLED", "ACTIVATION_STATE_UNSPECIFIED"]. |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureConfig.property.name">name</a></code> | <code>str</code> | The name of the preview feature. |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_preview_feature#id ComputePreviewFeature#id}. |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_preview_feature#project ComputePreviewFeature#project}. |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureConfig.property.rolloutOperation">rollout_operation</a></code> | <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperation">ComputePreviewFeatureRolloutOperation</a></code> | rollout_operation block. |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeouts">ComputePreviewFeatureTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `activation_status`<sup>Required</sup> <a name="activation_status" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureConfig.property.activationStatus"></a>

```python
activation_status: str
```

- *Type:* str

The activation status of the preview feature. Possible values: ["ENABLED", "ACTIVATION_STATE_UNSPECIFIED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_preview_feature#activation_status ComputePreviewFeature#activation_status}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the preview feature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_preview_feature#name ComputePreviewFeature#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_preview_feature#id ComputePreviewFeature#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_preview_feature#project ComputePreviewFeature#project}.

---

##### `rollout_operation`<sup>Optional</sup> <a name="rollout_operation" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureConfig.property.rolloutOperation"></a>

```python
rollout_operation: ComputePreviewFeatureRolloutOperation
```

- *Type:* <a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperation">ComputePreviewFeatureRolloutOperation</a>

rollout_operation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_preview_feature#rollout_operation ComputePreviewFeature#rollout_operation}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureConfig.property.timeouts"></a>

```python
timeouts: ComputePreviewFeatureTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeouts">ComputePreviewFeatureTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_preview_feature#timeouts ComputePreviewFeature#timeouts}

---

### ComputePreviewFeatureRolloutOperation <a name="ComputePreviewFeatureRolloutOperation" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperation.Initializer"></a>

```python
from cdktn_provider_google import compute_preview_feature

computePreviewFeature.ComputePreviewFeatureRolloutOperation(
  rollout_input: ComputePreviewFeatureRolloutOperationRolloutInput = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperation.property.rolloutInput">rollout_input</a></code> | <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInput">ComputePreviewFeatureRolloutOperationRolloutInput</a></code> | rollout_input block. |

---

##### `rollout_input`<sup>Optional</sup> <a name="rollout_input" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperation.property.rolloutInput"></a>

```python
rollout_input: ComputePreviewFeatureRolloutOperationRolloutInput
```

- *Type:* <a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInput">ComputePreviewFeatureRolloutOperationRolloutInput</a>

rollout_input block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_preview_feature#rollout_input ComputePreviewFeature#rollout_input}

---

### ComputePreviewFeatureRolloutOperationRolloutInput <a name="ComputePreviewFeatureRolloutOperationRolloutInput" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInput.Initializer"></a>

```python
from cdktn_provider_google import compute_preview_feature

computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInput(
  predefined_rollout_plan: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInput.property.predefinedRolloutPlan">predefined_rollout_plan</a></code> | <code>str</code> | Predefined rollout plans. Possible values: ["ROLLOUT_PLAN_FAST_ROLLOUT"]. |

---

##### `predefined_rollout_plan`<sup>Required</sup> <a name="predefined_rollout_plan" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInput.property.predefinedRolloutPlan"></a>

```python
predefined_rollout_plan: str
```

- *Type:* str

Predefined rollout plans. Possible values: ["ROLLOUT_PLAN_FAST_ROLLOUT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_preview_feature#predefined_rollout_plan ComputePreviewFeature#predefined_rollout_plan}

---

### ComputePreviewFeatureTimeouts <a name="ComputePreviewFeatureTimeouts" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeouts.Initializer"></a>

```python
from cdktn_provider_google import compute_preview_feature

computePreviewFeature.ComputePreviewFeatureTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_preview_feature#create ComputePreviewFeature#create}. |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_preview_feature#delete ComputePreviewFeature#delete}. |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_preview_feature#update ComputePreviewFeature#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_preview_feature#create ComputePreviewFeature#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_preview_feature#delete ComputePreviewFeature#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_preview_feature#update ComputePreviewFeature#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputePreviewFeatureRolloutOperationOutputReference <a name="ComputePreviewFeatureRolloutOperationOutputReference" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationOutputReference.Initializer"></a>

```python
from cdktn_provider_google import compute_preview_feature

computePreviewFeature.ComputePreviewFeatureRolloutOperationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationOutputReference.putRolloutInput">put_rollout_input</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationOutputReference.resetRolloutInput">reset_rollout_input</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_rollout_input` <a name="put_rollout_input" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationOutputReference.putRolloutInput"></a>

```python
def put_rollout_input(
  predefined_rollout_plan: str
) -> None
```

###### `predefined_rollout_plan`<sup>Required</sup> <a name="predefined_rollout_plan" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationOutputReference.putRolloutInput.parameter.predefinedRolloutPlan"></a>

- *Type:* str

Predefined rollout plans. Possible values: ["ROLLOUT_PLAN_FAST_ROLLOUT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_preview_feature#predefined_rollout_plan ComputePreviewFeature#predefined_rollout_plan}

---

##### `reset_rollout_input` <a name="reset_rollout_input" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationOutputReference.resetRolloutInput"></a>

```python
def reset_rollout_input() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationOutputReference.property.rolloutInput">rollout_input</a></code> | <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInputOutputReference">ComputePreviewFeatureRolloutOperationRolloutInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationOutputReference.property.rolloutInputInput">rollout_input_input</a></code> | <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInput">ComputePreviewFeatureRolloutOperationRolloutInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperation">ComputePreviewFeatureRolloutOperation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `rollout_input`<sup>Required</sup> <a name="rollout_input" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationOutputReference.property.rolloutInput"></a>

```python
rollout_input: ComputePreviewFeatureRolloutOperationRolloutInputOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInputOutputReference">ComputePreviewFeatureRolloutOperationRolloutInputOutputReference</a>

---

##### `rollout_input_input`<sup>Optional</sup> <a name="rollout_input_input" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationOutputReference.property.rolloutInputInput"></a>

```python
rollout_input_input: ComputePreviewFeatureRolloutOperationRolloutInput
```

- *Type:* <a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInput">ComputePreviewFeatureRolloutOperationRolloutInput</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationOutputReference.property.internalValue"></a>

```python
internal_value: ComputePreviewFeatureRolloutOperation
```

- *Type:* <a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperation">ComputePreviewFeatureRolloutOperation</a>

---


### ComputePreviewFeatureRolloutOperationRolloutInputOutputReference <a name="ComputePreviewFeatureRolloutOperationRolloutInputOutputReference" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInputOutputReference.Initializer"></a>

```python
from cdktn_provider_google import compute_preview_feature

computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInputOutputReference.property.predefinedRolloutPlanInput">predefined_rollout_plan_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInputOutputReference.property.predefinedRolloutPlan">predefined_rollout_plan</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInput">ComputePreviewFeatureRolloutOperationRolloutInput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `predefined_rollout_plan_input`<sup>Optional</sup> <a name="predefined_rollout_plan_input" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInputOutputReference.property.predefinedRolloutPlanInput"></a>

```python
predefined_rollout_plan_input: str
```

- *Type:* str

---

##### `predefined_rollout_plan`<sup>Required</sup> <a name="predefined_rollout_plan" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInputOutputReference.property.predefinedRolloutPlan"></a>

```python
predefined_rollout_plan: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInputOutputReference.property.internalValue"></a>

```python
internal_value: ComputePreviewFeatureRolloutOperationRolloutInput
```

- *Type:* <a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureRolloutOperationRolloutInput">ComputePreviewFeatureRolloutOperationRolloutInput</a>

---


### ComputePreviewFeatureTimeoutsOutputReference <a name="ComputePreviewFeatureTimeoutsOutputReference" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import compute_preview_feature

computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeouts">ComputePreviewFeatureTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ComputePreviewFeatureTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computePreviewFeature.ComputePreviewFeatureTimeouts">ComputePreviewFeatureTimeouts</a>

---



