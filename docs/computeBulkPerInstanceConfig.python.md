# `computeBulkPerInstanceConfig` Submodule <a name="`computeBulkPerInstanceConfig` Submodule" id="@cdktn/provider-google.computeBulkPerInstanceConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeBulkPerInstanceConfig <a name="ComputeBulkPerInstanceConfig" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_bulk_per_instance_config google_compute_bulk_per_instance_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.Initializer"></a>

```python
from cdktn_provider_google import compute_bulk_per_instance_config

computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  instance_group_manager: str,
  deletion_policy: str = None,
  id: str = None,
  instances: IResolvable | typing.List[ComputeBulkPerInstanceConfigInstances] = None,
  project: str = None,
  timeouts: ComputeBulkPerInstanceConfigTimeouts = None,
  zone: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.Initializer.parameter.instanceGroupManager">instance_group_manager</a></code> | <code>str</code> | The instance group manager this instance config is part of. |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_bulk_per_instance_config#id ComputeBulkPerInstanceConfig#id}. |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.Initializer.parameter.instances">instances</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstances">ComputeBulkPerInstanceConfigInstances</a>]</code> | instances block. |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_bulk_per_instance_config#project ComputeBulkPerInstanceConfig#project}. |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeouts">ComputeBulkPerInstanceConfigTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.Initializer.parameter.zone">zone</a></code> | <code>str</code> | Zone where the containing instance group manager is located. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `instance_group_manager`<sup>Required</sup> <a name="instance_group_manager" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.Initializer.parameter.instanceGroupManager"></a>

- *Type:* str

The instance group manager this instance config is part of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_bulk_per_instance_config#instance_group_manager ComputeBulkPerInstanceConfig#instance_group_manager}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_bulk_per_instance_config#deletion_policy ComputeBulkPerInstanceConfig#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_bulk_per_instance_config#id ComputeBulkPerInstanceConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instances`<sup>Optional</sup> <a name="instances" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.Initializer.parameter.instances"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstances">ComputeBulkPerInstanceConfigInstances</a>]

instances block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_bulk_per_instance_config#instances ComputeBulkPerInstanceConfig#instances}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_bulk_per_instance_config#project ComputeBulkPerInstanceConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeouts">ComputeBulkPerInstanceConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_bulk_per_instance_config#timeouts ComputeBulkPerInstanceConfig#timeouts}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.Initializer.parameter.zone"></a>

- *Type:* str

Zone where the containing instance group manager is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_bulk_per_instance_config#zone ComputeBulkPerInstanceConfig#zone}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.putInstances">put_instances</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.resetInstances">reset_instances</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.resetZone">reset_zone</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_instances` <a name="put_instances" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.putInstances"></a>

```python
def put_instances(
  value: IResolvable | typing.List[ComputeBulkPerInstanceConfigInstances]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.putInstances.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstances">ComputeBulkPerInstanceConfigInstances</a>]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_bulk_per_instance_config#create ComputeBulkPerInstanceConfig#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_bulk_per_instance_config#delete ComputeBulkPerInstanceConfig#delete}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_instances` <a name="reset_instances" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.resetInstances"></a>

```python
def reset_instances() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_zone` <a name="reset_zone" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.resetZone"></a>

```python
def reset_zone() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ComputeBulkPerInstanceConfig resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.isConstruct"></a>

```python
from cdktn_provider_google import compute_bulk_per_instance_config

computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.isTerraformElement"></a>

```python
from cdktn_provider_google import compute_bulk_per_instance_config

computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.isTerraformResource"></a>

```python
from cdktn_provider_google import compute_bulk_per_instance_config

computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.generateConfigForImport"></a>

```python
from cdktn_provider_google import compute_bulk_per_instance_config

computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ComputeBulkPerInstanceConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ComputeBulkPerInstanceConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ComputeBulkPerInstanceConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_bulk_per_instance_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ComputeBulkPerInstanceConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.instances">instances</a></code> | <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesList">ComputeBulkPerInstanceConfigInstancesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference">ComputeBulkPerInstanceConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.instanceGroupManagerInput">instance_group_manager_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.instancesInput">instances_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstances">ComputeBulkPerInstanceConfigInstances</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeouts">ComputeBulkPerInstanceConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.zoneInput">zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.instanceGroupManager">instance_group_manager</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.zone">zone</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `instances`<sup>Required</sup> <a name="instances" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.instances"></a>

```python
instances: ComputeBulkPerInstanceConfigInstancesList
```

- *Type:* <a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesList">ComputeBulkPerInstanceConfigInstancesList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.timeouts"></a>

```python
timeouts: ComputeBulkPerInstanceConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference">ComputeBulkPerInstanceConfigTimeoutsOutputReference</a>

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instance_group_manager_input`<sup>Optional</sup> <a name="instance_group_manager_input" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.instanceGroupManagerInput"></a>

```python
instance_group_manager_input: str
```

- *Type:* str

---

##### `instances_input`<sup>Optional</sup> <a name="instances_input" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.instancesInput"></a>

```python
instances_input: IResolvable | typing.List[ComputeBulkPerInstanceConfigInstances]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstances">ComputeBulkPerInstanceConfigInstances</a>]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | ComputeBulkPerInstanceConfigTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeouts">ComputeBulkPerInstanceConfigTimeouts</a>

---

##### `zone_input`<sup>Optional</sup> <a name="zone_input" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.zoneInput"></a>

```python
zone_input: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance_group_manager`<sup>Required</sup> <a name="instance_group_manager" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.instanceGroupManager"></a>

```python
instance_group_manager: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.zone"></a>

```python
zone: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeBulkPerInstanceConfigConfig <a name="ComputeBulkPerInstanceConfigConfig" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigConfig.Initializer"></a>

```python
from cdktn_provider_google import compute_bulk_per_instance_config

computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  instance_group_manager: str,
  deletion_policy: str = None,
  id: str = None,
  instances: IResolvable | typing.List[ComputeBulkPerInstanceConfigInstances] = None,
  project: str = None,
  timeouts: ComputeBulkPerInstanceConfigTimeouts = None,
  zone: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigConfig.property.instanceGroupManager">instance_group_manager</a></code> | <code>str</code> | The instance group manager this instance config is part of. |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_bulk_per_instance_config#id ComputeBulkPerInstanceConfig#id}. |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigConfig.property.instances">instances</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstances">ComputeBulkPerInstanceConfigInstances</a>]</code> | instances block. |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_bulk_per_instance_config#project ComputeBulkPerInstanceConfig#project}. |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeouts">ComputeBulkPerInstanceConfigTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigConfig.property.zone">zone</a></code> | <code>str</code> | Zone where the containing instance group manager is located. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `instance_group_manager`<sup>Required</sup> <a name="instance_group_manager" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigConfig.property.instanceGroupManager"></a>

```python
instance_group_manager: str
```

- *Type:* str

The instance group manager this instance config is part of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_bulk_per_instance_config#instance_group_manager ComputeBulkPerInstanceConfig#instance_group_manager}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_bulk_per_instance_config#deletion_policy ComputeBulkPerInstanceConfig#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_bulk_per_instance_config#id ComputeBulkPerInstanceConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instances`<sup>Optional</sup> <a name="instances" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigConfig.property.instances"></a>

```python
instances: IResolvable | typing.List[ComputeBulkPerInstanceConfigInstances]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstances">ComputeBulkPerInstanceConfigInstances</a>]

instances block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_bulk_per_instance_config#instances ComputeBulkPerInstanceConfig#instances}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_bulk_per_instance_config#project ComputeBulkPerInstanceConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigConfig.property.timeouts"></a>

```python
timeouts: ComputeBulkPerInstanceConfigTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeouts">ComputeBulkPerInstanceConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_bulk_per_instance_config#timeouts ComputeBulkPerInstanceConfig#timeouts}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigConfig.property.zone"></a>

```python
zone: str
```

- *Type:* str

Zone where the containing instance group manager is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_bulk_per_instance_config#zone ComputeBulkPerInstanceConfig#zone}

---

### ComputeBulkPerInstanceConfigInstances <a name="ComputeBulkPerInstanceConfigInstances" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstances"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstances.Initializer"></a>

```python
from cdktn_provider_google import compute_bulk_per_instance_config

computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstances(
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstances.property.name">name</a></code> | <code>str</code> | The name for this per-instance config and its corresponding instance. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstances.property.name"></a>

```python
name: str
```

- *Type:* str

The name for this per-instance config and its corresponding instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_bulk_per_instance_config#name ComputeBulkPerInstanceConfig#name}

---

### ComputeBulkPerInstanceConfigTimeouts <a name="ComputeBulkPerInstanceConfigTimeouts" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeouts.Initializer"></a>

```python
from cdktn_provider_google import compute_bulk_per_instance_config

computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_bulk_per_instance_config#create ComputeBulkPerInstanceConfig#create}. |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_bulk_per_instance_config#delete ComputeBulkPerInstanceConfig#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_bulk_per_instance_config#create ComputeBulkPerInstanceConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/compute_bulk_per_instance_config#delete ComputeBulkPerInstanceConfig#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeBulkPerInstanceConfigInstancesList <a name="ComputeBulkPerInstanceConfigInstancesList" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesList.Initializer"></a>

```python
from cdktn_provider_google import compute_bulk_per_instance_config

computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComputeBulkPerInstanceConfigInstancesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstances">ComputeBulkPerInstanceConfigInstances</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ComputeBulkPerInstanceConfigInstances]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstances">ComputeBulkPerInstanceConfigInstances</a>]

---


### ComputeBulkPerInstanceConfigInstancesOutputReference <a name="ComputeBulkPerInstanceConfigInstancesOutputReference" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.Initializer"></a>

```python
from cdktn_provider_google import compute_bulk_per_instance_config

computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstances">ComputeBulkPerInstanceConfigInstances</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstancesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ComputeBulkPerInstanceConfigInstances
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigInstances">ComputeBulkPerInstanceConfigInstances</a>

---


### ComputeBulkPerInstanceConfigTimeoutsOutputReference <a name="ComputeBulkPerInstanceConfigTimeoutsOutputReference" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import compute_bulk_per_instance_config

computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeouts">ComputeBulkPerInstanceConfigTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ComputeBulkPerInstanceConfigTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeBulkPerInstanceConfig.ComputeBulkPerInstanceConfigTimeouts">ComputeBulkPerInstanceConfigTimeouts</a>

---



