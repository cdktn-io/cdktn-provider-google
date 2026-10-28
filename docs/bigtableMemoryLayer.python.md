# `bigtableMemoryLayer` Submodule <a name="`bigtableMemoryLayer` Submodule" id="@cdktn/provider-google.bigtableMemoryLayer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BigtableMemoryLayer <a name="BigtableMemoryLayer" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/bigtable_memory_layer google_bigtable_memory_layer}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.Initializer"></a>

```python
from cdktn_provider_google import bigtable_memory_layer

bigtableMemoryLayer.BigtableMemoryLayer(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  cluster: str,
  instance: str,
  deletion_policy: str = None,
  id: str = None,
  project: str = None,
  timeouts: BigtableMemoryLayerTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.Initializer.parameter.cluster">cluster</a></code> | <code>str</code> | The ID of the cluster to enable the memory layer on. |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.Initializer.parameter.instance">instance</a></code> | <code>str</code> | The name of the instance to enable the memory layer within. |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/bigtable_memory_layer#id BigtableMemoryLayer#id}. |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/bigtable_memory_layer#project BigtableMemoryLayer#project}. |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerTimeouts">BigtableMemoryLayerTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.Initializer.parameter.cluster"></a>

- *Type:* str

The ID of the cluster to enable the memory layer on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/bigtable_memory_layer#cluster BigtableMemoryLayer#cluster}

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.Initializer.parameter.instance"></a>

- *Type:* str

The name of the instance to enable the memory layer within.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/bigtable_memory_layer#instance BigtableMemoryLayer#instance}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/bigtable_memory_layer#deletion_policy BigtableMemoryLayer#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/bigtable_memory_layer#id BigtableMemoryLayer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/bigtable_memory_layer#project BigtableMemoryLayer#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerTimeouts">BigtableMemoryLayerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/bigtable_memory_layer#timeouts BigtableMemoryLayer#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/bigtable_memory_layer#create BigtableMemoryLayer#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/bigtable_memory_layer#delete BigtableMemoryLayer#delete}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a BigtableMemoryLayer resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.isConstruct"></a>

```python
from cdktn_provider_google import bigtable_memory_layer

bigtableMemoryLayer.BigtableMemoryLayer.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.isTerraformElement"></a>

```python
from cdktn_provider_google import bigtable_memory_layer

bigtableMemoryLayer.BigtableMemoryLayer.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.isTerraformResource"></a>

```python
from cdktn_provider_google import bigtable_memory_layer

bigtableMemoryLayer.BigtableMemoryLayer.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.generateConfigForImport"></a>

```python
from cdktn_provider_google import bigtable_memory_layer

bigtableMemoryLayer.BigtableMemoryLayer.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a BigtableMemoryLayer resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the BigtableMemoryLayer to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing BigtableMemoryLayer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/bigtable_memory_layer#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the BigtableMemoryLayer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.property.memoryConfig">memory_config</a></code> | <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerMemoryConfigList">BigtableMemoryLayerMemoryConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerTimeoutsOutputReference">BigtableMemoryLayerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.property.clusterInput">cluster_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.property.instanceInput">instance_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerTimeouts">BigtableMemoryLayerTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.property.cluster">cluster</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.property.instance">instance</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `memory_config`<sup>Required</sup> <a name="memory_config" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.property.memoryConfig"></a>

```python
memory_config: BigtableMemoryLayerMemoryConfigList
```

- *Type:* <a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerMemoryConfigList">BigtableMemoryLayerMemoryConfigList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.property.timeouts"></a>

```python
timeouts: BigtableMemoryLayerTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerTimeoutsOutputReference">BigtableMemoryLayerTimeoutsOutputReference</a>

---

##### `cluster_input`<sup>Optional</sup> <a name="cluster_input" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.property.clusterInput"></a>

```python
cluster_input: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instance_input`<sup>Optional</sup> <a name="instance_input" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.property.instanceInput"></a>

```python
instance_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | BigtableMemoryLayerTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerTimeouts">BigtableMemoryLayerTimeouts</a>

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.property.cluster"></a>

```python
cluster: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.property.instance"></a>

```python
instance: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayer.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BigtableMemoryLayerConfig <a name="BigtableMemoryLayerConfig" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerConfig.Initializer"></a>

```python
from cdktn_provider_google import bigtable_memory_layer

bigtableMemoryLayer.BigtableMemoryLayerConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  cluster: str,
  instance: str,
  deletion_policy: str = None,
  id: str = None,
  project: str = None,
  timeouts: BigtableMemoryLayerTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerConfig.property.cluster">cluster</a></code> | <code>str</code> | The ID of the cluster to enable the memory layer on. |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerConfig.property.instance">instance</a></code> | <code>str</code> | The name of the instance to enable the memory layer within. |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/bigtable_memory_layer#id BigtableMemoryLayer#id}. |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/bigtable_memory_layer#project BigtableMemoryLayer#project}. |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerTimeouts">BigtableMemoryLayerTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerConfig.property.cluster"></a>

```python
cluster: str
```

- *Type:* str

The ID of the cluster to enable the memory layer on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/bigtable_memory_layer#cluster BigtableMemoryLayer#cluster}

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerConfig.property.instance"></a>

```python
instance: str
```

- *Type:* str

The name of the instance to enable the memory layer within.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/bigtable_memory_layer#instance BigtableMemoryLayer#instance}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/bigtable_memory_layer#deletion_policy BigtableMemoryLayer#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/bigtable_memory_layer#id BigtableMemoryLayer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/bigtable_memory_layer#project BigtableMemoryLayer#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerConfig.property.timeouts"></a>

```python
timeouts: BigtableMemoryLayerTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerTimeouts">BigtableMemoryLayerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/bigtable_memory_layer#timeouts BigtableMemoryLayer#timeouts}

---

### BigtableMemoryLayerMemoryConfig <a name="BigtableMemoryLayerMemoryConfig" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerMemoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerMemoryConfig.Initializer"></a>

```python
from cdktn_provider_google import bigtable_memory_layer

bigtableMemoryLayer.BigtableMemoryLayerMemoryConfig()
```


### BigtableMemoryLayerTimeouts <a name="BigtableMemoryLayerTimeouts" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerTimeouts.Initializer"></a>

```python
from cdktn_provider_google import bigtable_memory_layer

bigtableMemoryLayer.BigtableMemoryLayerTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/bigtable_memory_layer#create BigtableMemoryLayer#create}. |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/bigtable_memory_layer#delete BigtableMemoryLayer#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/bigtable_memory_layer#create BigtableMemoryLayer#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/bigtable_memory_layer#delete BigtableMemoryLayer#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### BigtableMemoryLayerMemoryConfigList <a name="BigtableMemoryLayerMemoryConfigList" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerMemoryConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerMemoryConfigList.Initializer"></a>

```python
from cdktn_provider_google import bigtable_memory_layer

bigtableMemoryLayer.BigtableMemoryLayerMemoryConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerMemoryConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerMemoryConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerMemoryConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerMemoryConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerMemoryConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerMemoryConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerMemoryConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerMemoryConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerMemoryConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerMemoryConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerMemoryConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerMemoryConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerMemoryConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerMemoryConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerMemoryConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerMemoryConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerMemoryConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerMemoryConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BigtableMemoryLayerMemoryConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerMemoryConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerMemoryConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerMemoryConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerMemoryConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerMemoryConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### BigtableMemoryLayerMemoryConfigOutputReference <a name="BigtableMemoryLayerMemoryConfigOutputReference" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerMemoryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerMemoryConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google import bigtable_memory_layer

bigtableMemoryLayer.BigtableMemoryLayerMemoryConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerMemoryConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerMemoryConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerMemoryConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerMemoryConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerMemoryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerMemoryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerMemoryConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerMemoryConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerMemoryConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerMemoryConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerMemoryConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerMemoryConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerMemoryConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerMemoryConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerMemoryConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerMemoryConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerMemoryConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerMemoryConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerMemoryConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerMemoryConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerMemoryConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerMemoryConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerMemoryConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerMemoryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerMemoryConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerMemoryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerMemoryConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerMemoryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerMemoryConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerMemoryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerMemoryConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerMemoryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerMemoryConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerMemoryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerMemoryConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerMemoryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerMemoryConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerMemoryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerMemoryConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerMemoryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerMemoryConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerMemoryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerMemoryConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerMemoryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerMemoryConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerMemoryConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerMemoryConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerMemoryConfigOutputReference.property.storageSizeGib">storage_size_gib</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerMemoryConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerMemoryConfig">BigtableMemoryLayerMemoryConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerMemoryConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerMemoryConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `storage_size_gib`<sup>Required</sup> <a name="storage_size_gib" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerMemoryConfigOutputReference.property.storageSizeGib"></a>

```python
storage_size_gib: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerMemoryConfigOutputReference.property.internalValue"></a>

```python
internal_value: BigtableMemoryLayerMemoryConfig
```

- *Type:* <a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerMemoryConfig">BigtableMemoryLayerMemoryConfig</a>

---


### BigtableMemoryLayerTimeoutsOutputReference <a name="BigtableMemoryLayerTimeoutsOutputReference" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import bigtable_memory_layer

bigtableMemoryLayer.BigtableMemoryLayerTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerTimeouts">BigtableMemoryLayerTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BigtableMemoryLayerTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.bigtableMemoryLayer.BigtableMemoryLayerTimeouts">BigtableMemoryLayerTimeouts</a>

---



