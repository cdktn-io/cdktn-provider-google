# `computeInstantSnapshot` Submodule <a name="`computeInstantSnapshot` Submodule" id="@cdktn/provider-google.computeInstantSnapshot"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeInstantSnapshot <a name="ComputeInstantSnapshot" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_instant_snapshot google_compute_instant_snapshot}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.Initializer"></a>

```python
from cdktn_provider_google import compute_instant_snapshot

computeInstantSnapshot.ComputeInstantSnapshot(
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
  params: ComputeInstantSnapshotParams = None,
  project: str = None,
  timeouts: ComputeInstantSnapshotTimeouts = None,
  zone: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the resource; |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.Initializer.parameter.sourceDisk">source_disk</a></code> | <code>str</code> | A reference to the disk used to create this instant snapshot. |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.Initializer.parameter.description">description</a></code> | <code>str</code> | An optional description of this resource. |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_instant_snapshot#id ComputeInstantSnapshot#id}. |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels to apply to this InstantSnapshot. |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.Initializer.parameter.params">params</a></code> | <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotParams">ComputeInstantSnapshotParams</a></code> | params block. |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_instant_snapshot#project ComputeInstantSnapshot#project}. |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotTimeouts">ComputeInstantSnapshotTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.Initializer.parameter.zone">zone</a></code> | <code>str</code> | A reference to the zone where the disk is located. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.Initializer.parameter.name"></a>

- *Type:* str

Name of the resource;

provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_instant_snapshot#name ComputeInstantSnapshot#name}

---

##### `source_disk`<sup>Required</sup> <a name="source_disk" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.Initializer.parameter.sourceDisk"></a>

- *Type:* str

A reference to the disk used to create this instant snapshot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_instant_snapshot#source_disk ComputeInstantSnapshot#source_disk}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_instant_snapshot#deletion_policy ComputeInstantSnapshot#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.Initializer.parameter.description"></a>

- *Type:* str

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_instant_snapshot#description ComputeInstantSnapshot#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_instant_snapshot#id ComputeInstantSnapshot#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Labels to apply to this InstantSnapshot.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_instant_snapshot#labels ComputeInstantSnapshot#labels}

---

##### `params`<sup>Optional</sup> <a name="params" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.Initializer.parameter.params"></a>

- *Type:* <a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotParams">ComputeInstantSnapshotParams</a>

params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_instant_snapshot#params ComputeInstantSnapshot#params}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_instant_snapshot#project ComputeInstantSnapshot#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotTimeouts">ComputeInstantSnapshotTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_instant_snapshot#timeouts ComputeInstantSnapshot#timeouts}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.Initializer.parameter.zone"></a>

- *Type:* str

A reference to the zone where the disk is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_instant_snapshot#zone ComputeInstantSnapshot#zone}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.putParams">put_params</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.resetParams">reset_params</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.resetZone">reset_zone</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_params` <a name="put_params" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.putParams"></a>

```python
def put_params(
  resource_manager_tags: typing.Mapping[str] = None
) -> None
```

###### `resource_manager_tags`<sup>Optional</sup> <a name="resource_manager_tags" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.putParams.parameter.resourceManagerTags"></a>

- *Type:* typing.Mapping[str]

Resource manager tags to be bound to the instant snapshot.

Tag keys and values have the
same definition as resource manager tags. Keys must be in the format tagKeys/{tag_key_id},
and values are in the format tagValues/456.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_instant_snapshot#resource_manager_tags ComputeInstantSnapshot#resource_manager_tags}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_instant_snapshot#create ComputeInstantSnapshot#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_instant_snapshot#delete ComputeInstantSnapshot#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_instant_snapshot#update ComputeInstantSnapshot#update}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_params` <a name="reset_params" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.resetParams"></a>

```python
def reset_params() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_zone` <a name="reset_zone" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.resetZone"></a>

```python
def reset_zone() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ComputeInstantSnapshot resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.isConstruct"></a>

```python
from cdktn_provider_google import compute_instant_snapshot

computeInstantSnapshot.ComputeInstantSnapshot.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.isTerraformElement"></a>

```python
from cdktn_provider_google import compute_instant_snapshot

computeInstantSnapshot.ComputeInstantSnapshot.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.isTerraformResource"></a>

```python
from cdktn_provider_google import compute_instant_snapshot

computeInstantSnapshot.ComputeInstantSnapshot.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.generateConfigForImport"></a>

```python
from cdktn_provider_google import compute_instant_snapshot

computeInstantSnapshot.ComputeInstantSnapshot.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ComputeInstantSnapshot resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ComputeInstantSnapshot to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ComputeInstantSnapshot that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_instant_snapshot#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ComputeInstantSnapshot to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.property.creationTimestamp">creation_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.property.diskSizeGb">disk_size_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.property.effectiveLabels">effective_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.property.labelFingerprint">label_fingerprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.property.params">params</a></code> | <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotParamsOutputReference">ComputeInstantSnapshotParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.property.selfLink">self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.property.sourceDiskId">source_disk_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.property.terraformLabels">terraform_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotTimeoutsOutputReference">ComputeInstantSnapshotTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.property.paramsInput">params_input</a></code> | <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotParams">ComputeInstantSnapshotParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.property.sourceDiskInput">source_disk_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotTimeouts">ComputeInstantSnapshotTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.property.zoneInput">zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.property.sourceDisk">source_disk</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.property.zone">zone</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `creation_timestamp`<sup>Required</sup> <a name="creation_timestamp" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.property.creationTimestamp"></a>

```python
creation_timestamp: str
```

- *Type:* str

---

##### `disk_size_gb`<sup>Required</sup> <a name="disk_size_gb" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.property.diskSizeGb"></a>

```python
disk_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `label_fingerprint`<sup>Required</sup> <a name="label_fingerprint" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.property.labelFingerprint"></a>

```python
label_fingerprint: str
```

- *Type:* str

---

##### `params`<sup>Required</sup> <a name="params" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.property.params"></a>

```python
params: ComputeInstantSnapshotParamsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotParamsOutputReference">ComputeInstantSnapshotParamsOutputReference</a>

---

##### `self_link`<sup>Required</sup> <a name="self_link" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

---

##### `source_disk_id`<sup>Required</sup> <a name="source_disk_id" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.property.sourceDiskId"></a>

```python
source_disk_id: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.property.timeouts"></a>

```python
timeouts: ComputeInstantSnapshotTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotTimeoutsOutputReference">ComputeInstantSnapshotTimeoutsOutputReference</a>

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `params_input`<sup>Optional</sup> <a name="params_input" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.property.paramsInput"></a>

```python
params_input: ComputeInstantSnapshotParams
```

- *Type:* <a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotParams">ComputeInstantSnapshotParams</a>

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `source_disk_input`<sup>Optional</sup> <a name="source_disk_input" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.property.sourceDiskInput"></a>

```python
source_disk_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | ComputeInstantSnapshotTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotTimeouts">ComputeInstantSnapshotTimeouts</a>

---

##### `zone_input`<sup>Optional</sup> <a name="zone_input" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.property.zoneInput"></a>

```python
zone_input: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `source_disk`<sup>Required</sup> <a name="source_disk" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.property.sourceDisk"></a>

```python
source_disk: str
```

- *Type:* str

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.property.zone"></a>

```python
zone: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshot.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeInstantSnapshotConfig <a name="ComputeInstantSnapshotConfig" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotConfig.Initializer"></a>

```python
from cdktn_provider_google import compute_instant_snapshot

computeInstantSnapshot.ComputeInstantSnapshotConfig(
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
  params: ComputeInstantSnapshotParams = None,
  project: str = None,
  timeouts: ComputeInstantSnapshotTimeouts = None,
  zone: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotConfig.property.name">name</a></code> | <code>str</code> | Name of the resource; |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotConfig.property.sourceDisk">source_disk</a></code> | <code>str</code> | A reference to the disk used to create this instant snapshot. |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotConfig.property.description">description</a></code> | <code>str</code> | An optional description of this resource. |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_instant_snapshot#id ComputeInstantSnapshot#id}. |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels to apply to this InstantSnapshot. |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotConfig.property.params">params</a></code> | <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotParams">ComputeInstantSnapshotParams</a></code> | params block. |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_instant_snapshot#project ComputeInstantSnapshot#project}. |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotTimeouts">ComputeInstantSnapshotTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotConfig.property.zone">zone</a></code> | <code>str</code> | A reference to the zone where the disk is located. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotConfig.property.name"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_instant_snapshot#name ComputeInstantSnapshot#name}

---

##### `source_disk`<sup>Required</sup> <a name="source_disk" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotConfig.property.sourceDisk"></a>

```python
source_disk: str
```

- *Type:* str

A reference to the disk used to create this instant snapshot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_instant_snapshot#source_disk ComputeInstantSnapshot#source_disk}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_instant_snapshot#deletion_policy ComputeInstantSnapshot#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotConfig.property.description"></a>

```python
description: str
```

- *Type:* str

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_instant_snapshot#description ComputeInstantSnapshot#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_instant_snapshot#id ComputeInstantSnapshot#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Labels to apply to this InstantSnapshot.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_instant_snapshot#labels ComputeInstantSnapshot#labels}

---

##### `params`<sup>Optional</sup> <a name="params" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotConfig.property.params"></a>

```python
params: ComputeInstantSnapshotParams
```

- *Type:* <a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotParams">ComputeInstantSnapshotParams</a>

params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_instant_snapshot#params ComputeInstantSnapshot#params}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_instant_snapshot#project ComputeInstantSnapshot#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotConfig.property.timeouts"></a>

```python
timeouts: ComputeInstantSnapshotTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotTimeouts">ComputeInstantSnapshotTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_instant_snapshot#timeouts ComputeInstantSnapshot#timeouts}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotConfig.property.zone"></a>

```python
zone: str
```

- *Type:* str

A reference to the zone where the disk is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_instant_snapshot#zone ComputeInstantSnapshot#zone}

---

### ComputeInstantSnapshotParams <a name="ComputeInstantSnapshotParams" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotParams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotParams.Initializer"></a>

```python
from cdktn_provider_google import compute_instant_snapshot

computeInstantSnapshot.ComputeInstantSnapshotParams(
  resource_manager_tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotParams.property.resourceManagerTags">resource_manager_tags</a></code> | <code>typing.Mapping[str]</code> | Resource manager tags to be bound to the instant snapshot. |

---

##### `resource_manager_tags`<sup>Optional</sup> <a name="resource_manager_tags" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotParams.property.resourceManagerTags"></a>

```python
resource_manager_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Resource manager tags to be bound to the instant snapshot.

Tag keys and values have the
same definition as resource manager tags. Keys must be in the format tagKeys/{tag_key_id},
and values are in the format tagValues/456.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_instant_snapshot#resource_manager_tags ComputeInstantSnapshot#resource_manager_tags}

---

### ComputeInstantSnapshotTimeouts <a name="ComputeInstantSnapshotTimeouts" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotTimeouts.Initializer"></a>

```python
from cdktn_provider_google import compute_instant_snapshot

computeInstantSnapshot.ComputeInstantSnapshotTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_instant_snapshot#create ComputeInstantSnapshot#create}. |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_instant_snapshot#delete ComputeInstantSnapshot#delete}. |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_instant_snapshot#update ComputeInstantSnapshot#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_instant_snapshot#create ComputeInstantSnapshot#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_instant_snapshot#delete ComputeInstantSnapshot#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_instant_snapshot#update ComputeInstantSnapshot#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeInstantSnapshotParamsOutputReference <a name="ComputeInstantSnapshotParamsOutputReference" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotParamsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import compute_instant_snapshot

computeInstantSnapshot.ComputeInstantSnapshotParamsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotParamsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotParamsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotParamsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotParamsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotParamsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotParamsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotParamsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotParamsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotParamsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotParamsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotParamsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotParamsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotParamsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotParamsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotParamsOutputReference.resetResourceManagerTags">reset_resource_manager_tags</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotParamsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotParamsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotParamsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotParamsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotParamsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotParamsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotParamsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotParamsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotParamsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotParamsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotParamsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotParamsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotParamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotParamsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_resource_manager_tags` <a name="reset_resource_manager_tags" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotParamsOutputReference.resetResourceManagerTags"></a>

```python
def reset_resource_manager_tags() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotParamsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotParamsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotParamsOutputReference.property.resourceManagerTagsInput">resource_manager_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotParamsOutputReference.property.resourceManagerTags">resource_manager_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotParamsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotParams">ComputeInstantSnapshotParams</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotParamsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotParamsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resource_manager_tags_input`<sup>Optional</sup> <a name="resource_manager_tags_input" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotParamsOutputReference.property.resourceManagerTagsInput"></a>

```python
resource_manager_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `resource_manager_tags`<sup>Required</sup> <a name="resource_manager_tags" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotParamsOutputReference.property.resourceManagerTags"></a>

```python
resource_manager_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotParamsOutputReference.property.internalValue"></a>

```python
internal_value: ComputeInstantSnapshotParams
```

- *Type:* <a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotParams">ComputeInstantSnapshotParams</a>

---


### ComputeInstantSnapshotTimeoutsOutputReference <a name="ComputeInstantSnapshotTimeoutsOutputReference" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import compute_instant_snapshot

computeInstantSnapshot.ComputeInstantSnapshotTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotTimeouts">ComputeInstantSnapshotTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ComputeInstantSnapshotTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeInstantSnapshot.ComputeInstantSnapshotTimeouts">ComputeInstantSnapshotTimeouts</a>

---



