# `computeNetworkEdgeSecurityService` Submodule <a name="`computeNetworkEdgeSecurityService` Submodule" id="@cdktn/provider-google.computeNetworkEdgeSecurityService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeNetworkEdgeSecurityService <a name="ComputeNetworkEdgeSecurityService" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/compute_network_edge_security_service google_compute_network_edge_security_service}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.Initializer"></a>

```python
from cdktn_provider_google import compute_network_edge_security_service

computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService(
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
  deletion_policy: str = None,
  description: str = None,
  id: str = None,
  project: str = None,
  region: str = None,
  security_policy: str = None,
  timeouts: ComputeNetworkEdgeSecurityServiceTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the resource. Provided by the client when the resource is created. |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.Initializer.parameter.description">description</a></code> | <code>str</code> | Free-text description of the resource. |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/compute_network_edge_security_service#id ComputeNetworkEdgeSecurityService#id}. |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/compute_network_edge_security_service#project ComputeNetworkEdgeSecurityService#project}. |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.Initializer.parameter.region">region</a></code> | <code>str</code> | The region of the gateway security policy. |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.Initializer.parameter.securityPolicy">security_policy</a></code> | <code>str</code> | The resource URL for the network edge security service associated with this network edge security service. |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeouts">ComputeNetworkEdgeSecurityServiceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.Initializer.parameter.name"></a>

- *Type:* str

Name of the resource. Provided by the client when the resource is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/compute_network_edge_security_service#name ComputeNetworkEdgeSecurityService#name}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/compute_network_edge_security_service#deletion_policy ComputeNetworkEdgeSecurityService#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.Initializer.parameter.description"></a>

- *Type:* str

Free-text description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/compute_network_edge_security_service#description ComputeNetworkEdgeSecurityService#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/compute_network_edge_security_service#id ComputeNetworkEdgeSecurityService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/compute_network_edge_security_service#project ComputeNetworkEdgeSecurityService#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.Initializer.parameter.region"></a>

- *Type:* str

The region of the gateway security policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/compute_network_edge_security_service#region ComputeNetworkEdgeSecurityService#region}

---

##### `security_policy`<sup>Optional</sup> <a name="security_policy" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.Initializer.parameter.securityPolicy"></a>

- *Type:* str

The resource URL for the network edge security service associated with this network edge security service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/compute_network_edge_security_service#security_policy ComputeNetworkEdgeSecurityService#security_policy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeouts">ComputeNetworkEdgeSecurityServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/compute_network_edge_security_service#timeouts ComputeNetworkEdgeSecurityService#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.resetSecurityPolicy">reset_security_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/compute_network_edge_security_service#create ComputeNetworkEdgeSecurityService#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/compute_network_edge_security_service#delete ComputeNetworkEdgeSecurityService#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/compute_network_edge_security_service#update ComputeNetworkEdgeSecurityService#update}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_security_policy` <a name="reset_security_policy" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.resetSecurityPolicy"></a>

```python
def reset_security_policy() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ComputeNetworkEdgeSecurityService resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.isConstruct"></a>

```python
from cdktn_provider_google import compute_network_edge_security_service

computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.isTerraformElement"></a>

```python
from cdktn_provider_google import compute_network_edge_security_service

computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.isTerraformResource"></a>

```python
from cdktn_provider_google import compute_network_edge_security_service

computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.generateConfigForImport"></a>

```python
from cdktn_provider_google import compute_network_edge_security_service

computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ComputeNetworkEdgeSecurityService resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ComputeNetworkEdgeSecurityService to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ComputeNetworkEdgeSecurityService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/compute_network_edge_security_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ComputeNetworkEdgeSecurityService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.creationTimestamp">creation_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.fingerprint">fingerprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.selfLink">self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.selfLinkWithServiceId">self_link_with_service_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.serviceId">service_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference">ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.securityPolicyInput">security_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeouts">ComputeNetworkEdgeSecurityServiceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.securityPolicy">security_policy</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `creation_timestamp`<sup>Required</sup> <a name="creation_timestamp" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.creationTimestamp"></a>

```python
creation_timestamp: str
```

- *Type:* str

---

##### `fingerprint`<sup>Required</sup> <a name="fingerprint" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.fingerprint"></a>

```python
fingerprint: str
```

- *Type:* str

---

##### `self_link`<sup>Required</sup> <a name="self_link" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

---

##### `self_link_with_service_id`<sup>Required</sup> <a name="self_link_with_service_id" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.selfLinkWithServiceId"></a>

```python
self_link_with_service_id: str
```

- *Type:* str

---

##### `service_id`<sup>Required</sup> <a name="service_id" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.serviceId"></a>

```python
service_id: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.timeouts"></a>

```python
timeouts: ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference">ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference</a>

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `security_policy_input`<sup>Optional</sup> <a name="security_policy_input" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.securityPolicyInput"></a>

```python
security_policy_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | ComputeNetworkEdgeSecurityServiceTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeouts">ComputeNetworkEdgeSecurityServiceTimeouts</a>

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `security_policy`<sup>Required</sup> <a name="security_policy" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.securityPolicy"></a>

```python
security_policy: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityService.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeNetworkEdgeSecurityServiceConfig <a name="ComputeNetworkEdgeSecurityServiceConfig" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceConfig.Initializer"></a>

```python
from cdktn_provider_google import compute_network_edge_security_service

computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  deletion_policy: str = None,
  description: str = None,
  id: str = None,
  project: str = None,
  region: str = None,
  security_policy: str = None,
  timeouts: ComputeNetworkEdgeSecurityServiceTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceConfig.property.name">name</a></code> | <code>str</code> | Name of the resource. Provided by the client when the resource is created. |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceConfig.property.description">description</a></code> | <code>str</code> | Free-text description of the resource. |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/compute_network_edge_security_service#id ComputeNetworkEdgeSecurityService#id}. |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/compute_network_edge_security_service#project ComputeNetworkEdgeSecurityService#project}. |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceConfig.property.region">region</a></code> | <code>str</code> | The region of the gateway security policy. |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceConfig.property.securityPolicy">security_policy</a></code> | <code>str</code> | The resource URL for the network edge security service associated with this network edge security service. |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeouts">ComputeNetworkEdgeSecurityServiceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the resource. Provided by the client when the resource is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/compute_network_edge_security_service#name ComputeNetworkEdgeSecurityService#name}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/compute_network_edge_security_service#deletion_policy ComputeNetworkEdgeSecurityService#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Free-text description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/compute_network_edge_security_service#description ComputeNetworkEdgeSecurityService#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/compute_network_edge_security_service#id ComputeNetworkEdgeSecurityService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/compute_network_edge_security_service#project ComputeNetworkEdgeSecurityService#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceConfig.property.region"></a>

```python
region: str
```

- *Type:* str

The region of the gateway security policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/compute_network_edge_security_service#region ComputeNetworkEdgeSecurityService#region}

---

##### `security_policy`<sup>Optional</sup> <a name="security_policy" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceConfig.property.securityPolicy"></a>

```python
security_policy: str
```

- *Type:* str

The resource URL for the network edge security service associated with this network edge security service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/compute_network_edge_security_service#security_policy ComputeNetworkEdgeSecurityService#security_policy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceConfig.property.timeouts"></a>

```python
timeouts: ComputeNetworkEdgeSecurityServiceTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeouts">ComputeNetworkEdgeSecurityServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/compute_network_edge_security_service#timeouts ComputeNetworkEdgeSecurityService#timeouts}

---

### ComputeNetworkEdgeSecurityServiceTimeouts <a name="ComputeNetworkEdgeSecurityServiceTimeouts" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeouts.Initializer"></a>

```python
from cdktn_provider_google import compute_network_edge_security_service

computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/compute_network_edge_security_service#create ComputeNetworkEdgeSecurityService#create}. |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/compute_network_edge_security_service#delete ComputeNetworkEdgeSecurityService#delete}. |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/compute_network_edge_security_service#update ComputeNetworkEdgeSecurityService#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/compute_network_edge_security_service#create ComputeNetworkEdgeSecurityService#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/compute_network_edge_security_service#delete ComputeNetworkEdgeSecurityService#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/compute_network_edge_security_service#update ComputeNetworkEdgeSecurityService#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference <a name="ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import compute_network_edge_security_service

computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeouts">ComputeNetworkEdgeSecurityServiceTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ComputeNetworkEdgeSecurityServiceTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeNetworkEdgeSecurityService.ComputeNetworkEdgeSecurityServiceTimeouts">ComputeNetworkEdgeSecurityServiceTimeouts</a>

---



