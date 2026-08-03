# `computeRegionInstantSnapshotIamMember` Submodule <a name="`computeRegionInstantSnapshotIamMember` Submodule" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeRegionInstantSnapshotIamMember <a name="ComputeRegionInstantSnapshotIamMember" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_region_instant_snapshot_iam_member google_compute_region_instant_snapshot_iam_member}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.Initializer"></a>

```python
from cdktn_provider_google import compute_region_instant_snapshot_iam_member

computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  member: str,
  name: str,
  role: str,
  condition: ComputeRegionInstantSnapshotIamMemberCondition = None,
  id: str = None,
  project: str = None,
  region: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.Initializer.parameter.member">member</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_region_instant_snapshot_iam_member#member ComputeRegionInstantSnapshotIamMember#member}. |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_region_instant_snapshot_iam_member#name ComputeRegionInstantSnapshotIamMember#name}. |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.Initializer.parameter.role">role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_region_instant_snapshot_iam_member#role ComputeRegionInstantSnapshotIamMember#role}. |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.Initializer.parameter.condition">condition</a></code> | <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMemberCondition">ComputeRegionInstantSnapshotIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_region_instant_snapshot_iam_member#id ComputeRegionInstantSnapshotIamMember#id}. |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_region_instant_snapshot_iam_member#project ComputeRegionInstantSnapshotIamMember#project}. |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_region_instant_snapshot_iam_member#region ComputeRegionInstantSnapshotIamMember#region}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.Initializer.parameter.member"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_region_instant_snapshot_iam_member#member ComputeRegionInstantSnapshotIamMember#member}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_region_instant_snapshot_iam_member#name ComputeRegionInstantSnapshotIamMember#name}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.Initializer.parameter.role"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_region_instant_snapshot_iam_member#role ComputeRegionInstantSnapshotIamMember#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.Initializer.parameter.condition"></a>

- *Type:* <a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMemberCondition">ComputeRegionInstantSnapshotIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_region_instant_snapshot_iam_member#condition ComputeRegionInstantSnapshotIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_region_instant_snapshot_iam_member#id ComputeRegionInstantSnapshotIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_region_instant_snapshot_iam_member#project ComputeRegionInstantSnapshotIamMember#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_region_instant_snapshot_iam_member#region ComputeRegionInstantSnapshotIamMember#region}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.putCondition">put_condition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.resetCondition">reset_condition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.resetRegion">reset_region</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_condition` <a name="put_condition" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.putCondition"></a>

```python
def put_condition(
  expression: str,
  title: str,
  description: str = None
) -> None
```

###### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.putCondition.parameter.expression"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_region_instant_snapshot_iam_member#expression ComputeRegionInstantSnapshotIamMember#expression}.

---

###### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.putCondition.parameter.title"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_region_instant_snapshot_iam_member#title ComputeRegionInstantSnapshotIamMember#title}.

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.putCondition.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_region_instant_snapshot_iam_member#description ComputeRegionInstantSnapshotIamMember#description}.

---

##### `reset_condition` <a name="reset_condition" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.resetCondition"></a>

```python
def reset_condition() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.resetRegion"></a>

```python
def reset_region() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ComputeRegionInstantSnapshotIamMember resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.isConstruct"></a>

```python
from cdktn_provider_google import compute_region_instant_snapshot_iam_member

computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.isTerraformElement"></a>

```python
from cdktn_provider_google import compute_region_instant_snapshot_iam_member

computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.isTerraformResource"></a>

```python
from cdktn_provider_google import compute_region_instant_snapshot_iam_member

computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.generateConfigForImport"></a>

```python
from cdktn_provider_google import compute_region_instant_snapshot_iam_member

computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ComputeRegionInstantSnapshotIamMember resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ComputeRegionInstantSnapshotIamMember to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ComputeRegionInstantSnapshotIamMember that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_region_instant_snapshot_iam_member#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ComputeRegionInstantSnapshotIamMember to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMemberConditionOutputReference">ComputeRegionInstantSnapshotIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.property.conditionInput">condition_input</a></code> | <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMemberCondition">ComputeRegionInstantSnapshotIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.property.memberInput">member_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.property.roleInput">role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.property.member">member</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.property.role">role</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.property.condition"></a>

```python
condition: ComputeRegionInstantSnapshotIamMemberConditionOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMemberConditionOutputReference">ComputeRegionInstantSnapshotIamMemberConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.property.conditionInput"></a>

```python
condition_input: ComputeRegionInstantSnapshotIamMemberCondition
```

- *Type:* <a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMemberCondition">ComputeRegionInstantSnapshotIamMemberCondition</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `member_input`<sup>Optional</sup> <a name="member_input" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.property.memberInput"></a>

```python
member_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `role_input`<sup>Optional</sup> <a name="role_input" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.property.roleInput"></a>

```python
role_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.property.member"></a>

```python
member: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.property.role"></a>

```python
role: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMember.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeRegionInstantSnapshotIamMemberCondition <a name="ComputeRegionInstantSnapshotIamMemberCondition" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMemberCondition.Initializer"></a>

```python
from cdktn_provider_google import compute_region_instant_snapshot_iam_member

computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMemberCondition(
  expression: str,
  title: str,
  description: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMemberCondition.property.expression">expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_region_instant_snapshot_iam_member#expression ComputeRegionInstantSnapshotIamMember#expression}. |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMemberCondition.property.title">title</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_region_instant_snapshot_iam_member#title ComputeRegionInstantSnapshotIamMember#title}. |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMemberCondition.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_region_instant_snapshot_iam_member#description ComputeRegionInstantSnapshotIamMember#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMemberCondition.property.expression"></a>

```python
expression: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_region_instant_snapshot_iam_member#expression ComputeRegionInstantSnapshotIamMember#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMemberCondition.property.title"></a>

```python
title: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_region_instant_snapshot_iam_member#title ComputeRegionInstantSnapshotIamMember#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMemberCondition.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_region_instant_snapshot_iam_member#description ComputeRegionInstantSnapshotIamMember#description}.

---

### ComputeRegionInstantSnapshotIamMemberConfig <a name="ComputeRegionInstantSnapshotIamMemberConfig" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMemberConfig.Initializer"></a>

```python
from cdktn_provider_google import compute_region_instant_snapshot_iam_member

computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMemberConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  member: str,
  name: str,
  role: str,
  condition: ComputeRegionInstantSnapshotIamMemberCondition = None,
  id: str = None,
  project: str = None,
  region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMemberConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMemberConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMemberConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMemberConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMemberConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMemberConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMemberConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMemberConfig.property.member">member</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_region_instant_snapshot_iam_member#member ComputeRegionInstantSnapshotIamMember#member}. |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMemberConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_region_instant_snapshot_iam_member#name ComputeRegionInstantSnapshotIamMember#name}. |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMemberConfig.property.role">role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_region_instant_snapshot_iam_member#role ComputeRegionInstantSnapshotIamMember#role}. |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMemberConfig.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMemberCondition">ComputeRegionInstantSnapshotIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMemberConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_region_instant_snapshot_iam_member#id ComputeRegionInstantSnapshotIamMember#id}. |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMemberConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_region_instant_snapshot_iam_member#project ComputeRegionInstantSnapshotIamMember#project}. |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMemberConfig.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_region_instant_snapshot_iam_member#region ComputeRegionInstantSnapshotIamMember#region}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMemberConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMemberConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMemberConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMemberConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMemberConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMemberConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMemberConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMemberConfig.property.member"></a>

```python
member: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_region_instant_snapshot_iam_member#member ComputeRegionInstantSnapshotIamMember#member}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMemberConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_region_instant_snapshot_iam_member#name ComputeRegionInstantSnapshotIamMember#name}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMemberConfig.property.role"></a>

```python
role: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_region_instant_snapshot_iam_member#role ComputeRegionInstantSnapshotIamMember#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMemberConfig.property.condition"></a>

```python
condition: ComputeRegionInstantSnapshotIamMemberCondition
```

- *Type:* <a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMemberCondition">ComputeRegionInstantSnapshotIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_region_instant_snapshot_iam_member#condition ComputeRegionInstantSnapshotIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMemberConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_region_instant_snapshot_iam_member#id ComputeRegionInstantSnapshotIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMemberConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_region_instant_snapshot_iam_member#project ComputeRegionInstantSnapshotIamMember#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMemberConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_region_instant_snapshot_iam_member#region ComputeRegionInstantSnapshotIamMember#region}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeRegionInstantSnapshotIamMemberConditionOutputReference <a name="ComputeRegionInstantSnapshotIamMemberConditionOutputReference" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMemberConditionOutputReference.Initializer"></a>

```python
from cdktn_provider_google import compute_region_instant_snapshot_iam_member

computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMemberConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMemberConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMemberConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMemberConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMemberConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMemberConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMemberConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMemberConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMemberConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMemberConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMemberConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMemberConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMemberConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMemberConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMemberConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMemberConditionOutputReference.resetDescription">reset_description</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMemberConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMemberConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMemberConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMemberConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMemberConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMemberConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMemberConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMemberConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMemberConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMemberConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMemberConditionOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMemberConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMemberConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMemberConditionOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMemberConditionOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMemberConditionOutputReference.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMemberConditionOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMemberConditionOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMemberConditionOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMemberConditionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMemberCondition">ComputeRegionInstantSnapshotIamMemberCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMemberConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMemberConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMemberConditionOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMemberConditionOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMemberConditionOutputReference.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMemberConditionOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMemberConditionOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMemberConditionOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMemberConditionOutputReference.property.internalValue"></a>

```python
internal_value: ComputeRegionInstantSnapshotIamMemberCondition
```

- *Type:* <a href="#@cdktn/provider-google.computeRegionInstantSnapshotIamMember.ComputeRegionInstantSnapshotIamMemberCondition">ComputeRegionInstantSnapshotIamMemberCondition</a>

---



