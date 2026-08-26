# `computeRolloutPlan` Submodule <a name="`computeRolloutPlan` Submodule" id="@cdktn/provider-google.computeRolloutPlan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeRolloutPlan <a name="ComputeRolloutPlan" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_rollout_plan google_compute_rollout_plan}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.Initializer"></a>

```python
from cdktn_provider_google import compute_rollout_plan

computeRolloutPlan.ComputeRolloutPlan(
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
  waves: IResolvable | typing.List[ComputeRolloutPlanWaves],
  deletion_policy: str = None,
  description: str = None,
  id: str = None,
  location_scope: str = None,
  project: str = None,
  timeouts: ComputeRolloutPlanTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the resource. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.Initializer.parameter.waves">waves</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWaves">ComputeRolloutPlanWaves</a>]</code> | waves block. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.Initializer.parameter.description">description</a></code> | <code>str</code> | An optional description of this resource. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_rollout_plan#id ComputeRolloutPlan#id}. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.Initializer.parameter.locationScope">location_scope</a></code> | <code>str</code> | The location scope of the rollout plan. Possible values: ["LOCATION_SCOPE_UNSPECIFIED", "ZONAL", "REGIONAL"]. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_rollout_plan#project ComputeRolloutPlan#project}. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeouts">ComputeRolloutPlanTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.Initializer.parameter.name"></a>

- *Type:* str

Name of the resource.

Provided by the client when the resource is created.
The name must be 1-63 characters long, and comply with RFC1035.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_rollout_plan#name ComputeRolloutPlan#name}

---

##### `waves`<sup>Required</sup> <a name="waves" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.Initializer.parameter.waves"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWaves">ComputeRolloutPlanWaves</a>]

waves block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_rollout_plan#waves ComputeRolloutPlan#waves}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_rollout_plan#deletion_policy ComputeRolloutPlan#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.Initializer.parameter.description"></a>

- *Type:* str

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_rollout_plan#description ComputeRolloutPlan#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_rollout_plan#id ComputeRolloutPlan#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location_scope`<sup>Optional</sup> <a name="location_scope" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.Initializer.parameter.locationScope"></a>

- *Type:* str

The location scope of the rollout plan. Possible values: ["LOCATION_SCOPE_UNSPECIFIED", "ZONAL", "REGIONAL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_rollout_plan#location_scope ComputeRolloutPlan#location_scope}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_rollout_plan#project ComputeRolloutPlan#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeouts">ComputeRolloutPlanTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_rollout_plan#timeouts ComputeRolloutPlan#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.putWaves">put_waves</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.resetLocationScope">reset_location_scope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_rollout_plan#create ComputeRolloutPlan#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_rollout_plan#delete ComputeRolloutPlan#delete}.

---

##### `put_waves` <a name="put_waves" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.putWaves"></a>

```python
def put_waves(
  value: IResolvable | typing.List[ComputeRolloutPlanWaves]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.putWaves.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWaves">ComputeRolloutPlanWaves</a>]

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_location_scope` <a name="reset_location_scope" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.resetLocationScope"></a>

```python
def reset_location_scope() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ComputeRolloutPlan resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.isConstruct"></a>

```python
from cdktn_provider_google import compute_rollout_plan

computeRolloutPlan.ComputeRolloutPlan.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.isTerraformElement"></a>

```python
from cdktn_provider_google import compute_rollout_plan

computeRolloutPlan.ComputeRolloutPlan.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.isTerraformResource"></a>

```python
from cdktn_provider_google import compute_rollout_plan

computeRolloutPlan.ComputeRolloutPlan.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.generateConfigForImport"></a>

```python
from cdktn_provider_google import compute_rollout_plan

computeRolloutPlan.ComputeRolloutPlan.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ComputeRolloutPlan resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ComputeRolloutPlan to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ComputeRolloutPlan that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_rollout_plan#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ComputeRolloutPlan to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.selfLink">self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference">ComputeRolloutPlanTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.waves">waves</a></code> | <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesList">ComputeRolloutPlanWavesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.locationScopeInput">location_scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeouts">ComputeRolloutPlanTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.wavesInput">waves_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWaves">ComputeRolloutPlanWaves</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.locationScope">location_scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `self_link`<sup>Required</sup> <a name="self_link" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.timeouts"></a>

```python
timeouts: ComputeRolloutPlanTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference">ComputeRolloutPlanTimeoutsOutputReference</a>

---

##### `waves`<sup>Required</sup> <a name="waves" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.waves"></a>

```python
waves: ComputeRolloutPlanWavesList
```

- *Type:* <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesList">ComputeRolloutPlanWavesList</a>

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_scope_input`<sup>Optional</sup> <a name="location_scope_input" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.locationScopeInput"></a>

```python
location_scope_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | ComputeRolloutPlanTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeouts">ComputeRolloutPlanTimeouts</a>

---

##### `waves_input`<sup>Optional</sup> <a name="waves_input" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.wavesInput"></a>

```python
waves_input: IResolvable | typing.List[ComputeRolloutPlanWaves]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWaves">ComputeRolloutPlanWaves</a>]

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location_scope`<sup>Required</sup> <a name="location_scope" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.locationScope"></a>

```python
location_scope: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlan.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeRolloutPlanConfig <a name="ComputeRolloutPlanConfig" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanConfig.Initializer"></a>

```python
from cdktn_provider_google import compute_rollout_plan

computeRolloutPlan.ComputeRolloutPlanConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  waves: IResolvable | typing.List[ComputeRolloutPlanWaves],
  deletion_policy: str = None,
  description: str = None,
  id: str = None,
  location_scope: str = None,
  project: str = None,
  timeouts: ComputeRolloutPlanTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanConfig.property.name">name</a></code> | <code>str</code> | Name of the resource. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanConfig.property.waves">waves</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWaves">ComputeRolloutPlanWaves</a>]</code> | waves block. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanConfig.property.description">description</a></code> | <code>str</code> | An optional description of this resource. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_rollout_plan#id ComputeRolloutPlan#id}. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanConfig.property.locationScope">location_scope</a></code> | <code>str</code> | The location scope of the rollout plan. Possible values: ["LOCATION_SCOPE_UNSPECIFIED", "ZONAL", "REGIONAL"]. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_rollout_plan#project ComputeRolloutPlan#project}. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeouts">ComputeRolloutPlanTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the resource.

Provided by the client when the resource is created.
The name must be 1-63 characters long, and comply with RFC1035.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_rollout_plan#name ComputeRolloutPlan#name}

---

##### `waves`<sup>Required</sup> <a name="waves" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanConfig.property.waves"></a>

```python
waves: IResolvable | typing.List[ComputeRolloutPlanWaves]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWaves">ComputeRolloutPlanWaves</a>]

waves block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_rollout_plan#waves ComputeRolloutPlan#waves}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_rollout_plan#deletion_policy ComputeRolloutPlan#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanConfig.property.description"></a>

```python
description: str
```

- *Type:* str

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_rollout_plan#description ComputeRolloutPlan#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_rollout_plan#id ComputeRolloutPlan#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location_scope`<sup>Optional</sup> <a name="location_scope" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanConfig.property.locationScope"></a>

```python
location_scope: str
```

- *Type:* str

The location scope of the rollout plan. Possible values: ["LOCATION_SCOPE_UNSPECIFIED", "ZONAL", "REGIONAL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_rollout_plan#location_scope ComputeRolloutPlan#location_scope}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_rollout_plan#project ComputeRolloutPlan#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanConfig.property.timeouts"></a>

```python
timeouts: ComputeRolloutPlanTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeouts">ComputeRolloutPlanTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_rollout_plan#timeouts ComputeRolloutPlan#timeouts}

---

### ComputeRolloutPlanTimeouts <a name="ComputeRolloutPlanTimeouts" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeouts.Initializer"></a>

```python
from cdktn_provider_google import compute_rollout_plan

computeRolloutPlan.ComputeRolloutPlanTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_rollout_plan#create ComputeRolloutPlan#create}. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_rollout_plan#delete ComputeRolloutPlan#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_rollout_plan#create ComputeRolloutPlan#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_rollout_plan#delete ComputeRolloutPlan#delete}.

---

### ComputeRolloutPlanWaves <a name="ComputeRolloutPlanWaves" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWaves"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWaves.Initializer"></a>

```python
from cdktn_provider_google import compute_rollout_plan

computeRolloutPlan.ComputeRolloutPlanWaves(
  selectors: IResolvable | typing.List[ComputeRolloutPlanWavesSelectors],
  validation: ComputeRolloutPlanWavesValidation,
  display_name: str = None,
  orchestration_options: ComputeRolloutPlanWavesOrchestrationOptions = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWaves.property.selectors">selectors</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectors">ComputeRolloutPlanWavesSelectors</a>]</code> | selectors block. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWaves.property.validation">validation</a></code> | <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidation">ComputeRolloutPlanWavesValidation</a></code> | validation block. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWaves.property.displayName">display_name</a></code> | <code>str</code> | The display name of this wave of the rollout plan. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWaves.property.orchestrationOptions">orchestration_options</a></code> | <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptions">ComputeRolloutPlanWavesOrchestrationOptions</a></code> | orchestration_options block. |

---

##### `selectors`<sup>Required</sup> <a name="selectors" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWaves.property.selectors"></a>

```python
selectors: IResolvable | typing.List[ComputeRolloutPlanWavesSelectors]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectors">ComputeRolloutPlanWavesSelectors</a>]

selectors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_rollout_plan#selectors ComputeRolloutPlan#selectors}

---

##### `validation`<sup>Required</sup> <a name="validation" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWaves.property.validation"></a>

```python
validation: ComputeRolloutPlanWavesValidation
```

- *Type:* <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidation">ComputeRolloutPlanWavesValidation</a>

validation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_rollout_plan#validation ComputeRolloutPlan#validation}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWaves.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The display name of this wave of the rollout plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_rollout_plan#display_name ComputeRolloutPlan#display_name}

---

##### `orchestration_options`<sup>Optional</sup> <a name="orchestration_options" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWaves.property.orchestrationOptions"></a>

```python
orchestration_options: ComputeRolloutPlanWavesOrchestrationOptions
```

- *Type:* <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptions">ComputeRolloutPlanWavesOrchestrationOptions</a>

orchestration_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_rollout_plan#orchestration_options ComputeRolloutPlan#orchestration_options}

---

### ComputeRolloutPlanWavesOrchestrationOptions <a name="ComputeRolloutPlanWavesOrchestrationOptions" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptions.Initializer"></a>

```python
from cdktn_provider_google import compute_rollout_plan

computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptions(
  delays: IResolvable | typing.List[ComputeRolloutPlanWavesOrchestrationOptionsDelays] = None,
  max_concurrent_locations: typing.Union[int, float] = None,
  max_concurrent_resources_per_location: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptions.property.delays">delays</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelays">ComputeRolloutPlanWavesOrchestrationOptionsDelays</a>]</code> | delays block. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptions.property.maxConcurrentLocations">max_concurrent_locations</a></code> | <code>typing.Union[int, float]</code> | Maximum number of locations to be orchestrated in parallel. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptions.property.maxConcurrentResourcesPerLocation">max_concurrent_resources_per_location</a></code> | <code>typing.Union[int, float]</code> | Maximum number of resources to be orchestrated per location in parallel. |

---

##### `delays`<sup>Optional</sup> <a name="delays" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptions.property.delays"></a>

```python
delays: IResolvable | typing.List[ComputeRolloutPlanWavesOrchestrationOptionsDelays]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelays">ComputeRolloutPlanWavesOrchestrationOptionsDelays</a>]

delays block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_rollout_plan#delays ComputeRolloutPlan#delays}

---

##### `max_concurrent_locations`<sup>Optional</sup> <a name="max_concurrent_locations" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptions.property.maxConcurrentLocations"></a>

```python
max_concurrent_locations: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum number of locations to be orchestrated in parallel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_rollout_plan#max_concurrent_locations ComputeRolloutPlan#max_concurrent_locations}

---

##### `max_concurrent_resources_per_location`<sup>Optional</sup> <a name="max_concurrent_resources_per_location" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptions.property.maxConcurrentResourcesPerLocation"></a>

```python
max_concurrent_resources_per_location: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum number of resources to be orchestrated per location in parallel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_rollout_plan#max_concurrent_resources_per_location ComputeRolloutPlan#max_concurrent_resources_per_location}

---

### ComputeRolloutPlanWavesOrchestrationOptionsDelays <a name="ComputeRolloutPlanWavesOrchestrationOptionsDelays" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelays"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelays.Initializer"></a>

```python
from cdktn_provider_google import compute_rollout_plan

computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelays(
  delimiter: str = None,
  duration: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelays.property.delimiter">delimiter</a></code> | <code>str</code> | Controls whether the delay should only be added between batches of projects corresponding to different locations, or also between batches of projects corresponding to the same location. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelays.property.duration">duration</a></code> | <code>str</code> | The duration of the delay, if any, to be added between batches of projects. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelays.property.type">type</a></code> | <code>str</code> | Controls whether the specified duration is to be added at the end of each batch, or if the total processing time for each batch will be padded if needed to meet the specified duration. |

---

##### `delimiter`<sup>Optional</sup> <a name="delimiter" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelays.property.delimiter"></a>

```python
delimiter: str
```

- *Type:* str

Controls whether the delay should only be added between batches of projects corresponding to different locations, or also between batches of projects corresponding to the same location.

Possible values: ["DELIMITER_UNSPECIFIED", "DELIMITER_LOCATION", "DELIMITER_BATCH"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_rollout_plan#delimiter ComputeRolloutPlan#delimiter}

---

##### `duration`<sup>Optional</sup> <a name="duration" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelays.property.duration"></a>

```python
duration: str
```

- *Type:* str

The duration of the delay, if any, to be added between batches of projects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_rollout_plan#duration ComputeRolloutPlan#duration}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelays.property.type"></a>

```python
type: str
```

- *Type:* str

Controls whether the specified duration is to be added at the end of each batch, or if the total processing time for each batch will be padded if needed to meet the specified duration.

Possible values: ["TYPE_UNSPECIFIED", "TYPE_OFFSET", "TYPE_MINIMUM"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_rollout_plan#type ComputeRolloutPlan#type}

---

### ComputeRolloutPlanWavesSelectors <a name="ComputeRolloutPlanWavesSelectors" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectors.Initializer"></a>

```python
from cdktn_provider_google import compute_rollout_plan

computeRolloutPlan.ComputeRolloutPlanWavesSelectors(
  location_selector: ComputeRolloutPlanWavesSelectorsLocationSelector = None,
  resource_hierarchy_selector: ComputeRolloutPlanWavesSelectorsResourceHierarchySelector = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectors.property.locationSelector">location_selector</a></code> | <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelector">ComputeRolloutPlanWavesSelectorsLocationSelector</a></code> | location_selector block. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectors.property.resourceHierarchySelector">resource_hierarchy_selector</a></code> | <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelector">ComputeRolloutPlanWavesSelectorsResourceHierarchySelector</a></code> | resource_hierarchy_selector block. |

---

##### `location_selector`<sup>Optional</sup> <a name="location_selector" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectors.property.locationSelector"></a>

```python
location_selector: ComputeRolloutPlanWavesSelectorsLocationSelector
```

- *Type:* <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelector">ComputeRolloutPlanWavesSelectorsLocationSelector</a>

location_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_rollout_plan#location_selector ComputeRolloutPlan#location_selector}

---

##### `resource_hierarchy_selector`<sup>Optional</sup> <a name="resource_hierarchy_selector" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectors.property.resourceHierarchySelector"></a>

```python
resource_hierarchy_selector: ComputeRolloutPlanWavesSelectorsResourceHierarchySelector
```

- *Type:* <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelector">ComputeRolloutPlanWavesSelectorsResourceHierarchySelector</a>

resource_hierarchy_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_rollout_plan#resource_hierarchy_selector ComputeRolloutPlan#resource_hierarchy_selector}

---

### ComputeRolloutPlanWavesSelectorsLocationSelector <a name="ComputeRolloutPlanWavesSelectorsLocationSelector" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelector"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelector.Initializer"></a>

```python
from cdktn_provider_google import compute_rollout_plan

computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelector(
  included_locations: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelector.property.includedLocations">included_locations</a></code> | <code>typing.List[str]</code> | Example: "us-central1-a". |

---

##### `included_locations`<sup>Optional</sup> <a name="included_locations" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelector.property.includedLocations"></a>

```python
included_locations: typing.List[str]
```

- *Type:* typing.List[str]

Example: "us-central1-a".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_rollout_plan#included_locations ComputeRolloutPlan#included_locations}

---

### ComputeRolloutPlanWavesSelectorsResourceHierarchySelector <a name="ComputeRolloutPlanWavesSelectorsResourceHierarchySelector" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelector"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelector.Initializer"></a>

```python
from cdktn_provider_google import compute_rollout_plan

computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelector(
  included_folders: typing.List[str] = None,
  included_organizations: typing.List[str] = None,
  included_projects: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelector.property.includedFolders">included_folders</a></code> | <code>typing.List[str]</code> | Format: "folders/{folder_id}". |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelector.property.includedOrganizations">included_organizations</a></code> | <code>typing.List[str]</code> | Format: "organizations/{organization_id}". |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelector.property.includedProjects">included_projects</a></code> | <code>typing.List[str]</code> | Format: "projects/{project_id}". |

---

##### `included_folders`<sup>Optional</sup> <a name="included_folders" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelector.property.includedFolders"></a>

```python
included_folders: typing.List[str]
```

- *Type:* typing.List[str]

Format: "folders/{folder_id}".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_rollout_plan#included_folders ComputeRolloutPlan#included_folders}

---

##### `included_organizations`<sup>Optional</sup> <a name="included_organizations" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelector.property.includedOrganizations"></a>

```python
included_organizations: typing.List[str]
```

- *Type:* typing.List[str]

Format: "organizations/{organization_id}".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_rollout_plan#included_organizations ComputeRolloutPlan#included_organizations}

---

##### `included_projects`<sup>Optional</sup> <a name="included_projects" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelector.property.includedProjects"></a>

```python
included_projects: typing.List[str]
```

- *Type:* typing.List[str]

Format: "projects/{project_id}".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_rollout_plan#included_projects ComputeRolloutPlan#included_projects}

---

### ComputeRolloutPlanWavesValidation <a name="ComputeRolloutPlanWavesValidation" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidation.Initializer"></a>

```python
from cdktn_provider_google import compute_rollout_plan

computeRolloutPlan.ComputeRolloutPlanWavesValidation(
  type: str,
  time_based_validation_metadata: ComputeRolloutPlanWavesValidationTimeBasedValidationMetadata = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidation.property.type">type</a></code> | <code>str</code> | The type of the validation. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidation.property.timeBasedValidationMetadata">time_based_validation_metadata</a></code> | <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadata">ComputeRolloutPlanWavesValidationTimeBasedValidationMetadata</a></code> | time_based_validation_metadata block. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidation.property.type"></a>

```python
type: str
```

- *Type:* str

The type of the validation.

Possible values:
"manual": The system waits for an end-user approval API before progressing to the next wave.
"time": The system waits for a user specified duration before progressing to the next wave.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_rollout_plan#type ComputeRolloutPlan#type}

---

##### `time_based_validation_metadata`<sup>Optional</sup> <a name="time_based_validation_metadata" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidation.property.timeBasedValidationMetadata"></a>

```python
time_based_validation_metadata: ComputeRolloutPlanWavesValidationTimeBasedValidationMetadata
```

- *Type:* <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadata">ComputeRolloutPlanWavesValidationTimeBasedValidationMetadata</a>

time_based_validation_metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_rollout_plan#time_based_validation_metadata ComputeRolloutPlan#time_based_validation_metadata}

---

### ComputeRolloutPlanWavesValidationTimeBasedValidationMetadata <a name="ComputeRolloutPlanWavesValidationTimeBasedValidationMetadata" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadata.Initializer"></a>

```python
from cdktn_provider_google import compute_rollout_plan

computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadata(
  wait_duration: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadata.property.waitDuration">wait_duration</a></code> | <code>str</code> | The duration that the system waits in between waves. |

---

##### `wait_duration`<sup>Optional</sup> <a name="wait_duration" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadata.property.waitDuration"></a>

```python
wait_duration: str
```

- *Type:* str

The duration that the system waits in between waves.

This wait starts
after all changes in the wave are rolled out.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_rollout_plan#wait_duration ComputeRolloutPlan#wait_duration}

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeRolloutPlanTimeoutsOutputReference <a name="ComputeRolloutPlanTimeoutsOutputReference" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import compute_rollout_plan

computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeouts">ComputeRolloutPlanTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ComputeRolloutPlanTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanTimeouts">ComputeRolloutPlanTimeouts</a>

---


### ComputeRolloutPlanWavesList <a name="ComputeRolloutPlanWavesList" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesList.Initializer"></a>

```python
from cdktn_provider_google import compute_rollout_plan

computeRolloutPlan.ComputeRolloutPlanWavesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComputeRolloutPlanWavesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWaves">ComputeRolloutPlanWaves</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ComputeRolloutPlanWaves]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWaves">ComputeRolloutPlanWaves</a>]

---


### ComputeRolloutPlanWavesOrchestrationOptionsDelaysList <a name="ComputeRolloutPlanWavesOrchestrationOptionsDelaysList" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysList.Initializer"></a>

```python
from cdktn_provider_google import compute_rollout_plan

computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelays">ComputeRolloutPlanWavesOrchestrationOptionsDelays</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ComputeRolloutPlanWavesOrchestrationOptionsDelays]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelays">ComputeRolloutPlanWavesOrchestrationOptionsDelays</a>]

---


### ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference <a name="ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.Initializer"></a>

```python
from cdktn_provider_google import compute_rollout_plan

computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.resetDelimiter">reset_delimiter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.resetDuration">reset_duration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_delimiter` <a name="reset_delimiter" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.resetDelimiter"></a>

```python
def reset_delimiter() -> None
```

##### `reset_duration` <a name="reset_duration" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.resetDuration"></a>

```python
def reset_duration() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.property.delimiterInput">delimiter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.property.durationInput">duration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.property.delimiter">delimiter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.property.duration">duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelays">ComputeRolloutPlanWavesOrchestrationOptionsDelays</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `delimiter_input`<sup>Optional</sup> <a name="delimiter_input" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.property.delimiterInput"></a>

```python
delimiter_input: str
```

- *Type:* str

---

##### `duration_input`<sup>Optional</sup> <a name="duration_input" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.property.durationInput"></a>

```python
duration_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `delimiter`<sup>Required</sup> <a name="delimiter" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.property.delimiter"></a>

```python
delimiter: str
```

- *Type:* str

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.property.duration"></a>

```python
duration: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ComputeRolloutPlanWavesOrchestrationOptionsDelays
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelays">ComputeRolloutPlanWavesOrchestrationOptionsDelays</a>

---


### ComputeRolloutPlanWavesOrchestrationOptionsOutputReference <a name="ComputeRolloutPlanWavesOrchestrationOptionsOutputReference" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import compute_rollout_plan

computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.putDelays">put_delays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.resetDelays">reset_delays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.resetMaxConcurrentLocations">reset_max_concurrent_locations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.resetMaxConcurrentResourcesPerLocation">reset_max_concurrent_resources_per_location</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_delays` <a name="put_delays" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.putDelays"></a>

```python
def put_delays(
  value: IResolvable | typing.List[ComputeRolloutPlanWavesOrchestrationOptionsDelays]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.putDelays.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelays">ComputeRolloutPlanWavesOrchestrationOptionsDelays</a>]

---

##### `reset_delays` <a name="reset_delays" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.resetDelays"></a>

```python
def reset_delays() -> None
```

##### `reset_max_concurrent_locations` <a name="reset_max_concurrent_locations" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.resetMaxConcurrentLocations"></a>

```python
def reset_max_concurrent_locations() -> None
```

##### `reset_max_concurrent_resources_per_location` <a name="reset_max_concurrent_resources_per_location" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.resetMaxConcurrentResourcesPerLocation"></a>

```python
def reset_max_concurrent_resources_per_location() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.property.delays">delays</a></code> | <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysList">ComputeRolloutPlanWavesOrchestrationOptionsDelaysList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.property.delaysInput">delays_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelays">ComputeRolloutPlanWavesOrchestrationOptionsDelays</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.property.maxConcurrentLocationsInput">max_concurrent_locations_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.property.maxConcurrentResourcesPerLocationInput">max_concurrent_resources_per_location_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.property.maxConcurrentLocations">max_concurrent_locations</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.property.maxConcurrentResourcesPerLocation">max_concurrent_resources_per_location</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptions">ComputeRolloutPlanWavesOrchestrationOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `delays`<sup>Required</sup> <a name="delays" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.property.delays"></a>

```python
delays: ComputeRolloutPlanWavesOrchestrationOptionsDelaysList
```

- *Type:* <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelaysList">ComputeRolloutPlanWavesOrchestrationOptionsDelaysList</a>

---

##### `delays_input`<sup>Optional</sup> <a name="delays_input" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.property.delaysInput"></a>

```python
delays_input: IResolvable | typing.List[ComputeRolloutPlanWavesOrchestrationOptionsDelays]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelays">ComputeRolloutPlanWavesOrchestrationOptionsDelays</a>]

---

##### `max_concurrent_locations_input`<sup>Optional</sup> <a name="max_concurrent_locations_input" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.property.maxConcurrentLocationsInput"></a>

```python
max_concurrent_locations_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_concurrent_resources_per_location_input`<sup>Optional</sup> <a name="max_concurrent_resources_per_location_input" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.property.maxConcurrentResourcesPerLocationInput"></a>

```python
max_concurrent_resources_per_location_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_concurrent_locations`<sup>Required</sup> <a name="max_concurrent_locations" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.property.maxConcurrentLocations"></a>

```python
max_concurrent_locations: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_concurrent_resources_per_location`<sup>Required</sup> <a name="max_concurrent_resources_per_location" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.property.maxConcurrentResourcesPerLocation"></a>

```python
max_concurrent_resources_per_location: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference.property.internalValue"></a>

```python
internal_value: ComputeRolloutPlanWavesOrchestrationOptions
```

- *Type:* <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptions">ComputeRolloutPlanWavesOrchestrationOptions</a>

---


### ComputeRolloutPlanWavesOutputReference <a name="ComputeRolloutPlanWavesOutputReference" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.Initializer"></a>

```python
from cdktn_provider_google import compute_rollout_plan

computeRolloutPlan.ComputeRolloutPlanWavesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.putOrchestrationOptions">put_orchestration_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.putSelectors">put_selectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.putValidation">put_validation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.resetOrchestrationOptions">reset_orchestration_options</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_orchestration_options` <a name="put_orchestration_options" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.putOrchestrationOptions"></a>

```python
def put_orchestration_options(
  delays: IResolvable | typing.List[ComputeRolloutPlanWavesOrchestrationOptionsDelays] = None,
  max_concurrent_locations: typing.Union[int, float] = None,
  max_concurrent_resources_per_location: typing.Union[int, float] = None
) -> None
```

###### `delays`<sup>Optional</sup> <a name="delays" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.putOrchestrationOptions.parameter.delays"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsDelays">ComputeRolloutPlanWavesOrchestrationOptionsDelays</a>]

delays block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_rollout_plan#delays ComputeRolloutPlan#delays}

---

###### `max_concurrent_locations`<sup>Optional</sup> <a name="max_concurrent_locations" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.putOrchestrationOptions.parameter.maxConcurrentLocations"></a>

- *Type:* typing.Union[int, float]

Maximum number of locations to be orchestrated in parallel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_rollout_plan#max_concurrent_locations ComputeRolloutPlan#max_concurrent_locations}

---

###### `max_concurrent_resources_per_location`<sup>Optional</sup> <a name="max_concurrent_resources_per_location" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.putOrchestrationOptions.parameter.maxConcurrentResourcesPerLocation"></a>

- *Type:* typing.Union[int, float]

Maximum number of resources to be orchestrated per location in parallel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_rollout_plan#max_concurrent_resources_per_location ComputeRolloutPlan#max_concurrent_resources_per_location}

---

##### `put_selectors` <a name="put_selectors" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.putSelectors"></a>

```python
def put_selectors(
  value: IResolvable | typing.List[ComputeRolloutPlanWavesSelectors]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.putSelectors.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectors">ComputeRolloutPlanWavesSelectors</a>]

---

##### `put_validation` <a name="put_validation" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.putValidation"></a>

```python
def put_validation(
  type: str,
  time_based_validation_metadata: ComputeRolloutPlanWavesValidationTimeBasedValidationMetadata = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.putValidation.parameter.type"></a>

- *Type:* str

The type of the validation.

Possible values:
"manual": The system waits for an end-user approval API before progressing to the next wave.
"time": The system waits for a user specified duration before progressing to the next wave.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_rollout_plan#type ComputeRolloutPlan#type}

---

###### `time_based_validation_metadata`<sup>Optional</sup> <a name="time_based_validation_metadata" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.putValidation.parameter.timeBasedValidationMetadata"></a>

- *Type:* <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadata">ComputeRolloutPlanWavesValidationTimeBasedValidationMetadata</a>

time_based_validation_metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_rollout_plan#time_based_validation_metadata ComputeRolloutPlan#time_based_validation_metadata}

---

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_orchestration_options` <a name="reset_orchestration_options" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.resetOrchestrationOptions"></a>

```python
def reset_orchestration_options() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.property.number">number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.property.orchestrationOptions">orchestration_options</a></code> | <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference">ComputeRolloutPlanWavesOrchestrationOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.property.selectors">selectors</a></code> | <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsList">ComputeRolloutPlanWavesSelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.property.validation">validation</a></code> | <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference">ComputeRolloutPlanWavesValidationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.property.orchestrationOptionsInput">orchestration_options_input</a></code> | <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptions">ComputeRolloutPlanWavesOrchestrationOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.property.selectorsInput">selectors_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectors">ComputeRolloutPlanWavesSelectors</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.property.validationInput">validation_input</a></code> | <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidation">ComputeRolloutPlanWavesValidation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWaves">ComputeRolloutPlanWaves</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `number`<sup>Required</sup> <a name="number" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.property.number"></a>

```python
number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `orchestration_options`<sup>Required</sup> <a name="orchestration_options" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.property.orchestrationOptions"></a>

```python
orchestration_options: ComputeRolloutPlanWavesOrchestrationOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptionsOutputReference">ComputeRolloutPlanWavesOrchestrationOptionsOutputReference</a>

---

##### `selectors`<sup>Required</sup> <a name="selectors" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.property.selectors"></a>

```python
selectors: ComputeRolloutPlanWavesSelectorsList
```

- *Type:* <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsList">ComputeRolloutPlanWavesSelectorsList</a>

---

##### `validation`<sup>Required</sup> <a name="validation" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.property.validation"></a>

```python
validation: ComputeRolloutPlanWavesValidationOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference">ComputeRolloutPlanWavesValidationOutputReference</a>

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `orchestration_options_input`<sup>Optional</sup> <a name="orchestration_options_input" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.property.orchestrationOptionsInput"></a>

```python
orchestration_options_input: ComputeRolloutPlanWavesOrchestrationOptions
```

- *Type:* <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOrchestrationOptions">ComputeRolloutPlanWavesOrchestrationOptions</a>

---

##### `selectors_input`<sup>Optional</sup> <a name="selectors_input" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.property.selectorsInput"></a>

```python
selectors_input: IResolvable | typing.List[ComputeRolloutPlanWavesSelectors]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectors">ComputeRolloutPlanWavesSelectors</a>]

---

##### `validation_input`<sup>Optional</sup> <a name="validation_input" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.property.validationInput"></a>

```python
validation_input: ComputeRolloutPlanWavesValidation
```

- *Type:* <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidation">ComputeRolloutPlanWavesValidation</a>

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ComputeRolloutPlanWaves
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWaves">ComputeRolloutPlanWaves</a>

---


### ComputeRolloutPlanWavesSelectorsList <a name="ComputeRolloutPlanWavesSelectorsList" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsList.Initializer"></a>

```python
from cdktn_provider_google import compute_rollout_plan

computeRolloutPlan.ComputeRolloutPlanWavesSelectorsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComputeRolloutPlanWavesSelectorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectors">ComputeRolloutPlanWavesSelectors</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ComputeRolloutPlanWavesSelectors]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectors">ComputeRolloutPlanWavesSelectors</a>]

---


### ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference <a name="ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.Initializer"></a>

```python
from cdktn_provider_google import compute_rollout_plan

computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.resetIncludedLocations">reset_included_locations</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_included_locations` <a name="reset_included_locations" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.resetIncludedLocations"></a>

```python
def reset_included_locations() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.property.includedLocationsInput">included_locations_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.property.includedLocations">included_locations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelector">ComputeRolloutPlanWavesSelectorsLocationSelector</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `included_locations_input`<sup>Optional</sup> <a name="included_locations_input" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.property.includedLocationsInput"></a>

```python
included_locations_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `included_locations`<sup>Required</sup> <a name="included_locations" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.property.includedLocations"></a>

```python
included_locations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference.property.internalValue"></a>

```python
internal_value: ComputeRolloutPlanWavesSelectorsLocationSelector
```

- *Type:* <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelector">ComputeRolloutPlanWavesSelectorsLocationSelector</a>

---


### ComputeRolloutPlanWavesSelectorsOutputReference <a name="ComputeRolloutPlanWavesSelectorsOutputReference" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import compute_rollout_plan

computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.putLocationSelector">put_location_selector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.putResourceHierarchySelector">put_resource_hierarchy_selector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.resetLocationSelector">reset_location_selector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.resetResourceHierarchySelector">reset_resource_hierarchy_selector</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_location_selector` <a name="put_location_selector" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.putLocationSelector"></a>

```python
def put_location_selector(
  included_locations: typing.List[str] = None
) -> None
```

###### `included_locations`<sup>Optional</sup> <a name="included_locations" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.putLocationSelector.parameter.includedLocations"></a>

- *Type:* typing.List[str]

Example: "us-central1-a".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_rollout_plan#included_locations ComputeRolloutPlan#included_locations}

---

##### `put_resource_hierarchy_selector` <a name="put_resource_hierarchy_selector" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.putResourceHierarchySelector"></a>

```python
def put_resource_hierarchy_selector(
  included_folders: typing.List[str] = None,
  included_organizations: typing.List[str] = None,
  included_projects: typing.List[str] = None
) -> None
```

###### `included_folders`<sup>Optional</sup> <a name="included_folders" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.putResourceHierarchySelector.parameter.includedFolders"></a>

- *Type:* typing.List[str]

Format: "folders/{folder_id}".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_rollout_plan#included_folders ComputeRolloutPlan#included_folders}

---

###### `included_organizations`<sup>Optional</sup> <a name="included_organizations" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.putResourceHierarchySelector.parameter.includedOrganizations"></a>

- *Type:* typing.List[str]

Format: "organizations/{organization_id}".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_rollout_plan#included_organizations ComputeRolloutPlan#included_organizations}

---

###### `included_projects`<sup>Optional</sup> <a name="included_projects" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.putResourceHierarchySelector.parameter.includedProjects"></a>

- *Type:* typing.List[str]

Format: "projects/{project_id}".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_rollout_plan#included_projects ComputeRolloutPlan#included_projects}

---

##### `reset_location_selector` <a name="reset_location_selector" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.resetLocationSelector"></a>

```python
def reset_location_selector() -> None
```

##### `reset_resource_hierarchy_selector` <a name="reset_resource_hierarchy_selector" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.resetResourceHierarchySelector"></a>

```python
def reset_resource_hierarchy_selector() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.property.locationSelector">location_selector</a></code> | <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference">ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.property.resourceHierarchySelector">resource_hierarchy_selector</a></code> | <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference">ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.property.locationSelectorInput">location_selector_input</a></code> | <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelector">ComputeRolloutPlanWavesSelectorsLocationSelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.property.resourceHierarchySelectorInput">resource_hierarchy_selector_input</a></code> | <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelector">ComputeRolloutPlanWavesSelectorsResourceHierarchySelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectors">ComputeRolloutPlanWavesSelectors</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `location_selector`<sup>Required</sup> <a name="location_selector" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.property.locationSelector"></a>

```python
location_selector: ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference">ComputeRolloutPlanWavesSelectorsLocationSelectorOutputReference</a>

---

##### `resource_hierarchy_selector`<sup>Required</sup> <a name="resource_hierarchy_selector" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.property.resourceHierarchySelector"></a>

```python
resource_hierarchy_selector: ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference">ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference</a>

---

##### `location_selector_input`<sup>Optional</sup> <a name="location_selector_input" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.property.locationSelectorInput"></a>

```python
location_selector_input: ComputeRolloutPlanWavesSelectorsLocationSelector
```

- *Type:* <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsLocationSelector">ComputeRolloutPlanWavesSelectorsLocationSelector</a>

---

##### `resource_hierarchy_selector_input`<sup>Optional</sup> <a name="resource_hierarchy_selector_input" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.property.resourceHierarchySelectorInput"></a>

```python
resource_hierarchy_selector_input: ComputeRolloutPlanWavesSelectorsResourceHierarchySelector
```

- *Type:* <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelector">ComputeRolloutPlanWavesSelectorsResourceHierarchySelector</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ComputeRolloutPlanWavesSelectors
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectors">ComputeRolloutPlanWavesSelectors</a>

---


### ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference <a name="ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.Initializer"></a>

```python
from cdktn_provider_google import compute_rollout_plan

computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.resetIncludedFolders">reset_included_folders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.resetIncludedOrganizations">reset_included_organizations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.resetIncludedProjects">reset_included_projects</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_included_folders` <a name="reset_included_folders" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.resetIncludedFolders"></a>

```python
def reset_included_folders() -> None
```

##### `reset_included_organizations` <a name="reset_included_organizations" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.resetIncludedOrganizations"></a>

```python
def reset_included_organizations() -> None
```

##### `reset_included_projects` <a name="reset_included_projects" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.resetIncludedProjects"></a>

```python
def reset_included_projects() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.property.includedFoldersInput">included_folders_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.property.includedOrganizationsInput">included_organizations_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.property.includedProjectsInput">included_projects_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.property.includedFolders">included_folders</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.property.includedOrganizations">included_organizations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.property.includedProjects">included_projects</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelector">ComputeRolloutPlanWavesSelectorsResourceHierarchySelector</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `included_folders_input`<sup>Optional</sup> <a name="included_folders_input" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.property.includedFoldersInput"></a>

```python
included_folders_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `included_organizations_input`<sup>Optional</sup> <a name="included_organizations_input" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.property.includedOrganizationsInput"></a>

```python
included_organizations_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `included_projects_input`<sup>Optional</sup> <a name="included_projects_input" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.property.includedProjectsInput"></a>

```python
included_projects_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `included_folders`<sup>Required</sup> <a name="included_folders" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.property.includedFolders"></a>

```python
included_folders: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `included_organizations`<sup>Required</sup> <a name="included_organizations" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.property.includedOrganizations"></a>

```python
included_organizations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `included_projects`<sup>Required</sup> <a name="included_projects" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.property.includedProjects"></a>

```python
included_projects: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelectorOutputReference.property.internalValue"></a>

```python
internal_value: ComputeRolloutPlanWavesSelectorsResourceHierarchySelector
```

- *Type:* <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesSelectorsResourceHierarchySelector">ComputeRolloutPlanWavesSelectorsResourceHierarchySelector</a>

---


### ComputeRolloutPlanWavesValidationOutputReference <a name="ComputeRolloutPlanWavesValidationOutputReference" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.Initializer"></a>

```python
from cdktn_provider_google import compute_rollout_plan

computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.putTimeBasedValidationMetadata">put_time_based_validation_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.resetTimeBasedValidationMetadata">reset_time_based_validation_metadata</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_time_based_validation_metadata` <a name="put_time_based_validation_metadata" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.putTimeBasedValidationMetadata"></a>

```python
def put_time_based_validation_metadata(
  wait_duration: str = None
) -> None
```

###### `wait_duration`<sup>Optional</sup> <a name="wait_duration" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.putTimeBasedValidationMetadata.parameter.waitDuration"></a>

- *Type:* str

The duration that the system waits in between waves.

This wait starts
after all changes in the wave are rolled out.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/compute_rollout_plan#wait_duration ComputeRolloutPlan#wait_duration}

---

##### `reset_time_based_validation_metadata` <a name="reset_time_based_validation_metadata" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.resetTimeBasedValidationMetadata"></a>

```python
def reset_time_based_validation_metadata() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.property.timeBasedValidationMetadata">time_based_validation_metadata</a></code> | <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference">ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.property.timeBasedValidationMetadataInput">time_based_validation_metadata_input</a></code> | <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadata">ComputeRolloutPlanWavesValidationTimeBasedValidationMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidation">ComputeRolloutPlanWavesValidation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `time_based_validation_metadata`<sup>Required</sup> <a name="time_based_validation_metadata" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.property.timeBasedValidationMetadata"></a>

```python
time_based_validation_metadata: ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference">ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference</a>

---

##### `time_based_validation_metadata_input`<sup>Optional</sup> <a name="time_based_validation_metadata_input" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.property.timeBasedValidationMetadataInput"></a>

```python
time_based_validation_metadata_input: ComputeRolloutPlanWavesValidationTimeBasedValidationMetadata
```

- *Type:* <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadata">ComputeRolloutPlanWavesValidationTimeBasedValidationMetadata</a>

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationOutputReference.property.internalValue"></a>

```python
internal_value: ComputeRolloutPlanWavesValidation
```

- *Type:* <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidation">ComputeRolloutPlanWavesValidation</a>

---


### ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference <a name="ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.Initializer"></a>

```python
from cdktn_provider_google import compute_rollout_plan

computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.resetWaitDuration">reset_wait_duration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_wait_duration` <a name="reset_wait_duration" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.resetWaitDuration"></a>

```python
def reset_wait_duration() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.property.waitDurationInput">wait_duration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.property.waitDuration">wait_duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadata">ComputeRolloutPlanWavesValidationTimeBasedValidationMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `wait_duration_input`<sup>Optional</sup> <a name="wait_duration_input" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.property.waitDurationInput"></a>

```python
wait_duration_input: str
```

- *Type:* str

---

##### `wait_duration`<sup>Required</sup> <a name="wait_duration" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.property.waitDuration"></a>

```python
wait_duration: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadataOutputReference.property.internalValue"></a>

```python
internal_value: ComputeRolloutPlanWavesValidationTimeBasedValidationMetadata
```

- *Type:* <a href="#@cdktn/provider-google.computeRolloutPlan.ComputeRolloutPlanWavesValidationTimeBasedValidationMetadata">ComputeRolloutPlanWavesValidationTimeBasedValidationMetadata</a>

---



