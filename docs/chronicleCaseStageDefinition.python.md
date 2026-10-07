# `chronicleCaseStageDefinition` Submodule <a name="`chronicleCaseStageDefinition` Submodule" id="@cdktn/provider-google.chronicleCaseStageDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChronicleCaseStageDefinition <a name="ChronicleCaseStageDefinition" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_case_stage_definition google_chronicle_case_stage_definition}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.Initializer"></a>

```python
from cdktn_provider_google import chronicle_case_stage_definition

chronicleCaseStageDefinition.ChronicleCaseStageDefinition(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  display_name: str,
  instance: str,
  location: str,
  order: typing.Union[int, float],
  deletion_policy: str = None,
  id: str = None,
  project: str = None,
  timeouts: ChronicleCaseStageDefinitionTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | The display name of the stage. |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.Initializer.parameter.instance">instance</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.Initializer.parameter.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.Initializer.parameter.order">order</a></code> | <code>typing.Union[int, float]</code> | Defines the case stage order in the lifetime of a case. |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_case_stage_definition#id ChronicleCaseStageDefinition#id}. |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_case_stage_definition#project ChronicleCaseStageDefinition#project}. |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeouts">ChronicleCaseStageDefinitionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.Initializer.parameter.displayName"></a>

- *Type:* str

The display name of the stage.

The display name must be unique within the instance. The display name must not contain special characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_case_stage_definition#display_name ChronicleCaseStageDefinition#display_name}

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.Initializer.parameter.instance"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_case_stage_definition#instance ChronicleCaseStageDefinition#instance}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.Initializer.parameter.location"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_case_stage_definition#location ChronicleCaseStageDefinition#location}

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.Initializer.parameter.order"></a>

- *Type:* typing.Union[int, float]

Defines the case stage order in the lifetime of a case.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_case_stage_definition#order ChronicleCaseStageDefinition#order}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_case_stage_definition#deletion_policy ChronicleCaseStageDefinition#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_case_stage_definition#id ChronicleCaseStageDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_case_stage_definition#project ChronicleCaseStageDefinition#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeouts">ChronicleCaseStageDefinitionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_case_stage_definition#timeouts ChronicleCaseStageDefinition#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_case_stage_definition#create ChronicleCaseStageDefinition#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_case_stage_definition#delete ChronicleCaseStageDefinition#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_case_stage_definition#update ChronicleCaseStageDefinition#update}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ChronicleCaseStageDefinition resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.isConstruct"></a>

```python
from cdktn_provider_google import chronicle_case_stage_definition

chronicleCaseStageDefinition.ChronicleCaseStageDefinition.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.isTerraformElement"></a>

```python
from cdktn_provider_google import chronicle_case_stage_definition

chronicleCaseStageDefinition.ChronicleCaseStageDefinition.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.isTerraformResource"></a>

```python
from cdktn_provider_google import chronicle_case_stage_definition

chronicleCaseStageDefinition.ChronicleCaseStageDefinition.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.generateConfigForImport"></a>

```python
from cdktn_provider_google import chronicle_case_stage_definition

chronicleCaseStageDefinition.ChronicleCaseStageDefinition.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ChronicleCaseStageDefinition resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ChronicleCaseStageDefinition to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ChronicleCaseStageDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_case_stage_definition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ChronicleCaseStageDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.caseStageDefinitionId">case_stage_definition_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference">ChronicleCaseStageDefinitionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.instanceInput">instance_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.orderInput">order_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeouts">ChronicleCaseStageDefinitionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.instance">instance</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.order">order</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `case_stage_definition_id`<sup>Required</sup> <a name="case_stage_definition_id" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.caseStageDefinitionId"></a>

```python
case_stage_definition_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.timeouts"></a>

```python
timeouts: ChronicleCaseStageDefinitionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference">ChronicleCaseStageDefinitionTimeoutsOutputReference</a>

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instance_input`<sup>Optional</sup> <a name="instance_input" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.instanceInput"></a>

```python
instance_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `order_input`<sup>Optional</sup> <a name="order_input" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.orderInput"></a>

```python
order_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | ChronicleCaseStageDefinitionTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeouts">ChronicleCaseStageDefinitionTimeouts</a>

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.instance"></a>

```python
instance: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.order"></a>

```python
order: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinition.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ChronicleCaseStageDefinitionConfig <a name="ChronicleCaseStageDefinitionConfig" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionConfig.Initializer"></a>

```python
from cdktn_provider_google import chronicle_case_stage_definition

chronicleCaseStageDefinition.ChronicleCaseStageDefinitionConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  display_name: str,
  instance: str,
  location: str,
  order: typing.Union[int, float],
  deletion_policy: str = None,
  id: str = None,
  project: str = None,
  timeouts: ChronicleCaseStageDefinitionTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionConfig.property.displayName">display_name</a></code> | <code>str</code> | The display name of the stage. |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionConfig.property.instance">instance</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionConfig.property.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionConfig.property.order">order</a></code> | <code>typing.Union[int, float]</code> | Defines the case stage order in the lifetime of a case. |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_case_stage_definition#id ChronicleCaseStageDefinition#id}. |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_case_stage_definition#project ChronicleCaseStageDefinition#project}. |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeouts">ChronicleCaseStageDefinitionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The display name of the stage.

The display name must be unique within the instance. The display name must not contain special characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_case_stage_definition#display_name ChronicleCaseStageDefinition#display_name}

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionConfig.property.instance"></a>

```python
instance: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_case_stage_definition#instance ChronicleCaseStageDefinition#instance}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_case_stage_definition#location ChronicleCaseStageDefinition#location}

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionConfig.property.order"></a>

```python
order: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Defines the case stage order in the lifetime of a case.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_case_stage_definition#order ChronicleCaseStageDefinition#order}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_case_stage_definition#deletion_policy ChronicleCaseStageDefinition#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_case_stage_definition#id ChronicleCaseStageDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_case_stage_definition#project ChronicleCaseStageDefinition#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionConfig.property.timeouts"></a>

```python
timeouts: ChronicleCaseStageDefinitionTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeouts">ChronicleCaseStageDefinitionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_case_stage_definition#timeouts ChronicleCaseStageDefinition#timeouts}

---

### ChronicleCaseStageDefinitionTimeouts <a name="ChronicleCaseStageDefinitionTimeouts" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeouts.Initializer"></a>

```python
from cdktn_provider_google import chronicle_case_stage_definition

chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_case_stage_definition#create ChronicleCaseStageDefinition#create}. |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_case_stage_definition#delete ChronicleCaseStageDefinition#delete}. |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_case_stage_definition#update ChronicleCaseStageDefinition#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_case_stage_definition#create ChronicleCaseStageDefinition#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_case_stage_definition#delete ChronicleCaseStageDefinition#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_case_stage_definition#update ChronicleCaseStageDefinition#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ChronicleCaseStageDefinitionTimeoutsOutputReference <a name="ChronicleCaseStageDefinitionTimeoutsOutputReference" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import chronicle_case_stage_definition

chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeouts">ChronicleCaseStageDefinitionTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ChronicleCaseStageDefinitionTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.chronicleCaseStageDefinition.ChronicleCaseStageDefinitionTimeouts">ChronicleCaseStageDefinitionTimeouts</a>

---



