# `computeRegionCompositeHealthCheck` Submodule <a name="`computeRegionCompositeHealthCheck` Submodule" id="@cdktn/provider-google.computeRegionCompositeHealthCheck"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeRegionCompositeHealthCheck <a name="ComputeRegionCompositeHealthCheck" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/compute_region_composite_health_check google_compute_region_composite_health_check}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.Initializer"></a>

```python
from cdktn_provider_google import compute_region_composite_health_check

computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  health_destination: str,
  name: str,
  region: str,
  deletion_policy: str = None,
  description: str = None,
  health_sources: typing.List[str] = None,
  project: str = None,
  timeouts: ComputeRegionCompositeHealthCheckTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.Initializer.parameter.healthDestination">health_destination</a></code> | <code>str</code> | URL to the destination resource. |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the resource. |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.Initializer.parameter.region">region</a></code> | <code>str</code> | URL of the region where the composite health check resides. |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.Initializer.parameter.description">description</a></code> | <code>str</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.Initializer.parameter.healthSources">health_sources</a></code> | <code>typing.List[str]</code> | URLs to the HealthSource resources whose results are AND'ed. |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/compute_region_composite_health_check#project ComputeRegionCompositeHealthCheck#project}. |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeouts">ComputeRegionCompositeHealthCheckTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `health_destination`<sup>Required</sup> <a name="health_destination" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.Initializer.parameter.healthDestination"></a>

- *Type:* str

URL to the destination resource.

Must be set. Must be a
ForwardingRule. The ForwardingRule must have
load balancing scheme INTERNAL or
INTERNAL_MANAGED and must be regional and in the same region
as the CompositeHealthCheck (cross-region deployment for
INTERNAL_MANAGED is not supported). Can be mutated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/compute_region_composite_health_check#health_destination ComputeRegionCompositeHealthCheck#health_destination}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.Initializer.parameter.name"></a>

- *Type:* str

Name of the resource.

Provided by the client when the resource is created.
The name must be 1-63 characters long, and comply with RFC1035.
Specifically, the name must be 1-63 characters long and match the regular
expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the first
character must be a lowercase letter, and all following characters must
be a dash, lowercase letter, or digit, except the last character, which
cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/compute_region_composite_health_check#name ComputeRegionCompositeHealthCheck#name}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.Initializer.parameter.region"></a>

- *Type:* str

URL of the region where the composite health check resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/compute_region_composite_health_check#region ComputeRegionCompositeHealthCheck#region}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/compute_region_composite_health_check#deletion_policy ComputeRegionCompositeHealthCheck#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.Initializer.parameter.description"></a>

- *Type:* str

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/compute_region_composite_health_check#description ComputeRegionCompositeHealthCheck#description}

---

##### `health_sources`<sup>Optional</sup> <a name="health_sources" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.Initializer.parameter.healthSources"></a>

- *Type:* typing.List[str]

URLs to the HealthSource resources whose results are AND'ed.

I.e. he aggregated result is is HEALTHY only if all sources
are HEALTHY. Must have at least 1. Must not have more than 10.
Must be regional and in the same region as the
CompositeHealthCheck. Can be mutated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/compute_region_composite_health_check#health_sources ComputeRegionCompositeHealthCheck#health_sources}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/compute_region_composite_health_check#project ComputeRegionCompositeHealthCheck#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeouts">ComputeRegionCompositeHealthCheckTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/compute_region_composite_health_check#timeouts ComputeRegionCompositeHealthCheck#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.resetHealthSources">reset_health_sources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/compute_region_composite_health_check#create ComputeRegionCompositeHealthCheck#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/compute_region_composite_health_check#delete ComputeRegionCompositeHealthCheck#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/compute_region_composite_health_check#update ComputeRegionCompositeHealthCheck#update}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_health_sources` <a name="reset_health_sources" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.resetHealthSources"></a>

```python
def reset_health_sources() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ComputeRegionCompositeHealthCheck resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.isConstruct"></a>

```python
from cdktn_provider_google import compute_region_composite_health_check

computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.isTerraformElement"></a>

```python
from cdktn_provider_google import compute_region_composite_health_check

computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.isTerraformResource"></a>

```python
from cdktn_provider_google import compute_region_composite_health_check

computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.generateConfigForImport"></a>

```python
from cdktn_provider_google import compute_region_composite_health_check

computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ComputeRegionCompositeHealthCheck resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ComputeRegionCompositeHealthCheck to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ComputeRegionCompositeHealthCheck that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/compute_region_composite_health_check#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ComputeRegionCompositeHealthCheck to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.creationTimestamp">creation_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.fingerprint">fingerprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.selfLinkWithId">self_link_with_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference">ComputeRegionCompositeHealthCheckTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.healthDestinationInput">health_destination_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.healthSourcesInput">health_sources_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeouts">ComputeRegionCompositeHealthCheckTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.healthDestination">health_destination</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.healthSources">health_sources</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `creation_timestamp`<sup>Required</sup> <a name="creation_timestamp" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.creationTimestamp"></a>

```python
creation_timestamp: str
```

- *Type:* str

---

##### `fingerprint`<sup>Required</sup> <a name="fingerprint" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.fingerprint"></a>

```python
fingerprint: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `self_link_with_id`<sup>Required</sup> <a name="self_link_with_id" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.selfLinkWithId"></a>

```python
self_link_with_id: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.timeouts"></a>

```python
timeouts: ComputeRegionCompositeHealthCheckTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference">ComputeRegionCompositeHealthCheckTimeoutsOutputReference</a>

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `health_destination_input`<sup>Optional</sup> <a name="health_destination_input" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.healthDestinationInput"></a>

```python
health_destination_input: str
```

- *Type:* str

---

##### `health_sources_input`<sup>Optional</sup> <a name="health_sources_input" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.healthSourcesInput"></a>

```python
health_sources_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | ComputeRegionCompositeHealthCheckTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeouts">ComputeRegionCompositeHealthCheckTimeouts</a>

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `health_destination`<sup>Required</sup> <a name="health_destination" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.healthDestination"></a>

```python
health_destination: str
```

- *Type:* str

---

##### `health_sources`<sup>Required</sup> <a name="health_sources" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.healthSources"></a>

```python
health_sources: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheck.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeRegionCompositeHealthCheckConfig <a name="ComputeRegionCompositeHealthCheckConfig" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckConfig.Initializer"></a>

```python
from cdktn_provider_google import compute_region_composite_health_check

computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  health_destination: str,
  name: str,
  region: str,
  deletion_policy: str = None,
  description: str = None,
  health_sources: typing.List[str] = None,
  project: str = None,
  timeouts: ComputeRegionCompositeHealthCheckTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckConfig.property.healthDestination">health_destination</a></code> | <code>str</code> | URL to the destination resource. |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckConfig.property.name">name</a></code> | <code>str</code> | Name of the resource. |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckConfig.property.region">region</a></code> | <code>str</code> | URL of the region where the composite health check resides. |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckConfig.property.description">description</a></code> | <code>str</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckConfig.property.healthSources">health_sources</a></code> | <code>typing.List[str]</code> | URLs to the HealthSource resources whose results are AND'ed. |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/compute_region_composite_health_check#project ComputeRegionCompositeHealthCheck#project}. |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeouts">ComputeRegionCompositeHealthCheckTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `health_destination`<sup>Required</sup> <a name="health_destination" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckConfig.property.healthDestination"></a>

```python
health_destination: str
```

- *Type:* str

URL to the destination resource.

Must be set. Must be a
ForwardingRule. The ForwardingRule must have
load balancing scheme INTERNAL or
INTERNAL_MANAGED and must be regional and in the same region
as the CompositeHealthCheck (cross-region deployment for
INTERNAL_MANAGED is not supported). Can be mutated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/compute_region_composite_health_check#health_destination ComputeRegionCompositeHealthCheck#health_destination}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the resource.

Provided by the client when the resource is created.
The name must be 1-63 characters long, and comply with RFC1035.
Specifically, the name must be 1-63 characters long and match the regular
expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the first
character must be a lowercase letter, and all following characters must
be a dash, lowercase letter, or digit, except the last character, which
cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/compute_region_composite_health_check#name ComputeRegionCompositeHealthCheck#name}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckConfig.property.region"></a>

```python
region: str
```

- *Type:* str

URL of the region where the composite health check resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/compute_region_composite_health_check#region ComputeRegionCompositeHealthCheck#region}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/compute_region_composite_health_check#deletion_policy ComputeRegionCompositeHealthCheck#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckConfig.property.description"></a>

```python
description: str
```

- *Type:* str

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/compute_region_composite_health_check#description ComputeRegionCompositeHealthCheck#description}

---

##### `health_sources`<sup>Optional</sup> <a name="health_sources" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckConfig.property.healthSources"></a>

```python
health_sources: typing.List[str]
```

- *Type:* typing.List[str]

URLs to the HealthSource resources whose results are AND'ed.

I.e. he aggregated result is is HEALTHY only if all sources
are HEALTHY. Must have at least 1. Must not have more than 10.
Must be regional and in the same region as the
CompositeHealthCheck. Can be mutated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/compute_region_composite_health_check#health_sources ComputeRegionCompositeHealthCheck#health_sources}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/compute_region_composite_health_check#project ComputeRegionCompositeHealthCheck#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckConfig.property.timeouts"></a>

```python
timeouts: ComputeRegionCompositeHealthCheckTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeouts">ComputeRegionCompositeHealthCheckTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/compute_region_composite_health_check#timeouts ComputeRegionCompositeHealthCheck#timeouts}

---

### ComputeRegionCompositeHealthCheckTimeouts <a name="ComputeRegionCompositeHealthCheckTimeouts" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeouts.Initializer"></a>

```python
from cdktn_provider_google import compute_region_composite_health_check

computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/compute_region_composite_health_check#create ComputeRegionCompositeHealthCheck#create}. |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/compute_region_composite_health_check#delete ComputeRegionCompositeHealthCheck#delete}. |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/compute_region_composite_health_check#update ComputeRegionCompositeHealthCheck#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/compute_region_composite_health_check#create ComputeRegionCompositeHealthCheck#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/compute_region_composite_health_check#delete ComputeRegionCompositeHealthCheck#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/compute_region_composite_health_check#update ComputeRegionCompositeHealthCheck#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeRegionCompositeHealthCheckTimeoutsOutputReference <a name="ComputeRegionCompositeHealthCheckTimeoutsOutputReference" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import compute_region_composite_health_check

computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeouts">ComputeRegionCompositeHealthCheckTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ComputeRegionCompositeHealthCheckTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeRegionCompositeHealthCheck.ComputeRegionCompositeHealthCheckTimeouts">ComputeRegionCompositeHealthCheckTimeouts</a>

---



