# `dataformRepositoryIamBinding` Submodule <a name="`dataformRepositoryIamBinding` Submodule" id="@cdktn/provider-google.dataformRepositoryIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataformRepositoryIamBinding <a name="DataformRepositoryIamBinding" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataform_repository_iam_binding google_dataform_repository_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.Initializer"></a>

```python
from cdktn_provider_google import dataform_repository_iam_binding

dataformRepositoryIamBinding.DataformRepositoryIamBinding(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  members: typing.List[str],
  repository: str,
  role: str,
  condition: DataformRepositoryIamBindingCondition = None,
  id: str = None,
  project: str = None,
  region: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.Initializer.parameter.members">members</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataform_repository_iam_binding#members DataformRepositoryIamBinding#members}. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.Initializer.parameter.repository">repository</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataform_repository_iam_binding#repository DataformRepositoryIamBinding#repository}. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.Initializer.parameter.role">role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataform_repository_iam_binding#role DataformRepositoryIamBinding#role}. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.Initializer.parameter.condition">condition</a></code> | <code><a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBindingCondition">DataformRepositoryIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataform_repository_iam_binding#id DataformRepositoryIamBinding#id}. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataform_repository_iam_binding#project DataformRepositoryIamBinding#project}. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataform_repository_iam_binding#region DataformRepositoryIamBinding#region}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.Initializer.parameter.members"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataform_repository_iam_binding#members DataformRepositoryIamBinding#members}.

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.Initializer.parameter.repository"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataform_repository_iam_binding#repository DataformRepositoryIamBinding#repository}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.Initializer.parameter.role"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataform_repository_iam_binding#role DataformRepositoryIamBinding#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.Initializer.parameter.condition"></a>

- *Type:* <a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBindingCondition">DataformRepositoryIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataform_repository_iam_binding#condition DataformRepositoryIamBinding#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataform_repository_iam_binding#id DataformRepositoryIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataform_repository_iam_binding#project DataformRepositoryIamBinding#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataform_repository_iam_binding#region DataformRepositoryIamBinding#region}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.putCondition">put_condition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.resetCondition">reset_condition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.resetRegion">reset_region</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_condition` <a name="put_condition" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.putCondition"></a>

```python
def put_condition(
  expression: str,
  title: str,
  description: str = None
) -> None
```

###### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.putCondition.parameter.expression"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataform_repository_iam_binding#expression DataformRepositoryIamBinding#expression}.

---

###### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.putCondition.parameter.title"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataform_repository_iam_binding#title DataformRepositoryIamBinding#title}.

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.putCondition.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataform_repository_iam_binding#description DataformRepositoryIamBinding#description}.

---

##### `reset_condition` <a name="reset_condition" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.resetCondition"></a>

```python
def reset_condition() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.resetRegion"></a>

```python
def reset_region() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataformRepositoryIamBinding resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.isConstruct"></a>

```python
from cdktn_provider_google import dataform_repository_iam_binding

dataformRepositoryIamBinding.DataformRepositoryIamBinding.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.isTerraformElement"></a>

```python
from cdktn_provider_google import dataform_repository_iam_binding

dataformRepositoryIamBinding.DataformRepositoryIamBinding.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.isTerraformResource"></a>

```python
from cdktn_provider_google import dataform_repository_iam_binding

dataformRepositoryIamBinding.DataformRepositoryIamBinding.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.generateConfigForImport"></a>

```python
from cdktn_provider_google import dataform_repository_iam_binding

dataformRepositoryIamBinding.DataformRepositoryIamBinding.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataformRepositoryIamBinding resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataformRepositoryIamBinding to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataformRepositoryIamBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataform_repository_iam_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataformRepositoryIamBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBindingConditionOutputReference">DataformRepositoryIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.property.conditionInput">condition_input</a></code> | <code><a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBindingCondition">DataformRepositoryIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.property.membersInput">members_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.property.repositoryInput">repository_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.property.roleInput">role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.property.members">members</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.property.repository">repository</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.property.role">role</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.property.condition"></a>

```python
condition: DataformRepositoryIamBindingConditionOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBindingConditionOutputReference">DataformRepositoryIamBindingConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.property.conditionInput"></a>

```python
condition_input: DataformRepositoryIamBindingCondition
```

- *Type:* <a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBindingCondition">DataformRepositoryIamBindingCondition</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `members_input`<sup>Optional</sup> <a name="members_input" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.property.membersInput"></a>

```python
members_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `repository_input`<sup>Optional</sup> <a name="repository_input" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.property.repositoryInput"></a>

```python
repository_input: str
```

- *Type:* str

---

##### `role_input`<sup>Optional</sup> <a name="role_input" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.property.roleInput"></a>

```python
role_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.property.members"></a>

```python
members: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.property.repository"></a>

```python
repository: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.property.role"></a>

```python
role: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBinding.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataformRepositoryIamBindingCondition <a name="DataformRepositoryIamBindingCondition" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBindingCondition.Initializer"></a>

```python
from cdktn_provider_google import dataform_repository_iam_binding

dataformRepositoryIamBinding.DataformRepositoryIamBindingCondition(
  expression: str,
  title: str,
  description: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBindingCondition.property.expression">expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataform_repository_iam_binding#expression DataformRepositoryIamBinding#expression}. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBindingCondition.property.title">title</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataform_repository_iam_binding#title DataformRepositoryIamBinding#title}. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBindingCondition.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataform_repository_iam_binding#description DataformRepositoryIamBinding#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBindingCondition.property.expression"></a>

```python
expression: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataform_repository_iam_binding#expression DataformRepositoryIamBinding#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBindingCondition.property.title"></a>

```python
title: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataform_repository_iam_binding#title DataformRepositoryIamBinding#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBindingCondition.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataform_repository_iam_binding#description DataformRepositoryIamBinding#description}.

---

### DataformRepositoryIamBindingConfig <a name="DataformRepositoryIamBindingConfig" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBindingConfig.Initializer"></a>

```python
from cdktn_provider_google import dataform_repository_iam_binding

dataformRepositoryIamBinding.DataformRepositoryIamBindingConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  members: typing.List[str],
  repository: str,
  role: str,
  condition: DataformRepositoryIamBindingCondition = None,
  id: str = None,
  project: str = None,
  region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBindingConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBindingConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBindingConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBindingConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBindingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBindingConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBindingConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBindingConfig.property.members">members</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataform_repository_iam_binding#members DataformRepositoryIamBinding#members}. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBindingConfig.property.repository">repository</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataform_repository_iam_binding#repository DataformRepositoryIamBinding#repository}. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBindingConfig.property.role">role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataform_repository_iam_binding#role DataformRepositoryIamBinding#role}. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBindingConfig.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBindingCondition">DataformRepositoryIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBindingConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataform_repository_iam_binding#id DataformRepositoryIamBinding#id}. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBindingConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataform_repository_iam_binding#project DataformRepositoryIamBinding#project}. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBindingConfig.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataform_repository_iam_binding#region DataformRepositoryIamBinding#region}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBindingConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBindingConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBindingConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBindingConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBindingConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBindingConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBindingConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBindingConfig.property.members"></a>

```python
members: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataform_repository_iam_binding#members DataformRepositoryIamBinding#members}.

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBindingConfig.property.repository"></a>

```python
repository: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataform_repository_iam_binding#repository DataformRepositoryIamBinding#repository}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBindingConfig.property.role"></a>

```python
role: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataform_repository_iam_binding#role DataformRepositoryIamBinding#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBindingConfig.property.condition"></a>

```python
condition: DataformRepositoryIamBindingCondition
```

- *Type:* <a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBindingCondition">DataformRepositoryIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataform_repository_iam_binding#condition DataformRepositoryIamBinding#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBindingConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataform_repository_iam_binding#id DataformRepositoryIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBindingConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataform_repository_iam_binding#project DataformRepositoryIamBinding#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBindingConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dataform_repository_iam_binding#region DataformRepositoryIamBinding#region}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataformRepositoryIamBindingConditionOutputReference <a name="DataformRepositoryIamBindingConditionOutputReference" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBindingConditionOutputReference.Initializer"></a>

```python
from cdktn_provider_google import dataform_repository_iam_binding

dataformRepositoryIamBinding.DataformRepositoryIamBindingConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBindingConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBindingConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBindingConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBindingConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBindingConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBindingConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBindingConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBindingConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBindingConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBindingConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBindingConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBindingConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBindingConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBindingConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBindingConditionOutputReference.resetDescription">reset_description</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBindingConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBindingConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBindingConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBindingConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBindingConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBindingConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBindingConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBindingConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBindingConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBindingConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBindingConditionOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBindingConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBindingConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBindingConditionOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBindingConditionOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBindingConditionOutputReference.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBindingConditionOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBindingConditionOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBindingConditionOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBindingConditionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBindingCondition">DataformRepositoryIamBindingCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBindingConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBindingConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBindingConditionOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBindingConditionOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBindingConditionOutputReference.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBindingConditionOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBindingConditionOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBindingConditionOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBindingConditionOutputReference.property.internalValue"></a>

```python
internal_value: DataformRepositoryIamBindingCondition
```

- *Type:* <a href="#@cdktn/provider-google.dataformRepositoryIamBinding.DataformRepositoryIamBindingCondition">DataformRepositoryIamBindingCondition</a>

---



