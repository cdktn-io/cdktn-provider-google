# `computeRegionInstantSnapshot` Submodule <a name="`computeRegionInstantSnapshot` Submodule" id="@cdktn/provider-google.computeRegionInstantSnapshot"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeRegionInstantSnapshot <a name="ComputeRegionInstantSnapshot" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_region_instant_snapshot google_compute_region_instant_snapshot}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.Initializer"></a>

```python
from cdktn_provider_google import compute_region_instant_snapshot

computeRegionInstantSnapshot.ComputeRegionInstantSnapshot(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  source_disk: str,
  deletion_policy: str = None,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  params: ComputeRegionInstantSnapshotParams = None,
  project: str = None,
  region: str = None,
  timeouts: ComputeRegionInstantSnapshotTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the resource; |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.Initializer.parameter.sourceDisk">source_disk</a></code> | <code>str</code> | The source disk used to create this instant snapshot. |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.Initializer.parameter.description">description</a></code> | <code>str</code> | An optional description of this resource. |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_region_instant_snapshot#id ComputeRegionInstantSnapshot#id}. |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels to apply to this InstantSnapshot. |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.Initializer.parameter.params">params</a></code> | <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParams">ComputeRegionInstantSnapshotParams</a></code> | params block. |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_region_instant_snapshot#project ComputeRegionInstantSnapshot#project}. |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.Initializer.parameter.region">region</a></code> | <code>str</code> | A reference to the region where the disk is located. |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeouts">ComputeRegionInstantSnapshotTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.Initializer.parameter.name"></a>

- *Type:* str

Name of the resource;

provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_region_instant_snapshot#name ComputeRegionInstantSnapshot#name}

---

##### `source_disk`<sup>Required</sup> <a name="source_disk" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.Initializer.parameter.sourceDisk"></a>

- *Type:* str

The source disk used to create this instant snapshot.

You can provide this as a partial or full URL to the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_region_instant_snapshot#source_disk ComputeRegionInstantSnapshot#source_disk}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_region_instant_snapshot#deletion_policy ComputeRegionInstantSnapshot#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.Initializer.parameter.description"></a>

- *Type:* str

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_region_instant_snapshot#description ComputeRegionInstantSnapshot#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_region_instant_snapshot#id ComputeRegionInstantSnapshot#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Labels to apply to this InstantSnapshot.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_region_instant_snapshot#labels ComputeRegionInstantSnapshot#labels}

---

##### `params`<sup>Optional</sup> <a name="params" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.Initializer.parameter.params"></a>

- *Type:* <a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParams">ComputeRegionInstantSnapshotParams</a>

params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_region_instant_snapshot#params ComputeRegionInstantSnapshot#params}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_region_instant_snapshot#project ComputeRegionInstantSnapshot#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.Initializer.parameter.region"></a>

- *Type:* str

A reference to the region where the disk is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_region_instant_snapshot#region ComputeRegionInstantSnapshot#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeouts">ComputeRegionInstantSnapshotTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_region_instant_snapshot#timeouts ComputeRegionInstantSnapshot#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.putParams">put_params</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.resetParams">reset_params</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_params` <a name="put_params" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.putParams"></a>

```python
def put_params(
  resource_manager_tags: typing.Mapping[str] = None
) -> None
```

###### `resource_manager_tags`<sup>Optional</sup> <a name="resource_manager_tags" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.putParams.parameter.resourceManagerTags"></a>

- *Type:* typing.Mapping[str]

Resource manager tags to be bound to the instant snapshot.

Tag keys and values have the
same definition as resource manager tags. Keys must be in the format tagKeys/{tag_key_id},
and values are in the format tagValues/456.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_region_instant_snapshot#resource_manager_tags ComputeRegionInstantSnapshot#resource_manager_tags}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_region_instant_snapshot#create ComputeRegionInstantSnapshot#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_region_instant_snapshot#delete ComputeRegionInstantSnapshot#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_region_instant_snapshot#update ComputeRegionInstantSnapshot#update}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_params` <a name="reset_params" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.resetParams"></a>

```python
def reset_params() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ComputeRegionInstantSnapshot resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.isConstruct"></a>

```python
from cdktn_provider_google import compute_region_instant_snapshot

computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.isTerraformElement"></a>

```python
from cdktn_provider_google import compute_region_instant_snapshot

computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.isTerraformResource"></a>

```python
from cdktn_provider_google import compute_region_instant_snapshot

computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.generateConfigForImport"></a>

```python
from cdktn_provider_google import compute_region_instant_snapshot

computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ComputeRegionInstantSnapshot resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ComputeRegionInstantSnapshot to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ComputeRegionInstantSnapshot that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_region_instant_snapshot#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ComputeRegionInstantSnapshot to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.architecture">architecture</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.creationTimestamp">creation_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.diskSizeGb">disk_size_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.effectiveLabels">effective_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.labelFingerprint">label_fingerprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.params">params</a></code> | <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParamsOutputReference">ComputeRegionInstantSnapshotParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.resourceStatus">resource_status</a></code> | <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusList">ComputeRegionInstantSnapshotResourceStatusList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.selfLink">self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.sourceDiskId">source_disk_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.sourceInstantSnapshotGroup">source_instant_snapshot_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.sourceInstantSnapshotGroupId">source_instant_snapshot_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.terraformLabels">terraform_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference">ComputeRegionInstantSnapshotTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.paramsInput">params_input</a></code> | <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParams">ComputeRegionInstantSnapshotParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.sourceDiskInput">source_disk_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeouts">ComputeRegionInstantSnapshotTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.sourceDisk">source_disk</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `architecture`<sup>Required</sup> <a name="architecture" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.architecture"></a>

```python
architecture: str
```

- *Type:* str

---

##### `creation_timestamp`<sup>Required</sup> <a name="creation_timestamp" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.creationTimestamp"></a>

```python
creation_timestamp: str
```

- *Type:* str

---

##### `disk_size_gb`<sup>Required</sup> <a name="disk_size_gb" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.diskSizeGb"></a>

```python
disk_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `label_fingerprint`<sup>Required</sup> <a name="label_fingerprint" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.labelFingerprint"></a>

```python
label_fingerprint: str
```

- *Type:* str

---

##### `params`<sup>Required</sup> <a name="params" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.params"></a>

```python
params: ComputeRegionInstantSnapshotParamsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParamsOutputReference">ComputeRegionInstantSnapshotParamsOutputReference</a>

---

##### `resource_status`<sup>Required</sup> <a name="resource_status" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.resourceStatus"></a>

```python
resource_status: ComputeRegionInstantSnapshotResourceStatusList
```

- *Type:* <a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusList">ComputeRegionInstantSnapshotResourceStatusList</a>

---

##### `self_link`<sup>Required</sup> <a name="self_link" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

---

##### `source_disk_id`<sup>Required</sup> <a name="source_disk_id" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.sourceDiskId"></a>

```python
source_disk_id: str
```

- *Type:* str

---

##### `source_instant_snapshot_group`<sup>Required</sup> <a name="source_instant_snapshot_group" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.sourceInstantSnapshotGroup"></a>

```python
source_instant_snapshot_group: str
```

- *Type:* str

---

##### `source_instant_snapshot_group_id`<sup>Required</sup> <a name="source_instant_snapshot_group_id" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.sourceInstantSnapshotGroupId"></a>

```python
source_instant_snapshot_group_id: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.timeouts"></a>

```python
timeouts: ComputeRegionInstantSnapshotTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference">ComputeRegionInstantSnapshotTimeoutsOutputReference</a>

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `params_input`<sup>Optional</sup> <a name="params_input" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.paramsInput"></a>

```python
params_input: ComputeRegionInstantSnapshotParams
```

- *Type:* <a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParams">ComputeRegionInstantSnapshotParams</a>

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `source_disk_input`<sup>Optional</sup> <a name="source_disk_input" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.sourceDiskInput"></a>

```python
source_disk_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | ComputeRegionInstantSnapshotTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeouts">ComputeRegionInstantSnapshotTimeouts</a>

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `source_disk`<sup>Required</sup> <a name="source_disk" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.sourceDisk"></a>

```python
source_disk: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshot.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeRegionInstantSnapshotConfig <a name="ComputeRegionInstantSnapshotConfig" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotConfig.Initializer"></a>

```python
from cdktn_provider_google import compute_region_instant_snapshot

computeRegionInstantSnapshot.ComputeRegionInstantSnapshotConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  source_disk: str,
  deletion_policy: str = None,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  params: ComputeRegionInstantSnapshotParams = None,
  project: str = None,
  region: str = None,
  timeouts: ComputeRegionInstantSnapshotTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotConfig.property.name">name</a></code> | <code>str</code> | Name of the resource; |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotConfig.property.sourceDisk">source_disk</a></code> | <code>str</code> | The source disk used to create this instant snapshot. |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotConfig.property.description">description</a></code> | <code>str</code> | An optional description of this resource. |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_region_instant_snapshot#id ComputeRegionInstantSnapshot#id}. |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels to apply to this InstantSnapshot. |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotConfig.property.params">params</a></code> | <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParams">ComputeRegionInstantSnapshotParams</a></code> | params block. |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_region_instant_snapshot#project ComputeRegionInstantSnapshot#project}. |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotConfig.property.region">region</a></code> | <code>str</code> | A reference to the region where the disk is located. |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeouts">ComputeRegionInstantSnapshotTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the resource;

provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_region_instant_snapshot#name ComputeRegionInstantSnapshot#name}

---

##### `source_disk`<sup>Required</sup> <a name="source_disk" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotConfig.property.sourceDisk"></a>

```python
source_disk: str
```

- *Type:* str

The source disk used to create this instant snapshot.

You can provide this as a partial or full URL to the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_region_instant_snapshot#source_disk ComputeRegionInstantSnapshot#source_disk}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_region_instant_snapshot#deletion_policy ComputeRegionInstantSnapshot#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotConfig.property.description"></a>

```python
description: str
```

- *Type:* str

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_region_instant_snapshot#description ComputeRegionInstantSnapshot#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_region_instant_snapshot#id ComputeRegionInstantSnapshot#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Labels to apply to this InstantSnapshot.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_region_instant_snapshot#labels ComputeRegionInstantSnapshot#labels}

---

##### `params`<sup>Optional</sup> <a name="params" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotConfig.property.params"></a>

```python
params: ComputeRegionInstantSnapshotParams
```

- *Type:* <a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParams">ComputeRegionInstantSnapshotParams</a>

params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_region_instant_snapshot#params ComputeRegionInstantSnapshot#params}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_region_instant_snapshot#project ComputeRegionInstantSnapshot#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotConfig.property.region"></a>

```python
region: str
```

- *Type:* str

A reference to the region where the disk is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_region_instant_snapshot#region ComputeRegionInstantSnapshot#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotConfig.property.timeouts"></a>

```python
timeouts: ComputeRegionInstantSnapshotTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeouts">ComputeRegionInstantSnapshotTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_region_instant_snapshot#timeouts ComputeRegionInstantSnapshot#timeouts}

---

### ComputeRegionInstantSnapshotParams <a name="ComputeRegionInstantSnapshotParams" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParams.Initializer"></a>

```python
from cdktn_provider_google import compute_region_instant_snapshot

computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParams(
  resource_manager_tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParams.property.resourceManagerTags">resource_manager_tags</a></code> | <code>typing.Mapping[str]</code> | Resource manager tags to be bound to the instant snapshot. |

---

##### `resource_manager_tags`<sup>Optional</sup> <a name="resource_manager_tags" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParams.property.resourceManagerTags"></a>

```python
resource_manager_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Resource manager tags to be bound to the instant snapshot.

Tag keys and values have the
same definition as resource manager tags. Keys must be in the format tagKeys/{tag_key_id},
and values are in the format tagValues/456.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_region_instant_snapshot#resource_manager_tags ComputeRegionInstantSnapshot#resource_manager_tags}

---

### ComputeRegionInstantSnapshotResourceStatus <a name="ComputeRegionInstantSnapshotResourceStatus" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatus.Initializer"></a>

```python
from cdktn_provider_google import compute_region_instant_snapshot

computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatus()
```


### ComputeRegionInstantSnapshotTimeouts <a name="ComputeRegionInstantSnapshotTimeouts" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeouts.Initializer"></a>

```python
from cdktn_provider_google import compute_region_instant_snapshot

computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_region_instant_snapshot#create ComputeRegionInstantSnapshot#create}. |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_region_instant_snapshot#delete ComputeRegionInstantSnapshot#delete}. |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_region_instant_snapshot#update ComputeRegionInstantSnapshot#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_region_instant_snapshot#create ComputeRegionInstantSnapshot#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_region_instant_snapshot#delete ComputeRegionInstantSnapshot#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_region_instant_snapshot#update ComputeRegionInstantSnapshot#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeRegionInstantSnapshotParamsOutputReference <a name="ComputeRegionInstantSnapshotParamsOutputReference" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParamsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import compute_region_instant_snapshot

computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParamsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParamsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParamsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParamsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParamsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParamsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParamsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParamsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParamsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParamsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParamsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParamsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParamsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParamsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParamsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParamsOutputReference.resetResourceManagerTags">reset_resource_manager_tags</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParamsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParamsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParamsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParamsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParamsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParamsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParamsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParamsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParamsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParamsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParamsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParamsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParamsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_resource_manager_tags` <a name="reset_resource_manager_tags" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParamsOutputReference.resetResourceManagerTags"></a>

```python
def reset_resource_manager_tags() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParamsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParamsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParamsOutputReference.property.resourceManagerTagsInput">resource_manager_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParamsOutputReference.property.resourceManagerTags">resource_manager_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParamsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParams">ComputeRegionInstantSnapshotParams</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParamsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParamsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resource_manager_tags_input`<sup>Optional</sup> <a name="resource_manager_tags_input" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParamsOutputReference.property.resourceManagerTagsInput"></a>

```python
resource_manager_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `resource_manager_tags`<sup>Required</sup> <a name="resource_manager_tags" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParamsOutputReference.property.resourceManagerTags"></a>

```python
resource_manager_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParamsOutputReference.property.internalValue"></a>

```python
internal_value: ComputeRegionInstantSnapshotParams
```

- *Type:* <a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotParams">ComputeRegionInstantSnapshotParams</a>

---


### ComputeRegionInstantSnapshotResourceStatusList <a name="ComputeRegionInstantSnapshotResourceStatusList" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusList.Initializer"></a>

```python
from cdktn_provider_google import compute_region_instant_snapshot

computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComputeRegionInstantSnapshotResourceStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ComputeRegionInstantSnapshotResourceStatusOutputReference <a name="ComputeRegionInstantSnapshotResourceStatusOutputReference" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusOutputReference.Initializer"></a>

```python
from cdktn_provider_google import compute_region_instant_snapshot

computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusOutputReference.property.storageSizeBytes">storage_size_bytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatus">ComputeRegionInstantSnapshotResourceStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `storage_size_bytes`<sup>Required</sup> <a name="storage_size_bytes" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusOutputReference.property.storageSizeBytes"></a>

```python
storage_size_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatusOutputReference.property.internalValue"></a>

```python
internal_value: ComputeRegionInstantSnapshotResourceStatus
```

- *Type:* <a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotResourceStatus">ComputeRegionInstantSnapshotResourceStatus</a>

---


### ComputeRegionInstantSnapshotTimeoutsOutputReference <a name="ComputeRegionInstantSnapshotTimeoutsOutputReference" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import compute_region_instant_snapshot

computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeouts">ComputeRegionInstantSnapshotTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ComputeRegionInstantSnapshotTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeRegionInstantSnapshot.ComputeRegionInstantSnapshotTimeouts">ComputeRegionInstantSnapshotTimeouts</a>

---



